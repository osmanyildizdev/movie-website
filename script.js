const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;

    arrow.addEventListener("click", () => {
        clickCounter++;

        if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            movieLists[i].style.transform =
                `translateX(${-300 * clickCounter}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});



/* dark mode */

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.side-bar i,.side-bar,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click",function(){
    items.forEach((item)=>item.classList.toggle("active"))
})
