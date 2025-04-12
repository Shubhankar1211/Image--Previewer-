document.addEventListener('DOMContentLoaded', function() {
    const inpFile = document.getElementById("inpFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage = previewContainer.querySelector(".image-preview__image");
    const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

    inpFile.addEventListener("change", function() {
        // Check if user has selected at atleast  a file
        if (this.files && this.files[0]) {
            const reader = new FileReader(); // filereader is an object in js that can read the content of the file
            
            // Whhen the file is succesfully read ,then this load event gets triggered
            reader.addEventListener("load", function() {
                previewImage.src = this.result;// assign that data to previewImage.src so the image can be shown. and this is refer to file readder and result is propertry of filereader hweer image data is stored
                // Show the image
                previewImage.style.display = "block";
                // Hide the default text
                previewDefaultText.style.display = "none";
            });
            
            // this reads the image fiel as Data url . it converts teh file in to a base 64string,which can be used as the source for the image
            reader.readAsDataURL(this.files[0]);
        } else {
            // it there is no image selected
            previewImage.style.display = "none"; // hide the image
            previewDefaultText.style.display = "block"; // show the deafult text which is written
            previewImage.src = ""; // it reset the source of the image ot a empty string to nesure no iamge is displayed
        }
    });
});