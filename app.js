fetch('https://raw.githubusercontent.com/maimuna-omar/personal-portfolio/main/db.json')
  .then(response => response.json())
  .then(data => {
    // do something with the data
  });
  const portfolioSection = document.getElementById('portfolio');

  data.photos.forEach(photo => {
    const photoElement = document.createElement('div');
    photoElement.classList.add('photo');
    
    const imageElement = document.createElement('img');
    imageElement.src = photo.image_url;
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = photo.title;
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = photo.description;
    
    photoElement.appendChild(imageElement);
    photoElement.appendChild(titleElement);
    photoElement.appendChild(descriptionElement);
    
    portfolioSection.appendChild(photoElement);
  });
  
const myWorkDiv = document.getElementById("my-work");
for (let project of data) {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.name;
    myWorkDiv.appendChild(projectDiv);
  }
  