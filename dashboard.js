// FOR TOP BABES CONTAINER

const people = [
    {
        picture: 'Images/lady1.jpeg',
        name: 'Kim Wesley',
        state: 'Lagos',
        country: 'USA',
        online: true,
    },
    {
        picture: 'Images/lady2.jpeg',
        name: 'Mama Debby',
        state: 'Lagos',
        country: 'Canada',
        online: true,
    },
    {
        picture: 'Images/lady3.jpeg',
        name: 'Juliet Sexy',
        state: 'Lagos',
        country: 'UK',
        online: true,
    },
    {
        picture: 'Images/lady4.jpeg',
        name: 'Jade Gomez',
        state: 'Lagos',
        country: 'Lagos',
        online: true,
    },
    {
        picture: 'Images/lady5.jpeg',
        name: 'Mama Debby',
        state: 'Lagos',
        country: 'Canada',
        online: true
    },
    
];

function displayPeople() {
    const container = document.getElementById('people-container');

    for (const person of people) {
        const personDiv = document.createElement('div');
        personDiv.classList.add('person-card');
        personDiv.style.backgroundImage = `url(${person.picture})`;
        personDiv.style.backgroundSize = 'cover'
        personDiv.style.backgroundPosition = 'center'

        const nameElement = document.createElement('p');
        nameElement.classList.add('person-name'); 
        nameElement.textContent = `${person.name}`;

        const countryElement = document.createElement('p');
        countryElement.classList.add('person-country'); 
        countryElement.textContent = `${person.country}`;

        personDiv.appendChild(nameElement);
        personDiv.appendChild(countryElement);
        container.appendChild(personDiv);
    }
}

window.onload = displayPeople;