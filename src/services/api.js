const url = "http://localhost:3000";

const endpoints = {
  products: date => `/products?date=${date}`,
  buyers: date => `/buyers?date=${date}`,
  transactions: buyerId => `/transactions?buyer_id=${buyerId}`
};

export async function getProducts(date) {
  const response = await fetch(`${url}${endpoints.products(date)}`);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function getBuyers(date) {
  const response = await fetch(`${url}${endpoints.buyers(date)}`);
  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function getTransactions(buyerId) {
  const response = await fetch(`${url}${endpoints.transactions(buyerId)}`);
  const jsonResponse = await response.json();
  return jsonResponse;
}
