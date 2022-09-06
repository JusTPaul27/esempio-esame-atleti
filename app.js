fetch('https://628b2f157886bbbb37b20caa.mockapi.io/athletes')
.then(resp => resp.json()).then(res => displayAthlete(res))

function displayAthlete(athletes) {
    const container = document.getElementById('container');
    
    for (const athlete of athletes) {
        console.log(athlete);
        const athleteDiv = document.createElement('div');
        athleteDiv.classList.add('athlete-div')

        const athleteName = document.createElement('span');
        athleteName.innerText = athlete.name;
        athleteName.style.fontSize = 'large'
        athleteDiv.appendChild(athleteName);

        const athleteSurname = document.createElement('span');
        athleteSurname.innerText = ' ' + athlete.surname;
        athleteSurname.style.fontSize = 'large'
        athleteDiv.appendChild(athleteSurname);

        const athleteSport = document.createElement('div');
        athleteSport.innerText = "He's famous cause he practise " + athlete.sport;
        athleteDiv.appendChild(athleteSport);

        const athleteYob = document.createElement('div');
        athleteYob.innerText = athlete.yob;
        athleteDiv.appendChild(athleteYob);

        const athleteNation = document.createElement('div');
        athleteNation.innerText = "He was born in " + athlete.nationality
        athleteDiv.appendChild(athleteNation);

        const colorTitle = document.createElement('h4');
        colorTitle.innerText = 'Color of his team';
        athleteDiv.appendChild(colorTitle);

        const colorContainer = document.createElement('div');
        colorContainer.classList.add('colors-container')
        for (const color of athlete.team_colors) {
           const colorDiv = document.createElement('div');
           colorDiv.style.backgroundColor = color;
           colorDiv.style.height = '20px';
           colorDiv.style.width = '20px';
           colorDiv.classList.add('color-div');
           colorContainer.appendChild(colorDiv);
        }
        athleteDiv.appendChild(colorContainer);
        
        const bestPosition = document.createElement('p');
        function replaceChamp() {
            if (athlete.best_position === 1) {
                return 'WC';
            } else {
                return athlete.best_position;
            }
        }
        bestPosition.innerText = 'His best position had been ' + replaceChamp();
        athleteDiv.appendChild(bestPosition);

        container.appendChild(athleteDiv);
    }
}