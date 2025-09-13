export default defineEventHandler(async () => {
  const url = (process.env.UPSTASH_REST_URL as string) + '/del/items';
  const token = process.env.UPSTASH_REST_TOKEN as string;

  const res = await fetch(url, {
    method: 'POST', // Upstash требует POST, не DELETE
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();
  return { status: 'ok', response: data };
});
