// HANDLES EVERYTHING ABOUT SEARCH
const NavBar = document.getElementById('navBar');
const welcomeDiv = document.getElementById('welcomeDiv');
const searchConDiv = document.getElementById('searchConDiv');
const searchHead = document.getElementById('search-head');
const SearchBar = document.getElementById('searchbar');
const SearchBtn = document.getElementById('search-btn');
const SearchIcon = document.getElementById('icon');
const searchInput = document.getElementById("searchInput"); 
const resultsContainer = document.getElementById("resultsContainer");
const searchTitle = document.getElementById('sr');
const step2Container = document.getElementById("step-2");
const step3Container = document.getElementById("step-3");

const progressBar2 = document.getElementById('prg2');
const progressTitle2 = document.getElementById('prgtitle2');
const line1 = document.getElementById('line1');

const progressBar3 = document.getElementById('prg3');
const progressTitle3 = document.getElementById('prgtitle3');
const line2 = document.getElementById('line2');



const SlideUp = () => {

  function adjustWidthBasedOnScreenSize() {

    const maxWidth800px = window.matchMedia('(max-width: 800px)').matches;
    if (maxWidth800px) {
        searchConDiv.style.width = '80%';
    } else {
      searchConDiv.style.width = '50%';
      searchConDiv.style.transition = 'width 0.5s'
    } 
  }
  
  NavBar.style.display = 'none'
  welcomeDiv.style.opacity = '0';
  welcomeDiv.style.height = '0';
  welcomeDiv.style.transition = 'opacity 0.5s, height 0.5s';
  searchHead.style.display = 'flex'
  searchHead.style.opacity = '1'
  searchHead.style.transition = 'opacity 0.5s, height 0.5s';

  NavBar.style.transition = 'display 0.5s'

  searchHead.style.marginTop = '10px'; 
  searchHead.style.transition = 'margin-top 0.5s';
  
  searchConDiv.style.marginTop = '30px'; 
  searchConDiv.style.transition = 'margin-top 0.5s';  

  searchConDiv.style.padding = '20px 30px';
  searchConDiv.style.transition = 'padding 0.5s'

  searchConDiv.style.borderRadius = '20px'
  searchConDiv.style.transition = 'border-radius 0.5s'

  SearchBar.style.padding = '12px';
  SearchBtn.style.padding = '12px';


  adjustWidthBasedOnScreenSize();

}

// const SlideInStep2 = () => {
//   searchConDiv.style.left = '-100%';
//   resultsContainer.style.left = '-100%';
//   searchTitle.style.left = '-100%';
//   searchConDiv.style.opacity = '0';
//   resultsContainer.style.opacity = '0';
//   progressBar2.style.backgroundColor = '#7103B6'
//   line1.style.backgroundColor = '#7103B6'
//   progressTitle2.style.color = '#7103B6'

//   setTimeout(() => {
//     searchConDiv.style.display = 'none';
//     resultsContainer.style.display = 'none';
//     searchTitle.style.display = 'none';
//     step2Container.style.display = 'flex'
//     step2Container.style.opacity = '10'
//     step2Container.style.transition = 'opacity 0.2s'
//   }, 500);

// }

// const SlideInStep3 = () => {
//   step2Container.style.left = '-100%';
//   step2Container.style.opacity = '0';

//   progressBar2.style.backgroundColor = '#7103B6'
//   line1.style.backgroundColor = '#7103B6'
//   progressTitle2.style.color = '#7103B6'

//   setTimeout(() => {
//     step3Container.style.display = 'flex'
//     step3Container.style.opacity = '10'
//     step3Container.style.transition = 'opacity 0.2s'
//   }, 500);
// }

const SlideInStep2 = () => {
  searchConDiv.style.left = '-100%';
  resultsContainer.style.left = '-100%';
  searchTitle.style.left = '-100%';
  searchConDiv.style.opacity = '0';
  resultsContainer.style.opacity = '0';
  progressBar2.style.backgroundColor = '#7103B6'
  line1.style.backgroundColor = '#7103B6'
  progressTitle2.style.color = '#7103B6'

  setTimeout(() => {
    searchConDiv.style.display = 'none';
    resultsContainer.style.display = 'none';
    searchTitle.style.display = 'none';
    step2Container.style.display = 'flex';
    step2Container.style.opacity = '1'; // Changed to 1 to show step-2
    step2Container.style.transition = 'opacity 0.2s';
  }, 500);
};

const SlideInStep3 = () => {
  step2Container.style.left = '-100%';
  step2Container.style.opacity = '0'; 
  line2.style.backgroundColor = '#7103B6'
  progressBar3.style.backgroundColor = '#7103B6'
  progressTitle3.style.color = '#7103B6'

  setTimeout(() => {
    step2Container.style.display = 'none';
    step3Container.style.display = 'flex';
    step3Container.style.opacity = '1'; // Changed to 1 to show step-3
    step3Container.style.transition = 'opacity 0.2s';
  }, 500);
};

// ----------------------------------------------------------------------------

