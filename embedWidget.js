(function() {
    // Load the CSS file
    var cssLink = document.createElement('link');
    cssLink.href = 'https://ilma-webwidget-mvp.vercel.app/styles.css'; // Replace with the actual URL
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    document.head.appendChild(cssLink);

    // Get the container and set up the widget
    var container = document.getElementById('wahbvGQmDxsA');
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
    scriptTag.src = 'https://ilma-webwidget-mvp.vercel.app/script.js';
    document.body.appendChild(scriptTag);

    // Function to get URL query parameters
    function getQueryParams() {
        var params = {};
        var queryString = window.location.search.substring(1);
        var vars = queryString.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return params;
    }

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

        // Apply URL query parameters or data attributes as filters
        var queryParams = getQueryParams();
        var carMake = queryParams.carMake || container.getAttribute('data-make');
        var yearRange = queryParams.yearRange || container.getAttribute('data-year-range');
        var filters = {};
        if (carMake) filters.carMakers = carMake;
        if (yearRange) filters.yearRange = yearRange;
        fetchCars(filters);
    };
})();
