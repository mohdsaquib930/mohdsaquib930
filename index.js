document.addEventListener('DOMContentLoaded', function() {
  const fileUrl = './app-release.apk'; // Replace with the actual URL of your file
  const fileName = 'notebooks.apk; // Optional: Set a custom filename

  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', fileName); // Use 'download' attribute for direct download
  link.style.display = 'none'; // Hide the link

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up the created element
});
