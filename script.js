
const tabsBox = document.querySelector(".tabs__box"),
allTabs = document.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;
let startX = 0;
const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none"
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none"
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        // calling handleIcons after 50 miliseconds
        setTimeout(() => handleIcons(),50);
    });
});
allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // remove active class from the previous tab & adding to current clicked tab
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});
const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
}
const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}
tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mouseup", dragStop);

// Touch support: touch events don't have movementX, so track the previous
// clientX manually and compute the delta on each move.
const touchStart = (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
}
const touchDragging = (e) => {
    if(!isDragging) return;
    // prevent the page from scrolling vertically while dragging the tabs
    e.preventDefault();
    tabsBox.classList.add("dragging");
    const currentX = e.touches[0].clientX;
    tabsBox.scrollLeft -= currentX - startX;
    startX = currentX;
    handleIcons();
}
tabsBox.addEventListener("touchstart", touchStart);
tabsBox.addEventListener("touchmove", touchDragging, { passive: false });
tabsBox.addEventListener("touchend", dragStop);
