const projects = [
    {
        title: "Product Cards", 
        screenshot: "https://freefrontend.com/assets/img/css-cards/product-card.png", 
        description: "This was my first homework assignment. It was to practice with what little we know and improve upon it. It was made with a group where we talked about how to make this.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Jmarquez8951/product-cards",
        githubUrl: "https://github.com/Jmarquez8951/product-cards"
    },
    {
        title: "Zen Garden", 
        screenshot: "http://www.mezzoblue.com/zengarden/screenshots/217.jpg", 
        description: "This is a website where we were told to practice flexbox to make the website replica. I thought about all the objects on the website and thought of ways to make it using flexbox. Didn't really work out, but I used flexbox in some of the website.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Jmarquez8951/Zen-Garden",
        githubUrl: "https://github.com/Jmarquez8951/Zen-Garden"

    },
    {
        title: "Pet Adoption", 
        screenshot: "http://jacksoncountyor.org/portals/11/HHS/Animal%20Services/Buttons/adopt-us.png?ver=2019-04-25-115433-810", 
        description: "This is a Pet Adoption website. We were told to use Javascript to make the html and not hard code it into the html. We used JavaScript DOM Loops.",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Jmarquez8951/pet-adoption",
        githubUrl: "https://github.com/Jmarquez8951/pet-adoption"

    }
];

const printToDom = (divId, textToPrint) => {
    const slectedDiv = document.getElementById(divId);
    slectedDiv.innerHTML = textToPrint;

};

const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
         if (projects[i].available === true) {
           domString += '<div class="project-card">';
           domString += '<header>';
           domString += `<h3>${projects[i].title}</h3>`;
           domString += '</header>';
           domString += `<img src="${projects[i].screenshot}" alt="">`;
           domString += '<h4>Description:</h4>';
           domString += `<p class="shadow">${projects[i].description}</p>`;
           domString += '<h4>Technologies:</h4>'; 
           domString += `<p class="shadow">${projects[i].technologiesUsed}</p>`;
           domString += `<p><a href="${projects[i].url}" target="_blank">Link To Project</a></p>`;
           domString += `<p><a href="${projects[i].githubUrl}" target="_blank">Link To Project in github</a></p>`;
           domString += '</div>';
        }
    }
    printToDom('projectsPage', domString);
}

createProjectCards();
