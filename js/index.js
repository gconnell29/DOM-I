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

let nav = document.querySelector('nav');
let navLinks = nav.querySelectorAll('a');

// two new items
let home = document.createElement('a');
let store = document.createElement('a');
home.setAttribute('href', '#')
store.setAttribute('href', '#')
home.innerHTML = "Home";
store.innerHTML = "Store";


navLinks.forEach((link, index) => {
  link.innerHTML = siteContent.nav[`nav-item-${index+1}`];
  if (index === 0) {
    nav.prepend(home);
    home.style.color = 'green';
  }
  if (index === navLinks.length-1) {
    nav.append(store);
    store.style.color = 'green';
  }
  link.style.color = 'green';
});

let header1 = document.querySelector("h1");
header1.innerHTML = "Dom<br>is<br>awesome";

document.querySelector("button").innerHTML = siteContent.cta['button'];

document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);

// top contents
let features = document.querySelector(".top-content .text-content:nth-child(1)");
features.querySelector('h4').innerHTML = siteContent["main-content"]['features-h4'];
features.querySelector('p').innerHTML = siteContent["main-content"]['features-content'];

let about = document.querySelector(".top-content .text-content:nth-child(2)");
about.querySelector('h4').innerHTML = siteContent["main-content"]['about-h4'];
about.querySelector('p').innerHTML = siteContent["main-content"]['about-content'];

// code image
let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);

// bottom contents - using loop
let bottomContent = document.querySelector('.bottom-content');

// console.log(Object.keys(siteContent['main-content'])[5]); works
// console.log((siteContent['main-content'])[5]); does not work 
let textContentCount = 1;

for (let i = 5; i < Object.keys(siteContent['main-content']).length; i++) {
  let textContent = bottomContent.querySelector(`.text-content:nth-child(${textContentCount})`);
  let mainContentCount = Object.keys(siteContent['main-content'])[i];
  let mainContentCountNext = Object.keys(siteContent['main-content'])[i+1];
  textContent.querySelector('h4').innerHTML = siteContent['main-content'][mainContentCount];
  textContent.querySelector('p').innerHTML = siteContent['main-content'][mainContentCountNext];
  textContentCount++;
  i++;
}

// contact section
let contact = document.querySelector('.contact');
contact.querySelector('h4').innerHTML = siteContent['contact']['contact-h4'];
contact.querySelector('p:nth-child(2)').innerHTML = siteContent['contact']['address'];
contact.querySelector('p:nth-child(3)').innerHTML = siteContent['contact']['phone'];
contact.querySelector('p:nth-child(4)').innerHTML = siteContent['contact']['email'];

// footer
document.querySelector('footer p').innerHTML = siteContent['footer']['copyright'];


