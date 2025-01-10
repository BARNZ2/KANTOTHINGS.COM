// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the Discord button
    const discordButton = document.getElementById("discordButton");

    // Add a click event listener to the Discord button
    discordButton.addEventListener("click", () => {
        // Open the Discord invite link in a new tab
        const discordLink = "https://discord.gg/DzJAaJAcbZ"; // Replace with your actual link
        window.open(discordLink, "_blank");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Select the Events button
    const eventsButton = document.getElementById("eventsButton");

    // Add a click event listener to the Events button
    eventsButton.addEventListener("click", () => {
        // Open the Events link in a new tab
        const eventsLink = "https://example.com"; // Replace with your actual link
        window.open(eventsLink, "_blank");
    });
});
