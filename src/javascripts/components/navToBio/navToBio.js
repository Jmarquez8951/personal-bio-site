import utils from '../../helpers/utils';

const navToBio = () => {
  let domString = '';
  domString += '<div class="paragraph paraOne">';
  domString += '<header>';
  domString += '<h2>My Background</h2>';
  domString += '</header>';
  domString += '<div class="profile-container">';
  domString += '<img class="profile" src="./img/profile.jpg" alt="Photo of Jose Marquez">';
  domString += '</div>';
  domString += '<p>I am an eighteen year old who really enjoys coding. I came from Mexico at a very young age and lived almost my entire life in Murfreesboro, TN.';
  domString += ' I graduated with Honors from Riverdale High School with almost a 3.9 GPA. I had thousands of dollars worth of scholarships, but not enough to pay for college.</p>';
  domString += '<p>I started coding when I was in High School on a whim. I say that because I took the class not knowing what to expect and I ended up loving it.';
  domString += ' My first year I dabbled in a little bit of everything from HTML to Python to even a little bit of C#.';
  domString += 'I did a little bit of C# because I wanted to go into game development, but ended up not doing so.';
  domString += ' My Sophomore year in High school I was being taught visual studio code from a book, so I kind of learned from there that I will be learning and teaching myself to code.';
  domString += ' My Junior year in High school I was the last year I could do the programming course at my school because there weren\'t enough people to game a fourth year class.';
  domString += 'Still, I continued to code throughout the year with many different types of languages.</p>';
  domString += '</div>';
  domString += '<div class="paragraph paraTwo">';
  domString += '<header>';
  domString += '<h2>Why do I want to go into development?</h2>';
  domString += '</header>';
  domString += '<p>I want to go into development because I have always liked a challenge and with development you will face new challenges every single day. ';
  domString += 'I also like development because I\'ve always wanted to make a difference in this world and I believe there\'s a better chance at doing so';
  domString += ' as a web developer than a game developer.</p>';
  domString += '</div>';
  domString += '<div class="paragraph paraThree">';
  domString += '<header>';
  domString += '<h2>What do you love about development?</h2>';
  domString += '</header>';
  domString += '<p>I have always been drawn towards technology ever since a young age. I used to play with legos so that\'s why I think I like creating';
  domString += ' things from websites to drawings to even little games that I have made in the past during High school. I love everything about development.';
  domString += ' I enjoyed the little challenges I faced while programming with visual studio code in High school.';
  domString += ' It was fun to me to think of a solution and see it actually work. There were many many times when my ideas didn\'t work, but when it finally does there is no better feeling.</p>';
  domString += '</div>';
  utils.printToDom('bioPage', domString);
  utils.printToDom('technologiesPage', '');
  utils.printToDom('projectsPage', '');
};

export default { navToBio };