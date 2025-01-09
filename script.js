// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the Discord button
    const discordButton = document.getElementById("discordButton");

    // Add a click event listener to the Discord button
    discordButton.addEventListener("click", () => {
        // Open the Discord invite link in a new tab
        const discordLink = "https://discord.com/invite/your-invite-link"; // Replace with your actual link
        window.open(discordLink, "_blank");
    });
});
