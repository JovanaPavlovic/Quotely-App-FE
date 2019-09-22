export async function getQuotes() {
  const data = await fetch("http://localhost:3900/api/quotes");
  const quotes = await data.json();
  return quotes;
}

export function postQuote(data, token) {
  fetch("http://localhost:3900/api/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(response => console.log(response));
}
