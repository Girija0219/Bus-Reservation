 function showForm(type) {
      const loginForm = document.getElementById("login-form");
      const signupForm = document.getElementById("signup-form");
      const loginTab = document.getElementById("login-tab");
      const signupTab = document.getElementById("signup-tab");

      if (type === "login") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
      } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
      }
    }

    function validateLogin(event) {
      event.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      if (!email || !password) {
        alert("Please fill out all login fields.");
        return false;
      }
      alert("Login successful!");
      return true;
    }

    function validateSignup(event) {
      event.preventDefault();
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const pass = document.getElementById("signup-password").value;
      const confirm = document.getElementById("signup-confirm").value;

      if (!name || !email || !pass || !confirm) {
        alert("Please fill out all signup fields.");
        return false;
      }

      if (pass !== confirm) {
        alert("Passwords do not match!");
        return false;
      }

      alert("Signup successful!");
      return true;
    }