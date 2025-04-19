document.addEventListener("DOMContentLoaded", () => {
    function createMovingImage() {
        const newImage = document.createElement("img");
        newImage.src = "css/lua.png"; // Replace with your image path
        newImage.alt = "Moving Image";
        newImage.style.position = "absolute";
        newImage.style.width = "100px"; // Adjust the size of the image
        document.body.appendChild(newImage); // Append directly to the body

        let startTime = null;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            // Total duration of the animation in milliseconds
            const duration = 200000; // 10 seconds

            // Calculate progress (0 to 1)
            const progress = elapsed / duration;
            
            if (progress <= 1) {
                // Calculate the X and Y positions using a sine wave for smooth curves
                const x = (1 - progress) * window.innerWidth; // Move horizontally across the screen
                const y = Math.sin(progress * Math.PI) * (window.innerHeight * 0.15) + (window.innerHeight * 0.8); // Reduced amplitude

                // Apply the calculated positions
                newImage.style.transform = `translate(${x}px, ${window.innerHeight - y}px)`;

                // Continue the animation
                requestAnimationFrame(animate);
            } else {
                // Remove the image after the animation ends
                document.body.removeChild(newImage);
            }
        }

        // Start the animation
        requestAnimationFrame(animate);
    }

    // Create the first image and repeat every 10 seconds
    createMovingImage();
    setInterval(createMovingImage, 200000); // Match the animation duration
});