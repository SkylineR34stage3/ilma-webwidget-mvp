function fetchCars(filters = {}) {
    let url = new URL('https://bvpvabcdps5l6tgrhxfuszlr6m0pszck.lambda-url.eu-central-1.on.aws/cars');
    
    // Add filters to the URL
    Object.keys(filters).forEach(key => url.searchParams.append(key, filters[key]));

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCars(data);
        })
        .catch(error => console.error('Error fetching cars:', error));
}

function displayCars(cars) {
    const container = document.getElementById('car-listings');
    container.innerHTML = '';
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car-item';
        carElement.textContent = `${car.make} ${car.model} - Year: ${car.year}, Price: $${car.price}`;
        container.appendChild(carElement);
    });
}

document.getElementById('search-button').addEventListener('click', () => {
    const make = document.getElementById('car-make').value;
    const yearRange = document.getElementById('year-range').value;

    const filters = {};
    if (make) filters.carMakers = make;
    if (yearRange && isValidYearRange(yearRange)) {
        filters.yearRange = yearRange;
    } else if (yearRange) {
        alert("Invalid Year Range. Please use the format 'YYYY-YYYY'.");
        return;
    }

    fetchCars(filters);
});

function isValidYearRange(yearRange) {
    const regex = /^\d{4}-\d{4}$/; // Simple validation for format YYYY-YYYY
    return regex.test(yearRange);
}

// Initial fetch without filters
fetchCars();

