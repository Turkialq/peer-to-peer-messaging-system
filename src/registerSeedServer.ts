import fetch from "cross-fetch";
export async function registerSeedServer(uri: string) {
  const response = await fetch(`${uri}/register`, {
    method: "POST",
    body: JSON.stringify({ uri: "http://localhost:3000", user: "turki" }),
    headers: { "content-type": "application/json" },
  });
  return await response.json();
}
