(function(userName) {
  const userProfileDiv = document.getElementById('user-profile');

  const profileHTML = `
    <div class="d-flex align-items-center">
      <img src="https://imgcdn.stablediffusionweb.com/2024/9/7/d76ed798-27d2-44a8-9ca6-e3979258cc39.jpg" alt="Profile" class="rounded-circle me-2" width="60" height="60">
      <span class="fw-bold">${userName}</span>
    </div>
  `;

  userProfileDiv.innerHTML = profileHTML;
})("Clayton"); // Change "John Doe" to the signed-in user's name