// DASHBOARD.JS - JavaScript file for Dashboard page.
// I will be adding comment for better understanding of the code.
// ----------------------------------------------------------------------------------------------------------------

// BABE - USER DETAILS------------------------------------------------------------
// Object containing details about logged in (Babe) User
let userDetails = {  
    name: 'Britney Willis',
    age: 20,
    state: 'Lagos',
    country: 'Nigeria',
    shortTime: 10000,
    overNight: 10000,
    propic: '../Images/lady4.jpeg',
    pic1: '../Images/lady1.jpeg',
    pic2: '../Images/lady2.jpeg',
    pic3: '../Images/lady3.jpeg',
    pic4: '../Images/lady4.jpeg',
    pic5: '../Images/lady5.jpeg',
    pic6: '../Images/lady1.jpeg',
    pic7: '../Images/lady2.jpeg',
    pic8: '../Images/lady3.jpeg',
}; 

const displayProfile = () => {

    const Name = document.getElementById('profile-name');
    Name.textContent =  `${userDetails.name}`;
    
    const Age = document.getElementById('user-age');
    Age.textContent =  `${userDetails.age}`;

    const Location = document.getElementById('user-loc');
    const state =  `${userDetails.state}`;
    const country =  `${userDetails.country}`;
    Location.textContent = state + ',' + ' ' + country;
    
    const shortTimePrice = document.getElementById('short-price');
    shortTimePrice.textContent = 'N' + `${userDetails.shortTime}`;

    const overNightPrice = document.getElementById('over-price');
    overNightPrice.textContent = 'N' + `${userDetails.overNight}`

    const ProfilePic = document.getElementById('right-con');
    ProfilePic.style.backgroundImage = `url(${userDetails.propic})`; 
    ProfilePic.style.backgroundSize = "cover";
    ProfilePic.style.backgroundPosition = "center";

    const Pic1 = document.getElementById('left-1');
    Pic1.style.backgroundImage = `url(${userDetails.pic1})`; 
    Pic1.style.backgroundSize = "cover";
    Pic1.style.backgroundPosition = "center";

    const Pic2 = document.getElementById('left-2');
    Pic2.style.backgroundImage = `url(${userDetails.pic2})`; 
    Pic2.style.backgroundSize = "cover"
    Pic2.style.backgroundPosition = "center";

    const Pic3 = document.getElementById('left-3');
    Pic3.style.backgroundImage = `url(${userDetails.pic3})`; 
    Pic3.style.backgroundSize = "cover";
    Pic3.style.backgroundPosition = "center";

    const Pic4 = document.getElementById('left-4');
    Pic4.style.backgroundImage = `url(${userDetails.pic4})`; 
    Pic4.style.backgroundSize = "cover";
    Pic4.style.backgroundPosition = "center";

    const Pic5 = document.getElementById('right-1');
    Pic5.style.backgroundImage = `url(${userDetails.pic5})`; 
    Pic5.style.backgroundSize = "cover";
    Pic5.style.backgroundPosition = "center";

    const Pic6 = document.getElementById('right-2');
    Pic6.style.backgroundImage = `url(${userDetails.pic6})`; 
    Pic6.style.backgroundSize = "cover"
    Pic6.style.backgroundPosition = "center";

    const Pic7 = document.getElementById('right-3');
    Pic7.style.backgroundImage = `url(${userDetails.pic7})`; 
    Pic7.style.backgroundSize = "cover";
    Pic7.style.backgroundPosition = "center";

    const Pic8 = document.getElementById('right-4');
    Pic8.style.backgroundImage = `url(${userDetails.pic8})`; 
    Pic8.style.backgroundSize = "cover";
    Pic8.style.backgroundPosition = "center";
}




// FOR WALLET HISTORY DETAILS--------------------------------------------------------

// Function to generate a random 11-digit reference number
function generateReferenceNumber() {
    return Math.floor(10000000000 + Math.random() * 90000000000).toString();
}

// Array of objects representing transactions
const transactions = [
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N10,350',
        status: 'Debit'
    },
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N20,340',
        status: 'Credit'
    },
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N13,328',
        status: 'Debit'
    },
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N23,268',
        status: 'Credit'
    },
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N90,236',
        status: 'Credit'
    },
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N31,340',
        status: 'Credit'
    },
];

function displayBabeTransactions() {
    const tableBody = document.getElementById('babe-transaction-body');

    // Loop through the transactions array and create table rows for each transaction
    for (const transaction of transactions) {

        const row = document.createElement('tr');
        row.classList.add('row-cell');

        const referenceNumberCell = document.createElement('td');
        referenceNumberCell.classList.add('ref-num-cell');

        const amountCell = document.createElement('td');
        amountCell.classList.add('amount-cell');

        const statusCell = document.createElement('td');
        statusCell.classList.add('status-cell');

        referenceNumberCell.textContent = transaction.referenceNumber;
        amountCell.textContent = transaction.amount;
        statusCell.textContent = transaction.status;

        if (transaction.status === 'Debit') {
            statusCell.classList.add('debit');
        } else if (transaction.status === 'Credit') {
            statusCell.classList.add('credit');
        }

        row.appendChild(referenceNumberCell);
        row.appendChild(amountCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    }
}




// FOR TOP STORIES PANE ---------------------------------------------------------------

const stories = [
    {
        picture: '../Images/story1.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story2.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story3.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story4.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story5.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story1.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story2.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story3.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story4.jpeg',
        title: 'We did it inside his car in day light',
    },
    {
        picture: '../Images/story5.jpeg',
        title: 'We did it inside his car in day light',
    },
    
];


function displayStories() {
    const storyContainer = document.getElementById('people-stories');

    for (story of stories) {

        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story-card'); 
        storyDiv.style.backgroundImage = `url(${story.picture})`; 
        storyDiv.style.backgroundSize = "cover";
        storyDiv.style.backgroundPosition = "center";

        const storyCon = document.createElement('div');
        storyCon.classList.add('story-con'); 

        const titleElement = document.createElement('p');
        titleElement.classList.add('story-name'); 
        titleElement.textContent = story.title;


        storyCon.appendChild(titleElement);
        storyDiv.appendChild(storyCon);
        storyContainer.appendChild(storyDiv);
    }
}



window.onload = function() {
    generateReferenceNumber();
    displayBabeTransactions();
    displayStories();
    displayProfile();
};