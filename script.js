const contactBtn = document.getElementById("contactBtn");
const socialDropdown = document.getElementById("socialDropdown");

contactBtn.addEventListener("click", () => {
  socialDropdown.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !contactBtn.contains(e.target) &&
    !socialDropdown.contains(e.target)
  ) {
    socialDropdown.classList.remove("active");
  }
});