const body = document.body;
const themeToggle = document.getElementById('loginThemeToggle');
const demoLogin = document.getElementById('demoLogin');
const loginMessage = document.getElementById('loginMessage');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  document.documentElement.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

demoLogin.addEventListener('click', () => {
  // Show success message
  loginMessage.textContent = "✅ Login successful! Redirecting to Home...";
  loginMessage.style.color = "green";

  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});

// const body = document.body;
// const themeToggle = document.getElementById('loginThemeToggle');
// const demoLogin = document.getElementById('demoLogin');
// const loginMessage = document.getElementById('loginMessage');

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark');
//   document.documentElement.classList.toggle('dark');
//   themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
// });

// demoLogin.addEventListener('click', () => {
//   loginMessage.textContent = 'Demo access granted — redirecting to the WealthWise dashboard preview.';
// });
