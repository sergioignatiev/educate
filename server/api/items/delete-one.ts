export default defineEventHandler(async (event) => {
  const query = getQuery(event); // например ?name=Test
  const nameToDelete = query.id as string;

  const urlGet = (process.env.UPSTASH_REST_URL as string) + '/get/items';
  const urlSet = (process.env.UPSTASH_REST_URL as string) + '/set/items';
  const token = process.env.UPSTASH_REST_TOKEN as string;

  // Получаем текущий массив
  const res = await fetch(urlGet, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();

  let itemsArray: any[] = [];
  if (data.result) {
    try {
      itemsArray = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
      if (!Array.isArray(itemsArray)) itemsArray = [itemsArray];
    } catch {
      itemsArray = [];
    }
  }

  // Удаляем объект с нужным name
  const filtered = itemsArray.filter(item => item.id !== nameToDelete);

  // Сохраняем обратно
  await fetch(urlSet, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(filtered),
  });

  return { status: 'ok', deleted: nameToDelete };
});
