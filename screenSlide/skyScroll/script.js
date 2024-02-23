document.addEventListener('DOMContentLoaded', function() {

    console.log('screenSlide/skyScroll/script.js');

    function createStars() {
        const space = document.querySelector('.space');
        
        // Function to create a star
        function createStar(type, amount) {
            for (let i = 0; i < amount; i++) {
                const star = document.createElement('div');
                star.className = `star ${type}`;
    
                // Generate random positions within the specified ranges
                const top = Math.random() * (135 - 55) + 55; // top: 55% to 135%
                const left = Math.random() * (99 - 0) + 0; // left: 0% to 99%
    
                // Apply the positions
                star.style.top = `${top}%`;
                star.style.left = `${left}%`;
    
                space.appendChild(star);
            }
        }
    
        // Create the stars
        createStar('star-one', 1000); //  transparent 1px stars
        createStar('star-two', 100);  //  1/2 transparent 1px stars
        createStar('star-three', 75); // 1px stars
        createStar('star-four', 50);  // 1px with box shadow
        createStar('star-five', 25);  // 2px stars
    }
    
    // Run the function to populate the stars
    createStars();
    

});