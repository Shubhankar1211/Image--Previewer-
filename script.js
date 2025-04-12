// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const inpFile = document.getElementById("inpFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage = previewContainer.querySelector(".image-preview__image");
    const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

    // Add event listener for file input changes
    inpFile.addEventListener("change", function() {
        // Check if user has selected a file
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            
            // When file is loaded
            reader.addEventListener("load", function() {
                // Set the source of preview image to the FileReader result (base64 data URL)
                previewImage.src = this.result;
                // Show the image
                previewImage.style.display = "block";
                // Hide the default text
                previewDefaultText.style.display = "none";
            });
            
            // Read the selected file as a data URL (base64 encoded string)
            reader.readAsDataURL(this.files[0]);
        } else {
            // Reset the preview if no file is selected
            previewImage.style.display = "none";
            previewDefaultText.style.display = "block";
            previewImage.src = "";
        }
    });
});