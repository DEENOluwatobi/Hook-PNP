// Sample array of data
const database = [
  { picture: "image1.jpg", name: "John Doe", online: true, country: "USA" },
  { picture: "image2.jpg", name: "Jane Smith", online: false, country: "Canada" },
  // Add more data objects as needed
];

// const searchInput = document.getElementById("searchInput");
// const resultsContainer = document.getElementById("resultsContainer");

// const displayResults = (results) => {
//   // Clear previous results
//   resultsContainer.innerHTML = "";

//   // Display new results
//   results.forEach((result) => {
//     const resultElement = document.createElement("div");
//     resultElement.innerHTML = `
//       <img src="${result.picture}" alt="${result.name}">
//       <h3>${result.name}</h3>
//       <p>${result.online ? "Online" : "Offline"}</p>
//       <p>${result.country}</p>
//     `;
//     resultsContainer.appendChild(resultElement);
//   });
// };

// const handleSearch = (event) => {
//   event.preventDefault(); // Prevent form submission

//   const query = searchInput.value.trim().toLowerCase();
//   const results = database.filter((item) =>
//     item.country.toLowerCase().includes(query)
//   );

//   displayResults(results);
//   alert("Yo");
// };

// document.querySelector(".search-form").addEventListener("submit", handleSearch);


const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");

const displayResults = (results) => {
  resultsContainer.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found</p>';
    return;
  }

  results.forEach((result) => {
    const resultElement = document.createElement("div");
    resultElement.innerHTML = `
      <img src="${result.picture}" alt="${result.name}">
      <h3>${result.name}</h3>
      <p>${result.online ? "Online" : "Offline"}</p>
      <p>${result.country}</p>
    `;
    resultsContainer.appendChild(resultElement);
  });
};

const handleSearch = (event) => {
  event.preventDefault(); // Prevent form submission

  const query = searchInput.value.trim().toLowerCase();

  // Make a request to your backend API to retrieve the search results
  fetch(`/api/search?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      displayResults(data.results);
    })
    .catch((error) => {
      console.log(error);
      displayResults([]);
    });
};

document.querySelector(".search-form").addEventListener("submit", handleSearch);
