import projectsData from '../../helpers/data/projectsData';
import utils from '../../helpers/utils';

const createProjectCards = () => {
  let domString = '';
  const projects = projectsData.getProjects();
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="project-card col-3">';
      domString += '<header>';
      domString += `<h3>${project.title}</h3>`;
      domString += '</header>';
      domString += `<img src="${project.screenshot}" alt="">`;
      domString += '<h4>Description:</h4>';
      domString += `<p class="shadow">${project.description}</p>`;
      domString += '<h4>Technologies:</h4>';
      domString += `<p class="shadow">${project.technologiesUsed}</p>`;
      domString += `<p><a href="${project.url}" target="_blank">Link To Project</a></p>`;
      domString += `<p><a href="${project.githubUrl}" target="_blank">Link To Project in github</a></p>`;
      domString += '</div>';
    }
  });
  utils.printToDom('projectsPage', domString);
};

export default { createProjectCards };
