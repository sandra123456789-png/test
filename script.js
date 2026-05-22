function showMessage() {
  const message = document.getElementById("message");

  message.innerText = "Welcome to my first Git project 🚀";

  // small animation effect
  message.style.opacity = 0;
  message.style.transform = "translateY(10px)";

  setTimeout(() => {
    message.style.transition = "0.5s ease";
    message.style.opacity = 1;
    message.style.transform = "translateY(0)";
  }, 100);
}
