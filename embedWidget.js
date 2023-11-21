(function() {
    var cssLink = document.createElement('link');
    cssLink.href = 'https://ilma-webwidget-mvp.vercel.app/styles.css'; // Replace with the actual URL
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    document.head.appendChild(cssLink);

    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://ilma-webwidget-mvp.vercel.app/script.js'; // Replace with the actual URL
    document.body.appendChild(scriptTag);

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
    `; // Your widget's HTML structure
    container.innerHTML = widgetContent;
})();
