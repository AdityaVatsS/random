function updateBusInfo() {
    // Get the current time
    const currentTime = new Date();

    // Parse the arrival time string to extract the number of minutes
    const arrivalMinutes = parseInt(busData.arrivalTime, 10);

    // Calculate the time remaining in milliseconds
    const timeRemainingMs = arrivalMinutes * 60 * 1000;

    // Calculate the expected arrival time by adding time remaining to the current time
    const expectedArrivalTime = new Date(currentTime.getTime() + timeRemainingMs);

    // Update the bus information on the webpage
    document.getElementById("bus-id").textContent = busData.busId;
    document.getElementById("arrival-time").textContent = busData.arrivalTime;
    document.getElementById("emission-compliance").textContent = busData.emissionCompliance;
    document.getElementById("clean-fuel").textContent = busData.cleanFuel;

    // Display the current time and time remaining
    document.getElementById("current-time").textContent = "Current Time: " + currentTime.toLocaleTimeString();
    document.getElementById("time-remaining").textContent = "Expected Arrival Time: " + expectedArrivalTime.toLocaleTimeString();

    // Calculate and display the time remaining in seconds
    const timeRemainingSeconds = Math.floor(timeRemainingMs / 1000);
    document.getElementById("time-remaining-seconds").textContent = "Time Remaining: " + timeRemainingSeconds + " seconds";
}

// Rest of your code remains unchanged
