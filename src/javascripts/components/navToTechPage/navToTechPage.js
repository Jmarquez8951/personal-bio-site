import utils from '../../helpers/utils';
import './navToTechPage.scss';

const navToTechnologies = () => {
  let domString = '';
  domString += '<h2>Tools and languages I have started to learn</h2>';
  domString += '<ul>';
  domString += '<li><i class="fab fa-git-alt"></i>Git Bash</li>';
  domString += '<li><i class="fab fa-github"></i>GitHub</li>';
  domString += '<li><i class="fab fa-html5"></i>HTML</li>';
  domString += '<li><i class="fab fa-css3-alt"></i>CSS</li>';
  domString += '<li><i class="fab fa-sass"></i>Sass</li>';
  domString += '<li><i class="fab fa-js-square"></i>JavaScript</li>';
  domString += '<li><img class="icon" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png">JQuery</li>';
  domString += '<li><i class="fab fa-python"></i>Python</li>';
  domString += '</ul>';
  utils.printToDom('technologiesPage', domString);
  utils.printToDom('bioPage', '');
  utils.printToDom('projectsPage', '');
};

export default { navToTechnologies };
