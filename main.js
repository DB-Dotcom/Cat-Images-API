document.getElementById('loadImagesButton').addEventListener('click', function () {
    const imageContainer = document.getElementById('imageContainer');

    // Schleife, um 10 Bilder abzurufen und sie dem Bildcontainer hinzuzufügen
    for (let i = 0; i < 10; i++) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                // Das Katzenbild befindet sich in data[0].url
                const catImageUrl = data[0].url;

                // Neues Bildcontainer erstellen
                const divContainer = document.createElement('div');
                divContainer.className = 'image-container';

                // Neues Bild erstellen
                const imgElement = document.createElement('img');
                imgElement.src = catImageUrl;
                imgElement.alt = 'Katzenbild';
                imgElement.className = 'image';

                // Bild dem Bildcontainer hinzufügen
                divContainer.appendChild(imgElement);
                imageContainer.appendChild(divContainer);
            })
            .catch(error => {
                console.error('Fehler beim Laden des Bildes:', error);
            });
    }
});