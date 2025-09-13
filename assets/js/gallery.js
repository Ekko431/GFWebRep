// Simple gallery modal
function enlarge(imgElement) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var captionText = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.nextElementSibling ? imgElement.nextElementSibling.innerText : "";

  // Prevent scrolling when modal is open
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// Also close modal if user clicks the close span
document.querySelectorAll('.close').forEach(function(el) {
  el.onclick = closeModal;
});
