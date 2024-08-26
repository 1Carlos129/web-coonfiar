// geolocation.js

// Reemplaza 'your_api_key_here' con tu clave de API de ipinfo.io
const apiKey = '6ef135a4bfa593';
const apiUrl = `https://ipinfo.io/json?token=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const countryCode = data.country; // Código del país (por ejemplo, 'US' para Estados Unidos)
    
    if (countryCode !== 'US') {
      // Redirige a una página de bloqueo o muestra un mensaje de restricción
      window.location.href = 'https://example.com/blocked'; // URL de la página de bloqueo
    }
  })
  .catch(error => console.error('Error al obtener la ubicación:', error));
