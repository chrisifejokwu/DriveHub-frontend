const API_URL = getAPIUrl();

 async function getCars() {
  const res = await fetch(`${API_URL}/api/v1/cars`);
  return res.json();
}

 async function getCarById(id) {
  const res = await fetch(`${API_URL}/api/v1/cars/${id}`);
  return res.json();
}

async function getBookings(token) {
  const res = await fetch(`${API_URL}/api/v1/bookings`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return res.json();
}

async function createBooking(booking, token) {
  const res = await fetch(`${API_URL}/api/v1/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(booking)
  });
  return res.json();
}

function getAPIUrl() {
    const isLocal = window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "";

    return isLocal
        ? "http://localhost:3000" // Local API (Node, .NET, etc.)
        : " https://drivehub-backend-f3nt.onrender.com"; // Live API

}