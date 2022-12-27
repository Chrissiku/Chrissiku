// portfolio
const portfolio = document.querySelector("#posts");

const allPosts = [
  // API AUthetication
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/rails-api-authentication-crud",
    title: "Hotel Booking",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      { link: "https://guides.rubyonrails.org/", name: "Rails" },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://github.com/Chrissiku/rails-api-authentication-crud"],
    source: [
      true,
      "https://github.com/Chrissiku/rails-api-authentication-crud",
    ],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // Hotel Booking, Backend
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/hotel-booking-backend",
    title: "Hotel Booking",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      { link: "https://guides.rubyonrails.org/", name: "Rails" },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://github.com/Chrissiku/hotel-booking-backend"],
    source: [true, "https://github.com/Chrissiku/hotel-booking-backend"],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // Folio
  {
    topic: "responsive",
    link: "https://chris-siku.vercel.app/",
    title: "Folio website",
    content: ``,
    stacks: [
      {
        link: "https://reactjs.org/docs/getting-started.html",
        name: "Reactjs",
      },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
    ],
    live: [true, "https://chris-siku.vercel.app/"],
    source: [true, "https://github.com/Chrissiku/Chris-Siku-v1"],
    image:
      "https://user-images.githubusercontent.com/101924220/209703582-eeb2e313-50a3-49a8-b133-8c5a6f5d49ea.png",
  },
  // House rental
  {
    topic: "responsive",
    link: "https://chrissiku.github.io/real-estate/index.html",
    title: "Real Estate",
    content: ``,
    stacks: [
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/real-estate/index.html"],
    source: [true, "https://github.com/Chrissiku/real-estate"],
    image:
      "https://user-images.githubusercontent.com/101924220/209696457-a0769944-e81f-49d9-a8a3-c3e5edcc2923.png",
  },
  // Progressive web app
  {
    topic: "feature",
    link: "https://pw-food-a.netlify.app/?",
    title: "Progressive web App",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
      { link: "https://web.dev/progressive-web-apps/", name: "PWA" },
    ],
    live: [true, "https://pw-food-a.netlify.app/?"],
    source: [true, "https://github.com/Chrissiku/progressive-web-app"],
    image:
      "https://user-images.githubusercontent.com/101924220/209708303-486fef6d-7ddf-45b3-9518-87d8159406f5.png",
  },
  // Rails blog
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/Rails-Blog",
    title: "Rails Blog",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      { link: "https://guides.rubyonrails.org/", name: "Rails" },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
    ],
    live: [true, "https://github.com/Chrissiku/Rails-Blog"],
    source: [true, "https://github.com/Chrissiku/Rails-Blog"],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // Youtube clone
  {
    topic: "web",
    link: "https://chrissiku.github.io/youtube_player_app/",
    title: "Youtube clone",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/youtube_player_app/"],
    source: [true, "https://github.com/Chrissiku/youtube_player_app"],
    image:
      "https://user-images.githubusercontent.com/101924220/209709562-40608166-33c0-435e-ad68-beba52c1164f.png",
  },
  // Math magician
  {
    topic: "feature",
    link: "https://chriscacl.netlify.app/",
    title: "Math magician",
    content: ``,
    stacks: [
      {
        link: "https://reactjs.org/docs/getting-started.html",
        name: "Reactjs",
      },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
    ],
    live: [true, "https://chriscacl.netlify.app/"],
    source: [true, "https://github.com/Chrissiku/Math-magicians"],
    image:
      "https://user-images.githubusercontent.com/101924220/209716069-062bb3a5-1ea6-4a8b-86a2-7892ac029808.png",
  },
  // Recipe App
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/Recipe-app",
    title: "Recipe App",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      { link: "https://guides.rubyonrails.org/", name: "Rails" },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://github.com/Chrissiku/Recipe-app"],
    source: [true, "https://github.com/Chrissiku/Recipe-app"],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // Portfolio website
  {
    topic: "web",
    link: "https://chris-siku.netlify.app/",
    title: "Portfolio website",
    content: ``,
    stacks: [
      {
        link: "https://reactjs.org/docs/getting-started.html",
        name: "Reactjs",
      },
      { link: "https://redux.js.org/", name: "Redux" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chris-siku.netlify.app/"],
    source: [true, "https://github.com/Chrissiku/my-portfolio"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657844-94b71a71-f467-45e5-87f0-1f2e65c9642f.png",
  },
  // Budget App
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/Budget-app",
    title: "Recipe App",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      { link: "https://guides.rubyonrails.org/", name: "Rails" },
      { link: "https://en.wikipedia.org/wiki/HTML", name: "HTML" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://github.com/Chrissiku/Budget-app"],
    source: [true, "https://github.com/Chrissiku/Budget-app"],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // Napses Clone
  {
    topic: "web",
    link: "https://chrissiku.github.io/napses_clone/",
    title: "Napses Desktop clone",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/napses_clone/"],
    source: [true, "https://github.com/Chrissiku/napses_clone"],
    image:
      "https://user-images.githubusercontent.com/101924220/209715163-7875f85e-9b5c-4475-b71c-da59195c0bb2.png",
  },
  // .Leader-board
  {
    topic: "feature",
    link: "https://chrissiku.github.io/Leaderboard/dist/",
    title: "Leader-board",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/Leaderboard/dist/"],
    source: [true, "https://github.com/Chrissiku/Leaderboard/"],
    image:
      "https://user-images.githubusercontent.com/101924220/209706512-3513086d-bee8-4da8-8cdc-f312fd497357.png",
  },
  // Rest API TDD
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/tdd-rest-api",
    title: "TDD Rest-API",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      { link: "https://guides.rubyonrails.org/", name: "Rails" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://github.com/Chrissiku/tdd-rest-api"],
    source: [true, "https://github.com/Chrissiku/tdd-rest-api"],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // Personal website
  {
    topic: "responsive",
    link: "https://github.com/Chrissiku/Chrissiku",
    title: "Personal Website",
    content: ``,
    stacks: [
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/Chrissiku/"],
    source: [true, "https://github.com/Chrissiku/Chrissiku"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657843-5270123e-d89b-4480-98d4-84d6a7a1a074.png",
  },
  // Portfolio mobile
  {
    topic: "responsive",
    link: "https://chrissiku.github.io/Portfolio-mobile/",
    title: "Mobile Portfolio",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/Portfolio-mobile/"],
    source: [true, "https://github.com/Chrissiku/Portfolio-mobile"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657847-0fece210-73f2-4e07-81ea-e5cbe391ccc9.png",
  },
  // House rental 2
  {
    topic: "responsive",
    link: "https://chrissiku.github.io/house_rental/",
    title: "House Renatl",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
    ],
    live: [true, "https://chrissiku.github.io/house_rental/"],
    source: [true, "https://github.com/Chrissiku/house_rental"],
    image:
      "https://user-images.githubusercontent.com/101924220/209699847-d943b478-51d5-4413-b613-90a424c159a1.png",
  },
  // Catalog of things
  {
    topic: "feature",
    link: "https://github.com/Chrissiku/Catalog-of-things",
    title: "TDD Rest-API",
    content: ``,
    stacks: [
      { link: "https://www.ruby-lang.org/es/", name: "Ruby" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://github.com/Chrissiku/Catalog-of-things"],
    source: [true, "https://github.com/Chrissiku/Catalog-of-things"],
    image:
      "https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png",
  },
  // SpaceX
  {
    topic: "feature",
    link: "https://space-x-traveler.netlify.app/",
    title: "SpaceX Traveler",
    content: ``,
    stacks: [
      {
        link: "https://reactjs.org/docs/getting-started.html",
        name: "Reactjs",
      },
      { link: "https://redux.js.org/", name: "Redux" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      {
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        name: "Bootstrap 5",
      },
    ],
    live: [true, "https://space-x-traveler.netlify.app/"],
    source: [true, "https://github.com/Chrissiku/Bookstore-CMS"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657850-efc6e2d6-249c-4e1e-84ad-d8adebabe9f2.png",
  },
  // .Todo list app
  {
    topic: "feature",
    link: "https://chrissiku.github.io/To-Do-List/dist",
    title: "Todo-list App",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/To-Do-List/dist"],
    source: [true, "https://github.com/Chrissiku/To-Do-List"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657853-1b59a194-c885-49ce-9729-5dcd47010347.png",
  },
  // web conferencing
  {
    topic: "web",
    link: "https://chrissiku.github.io/Conferencing-webiste/",
    title: "Web Conferencing",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://chrissiku.github.io/Conferencing-webiste/"],
    source: [true, "https://github.com/Chrissiku/capstone_project_one"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657842-eb0095ed-e8af-48f8-ac47-277991121ec7.png",
  },
  // Book store cms
  {
    topic: "feature",
    link: "https://storebookcms.netlify.app/",
    title: "BookStore CMS",
    content: ``,
    stacks: [
      {
        link: "https://reactjs.org/docs/getting-started.html",
        name: "Reactjs",
      },
      { link: "https://redux.js.org/", name: "Redux" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
    ],
    live: [true, "https://storebookcms.netlify.app/"],
    source: [true, "https://github.com/Chrissiku/Bookstore-CMS"],
    image:
      "https://user-images.githubusercontent.com/101924220/209657836-0965c8de-8869-4308-b779-405bfa55cdc1.png",
  },
  // Breakout Game
  {
    topic: "feature",
    link:
      "https://chrissiku.github.io/100-days-of-javascript/breakout_game/dist/",
    title: "Breakout Game",
    content: ``,
    stacks: [
      { link: "https://www.learn-html.org/", name: "HTML" },
      { link: "https://en.wikipedia.org/wiki/CSS", name: "CSS" },
      { link: "https://www.javascript.com/", name: "JavaScript" },
      { link: "https://webpack.js.org/", name: "Webpack" },
    ],
    live: [
      true,
      "https://chrissiku.github.io/100-days-of-javascript/breakout_game/dist/",
    ],
    source: [
      true,
      "https://github.com/Chrissiku/100-days-of-javascript/tree/main/breakout_game",
    ],
    image:
      "https://user-images.githubusercontent.com/101924220/209657840-44b0c28a-ddba-41d2-ace1-ac6b9be60c06.png",
  },
];

allPosts.map((element) => {
  html =
    `
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mix ${element.topic}">
              <div class="item-card">
                <h4><a target="_blank" class="title-link" href="${element.link}">${element.title}</a></h4>
                <p>${element.content}</p>
                <ul class="tag-link">
                    ` +
    element.stacks
      .map((stack) => {
        return `<li><a target="_blank" href="${stack.link}">${stack.name}</a></li>`;
      })
      .join("") +
    `
                </ul>
                <div class="item-image">              
                  
                  <a target="_blank" class="link-image" href="${element.live[1]}">
                      <i class="fa fa-eye"></i>
                  </a>
  
                  <a target="_blank" class="link-view" href="${element.source[1]}">
                      <i class="fab fa-github"></i>
                  </a>
                  <img src="${element.image}" alt="image ${element.title}" />
                </div>
              </div>
            </div>
      `;

  portfolio.innerHTML += html;
});
