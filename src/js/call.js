const xhr = new XMLHttpRequest();
xhr.open("GET", "offcanvas/feedback.html", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log("Konten feedback.html berhasil dimuat");
      document.getElementById("offcanvas-content").innerHTML = xhr.responseText;
    } else {
      console.error("Gagal memuat file:", xhr.status);
    }
  }
};
xhr.send();
