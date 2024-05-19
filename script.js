let currentQuery = "World News";
let currentPage = 1;
 d=new Date();
const fetchNews = async (page, q) => {
  console.log(`Fetching News for ${q} page number ${page}`);
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    q +
    "&from=2024-04-27&" +
    "pageSize=9&" +
    "page=" +
    page +
    "&language=en&" +
    "sortBy=popularity&" +
    "apiKey=38919911bddd4ce79872a7ce0700280f";
  var req = new Request(url);
  let a = await fetch(req);
  let response = await a.json();
  let str = " ";
  for (const item of response.articles) {
    if (item.title != "[Removed]") {
      // console.log(response);
      str =
        str +
        `<div class="card my-2  ms-4" style="width: 25rem ;height: 35 rem">
         <img height="200" src="${
           item.urlToImage
         }" class="card-img-top" alt="Image Couldn't be Fetched" />
         <div class="card-body">
           <h5 class="card-title">${item.title.slice(0, 50)}...</h5>
           <p class="card-text">
            ${item.description.slice(0, 150)}...
           </p>
           <a href="${
             item.url
           }" target="_blank" class="btn btn-primary">Read More</a>
         </div>
       </div>`;
      document.querySelector(".content").innerHTML = str;
      document.querySelector("#resultCount").innerHTML = response.totalResults;
    }
  }
};
const submitForm1 = (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the email input value and the checkbox status
  const email1 = document.getElementById('exampleInputEmail1').value.trim();
  const agreeCheckbox1 = document.getElementById('exampleCheck1').checked;
  
  // Check if the email is valid and the checkbox is checked
  if (validateEmail(email1) && agreeCheckbox1) {
    // Perform form submission
    alert('Form submitted successfully!'); // Replace this with your actual form submission logic
    window.location.href = "newsletter.html";
  } else {
    // Display an error message or handle invalid input
    alert('Please enter a valid email address and agree to subscribe.');
  }
};
const submitForm2 = (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the email input value and the checkbox status
  const email2 = document.getElementById('exampleInputEmail2').value.trim();
  const agreeCheckbox2 = document.getElementById('exampleCheck2').checked;
  
  // Check if the email is valid and the checkbox is checked
  if (validateEmail(email2) && agreeCheckbox2) {
    // Perform form submission
    alert('Form submitted successfully!'); // Replace this with your actual form submission logic
    window.location.href = "newsletter.html";
  } else {
    // Display an error message or handle invalid input
    alert('Please enter a valid email address and agree to subscribe.');
  }
};

// Function to validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Add event listener to the form submission
document.querySelector('.form').addEventListener('submit', submitForm1);
document.querySelector('.form2').addEventListener('submit', submitForm2);
const scrollToNewsTop = () => {
  const newsSection = document.querySelector('.content');
  newsSection.scrollIntoView({ behavior: 'smooth' });
};

fetchNews(currentPage, currentQuery);
light.addEventListener("click", (e) => {
  document.body.setAttribute("data-bs-theme", "dark");
  document.body.setAttribute("class", "bg-black");
  document.querySelector("#light").style.display = "none";
  document.querySelector("#dark").style.display = "block";
  document.querySelector(".last").style.borderColor="white";
});
dark.addEventListener("click", (e) => {
  document.body.setAttribute("data-bs-theme", "light");
  document.body.setAttribute("class", "bg-white");
  document.querySelector("#dark").style.display = "none";
  document.querySelector("#light").style.display = "block";
  document.querySelector(".last").style.borderColor="black";
});
prev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    fetchNews(currentPage, currentQuery);
    scrollToNewsTop(); 
  }
});
next.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage++;
  fetchNews(currentPage, currentQuery);
  scrollToNewsTop(); 
});
search.addEventListener("click", (e) => {
  e.preventDefault();
  let query = searchinput.value;
  currentQuery = query;
  currentPage = 1;
  console.log(searchinput.value);
  fetchNews(currentPage, currentQuery);
});

home.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "everything";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
headlines.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "headlines";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
india.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "indian news";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
odisha.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "odisha news";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
politics.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "politics";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
tech.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "technology";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
health.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "Health";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
entertainment.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "entertainment";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
sports.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "sports";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
education.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "education";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
opinion.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "opinion";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
breakingnews.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuery = "Breaking News";
  currentPage = 1;
  fetchNews(currentPage, currentQuery);
});
