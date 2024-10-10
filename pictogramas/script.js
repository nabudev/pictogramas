let selectedPhrase = null;
let selectedImage = null;

function selectPhrase(element, phrase) {
    const phrases = document.querySelectorAll('.phrase');
    phrases.forEach(phrase => phrase.classList.remove('selected'));
    element.classList.add('selected');
    selectedPhrase = phrase;
    checkSelection();
}

function selectImage(element, image) {
    const images = document.querySelectorAll('.image-box');
    images.forEach(image => image.classList.remove('selected'));
    element.classList.add('selected');
    selectedImage = image;
    checkSelection();
}

function checkSelection() {
    if (selectedPhrase && selectedImage) {
        // Solo se activa si hay selecciones válidas
        if (selectedPhrase === selectedImage) {
            showModal("¡Selección correcta! Has elegido: " + selectedPhrase);
            document.getElementById('resultImage').src = getImageSrc(selectedImage);
            document.getElementById('resultPhrase').textContent = selectedPhrase;
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('error').classList.add('hidden');
        } else {
            showModal("Selección incorrecta. Intenta de nuevo.");
            document.getElementById('result').classList.add('hidden');
            document.getElementById('error').classList.remove('hidden');
        }
    }
}

function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('resultModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('resultModal').classList.add('hidden');
    // Resetear selecciones
    selectedPhrase = null;
    selectedImage = null;
    const phrases = document.querySelectorAll('.phrase');
    const images = document.querySelectorAll('.image-box');
    phrases.forEach(phrase => phrase.classList.remove('selected'));
    images.forEach(image => image.classList.remove('selected'));
}

function getImageSrc(image) {
    switch (image) {
        case 'Enojado':
            return 'img/enfadar.png';
        case 'Feliz':
            return 'img/alegre (2).png';
        case 'Aburrido':
            return 'img/aburrido (1).png';
        case 'Triste':
            return 'img/triste (1).png';
        default:
            return '';
    }
}
