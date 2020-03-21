import utils from '../../helpers/utils';
import projectCards from '../projectCards/projectCards';

const navToProjects = () => {
  projectCards.createProjectCards();
  utils.printToDom('technologiesPage', '');
  utils.printToDom('bioPage', '');
};

export default { navToProjects };
