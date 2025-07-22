function startShow() {
  // Hide the start box
  document.getElementById("startBox").style.display = "none";

  // Show image section with animation delays
  const imageSection = document.getElementById("imageSection");
  imageSection.style.display = "flex";

  // Animate image appearance with delay
  setTimeout(() => {
    document.getElementById("img1").style.opacity = "1";
  }, 300);
  setTimeout(() => {
    document.getElementById("img2").style.opacity = "1";
  }, 900);
  setTimeout(() => {
    document.getElementById("img3").style.opacity = "1";
  }, 1500);

  // Show shayari after all images
  setTimeout(() => {
    document.getElementById("shayariBox").style.display = "block";
  }, 2500);
}
