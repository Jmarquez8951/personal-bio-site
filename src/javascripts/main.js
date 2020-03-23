import bioPage from './components/navToBio/navToBio';
import techPage from './components/navToTechPage/navToTechPage';
import projectsPage from './components/navToProjects/navToProjects';

import 'bootstrap';
import '../styles/main.scss';

const events = () => {
  $('#navToBio').on('click', bioPage.navToBio);
  $('#navToTechnologies').on('click', techPage.navToTechnologies);
  $('#navToProjects').on('click', projectsPage.navToProjects);
};

const init = () => {
  events();
  bioPage.navToBio();
};

init();
