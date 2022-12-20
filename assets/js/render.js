const skills = document.querySelector("#render-skills");
const social = document.querySelectorAll("#social");
const topic = document.querySelector("#topic");
const portfolio = document.querySelector("#posts");

// Skills

const allSkills = [
  { skill_name: "JavaScript", percentage: 90 },
  { skill_name: "HTML", percentage: 100 },
  { skill_name: "CSS", percentage: 100 },
  { skill_name: "Bootstrap", percentage: 100 },
  { skill_name: "Tailwind css", percentage: 80 },
  { skill_name: "Material UI", percentage: 70 },
  { skill_name: "React.js", percentage: 80 },
  { skill_name: "Redux", percentage: 80 },
  { skill_name: "Next.js", percentage: 70 },
  { skill_name: "Typescript", percentage: 70 },
  { skill_name: "Ruby", percentage: 80 },
  { skill_name: "Rails", percentage: 80 },
  { skill_name: "Stimulus", percentage: 55 },
  { skill_name: "PHP", percentage: 70 },
  { skill_name: "SQL", percentage: 95 },
];

allSkills.map((skill) => {
  html = `
    <div class="col-lg-2 col-md-3 col-6">
            <div class="progress" data-percentage="${skill.percentage}">
              <span class="progress-left">
                <span class="progress-bar"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar"></span
              ></span>
              <div class="progress-value">
                <h3>${skill.skill_name}</h3>
              </div>
            </div>
          </div>
    `;
  skills.innerHTML += html;
});

// Social link

const social_link = [
  {
    link: "https://github.com/Chrissiku/",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.linkedin.com/in/christian-siku/",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://twitter.com/christian_siku/",
    icon: "fa-brands fa-twitter",
  },
  {
    link: "https://angel.co/u/chris-siku",
    icon: "fa-brands fa-angellist",
  },
];

social_link.map((item) => {
  html = `
    <li>
        <a href="${item.link}" target="_blank"><i class="${item.icon}"></i></a>
    </li>
    `;

  for (const element of social) {
    element.innerHTML += html;
  }
});

// Topic

const allTopics = [
  { title: "All works", class: "all" },
  { title: "Web design", class: ".web" },
  { title: "Mobile", class: ".mobile" },
];

allTopics.map((item) => {
  html = `
    <button type="button" data-filter="${item.class}">${item.title}</button>
    `;
  topic.innerHTML += html;
});

// portfolio

const allPosts = [
  {
    topic: "web",
    link: "www.google.com",
    title: "Web UI-UX Design",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    stacks: [
      { link: "www.goole.com", name: "Rails" },
      { link: "www.goole.com", name: "Ruby" },
      { link: "www.goole.com", name: "JavaScript" },
    ],
    live: [false, "www.google.com"],
    source: [true, "www.goole.com"],
    image: "./assets/img/app1.png",
  },
  {
    topic: "mobile",
    link: "www.google.com",
    title: "Web UI-UX Design",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    stacks: [
      { link: "www.goole.com", name: "HTML" },
      { link: "www.goole.com", name: "CSS" },
      { link: "www.goole.com", name: "JavaScript" },
    ],
    live: "www.google.com",
    source: "www.goole.com",
    image: "./assets/img/app1.png",
  },
];

allPosts.map((element) => {
  html =
    `
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mix ${element.topic}">
            <div class="item-card">
              <h4><a class="title-link" href="${element.link}">${element.title}</a></h4>
              <p>${element.content}</p>
              <ul class="tag-link">
                  ` +
    element.stacks
      .map((stack) => {
        return `<li><a href="${stack.link}">${stack.name}</a></li>`;
      })
      .join("") +
    `
              </ul>
              <div class="item-image">              
                
                <a target="_blank" class="link-image" href="${element.live}">
                    <i class="fa fa-eye"></i>
                </a>

                <a target="_blank" class="link-view" href="${element.source}">
                    <i class="fa fa-globe"></i>
                </a>
                <img src="${element.image}" alt="image ${element.title}" />
              </div>
            </div>
          </div>
    `;

  portfolio.innerHTML += html;
});
