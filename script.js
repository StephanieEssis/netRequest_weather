document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value;
    const apiKey = 'df8a5dd6298533e980380a7a3dfed19f'; // Remplacez ceci par votre clé API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const location = data.name + ', ' + data.sys.country;
                const temperature = data.main.temp + '°C';
                const description = data.weather[0].description;

                document.getElementById('location').innerText = location;
                document.getElementById('temperature').innerText = temperature;
                document.getElementById('description').innerText = description;
            } else {
                alert('Ville non trouvée');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue.');
        });
});
