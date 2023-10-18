// script.js
const placesContainer = document.getElementById('places-container');

// Sample data (you can replace it with real data)
const places = [
    { name: 'Tirupati', image: 'tirupati.jpg' },
    { name: 'Charminar', image: 'charminar.jpg' },
    // Add more places and images
];

// Function to display places
function displayPlaces() {
    placesContainer.innerHTML = '';
    places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.classList.add('place-card');
        placeCard.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <h2>${place.name}</h2>
        `;
        placesContainer.appendChild(placeCard);
    });
}

// Call the function to display places
displayPlaces();
