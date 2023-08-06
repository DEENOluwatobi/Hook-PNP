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
  NavBar.style.transition = 'display 0.5s'

  welcomeDiv.style.opacity = '0';
  welcomeDiv.style.height = '0';
  welcomeDiv.style.transition = 'opacity 0.5s, height 0.5s';

  searchHead.style.display = 'flex'
  searchHead.style.opacity = '1'
  searchHead.style.transition = 'opacity 0.5s, height 0.5s';
  searchHead.style.marginTop = '10px'; 
  searchHead.style.transition = 'margin-top 0.5s';
  
  searchConDiv.style.marginTop = '30px'; 
  searchConDiv.style.transition = 'margin-top 0.5s';  
  searchConDiv.style.padding = '20px 30px';
  searchConDiv.style.transition = 'padding 0.5s'
  searchConDiv.style.borderRadius = '20px';
  searchConDiv.style.transition = 'border-radius 0.5s'

  SearchBar.style.padding = '12px';

  SearchBtn.style.padding = '12px';


  adjustWidthBasedOnScreenSize();

}

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
    step2Container.style.opacity = '1';
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
    step3Container.style.opacity = '1'; 
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
      overNight: 25000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady2.jpeg',
      age: 22,
      name: 'Mama Debby',
      state: 'Lagos',
      country: 'Nigeia',
      online: true,
      shortTime: 15000,
      overNight: 34000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady3.jpeg',
      age: 21,
      name: 'Juliet Sexy',
      state: 'Tokyo',
      country: 'China',
      online: false,
      shortTime: 14000,
      overNight: 53000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady4.jpeg',
      age: 21,
      name: 'Jade Gomez',
      state: 'Lagos',
      country: 'Nigeria',
      online: false,
      shortTime: 10000,
      overNight: 30000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady5.jpeg',
      age: 20,
      name: 'Mama Debby',
      state: 'Ogun',
      country: 'Nigeria',
      online: true,
      shortTime: 10000,
      overNight: 23000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },

  {
      picture: 'Images/lady1.jpeg',
      name: 'Kim Wesley',
      age: 20,
      state: 'New York',
      country: 'USA',
      online: true,
      shortTime: 5000,
      overNight: 15000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady2.jpeg',
      name: 'Mama Debby',
      state: 'Lagos',
      age: 20,
      country: 'Nigeia',
      online: true,
      shortTime: 8000,
      overNight: 19000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady3.jpeg',
      name: 'Juliet Sexy',
      state: 'Tokyo',
      country: 'China',
      age: 20,
      online: false,
      shortTime: 13000,
      overNight: 40000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady4.jpeg',
      name: 'Jade Gomez',
      age: 20,
      state: 'Lagos',
      country: 'Nigeria',
      online: false,
      shortTime: 30000,
      overNight: 99000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady5.jpeg',
      name: 'Mama Debby',
      state: 'Ogun',
      age: 20,
      country: 'Nigeria',
      online: true,
      shortTime: 12000,
      overNight: 34000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady4.jpeg',
      name: 'Jade Gomez',
      state: 'Lagos',
      age: 20,
      country: 'Nigeria',
      online: false,
      shortTime: 23000,
      overNight: 80000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
  },
  {
      picture: 'Images/lady5.jpeg',
      name: 'Mama Debby',
      state: 'Ogun',
      age: 20,
      country: 'Nigeria',
      online: true,
      shortTime: 11000,
      overNight: 22000,
      pic1: '/Images/lady1.jpeg',
      pic2: '/Images/lady2.jpeg',
      pic3: '/Images/lady3.jpeg',
      pic4: '/Images/lady4.jpeg',
      pic5: '/Images/lady5.jpeg',
      pic6: '/Images/lady1.jpeg',
      pic7: '/Images/lady2.jpeg',
      pic8: '/Images/lady3.jpeg',
      pic9: '/Images/lady1.jpeg',
      bio: `I am a talented and driven marketing professional with a passion for creating impactful campaigns. With a bachelor's degree in Marketing and several years of experience in the industry, I have developed a strong understanding of market trends, consumer behavior, and effective communication strategies. My creativity shines through in my ability to develop innovative marketing concepts and my eye for detail in crafting compelling content.`
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

    const StepTwo = document.createElement('div');
    StepTwo.classList.add('step-two');
      
      // PAGE OR STEP-2 HEAD
      const Step2Header = document.createElement('div');
      Step2Header.classList.add('step-2-header');

      const Step2Content = document.createElement('div');
      Step2Content.classList.add('step-2-content')
      Step2Content.textContent = `${selectedUser.name}`;

      const Step2Info = document.createElement('div');
      Step2Info.classList.add('info-card');
          
      const Step2Status = document.createElement('div');
      Step2Status.classList.add('status-container');

      const Step2Dot = document.createElement('span');
      Step2Dot.classList.add('status-dot', selectedUser.online ? 'online' : 'offline');

      const Step2Text = document.createElement('span');
      Step2Text.classList.add(selectedUser.online ? 'online-status' : 'offline-status');
      Step2Text.textContent = selectedUser.online ? 'Online' : 'Offline';

      const Step2Location = document.createElement('p');
      Step2Location.classList.add('result-location'); 
      Step2Location.textContent = `${selectedUser.state}, ${selectedUser.country}`; 
      
      // PAGE OR STEP-2 BODY
      const Step2Body = document.createElement('div');
      Step2Body.classList.add('step-2-body');

      const Step2ProPic = document.createElement('div');
      Step2ProPic.classList.add('profilepic');
      Step2ProPic.style.background = `url(${selectedUser.picture})`;
      Step2ProPic.style.backgroundSize= "cover";
      Step2ProPic.style.backgroundPosition = "center";

      const Album1 = document.createElement('div');
      Album1.classList.add('album1');

        const Pic2 = document.createElement('div')
        Pic2.classList.add("pic");
        Pic2.style.background = `url(${selectedUser.pic2})`;
        Pic2.style.backgroundSize= "cover";
        Pic2.style.backgroundPosition = "center";

        const Pic3 = document.createElement('div')
        Pic3.classList.add("pic");
        Pic3.style.background = `url(${selectedUser.pic3})`;
        Pic3.style.backgroundSize= "cover";
        Pic3.style.backgroundPosition = "center";

        const Pic4 = document.createElement('div')
        Pic4.classList.add("pic");
        Pic4.style.background = `url(${selectedUser.pic4})`;
        Pic4.style.backgroundSize= "cover";
        Pic4.style.backgroundPosition = "center";

        const Pic5 = document.createElement('div')
        Pic5.classList.add("pic");
        Pic5.style.background = `url(${selectedUser.pic5})`;
        Pic5.style.backgroundSize= "cover";
        Pic5.style.backgroundPosition = "center";

      const Album2 = document.createElement('div');
      Album2.classList.add('album2');

        const Pic6 = document.createElement('div')
        Pic6.classList.add("pic");
        Pic6.style.background = `url(${selectedUser.pic6})`;
        Pic6.style.backgroundSize= "cover";
        Pic6.style.backgroundPosition = "center";

        const Pic7 = document.createElement('div')
        Pic7.classList.add("pic");
        Pic7.style.background = `url(${selectedUser.pic7})`;
        Pic7.style.backgroundSize= "cover";
        Pic7.style.backgroundPosition = "center";

        const Pic8 = document.createElement('div')
        Pic8.classList.add("pic");
        Pic8.style.background = `url(${selectedUser.pic8})`;
        Pic8.style.backgroundSize= "cover";
        Pic8.style.backgroundPosition = "center";

        const Pic9 = document.createElement('div')
        Pic9.classList.add("pic");
        Pic9.style.background = `url(${selectedUser.pic9})`;
        Pic9.style.backgroundSize= "cover";
        Pic9.style.backgroundPosition = "center";

      const AboutSection = document.createElement('div'); 
      AboutSection.classList.add('about-section');
      
      const BioSection = document.createElement('div');
      BioSection.classList.add('bio-section');
        
        const BioHead = document.createElement('p');
        BioHead.classList.add('heads');
        BioHead.textContent = 'Bio'; 

        const Bio = document.createElement('div');
        Bio.classList.add('bio');
        Bio.textContent = `${selectedUser.bio}`;


      const OtherSection = document.createElement('div');
      OtherSection.classList.add('other-section');

      const AgeDiv = document.createElement('div');
        const AgeHead = document.createElement('p');
        AgeHead.classList.add('heads');
        AgeHead.textContent = 'Age'; 

        const Age = document.createElement('div');
        Age.classList.add('age');
        Age.textContent = `${selectedUser.age}`;
      
      const LocationDiv = document.createElement('div');
        const LocationHead = document.createElement('p');
        LocationHead.classList.add('heads');
        LocationHead.textContent = 'Location'; 

        const Location = document.createElement('div');
        Location.classList.add('location');
        Location.textContent = `${selectedUser.state}` + "," + " " + `${selectedUser.country}`;
   
      const PriceDiv = document.createElement('div');
        const PriceHead = document.createElement('p');
        PriceHead.classList.add('heads');
        PriceHead.textContent = 'Price'; 

        const Price = document.createElement('div');
        Price.classList.add('price');
        Price.textContent = "Overnight: " + `${selectedUser.overNight}` + "." + " " + "Short Time: " + `${selectedUser.shortTime}`;
   

      const NextBtn = document.createElement('button');
      NextBtn.classList.add("next-btn");
      NextBtn.innerText = "Book" + " " + `${selectedUser.name}`;
      NextBtn.addEventListener("click", () => {
        openStep3(selectedUser);
  });

  PriceDiv.appendChild(PriceHead);
  PriceDiv.appendChild(Price);

  LocationDiv.appendChild(LocationHead);
  LocationDiv.appendChild(Location);

  AgeDiv.appendChild(AgeHead);
  AgeDiv.appendChild(Age);

  OtherSection.appendChild(AgeDiv);
  OtherSection.appendChild(LocationDiv);
  OtherSection.appendChild(PriceDiv);

  BioSection.appendChild(BioHead);
  BioSection.appendChild(Bio);

  AboutSection.appendChild(BioSection);
  AboutSection.appendChild(OtherSection);

  Album2.appendChild(Pic6);
  Album2.appendChild(Pic7);
  Album2.appendChild(Pic8);
  Album2.appendChild(Pic9);

  Album1.appendChild(Pic2);
  Album1.appendChild(Pic3);
  Album1.appendChild(Pic4);
  Album1.appendChild(Pic5);

  Step2Body.appendChild(Step2ProPic);
  Step2Body.appendChild(Album1);
  Step2Body.appendChild(Album2);

  Step2Status.appendChild(Step2Dot);
  Step2Status.appendChild(Step2Text);

  Step2Info.appendChild(Step2Status);
  Step2Info.appendChild(Step2Location);

  Step2Content.appendChild(Step2Info);
  Step2Header.appendChild(Step2Content);

  StepTwo.appendChild(Step2Header);
  StepTwo.appendChild(Step2Body);
  StepTwo.appendChild(AboutSection);

  step2Container.appendChild(StepTwo);
  step2Container.appendChild(NextBtn);
  
  SlideInStep2();
};


