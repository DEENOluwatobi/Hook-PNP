const dropArea = document.getElementById('dropArea');
let isFileInputCreated = false; // Flag to track if file input is already created

dropArea.addEventListener('click', () => {
  if (!isFileInputCreated) {
    isFileInputCreated = true; // Set the flag to true to prevent further creation

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      handleFile(file);
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
  handleFile(file);
});

function handleFile(file) {
  if (!file) return;

  // Check if the file is an image
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;

      // You can display the image or perform further actions here
      // For example, create a new image element and append it to the drop area:
      const newImageElement = document.createElement('img');
      newImageElement.src = e.target.result;
      dropArea.appendChild(newImageElement);
    };

    reader.readAsDataURL(file);
  }
}