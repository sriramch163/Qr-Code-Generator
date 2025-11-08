// script.js

document.getElementById('qr-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const id = document.getElementById('qr-id').value;
	const price = document.getElementById('qr-price').value;
	const qrText = `Product ID: ${id}, Price: $${price}`;

	const qrImage = document.createElement('img');
	qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;
	qrImage.style.maxWidth = '200px';
	
	const qrResultDiv = document.getElementById('qr-result');
	qrResultDiv.innerHTML = '';
	qrResultDiv.appendChild(qrImage);
});