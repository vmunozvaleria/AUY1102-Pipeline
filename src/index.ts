export * from './value-object';

// Este es un ejemplo de código JavaScript que expone una clave API sensible
const apiKey = "12345-abcde-67890-fghij"; // Esto es un secreto

function fetchData() {
    fetch(`https://api.example.com/data?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

fetchData();