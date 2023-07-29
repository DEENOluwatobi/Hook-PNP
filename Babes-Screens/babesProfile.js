const dropAreas = document.querySelectorAll('.dropArea');
let isFileInputCreated = false; // Flag to track if file input is already created

dropAreas.forEach(dropArea => {
  dropArea.addEventListener('click', () => {
    if (!isFileInputCreated) {
      isFileInputCreated = true; // Set the flag to true to prevent further creation

      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';

      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        handleFile(file, dropArea); // Pass dropArea to handleFile function
        isFileInputCreated = false; // Reset the flag when file is selected
      });

      dropArea.appendChild(fileInput);
      fileInput.click();
      dropArea.removeChild(fileInput);
    }
  });

  dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('highlight');
  });

  dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('highlight');
  });

  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('highlight');
    const file = e.dataTransfer.files[0];
    handleFile(file, dropArea); // Pass dropArea to handleFile function
  });
});

function handleFile(file, dropArea) {
  if (!file) return;

  // Check if the file is an image
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = (e) => {
      dropArea.style.backgroundImage = `url(${e.target.result})`;
      const pTag = dropArea.querySelector('p');
      const pUpload = dropArea.querySelector('.p-upload');
      pTag.style.display = 'none'; // Hide the <p> tag when a file is uploaded
      pUpload.style.display = 'none'
    };

    reader.readAsDataURL(file);
  }
}