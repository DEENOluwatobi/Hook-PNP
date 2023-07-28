// DASHBOARD.JS - JavaScript file for Dashboard page.
// I will be adding comment for better understanding of the code.
// ----------------------------------------------------------------------------------------------------------------




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
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N10,350',
        status: 'Debit'
    },
    {
        referenceNumber: generateReferenceNumber(),
        amount: 'N71,340',
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
];

function displayTransactions() {
    const tableBody = document.getElementById('transaction-table-body');

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
    displayTransactions();
    displayStories();
};