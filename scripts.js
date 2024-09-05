function uploadVideo() {
    var fileInput = document.getElementById('upload-video');
    if (fileInput.files.length === 0) {
        alert('Please select a video file first.');
        return;
    }

    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    // Send the file to the server
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById('converted-text').innerText = data.converted_text;
        }
    })
    .catch(error => console.error('Error uploading video:', error));
}

function playSound() {
    var audio = document.getElementById('sound');
    audio.play();
}
