import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.FirebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, rejecct) => {
  axios.get(`${baseUrl}/Projects.json`)
    .then((response) => {
      const theProjects = response.data;
      const projects = [];
      Object.keys(theProjects).forEach((projectId) => {
        theProjects[projectId].id = projectId;
        projects.push(theProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => rejecct(err));
});

export default { getProjects };
