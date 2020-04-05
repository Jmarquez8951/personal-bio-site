import projectsData from '../../helpers/data/projectsData';
import utils from '../../helpers/utils';
import './projectCards.scss';

const createProjectCards = () => {
  projectsData.getProjects()
    .then((response) => {
      const projects = response;
      let domString = '';
      projects.forEach((project) => {
        if (project.available === true) {
          domString += '<div class="card rounded col-md-6 col-lg-4 col-xl-3  m-3 pb-3">';
          domString += `<img src="${project.screenshot}" class="card-img-top mt-3 rounded border border-dark bg-dark" alt="...">`;
          domString += '<div class="card-body rounded mt-2">';
          domString += `<h5 class="card-title text-center">${project.title}</h5>`;
          domString += `<p class="card-text">${project.description}</p>`;
          domString += '<h5 class="card-title text-center">Technologies Used</h5>';
          domString += `<p class="card-text">${project.technologiesUsed}</p>`;
          domString += '</div>';
          domString += '<div class="row m-0 pt-2">';
          domString += `<a href="${project.url}" class="btn btn-primary col ml-0 mr-1 align-bottom" target="_blank">Go to project</a>`;
          domString += `<a href="${project.githubUrl}" class="btn btn-primary col mr-0 ml-1 align-bottom" target="_blank">Go to Github</a>`;
          domString += '</div>';
          domString += '</div>';
        }
        utils.printToDom('projectsPage', domString);
      });
    })
    .catch((err) => console.error(err));
};

export default { createProjectCards };
