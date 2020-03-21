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

const navToBio = () => {
    let domString = '';
    domString+= '<div class="paragraph paraOne">'
    domString+=  '<header>'
    domString+=  '<h2>My Background</h2>'
    domString+=  '</header>'
    domString+= '<div class="profile-container">'
    domString+= '<img class="profile" src="./img/profile.jpg" alt="Photo of Jose Marquez">'
    domString+= '</div>'
    domString+=    '<p>I am an eighteen year old who really enjoys coding. I came from Mexico at a very young age and lived almost my entire life in Murfreesboro, TN. I graduated with Honors from Riverdale High School with almost a 3.9 GPA. I had thousands of dollars worth of scholarships, but not enough to pay for college.</p>'
    domString+=    '<p>I started coding when I was in High School on a whim. I say that because I took the class not knowing what to expect and I ended up loving it. My first year I dabbled in a little bit of everything from HTML to Python to even a little bit of C#. I did a little bit of C# because I wanted to go into game development, but ended up not doing so. My Sophomore year in High school I was being taught visual studio code from a book, so I kind of learned from there that I will be learning and teaching myself to code. My Junior year in High school I was the last year I could do the programming course at my school because there weren\'t enough people to game a fourth year class. Still, I continued to code throughout the year with many different types of languages.</p>'
    domString+='</div>'
    domString+='<div class="paragraph paraTwo">'
    domString+=  '<header>'
    domString+=  '<h2>Why do I want to go into development?</h2>'
    domString+=  '</header>'
    domString+=  '<p>I want to go into development because I have always liked a challenge and with development you will face new challenges every single day. I also like development because I have always wanted to make a difference in this world and I believe there\'s a better chance at doing so being a web developer than being a game developer.</p>'
    domString+='</div>'
    domString+='<div class="paragraph paraThree">'
    domString+=  '<header>'
    domString+=  '<h2>What do you love about development?</h2>'
    domString+=  '</header>'
    domString+=  '<p>I have always been drawn towards technology ever since a young age. I used to play with legos so that\'s why I think I like creating things from websites to drawings to even little games that I have made in the past during High school. I love everything about development. I enjoyed the little challenges I faced while programming with visual studio code in High school. It was fun to me to think of a solution and see it actually work. There were many many times when my ideas didn\'t work, but when it finally does there is no better feeling.</p>'
    domString+='</div>'
    printToDom('bioPage', domString);
    printToDom('technologiesPage', '');
    printToDom('projectsPage', '');
};

const navToTechnologies = () => {
    let domString = '';
    domString+= '<h2>Tools and languages I have started to learn</h2>';
    domString+= '<ul>';
    domString+= '<li><i class="fab fa-git-alt"></i>Git Bash</li>';
    domString+= '<li><i class="fab fa-github"></i>GitHub</li>';
    domString+= '<li><i class="fab fa-html5"></i>HTML</li>';
    domString+= '<li><i class="fab fa-css3-alt"></i>CSS</li>';
    domString+= '<li><i class="fab fa-sass"></i>Sass</li>';
    domString+= '<li><i class="fab fa-js-square"></i>JavaScript</li>';
    domString+= '<li><img class="icon" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png">JQuery</li>';
    domString+= '<li><i class="fab fa-python"></i>Python</li>';
    domString+= '</ul>';
    printToDom('technologiesPage', domString);
    printToDom('bioPage', '');
    printToDom('projectsPage', '');
};

const navToProjects = () => {
    createProjectCards();
    printToDom('technologiesPage', '');
    printToDom('bioPage', '');
};

const events = () => {
    $('#navToBio').on('click', navToBio);
    $('#navToTechnologies').on('click', navToTechnologies);
    $('#navToProjects').on('click', navToProjects);
};

const init = () => {
    events();
};

init();
