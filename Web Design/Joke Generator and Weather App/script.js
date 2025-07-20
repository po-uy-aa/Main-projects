document.getElementById('loadJokesButton').addEventListener('click', () => {
    const statusMessage = document.getElementById('statusMessage');
    const jokeList = document.getElementById('joke-list');

    // Display loading message and clear existing jokes
    statusMessage.textContent = 'Loading...';
    jokeList.innerHTML = '';

    fetch('https://official-joke-api.appspot.com/jokes/ten')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            statusMessage.textContent = ''; // Clear status message
            data.forEach(joke => {
                const listItem = document.createElement('li');
                listItem.textContent = `${joke.setup} - ${joke.punchline}`;
                jokeList.appendChild(listItem);
            });
        })
        .catch(error => {
            statusMessage.textContent = 'Oops! Something went wrong.';
            console.error('Error fetching jokes:', error);
        });
});