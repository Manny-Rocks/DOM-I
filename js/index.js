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
const bigCircle=document.getElementById('cta-img');
bigCircle.setAttribute('src', siteContent['cta']['img-src']);

const banner=document.getElementById('middle-img');
banner.setAttribute('src', siteContent['main-content']['middle-img-src']);


const navItems=document.querySelectorAll('nav a');
navItems[0].textContent=siteContent['nav']['nav-item-1'];
navItems[1].textContent=siteContent['nav']['nav-item-2'];
navItems[2].textContent=siteContent['nav']['nav-item-3'];
navItems[3].textContent=siteContent['nav']['nav-item-4'];
navItems[4].textContent=siteContent['nav']['nav-item-5'];
navItems[5].textContent=siteContent['nav']['nav-item-6'];
navItems[0].style.color="red";
navItems[1].style.color="orange";
navItems[2].style.color="blue";
navItems[3].style.color="purple";
navItems[4].style.color="green";
navItems[5].style.color="pink";

//got stuck running a for loop through all the navitems.
// for (let i = 0; i<navItems.length; i++){
//   navItems[4].style.color = "lightskyblue";
// }


const theNav=document.querySelector('nav');

const newNav=document.createElement('a');
newNav.textContent="Males";
newNav.style.color="blue"

const newerNav=document.createElement('a');
newerNav.textContent="Females";
newerNav.style.color="red";

theNav.append(newNav);
theNav.append(newerNav);



const theTitle=document.querySelector('.cta .cta-text h1');
theTitle.textContent=siteContent['cta']['h1'];

const btnC=document.querySelector('.cta .cta-text button');
btnC.textContent=siteContent['cta']['button'];
btnC.addEventListener('click', function(){
  console.log("I was freaking clicked, once I think....headscratch!!!")
});




const topHeading = document.querySelectorAll('.main-content .top-content h4');
topHeading[0].textContent=siteContent['main-content']['features-h4'];
topHeading[1].textContent=siteContent['main-content']['about-h4'];

const topPtags=document.querySelectorAll('.main-content .top-content p');
topPtags[0].textContent=siteContent['main-content']['features-content'];
topPtags[1].textContent=siteContent['main-content']['about-content'];

const botHeading=document.querySelectorAll('.main-content .bottom-content h4');
botHeading[0].textContent=siteContent['main-content']['services-h4'];
botHeading[1].textContent=siteContent['main-content']['product-h4'];
botHeading[2].textContent=siteContent['main-content']['vision-h4'];

const botPtags=document.querySelectorAll('.main-content .bottom-content p');
botPtags[0].textContent=siteContent['main-content']['services-content'];
botPtags[1].textContent=siteContent['main-content']['product-content'];
botPtags[2].textContent=siteContent['main-content']['vision-content'];

//

const contactHead=document.querySelector('.contact h4');
contactHead.textContent=siteContent['contact']['contact-h4'];

const contactP=document.querySelectorAll('.contact p');
contactP[0].textContent=siteContent['contact']['address'];
contactP[1].textContent=siteContent['contact']['phone'];
contactP[2].textContent=siteContent['contact']['email'];

// 

const Footr=document.querySelector('footer p');
Footr.textContent=siteContent['footer']['copyright'];

