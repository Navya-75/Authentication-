function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (!email || !password) {
    alert("Please enter both email and password.");
  } else {
    alert("Logged in as: " + email);
  }
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;
  if (!name || !email || !password || !confirm) {
    alert("Please fill in all fields.");
  } else if (password !== confirm) {
    alert("Passwords do not match.");
  } else {
    alert("Account created for: " + name);
  }
}

function showSignup() {
  document.getElementById('login-box').style.display = 'none';
  document.getElementById('signup-box').style.display = 'block';
}

function showLogin() {
  document.getElementById('signup-box').style.display = 'none';
  document.getElementById('login-box').style.display = 'block';
}
