export default defineEventHandler(async (event) => {
  const body = await readBody(event); // { name, description }
  const urlGet = (process.env.UPSTASH_REST_URL as string) + '/get/items';
  const urlSet = (process.env.UPSTASH_REST_URL as string) + '/set/items';
  const token = process.env.UPSTASH_REST_TOKEN as string;

  // Получаем текущее значение
  const res = await fetch(urlGet, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();

  let itemsArray: any[] = [];

  if (data.result) {
    try {
      // Если это строка, парсим
      itemsArray = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
      if (!Array.isArray(itemsArray)) itemsArray = [itemsArray];
    } catch {
      itemsArray = [];
    }
  }

  // Добавляем новый объект
  itemsArray.push(body);

  // Сохраняем обратно
  await fetch(urlSet, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(itemsArray),
  });

  return { status: 'ok' };
});
