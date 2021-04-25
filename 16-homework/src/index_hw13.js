export function getListOfPlanet () {
    let currentPlanetPage = 1;
    fetch('https://swapi.dev/api/planets/?page=1')
    .then((responce) => {
        return responce.json();
    })
    .then((data) => { 
        const planet = data.results;
        console.log(planet)
        const titleItems = document.createElement('section');
        titleItems.classList.add('title_items');
        document.body.appendChild(titleItems);
        const h2 = document.createElement('h2');
        h2.classList.add('title_items');
        document.querySelector('.title_items').appendChild(h2);
        h2.textContent = 'ALL PLANETS';
        const sectionPlanets = document.createElement('section');
        sectionPlanets.classList.add('items');
        sectionPlanets.classList.add('info');
        document.body.appendChild(sectionPlanets);
        for (let i = 0; i < planet.length; i++) {
            const article = document.createElement('article');
            article.classList.add('planets_item');
            const h3 = document.createElement('h3');
            h3.textContent = planet[i].name;
            article.appendChild(h3);
            sectionPlanets.appendChild(article);
        }

    })
}
