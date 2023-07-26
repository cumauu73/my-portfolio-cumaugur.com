function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:cumauu73@icloud.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  // Open the user's email client to send the email
  window.location.href = mailtoLink;
}
