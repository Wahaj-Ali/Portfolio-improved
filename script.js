const cards = [
  {
    title: 'To Do List',
    description: 'To Do List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    img: './attributes/todolist.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    btnText: 'See Project',
    id: 1,
    uniqueId: 'prcjt1',
    live: 'https://wahaj-ali.github.io/to-do-list/dist/',
    source: 'https://github.com/Wahaj-Ali/to-do-list',
  },
  {
    title: 'Awesome Books',
    description: 'Awesome Books ES6 is a a website to add your favourite awesome books. It stores the books and displays them in a list.',
    img: './attributes/awesoembooks.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    btnText: 'See Project',
    id: 2,
    uniqueId: 'prcjt2',
    live: 'https://wahaj-ali.github.io/AwesomebooksES6/',
    source: 'https://github.com/Wahaj-Ali/AwesomebooksES6',
  },
  {
    title: 'PAK ORTHOCON',
    description: 'It is a website for an event happening in my locality. It consists of two working pages i.e., Home page and About Page.',
    img: './attributes/capsotne1.jpg',
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://wahaj-ali.github.io/Capstone-1/index.html',
    source: 'https://github.com/Wahaj-Ali/Capstone-1',
    btnText: 'See Project',
    id: 3,
    uniqueId: 'prcjt3',
  },
  {
    title: 'Profesional Art',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: './attributes/workimage.png',
    techs: ['HTML', 'Bootstrap', 'Ruby'],
    btnText: 'See Project',
    id: 4,
    uniqueId: 'prcjt4',
  },
  {
    title: 'Multi-Post-Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: './attributes/prjct2.png',
    techs: ['HTML', 'Bootstrap', 'Ruby'],
    btnText: 'See Project',
    id: 5,
    uniqueId: 'prcjt5',
  },
  {
    title: 'Multi-Post-Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    img: './attributes/prjct3.png',
    techs: ['HTML', 'Bootstrap', 'Ruby'],
    btnText: 'See Project',
    id: 6,
    uniqueId: 'prcjt6',
  },
];

function displayCards() {
  let result = '';

  cards.filter((card) => card.id > 0).forEach((card) => {
    let techList = ''; // list of tags as li element
    const techTags = card.techs;
    //   populate tag list iterating over tags array
    for (let x = 0; x < techTags.length; x += 1) {
      techList += `<p>${techTags[x]}</p>`;
    }
    result += `
  
      <div class="project" id="${card.uniqueId}">
          <h3>${card.title}</h3>
          <p id="project-descp">${card.description}</p>
          <div class="tags">
          ${techList}
          </div>
          <div class="btn-container">
          <button class="btn see">See Project</button>
          </div>
          </div>
          `;
  });
  document.querySelector('#projects').innerHTML = result;
}
displayCards();

const skillCards = [{
  id: 1,
  title: 'Language',
  skills: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
},
{
  id: 2,
  title: 'Frameworks',
  skills: ['React.js', 'Ruby on Rails', 'RSpec', 'Capybara'],
},
{
  id: 3,
  title: 'Skills',
  skills: ['Database Management', 'Version Control', 'CLI', 'Design', 'Web Development'],
},
];

function displaySkills() {
  let result = '';

  skillCards.filter((card) => card.id > 0).forEach((card) => {
    let skillList = ''; // list of tags as li element
    const skillTags = card.skills;
    //   populate tag list iterating over tags array
    for (let x = 0; x < skillTags.length; x += 1) {
      skillList += `<p>${skillTags[x]}</p>`;
    }
    result += `
      <div class="container skill">
      <h4><img src="assests/diamond.png" />${card.title}</h4>
      <div class="single-skill">
      ${skillList}
      </div>
    </div>`;
  });
  document.querySelector('.skills').innerHTML = result;
}
displaySkills();