function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Grow effect on hover
document.querySelectorAll("a, button, .card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});