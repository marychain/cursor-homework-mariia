function getDataFirst() {
    axios.get('https://swapi.dev/api/films/2/')
        .then((res) => {
            const people = res.data.characters;
            const planets = res.data.planets;
            const myH1 = document.createElement('h1');
            const header = document.querySelector('.header');
            header.appendChild(myH1);
            myH1.classList.add('title');
            myH1.textContent = res.data.title;
            document.addEventListener('click', function () {
            for (let i = 0; i < people.length; i++) {
                axios.get(people[i])
                    .then((res) => {
                        const article = document.createElement('article');
                        article.classList.add('people_item');
                        const h2 = document.createElement('h2');
                        const birthday = document.createElement('p');
                        const gender = document.createElement('p');
                        h2.textContent = res.data.name;
                        birthday.textContent = 'birthday: ' + res.data.birth_year;
                        gender.textContent = 'gender: ' + res.data.gender;
                        article.appendChild(h2);
                        article.appendChild(birthday);
                        article.appendChild(gender);
                        const sectionPeople = document.querySelector('.people');
                        sectionPeople.appendChild(article);
                    })    
                }     
            });  
        })
}
getDataFirst();