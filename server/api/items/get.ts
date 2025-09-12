export default defineEventHandler(async () => {
  const url = (process.env.UPSTASH_REST_URL as string) + '/get/items';
  const token = process.env.UPSTASH_REST_TOKEN as string;

  const res = await fetch(url, {
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

  return itemsArray;
});
