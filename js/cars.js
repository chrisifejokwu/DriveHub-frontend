

function displayCars() {

  const carList = document.getElementById("carList");
  getCars().then(cars => {
    cars.forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
          <img src="${car.imageUrl}" alt="${car.make}">
        <div class="car-details">
          <h3>${car.make}</h3>
          <p>${car.model} | ${car.year}</p>
          <p class="price">${car.price}</p>
        </div>
      `;
      // Make the entire card clickable
      card.addEventListener("click", () => {
        window.location.href = `car.html?id=${car.id}`;
      });
      carList.appendChild(card);
    });
  });
}

displayCars();