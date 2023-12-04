function detectDisease() {
    var fileInput = document.getElementById('imageInput');
    var file = fileInput.files[0];

    if (file) {
        var formData = new FormData();
        formData.append('image', file);

        fetch('/detect', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            displayResult(data.result);
            displayDetails(data.details);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please select an image.');
    }
}

function displayResult(result) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Result: ' + result;
}

function displayDetails(details) {
    var detailsDiv = document.getElementById('details');
    
    // Clear previous details
    detailsDiv.innerHTML = '';

    if (details && Object.keys(details).length > 0) {
        var detailsHTML = '<h2>Disease Details</h2>';
        detailsHTML += '<p><strong>Name:</strong> ' + details.name + '</p>';
        detailsHTML += '<p><strong>Description:</strong> ' + details.description + '</p>';
        
        // Add more details as needed

        detailsDiv.innerHTML = detailsHTML;
    }
}