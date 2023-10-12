// membuat foto depan bisa diklik
// Ambil elemen-elemen yang diperlukan
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var closeBtn = document.getElementById('closeModalBtn');
// Ketika tombol dibuka, tampilkan modal
btn.onclick = function() {
    modal.style.display = 'block';
}
// Ketika tombol penutup di klik, tutup modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}


// membuat bars responsive
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbarMenu = document.querySelector(".navbar-menu");
  const dropdownLink = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Tambahkan variabel untuk melacak status menu utama (bars) dan dropdown
  let isMenuOpen = false;
  let isDropdownOpen = false;

  // Tambahkan event listener untuk ikon "bars" di dalam menu
  menuIcon.addEventListener("click", function () {
    if (!isMenuOpen && !isDropdownOpen) {
      navbarMenu.style.display = "block"; // Menu utama (bars) dibuka
      isMenuOpen = true; // Ubah status menjadi terbuka
    } else {
      navbarMenu.style.display = "none"; // Menu utama (bars) ditutup
      isMenuOpen = false; // Ubah status menjadi tertutup
    }
  });

  // Tambahkan event listener untuk link "Jurusan"
  dropdownLink.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah tindakan default saat mengklik link

    // Toggle (buka/tutup) menu dropdown
    if (isDropdownOpen) {
      dropdownMenu.style.display = "none"; // Menu dropdown ditutup
      isDropdownOpen = false; // Ubah status dropdown menjadi tertutup
    } else {
      dropdownMenu.style.display = "block"; // Menu dropdown dibuka
      isDropdownOpen = true; // Ubah status dropdown menjadi terbuka
    }
  });

  // Tambahkan event listener untuk item dropdown di dalam menu
  const dropdownItems = dropdownMenu.querySelectorAll("li > a");
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      dropdownMenu.style.display = "none"; // Menu dropdown ditutup saat item dropdown diklik
      isDropdownOpen = false; // Ubah status dropdown menjadi tertutup
    });
  });
});

  
// membuat bars bisa di klik
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

