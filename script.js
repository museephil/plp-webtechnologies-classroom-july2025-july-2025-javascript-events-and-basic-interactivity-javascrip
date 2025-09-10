// Dark/Light mode toggle
const toggleBtn = document.getElementById('lightDarkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Section switcher
const menuBtns = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('.card');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(btn.dataset.target);
    target.classList.add('active');
  });
});

// Counter game
const counterDisplay = document.getElementById('counter');
let count = 0;
document.getElementById('increment').addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById('decrement').addEventListener('click', () => {
  count--;
  counterDisplay.textContent = count;
});

// FAQ toggle
const questions = document.querySelectorAll('.faq-question');
questions.forEach((q) => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Form validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Password validation
  const password = document.getElementById('password').value.trim();
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  // Final message
  const message = document.getElementById('formMessage');
  if (valid) {
    message.textContent = 'Form submitted successfully ✅';
    message.style.color = 'green';
    form.reset();
  } else {
    message.textContent = 'Please correct the errors above ❌';
    message.style.color = '#9B3960';
  }
});
