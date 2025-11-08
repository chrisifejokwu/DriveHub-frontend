const API_URL = "http://localhost:3000/api/v1";

export async function getCars() {
  const res = await fetch(`${API_URL}/cars`);
  return res.json();
}

export async function getCarById(id) {
  const res = await fetch(`${API_URL}/cars/${id}`);
  return res.json();
}

export async function getBookings(token) {
  const res = await fetch(`${API_URL}/bookings`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return res.json();
}

export async function createBooking(booking, token) {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(booking)
  });
  return res.json();
}
