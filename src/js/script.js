const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.getElementById("sidebarToggler");

// Toggle sidebar ketika tombol sidebarToggle diklik
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

// Menutup sidebar jika klik terjadi di luar sidebar
document.addEventListener("click", function (event) {
  // Cek apakah klik terjadi di luar sidebar dan di luar tombol toggle
  if (
    !sidebar.contains(event.target) &&
    !sidebarToggle.contains(event.target)
  ) {
    sidebar.classList.remove("show");
  }
});

// Pilih semua elemen dengan kelas .toggler-icon
const maxToggles = document.querySelectorAll(".toggler-icon");
const cards = document.querySelectorAll(".card-column");

// Loop melalui semua icon toggler dan tambahkan event listener
maxToggles.forEach((toggle, index) => {
  toggle.addEventListener("click", function () {
    // Toggle class untuk mengubah ukuran card
    cards[index].classList.toggle("col-lg-6");

    const toggleIcon = toggle.querySelector("i");
    // Cek apakah card sedang dalam mode "maximized" atau tidak
    if (cards[index].classList.contains("col-lg-6")) {
      // Jika card dalam mode "maximized", ganti ikon menjadi fullscreen-exit
      toggleIcon.classList.remove("ri-fullscreen-fill");
      toggleIcon.classList.add("ri-fullscreen-exit-fill");
    } else {
      // Jika tidak, ganti ikon menjadi fullscreen
      toggleIcon.classList.remove("ri-fullscreen-exit-fill");
      toggleIcon.classList.add("ri-fullscreen-fill");
    }
  });
});
