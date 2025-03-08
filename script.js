document.getElementById('search-btn').addEventListener('click', async function () {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim(); // Supprime les espaces inutiles

    if (!city) {
        alert('Veuillez entrer un nom de ville.');
        return;
    }

    const apiKey = 'df8a5dd6298533e980380a7a3dfed19f'; // Remplacez par votre propre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        // Affichage d'un message de chargement (optionnel)
        document.getElementById('location').textContent = 'Chargement...';
        document.getElementById('temperature').textContent = '';
        document.getElementById('description').textContent = '';

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ville non trouvée ou problème de réseau.');
        }

        const data = await response.json();

        if (data.cod === 200) {
            const location = `${data.name}, ${data.sys.country}`;
            const temperature = `${data.main.temp}°C`;
            const description = data.weather[0].description;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;
        } else {
            alert(data.message || 'Ville non trouvée.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
});
