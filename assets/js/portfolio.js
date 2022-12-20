// portfolio
const portfolio = document.querySelector("#posts");

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
