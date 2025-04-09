function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}


let images = [
    "images/Rectangle 1 (1).png",
    "images/Rectangle 19.png",
    "images/Rectangle 19 (1).png",
    "images/Rectangle 19 (2).png",
    "images/Rectangle 19 (3).png",
    "images/Rectangle 19 (4).png",
    "images/Rectangle 19 (5).png",
    "images/Rectangle 19 (6).png",
    "images/Rectangle 19 (7).png",
    "images/Rectangle 1 (1).png",
    "images/Rectangle 19.png",
    "images/Rectangle 19 (1).png",
    "images/Rectangle 19 (2).png",
    "images/Rectangle 19 (3).png",
    "images/Rectangle 19 (4).png",
    "images/Rectangle 19 (5).png",
    "images/Rectangle 19 (6).png",
    "images/Rectangle 19 (7).png",
];
let currentIndex = 0;

function openPopup(index) {
    currentIndex = index;
    document.getElementById("popupImage").src = images[currentIndex];
    document.getElementById("popup").classList.add("active");
}
function closePopup() {
    document.getElementById("popup").classList.remove("active");
}
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("popupImage").src = images[currentIndex];
}


// gallery part 

const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('show');
  });
});

function closeModal() {
  modal.classList.remove('show');
  modalImg.src = '';
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});