import projectsData from '../../helpers/data/projectsData';
import utils from '../../helpers/utils';

const createProjectCards = () => {
  let domString = '';
  const projects = projectsData.getProjects();
  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class="card col-3 m-2 pb-3" style="width: 18rem;">';
      domString += `<img src="${project.screenshot}" class="card-img-top mt-3" alt="...">`;
      domString += '<div class="card-body text-white bg-dark rounded mt-2">';
      domString += `<h5 class="card-title">${project.title}</h5>`;
      domString += `<p class="card-text">${project.description}</p>`;
      domString += '<h5 class="card-title">Technologies Used</h5>';
      domString += `<p class="card-text">${project.technologiesUsed}</p>`;
      domString += `<a href="${project.url}" class="btn btn-primary col mb-1 align-bottom">Go to project</a>`;
      domString += `<a href="${project.githubUrl}" class="btn btn-primary col align-bottom">Go to Github</a>`;
      domString += '</div>';
      domString += '</div>';
    }
  });
  utils.printToDom('projectsPage', domString);
};

export default { createProjectCards };