// PAYMENT PAGE -----------------------------------------------------------
const openStep3 = (selectedUser) => {

  const StepThree = document.createElement('div');
  StepThree.classList.add('step-three');

  const Step3Header = document.createElement('div');
  Step3Header.classList.add('step-3-header');

  const Step3Name = document.createElement('p')
  Step3Name.classList.add('step-3-name');
  Step3Name.textContent = "Book " + `${selectedUser.name}`;

  const Step3Des = document.createElement('p');
  Step3Des.classList.add('step-3-des');
  Step3Des.textContent = "Order Summary";

  const Step3Body = document.createElement('div');
  Step3Body.classList.add('step-3-body');

  const Step3Type = document.createElement('div');
  Step3Type.classList.add('step-3-tpl');
   
  const TypeLeft = document.createElement('div');
  TypeLeft.classList.add('type-left');
  TypeLeft.textContent = "Type";  

  const TypeRight = document.createElement('div');
  TypeRight.classList.add('type-right');

    const Select = document.createElement('select');
    Select.classList.add('select');

    const OptionOne = document.createElement('option');
    OptionOne.textContent = "Overnight";

    const OptionTwo = document.createElement('option');
    OptionTwo.textContent = "Short time";

    // const ArrowDown = document.createElement('i');
    // ArrowDown.classList.add('fa', 'fa-caret-down');

  const Step3Price = document.createElement('div');
  Step3Price.classList.add('step-3-tpl');

    const PriceLeft = document.createElement('div');
    PriceLeft.classList.add('price-left');
    PriceLeft.textContent = "Price";  

    const PriceRight = document.createElement('div');
    PriceRight.classList.add('price-right');
    PriceRight.textContent = "N" + " " + `${selectedUser.overNight}`

  const Step3Location = document.createElement('div');
  Step3Location.classList.add('step-3-tpl');

    const LocationLeft = document.createElement('div');
    LocationLeft.classList.add('location-left');
    LocationLeft.textContent = "Location";  

    const LocationRight = document.createElement('div');
    LocationRight.classList.add('location-right');
    LocationRight.textContent = `${selectedUser.state}`

  const Step3BottomDes = document.createElement('p');
  Step3BottomDes.classList.add('step-3-des', "bottom-des");
  Step3BottomDes.textContent = "Payment Options";

  const PayBtn = document.createElement('button');
  PayBtn.classList.add("pay-btn");
  PayBtn.innerText = "Pay with PayStack";


  Select.appendChild(OptionOne);
  Select.appendChild(OptionTwo);

  TypeRight.appendChild(Select);
  // TypeRight.appendChild(ArrowDown);

  Step3Type.appendChild(TypeLeft);
  Step3Type.appendChild(TypeRight);

  Step3Price.appendChild(PriceLeft);
  Step3Price.appendChild(PriceRight);

  Step3Location.appendChild(LocationLeft);
  Step3Location.appendChild(LocationRight);

  Step3Body.appendChild(Step3Type);
  Step3Body.appendChild(Step3Price);
  Step3Body.appendChild(Step3Location);

  Step3Header.appendChild(Step3Name);
  Step3Header.appendChild(Step3Des);

  StepThree.appendChild(Step3Header);
  StepThree.appendChild(Step3Body)

  step3Container.appendChild(StepThree);
  step3Container.appendChild(Step3BottomDes);
  step3Container.appendChild(PayBtn);

  


  Select.addEventListener('change', () => {
    if (Select.value === 'Overnight') {
      PriceRight.textContent = "N" + " " + selectedUser.overNight;
    } else if (Select.value === 'Short time') {
      PriceRight.textContent = "N" + " " + selectedUser.shortTime;
    } else {
      PriceRight.textContent = "N" + " " + selectedUser.overNight;
    }
  });

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
};