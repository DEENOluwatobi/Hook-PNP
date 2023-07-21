// FOR TOP BABES CONTAINER

const people = [
    {
        picture: 'person1.jpg',
        name: 'Kim Wesley',
        country: 'USA'
    },
    {
        picture: 'person2.jpg',
        name: 'Mama Debby',
        country: 'Canada'
    },
    {
        picture: 'person3.jpg',
        name: 'Juliet Sexy',
        country: 'UK'
    },
    {
        picture: 'person3.jpg',
        name: 'Jade Gomez',
        country: 'Lagos'
    },
    
];

function displayPeople() {
    const container = document.getElementById('people-container');

    for (const person of people) {
        const personDiv = document.createElement('div');
        personDiv.classList.add('person-card'); 

        const img = document.createElement('img');
        img.classList.add('person-img'); 
        img.src = person.picture;

        const nameElement = document.createElement('p');
        nameElement.classList.add('person-name'); 
        nameElement.textContent = `Name: ${person.name}`;

        const countryElement = document.createElement('p');
        countryElement.classList.add('person-country'); 
        countryElement.textContent = `Country: ${person.country}`;

        personDiv.appendChild(img);
        personDiv.appendChild(nameElement);
        personDiv.appendChild(countryElement);

        container.appendChild(personDiv);
    }
}

window.onload = displayPeople;