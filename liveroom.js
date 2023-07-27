const videos = [
    {
        picture: 'Images/lady1.jpeg',
        name: 'Kim Wesley',
        state: 'New York',
        country: 'USA',
        online: true,
        amount: 2100,
    },
    {
        picture: 'Images/lady2.jpeg',
        name: 'Mama Debby',
        state: 'Lagos',
        country: 'Nigeia',
        online: true,
        amount: 4300,
    },
    {
        picture: 'Images/lady3.jpeg',
        name: 'Juliet Sexy',
        state: 'Tokyo',
        country: 'China',
        online: false,
        amount: 2200,
    },
    {
        picture: 'Images/lady4.jpeg',
        name: 'Jade Gomez',
        state: 'Lagos',
        country: 'Nigeria',
        online: false,
        amount: 3000,
    },
    {
        picture: 'Images/lady5.jpeg',
        name: 'Mama Debby',
        state: 'Ogun',
        country: 'Nigeria',
        online: true,
        amount: 5100,
    },
    {
        picture: 'Images/lady1.jpeg',
        name: 'Kim Wesley',
        state: 'New York',
        country: 'USA',
        online: true,
        amount: 1100,
    },
    {
        picture: 'Images/lady2.jpeg',
        name: 'Mama Debby',
        state: 'Lagos',
        country: 'Nigeia',
        online: true,
        amount: 3100,
    },
    {
        picture: 'Images/lady3.jpeg',
        name: 'Juliet Sexy',
        state: 'Tokyo',
        country: 'China',
        online: false,
        amount: 5000,
    },
    {
        picture: 'Images/lady4.jpeg',
        name: 'Jade Gomez',
        state: 'Lagos',
        country: 'Nigeria',
        online: false,
        amount: 5000,
    },
    {
        picture: 'Images/lady5.jpeg',
        name: 'Mama Debby',
        state: 'Ogun',
        country: 'Nigeria',
        online: true,
        amount: 1200,
    },
    {
        picture: 'Images/lady1.jpeg',
        name: 'Kim Wesley',
        state: 'New York',
        country: 'USA',
        online: true,
        amount: 2100,
    },
    {
        picture: 'Images/lady2.jpeg',
        name: 'Mama Debby',
        state: 'Lagos',
        country: 'Nigeia',
        online: true,
        amount: 3200,
    },
    {
        picture: 'Images/lady3.jpeg',
        name: 'Juliet Sexy',
        state: 'Tokyo',
        country: 'China',
        online: false,
        amount: 4500,
    },
    {
        picture: 'Images/lady4.jpeg',
        name: 'Jade Gomez',
        state: 'Lagos',
        country: 'Nigeria',
        online: false,
        amount: 5020,
    },
    {
        picture: 'Images/lady5.jpeg',
        name: 'Mama Debby',
        state: 'Ogun',
        country: 'Nigeria',
        online: true,
        amount: 3400,
    },
    
];


function displayLiveVideos() {
    const container = document.getElementById('liveVideo-Div');

    for (const video of videos) {

        const liveDiv = document.createElement('div');
        liveDiv.classList.add('live-card'); 
        liveDiv.style.backgroundImage = `url(${video.picture})`; 
        liveDiv.style.backgroundSize = "cover";
        liveDiv.style.backgroundPosition = "center";

        const liveCon = document.createElement('div');
        liveCon.classList.add('live-con'); 

        const bottomCon = document.createElement('div');
        bottomCon.classList.add('bottom-con'); 

        const detailContainer = document.createElement('div');
        detailContainer.classList.add('detail-container');
        
        const nameElement = document.createElement('div');
        nameElement.classList.add('lv-name'); 
        nameElement.textContent = video.name;
        detailContainer.appendChild(nameElement);

        const lvdContainer = document.createElement('div');
        lvdContainer.classList.add('lvd-container');

        // Create a div to wrap the status dot and status element
        const statusContainer = document.createElement('div');
        statusContainer.classList.add('status-container');

        // Create a status dot element and set its class based on online status
        const statusDot = document.createElement('span');
        statusDot.classList.add('status-dot', video.online ? 'online' : 'offline');

        // Create a status text element to display "Online" or "Offline"
        const statusText = document.createElement('span');
        statusText.classList.add(video.online ? 'online-live-status' : 'offline-live-status');
        statusText.textContent = video.online ? 'Online' : 'Offline';

        // Append the status dot and status text to the status container
        statusContainer.appendChild(statusDot);
        statusContainer.appendChild(statusText);

        const videoElement = document.createElement('div');
        const videoIconElement = document.createElement('i');
        videoIconElement.classList.add('fas', 'fa-video');

        const joinVid = document.createElement('div');
        joinVid.classList.add('join-vid');
        joinVid.textContent = 'N' + `${video.amount}` + ' to join';

        videoElement.appendChild(videoIconElement);
        lvdContainer.appendChild(statusContainer);
        lvdContainer.appendChild(videoElement);
        liveCon.appendChild(detailContainer);
        liveCon.appendChild(joinVid)
        bottomCon.appendChild(lvdContainer);
        liveDiv.appendChild(liveCon);
        liveDiv.appendChild(bottomCon);

        container.appendChild(liveDiv);
    }
};

window.onload = function () {
    displayLiveVideos();
}