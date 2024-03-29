const consentBtn = document.getElementById("manage");
const cookiePopup = document.getElementsByClassName("cookie-consent");
const acceptBtn = document.getElementById("accept");

// When page loads, show cookie popup
window.onload = () => {
  // If not stored in local storage, show popup
  if (localStorage.getItem("policyAccepted") === false || localStorage.getItem("policyAccepted") === null) {
    window.onload = cookiePopup[0].classList.toggle("cookie-show");
  }
};

consentBtn.addEventListener("click", () => {
  // Open popup on manage consent click
  cookiePopup[0].classList.toggle("cookie-show");
});

acceptBtn.addEventListener("click", (e) => {
  // Close popup on accept button click
  cookiePopup[0].classList.toggle("cookie-show");
  // Save state to local storage
  localStorage.setItem("policyAccepted", true);
  e.preventDefault();
})