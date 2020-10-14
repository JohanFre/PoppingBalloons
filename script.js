const isBalloon = document.querySelectorAll("balloon")

// Function for mouseover
document.addEventListener("mouseover", (event) => {
    const isBalloon = event.target.classList.contains("balloon");
    const isPopped = event.target.classList.contains("popped")
    
// If mouseover balloon, change balloon to "POP!" string
    if (isBalloon) {
        event.target.classList.add("popped");
        const poppedCount = document.querySelectorAll(".balloon.popped").length;
 
// Counts so when all balloons are popped. Clears balloons and "YAY!" message appears        
        if (poppedCount === 24) {
            const balloons = document.querySelector(".balloons");

            balloons.innerHTML = ""; //Clears all ballons

            //Creates new h1 tag
            const h1 = document.createElement('h1'); 
            h1.textContent = "YAY!";
            h1.classList.add("congratsMessage");
            balloons.appendChild(h1);
        }
    }

})