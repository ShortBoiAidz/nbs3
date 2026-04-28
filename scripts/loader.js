$(document).ready(function () {
  // Select all images on the page
  let $imgs = $("img");
  let totalImgs = $imgs.length;
  let loadedImgs = 0;

  if (totalImgs === 0) {
    // No images, hide loader immediately
    $(".loading-screen").fadeOut(2500);
    $(".content").fadeIn(1000);
  } else {
    $imgs.each(function () {
      // If already loaded (from cache), count it
      if (this.complete) {
        loadedImgs++;
        if (loadedImgs === totalImgs) {
          $(".loading-screen").fadeOut(2500);
          $(".content").fadeIn(1000);
        }
      } else {
        // Otherwise, wait for load event
        $(this).on("load error", function () {
          loadedImgs++;
          if (loadedImgs === totalImgs) {
            $(".loading-screen").fadeOut(2500);
            $(".content").fadeIn(1000);
          }
        });
      }
    });
  }
});

function emailClick() {
  onclick = alert("Email us:\nofficial@noodlebox.cc\nsupport@noodlebox.cc");
}

function toggleDiv() {
  const x = document.getElementById("hiddenDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}