const database = [
  {
      picture: 'Images/lady1.jpeg',
      name: 'Kim Wesley',
      age: 20,
      state: 'New York',
      country: 'USA',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady2.jpeg',
      age: 22,
      name: 'Mama Debby',
      state: 'Lagos',
      country: 'Nigeia',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady3.jpeg',
      age: 21,
      name: 'Juliet Sexy',
      state: 'Tokyo',
      country: 'China',
      online: false,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady4.jpeg',
      age: 21,
      name: 'Jade Gomez',
      state: 'Lagos',
      country: 'Nigeria',
      online: false,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady5.jpeg',
      age: 20,
      name: 'Mama Debby',
      state: 'Ogun',
      country: 'Nigeria',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },

  {
      picture: 'Images/lady1.jpeg',
      name: 'Kim Wesley',
      age: 20,
      state: 'New York',
      country: 'USA',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady2.jpeg',
      name: 'Mama Debby',
      state: 'Lagos',
      age: 20,
      country: 'Nigeia',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady3.jpeg',
      name: 'Juliet Sexy',
      state: 'Tokyo',
      country: 'China',
      age: 20,
      online: false,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady4.jpeg',
      name: 'Jade Gomez',
      age: 20,
      state: 'Lagos',
      country: 'Nigeria',
      online: false,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady5.jpeg',
      name: 'Mama Debby',
      state: 'Ogun',
      age: 20,
      country: 'Nigeria',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady4.jpeg',
      name: 'Jade Gomez',
      state: 'Lagos',
      age: 20,
      country: 'Nigeria',
      online: false,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
  {
      picture: 'Images/lady5.jpeg',
      name: 'Mama Debby',
      state: 'Ogun',
      age: 20,
      country: 'Nigeria',
      online: true,
      shortTime: 10000,
      overNight: 10000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
  },
];



const displayResults = (results) => {
  resultsContainer.textContent = "";

  results.forEach((result) => {

      const resultElement = document.createElement("div");
      resultElement.classList.add('result-con')
      resultElement.style.backgroundImage = `url(${result.picture})`
      resultElement.style.backgroundSize = 'cover';
      resultElement.style.backgroundPosition = "center";
 
      const resultDetails = document.createElement('div');
      resultDetails.classList.add('result-details-con');

      const nameElement = document.createElement('p');
      nameElement.classList.add('result-name'); 
      nameElement.textContent = result.name;

      const infoCard = document.createElement('div');
      infoCard.classList.add('info-card');
      
      const statusContainer = document.createElement('div');
      statusContainer.classList.add('status-container');

      // Create a status dot element and set its class based on online status
      const statusDot = document.createElement('span');
      statusDot.classList.add('status-dot', result.online ? 'online' : 'offline');

      // Create a status text element to display "Online" or "Offline"
      const statusText = document.createElement('span');
      statusText.classList.add(result.online ? 'online-status' : 'offline-status');
      statusText.textContent = result.online ? 'Online' : 'Offline';

      // Append the status dot and status text to the status container
      statusContainer.appendChild(statusDot);
      statusContainer.appendChild(statusText);

      const locationElement = document.createElement('p');
      locationElement.classList.add('result-location'); 
      locationElement.textContent = `${result.state}, ${result.country}`; 

      
      infoCard.appendChild(statusContainer);
      infoCard.appendChild(locationElement);

      resultDetails.appendChild(nameElement);  
      resultDetails.appendChild(infoCard);

      resultElement.appendChild(resultDetails);
      resultsContainer.appendChild(resultElement);


      resultElement.addEventListener("click", () => {
        openStep2(result);
      });
  });
};

const openStep2 = (selectedUser) => {
  step2Container.innerHTML = `
      <h2>User Information - Step 2</h2>
      <img src="${selectedUser.picture}" alt="${selectedUser.name}">
      <p>Name: ${selectedUser.name}</p>
      <p>Online: ${selectedUser.online ? "Yes" : "No"}</p>
      <p>Country: ${selectedUser.country}</p>
      <p>State: ${selectedUser.state}</p>
      <!-- Add more information or actions for Step 2 here -->
  `;


  const NextBtn = document.createElement('button');
  NextBtn.innerText = "Book" + " " + `${selectedUser.name}`;
  NextBtn.addEventListener("click", () => {
    openStep3(selectedUser);
  });

  step2Container.appendChild(NextBtn);
  step2Container.classList.remove('step-hidden');
  step2Container.classList.add('step-enter');
  
  SlideInStep2();
};

const openStep3 = (selectedUser) => {
  step3Container.innerHTML = `
      <h2>Payment - Step 3</h2>
      <img src="${selectedUser.picture}" alt="${selectedUser.name}">
      <p>Name: ${selectedUser.name}</p>
      <p>Online: ${selectedUser.online ? "Yes" : "No"}</p>
      <p>Country: ${selectedUser.country}</p>
      <p>State: ${selectedUser.state}</p>
      <!-- Add more information or actions for Step 2 here -->
  `;

  const NextBtn = step2Container.querySelector('button');
  if (NextBtn) {
    NextBtn.remove();
  }

  // const BackBtn = document.createElement('button');
  // BackBtn.innerText = "Back";
  // BackBtn.addEventListener("click", () => {
  //   openStep2();
  //   step3Container.innerHTML = ""; 
  // });

  // step3Container.appendChild(BackBtn);

  SlideInStep3();
};




const handleCountrySearch = (event) => {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();
  const results = database.filter((item) =>
      item.country.toLowerCase().includes(query)
  );

  displayResults(results);
};

const handleStateSearch = (event) => {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();
  const results = database.filter((item) =>
      item.state.toLowerCase().includes(query)
  );

  displayResults(results);
};



document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim().toLowerCase();

  if (searchQuery) {
      const isCountry = database.some((item) =>
          item.country.toLowerCase().includes(searchQuery)
      );
      const isState = database.some((item) =>
          item.state.toLowerCase().includes(searchQuery)
      );

      if (isCountry) {
          handleCountrySearch(event);
          searchTitle.style.display = 'flex';
      } else if (isState) {
          handleStateSearch(event);
          searchTitle.style.display = 'flex';
      } else {
          resultsContainer.textContent = "No results found for this location.";
      }
  } else {
      resultsContainer.textContent = "Please enter a location.";
      searchTitle.style.display = 'none';
  }
});








window.onload = () => {
  displayResults();
}