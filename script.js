
// Add hamburger menu click functionality

document.getElementById("menu").onclick = ()=>{
    const navigationMenu = document.getElementById("navigationMenu");
    let displayAttribute = navigationMenu.style.display;
    navigationMenu.style.display = displayAttribute === "none"? "block" : "none";
}