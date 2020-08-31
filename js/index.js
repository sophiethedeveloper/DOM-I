const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// navbar
const NewArray = document.querySelectorAll('nav a');
NewArray[0].textContent = siteContent["nav"]['nav-item-1'];
NewArray[1].textContent = siteContent["nav"]['nav-item-2'];
NewArray[2].textContent = siteContent["nav"]['nav-item-3'];
NewArray[3].textContent = siteContent["nav"]['nav-item-4'];
NewArray[4].textContent = siteContent["nav"]['nav-item-5'];
NewArray[5].textContent = siteContent["nav"]['nav-item-6'];

newArray.forEach(element => {
  element.style.color = 'green'
})

const ArrayLinks = document.querySelector('nav')


//prepend
const projectLink = document.createElement('a');
projectLink.textContent = "Projects";
projectLink.href = "#";
ArrayLinks.prepend(projectLink);

//apend
const socialsLinks = document.createElement('a');
socialsLinks.textContent = "Socials";
socialsLinks.href = "#";
ArrayLinks.append(socialsLinks)

//CTA
const title = document.querySelector('cta-text, h1');
title.innerHTML = siteContent["cta"]["h1"]

const circleImage = document.querySelector("#cta-img");
circleImage.src = siteContent["cta"]["img-src"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]['button'];

//Main Content

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//feautures
let mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent['main-content']['features-h4'];
mainContent[1].textContent = siteContent['main-content']['about-h4'];
mainContent[2].textContent = siteContent['main-content']['services-h4'];
mainContent[3].textContent = siteContent['main-content']['product-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-h4'];
mainContent[5].textContent = siteContent["contact"]["contact-h4"];
//feauture paragraph
let paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
paragraphs[5].innerHTML = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];


// //contact
// const contactTitle = document.querySelector(".contact h4");
// contactTitle.textContent = siteContent["contact"]["contact-h4"];



//footer
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"]


