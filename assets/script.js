var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#city');
var repoContainerEl = document.querySelector('#forcast-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var cityname = nameInputEl.value.trim();
  
    if (cityname) {
      getUserRepos(cityname);
  
      repoContainerEl.textContent = '';
      nameInputEl.value = '';
    } else {
      alert('Please enter a name of a city');
    }
  };
  
  var buttonClickHandler = function (event) {
    
    var language = event.target.getAttribute('data-language');
  
    
    if (language) {
      getFeaturedRepos(language);
  
      repoContainerEl.textContent = '';
    }
  };

  var getCityNames = function (user) {
    var apiUrl = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}' + user + '/repos';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayCity(data, city);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('No match found');
      });
  };