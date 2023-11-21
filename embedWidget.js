(function() {
    // Load the CSS file
    var cssLink = document.createElement('link');
    cssLink.href = 'https://ilma-webwidget-mvp.vercel.app/styles.css'; // Replace with the actual URL
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    document.head.appendChild(cssLink);

    // Get the container and set up the widget
    var container = document.getElementById('wahbvGQmDxsA'); // The ID of the div where the widget will be placed
    var widgetContent = `
        <div id="car-widget">
            <h2>Car Listings</h2>
            <div id="filters">
                <input type="text" id="car-make" placeholder="Enter car make">
                <input type="text" id="year-range" placeholder="Enter year range (e.g., 2010-2020)">
                <button id="search-button">Search</button>
            </div>
            <div id="car-listings">
                <!-- Car listings will be displayed here -->
            </div>
        </div>
    `;
    container.innerHTML = widgetContent;

    // Load the JavaScript file
    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://ilma-webwidget-mvp.vercel.app/script.js'; // Replace with the actual URL
    document.body.appendChild(scriptTag);

    // Wait until the script is loaded before executing the rest of the code
    scriptTag.onload = function() {
        // Attach event listener to the search button
        var searchButton = document.getElementById('search-button');
        searchButton.addEventListener('click', function() {
            var carMake = document.getElementById('car-make').value;
            var yearRange = document.getElementById('year-range').value;
            var filters = {};
            if (carMake) filters.carMakers = carMake;
            if (yearRange) filters.yearRange = yearRange;
            fetchCars(filters);
        });

        // Apply filters if they are provided
        var carMake = container.getAttribute('data-make');
        var yearRange = container.getAttribute('data-year-range');
        if (carMake || yearRange) {
            var filters = {};
            if (carMake) filters.carMakers = carMake;
            if (yearRange) filters.yearRange = yearRange;
            fetchCars(filters);
        } else {
            fetchCars(); // Fetch without filters
        }
    };
})();
