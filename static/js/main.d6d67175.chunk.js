(this["webpackJsonppetarstaynov.com"]=this["webpackJsonppetarstaynov.com"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e){e.exports=JSON.parse('{"name":"Petar Staynov","title":"Fullstack Web Developer - React/Angular","aboutme":"Fullstack Web Developer with a preference for front-end work and a passion building useful and user-friendly applications. With a personal as well as team focused growth mindset, interested in writing clean and readable code, devising optimized solutions and sharing knowledge and experience. Interested in the latest trends and everything \\"tech\\" from software to hardware.","professional":[{"company":"Accedia","project":"Alexander Forbes \u2013 Fund Management System","description":"Participated in the development of a web-based replacement for a legacy Financial application used for managing funds, assets and investments, managed by Alexander Forbes, one of the leading financial services companies in South Africa. The project was handled fully remote by two teams, one based in Bulgaria and the other in South Africa. Responsibilities included taking part in the development process on all fronts, being a leading example for the development of the frontend, reviewing code and exchanging feedback, writing documentation and helping optimize the developer workflow. ","date":"2021 - Present","stack":["Angular","TypeScript",".NET Core","SQL Server","Azure"],"responsibilities":["Assist with Backend, Frontend and Database design","Lead frontend design and development","Development of new features","Regular Code Reviews and feedback exchange","Maintaining frontend code quality and enforcing best practices","Writing documentation","Resolving performance issues","Optimizing developer workflow and environment setup"]},{"company":"Freelance","project":"CYOA Visual Novel Browser Based game","description":"Worked with an international team of 3 people to build and maintain a fluid and responsive interface for a now defunct browser based game that had over 1000 unique monthly visitors at its peak. Helped modernize the legacy Javascript and jQuery code by laying out an architecture based on React and Redux and later on Redux Toolkit. Further work included implementing new mechanics and content as well as optimizing performance and resolving asynchronous operation issues related to the game engine. ","date":"2018 - 2020","stack":["React","Redux","Redux Toolkit","redux-thunk","Bootstrap"],"responsibilities":["Lead frontend design and development","Development of new features","Resolving performance issues"]},{"company":"TopMedica","project":"TopMedica Specialized Magazine Website","description":"Built and maintained a Wordpress website for a specialized medical magazine. Featured content included different articles, videos and interviews. Main tasks included general maintenance, styling, updating content and communication with client and other participating parties.","date":"2017 - 2018","stack":["HTML","CSS","PHP","Wordpress"],"responsibilities":""}],"personal":[{"company":"Bitwarden To Chrome Password Converter","project":"Password Converter (~20 Github Stars \ud83c\udf1f / 3 forks \ud83c\udf74)","description":"Console based application for converting passwords from Bitwarden, a password managerm to a format for importing into Chrome and Chromium-based browsers. The project is actively maintained and provided as-is for free use.","date":"2020 - Present","link":"https://github.com/petar-staynov/BitwardenToChromePasswordConverter","repoLink":"","stack":[".NET Core","C#"],"responsibilities":""},{"company":"PizzaDotNet","project":"Pizzeria Restaurant Order Management System","description":"Built from the ground up a web application for managing Pizza Restaurant orders. Solution included database setup and deployment on Azure, design and relations management, design and implementation of a backend MVC architecture with additional API controllers and a responsive frontend using Bootstrap and Javascript. Notable mention are the usage of a Repository Pattern, Google Cloud Storage and async JS/AJAX.","date":"2020","link":"https://github.com/petar-staynov/SoftUni-PizzaDotNet","repoLink":"","stack":["ASP.NET Core","ASP.NET Core Web API","Entity Framework","AutoMapper","Bootstrap","Google Cloud Storage","C#","JavaScript","HTML","CSS","Bootstrap"],"responsibilities":""},{"company":"Coronatracker BG","project":"Coronavirus tracking web app","description":"Coronavirus statistics tracking app for various countries that gets data using the native fetch api from an external data source and displays it using Apex Charts. Made with React and Bootstrap and using functional React components, hooks and context.","date":"2020","link":"https://coronatrackerbg.com","repoLink":"https://github.com/petar-staynov/coronavirus-tracker-bg","stack":["React","Bootstrap"],"responsibilities":""},{"company":"Vimeo Video Downloader Extension","project":"Coronavirus tracking web app","description":"A simple extension for Chrome and Chromium-based browsers that allows downloading videos through unauthorized API access.","date":"2019","link":"https://github.com/petar-staynov/vimeo-video-downloader","stack":["JavaScript"],"responsibilities":""},{"company":"SoftUni Better video player Extension","project":"Coronavirus tracking web app","description":"A simple extension for Chrome and Chromium-based browsers that improves the user experience on the SoftUni video page.","date":"2019","link":"https://github.com/petar-staynov/softuni-better-video-player-extension","stack":["JavaScript"],"responsibilities":""}],"certificates":{}}')},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),i=t.n(l),s=function(e){var a=e.title,t=e.project,n=t.company,l=t.project,i=t.description,s=t.date,o=t.link,c=t.repoLink,m=t.stack;t.responsibilities;console.log(i);var d=a.includes("Professional")?{leftCol:"col-md-4",rightCol:"col-md-8"}:{leftCol:"col-md",rightCol:"col-md"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:d.leftCol},r.a.createElement("h5",null,o?r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},n," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})):r.a.createElement("p",null,n)),r.a.createElement("p",{className:"text-gray-650 m-0"},l),r.a.createElement("p",{className:"text-gray-650 m-0"},s),r.a.createElement("p",{className:"text-gray-650 m-0"},m.map((function(e,a){return null}))),c&&r.a.createElement("p",{className:"text-gray-650 m-0"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},c," ","",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"}))),r.a.createElement("span",{className:"text-gray-650 m-0 text-center"},r.a.createElement("ul",{className:"skill-list"},m.map((function(e,a){return r.a.createElement("li",{className:"skill-list-box-item",key:a},e)}))))),r.a.createElement("div",{className:d.rightCol},r.a.createElement("p",null,i.toString()))))},o=function(e){var a=e.title,t=e.projects;return r.a.createElement("section",null,r.a.createElement("h3",{className:"text-gray-700"},a,":"),t.map((function(e,t){return r.a.createElement(s,{key:t,project:e,title:a})})))},c=function(e){var a=Object(n.useContext)(E),t=a.name,l=a.title,i=a.aboutme,s=a.professional,c=a.personal;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"text-gray-750"},r.a.createElement("h1",null,t),r.a.createElement("h5",null,l),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("address",null,r.a.createElement("a",{href:"mailto:petar.staynov@gmail.com",className:"m-3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-envelope-square fa-lg"}),"  petar.staynov@gmail.com"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Sofia/",className:"m-3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-map-marker-alt fa-lg"})," Sofia, Bulgaria")),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Sofia/",className:"m-3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin-in fa-lg"})," Petar Staynov")),r.a.createElement("div",{className:"col col-md-4"},r.a.createElement("a",{href:"https://github.com/petar-staynov",className:"m-3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github-square fa-lg"})," petar-staynov"))))),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("h3",{className:"text-gray-700"},"About me:"),r.a.createElement("p",null,i)),r.a.createElement("hr",null),r.a.createElement(o,{title:"Professional Experience",projects:s}),r.a.createElement("hr",null),r.a.createElement(o,{title:"Personal projects",projects:c}),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("h3",{className:"text-gray-700"},"Skills and experience:"),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"skill-mark"}),r.a.createElement("h5",{className:"skill-content"},"JavaScript"),r.a.createElement("div",{className:"skill-content"},r.a.createElement("span",null,"My primary technology stack that I'm most comfortable using.")),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",{className:"skill-list-box-item"},"React"),r.a.createElement("li",{className:"skill-list-box-item"},"Redux"),r.a.createElement("li",{className:"skill-list-box-item"},"Angular"),r.a.createElement("li",{className:"skill-list-box-item"},"Typescript"),r.a.createElement("li",{className:"skill-list-box-item"},"ES6+"),r.a.createElement("li",{className:"skill-list-box-item"},"Babel"),r.a.createElement("li",{className:"skill-list-box-item"},"WebPack"),r.a.createElement("li",{className:"skill-list-box-item"},"ESLint")))),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"skill-mark"}),r.a.createElement("h5",{className:"skill-content"},"C# /.NET"),r.a.createElement("div",{className:"skill-content"},r.a.createElement("span",null,"My secondary technological stack with which I've built projects.")),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",{className:"skill-list-box-item"},".NET Framework"),r.a.createElement("li",{className:"skill-list-box-item"},"ASP.NET Core"),r.a.createElement("li",{className:"skill-list-box-item"},"Entity Framework Core"),r.a.createElement("li",{className:"skill-list-box-item"},"Razor Views/Pages"),r.a.createElement("li",{className:"skill-list-box-item"},"WPF")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"skill-mark"}),r.a.createElement("h5",{className:"skill-content"},"Other"),r.a.createElement("div",{className:"skill-content"},r.a.createElement("span",null,"Miscellaneous technologies I often use or have used")),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",{className:"skill-list-box-item"},"HTML/CSS"),r.a.createElement("li",{className:"skill-list-box-item"},"SASS/SCSS"),r.a.createElement("li",{className:"skill-list-box-item"},"Bootstrap"),r.a.createElement("li",{className:"skill-list-box-item"},"Web hosting"),r.a.createElement("li",{className:"skill-list-box-item"},"Firebase"),r.a.createElement("li",{className:"skill-list-box-item"},"Google Cloud Storage"),r.a.createElement("li",{className:"skill-list-box-item"},"Azure"),r.a.createElement("li",{className:"skill-list-box-item"},"Git"),r.a.createElement("li",{className:"skill-list-box-item"},"MS Office"),r.a.createElement("li",{className:"skill-list-box-item"},"Photoshop"),r.a.createElement("li",{className:"skill-list-box-item"},"Windows"),r.a.createElement("li",{className:"skill-list-box-item"},"macOS"))))),r.a.createElement("hr",null),r.a.createElement("section",null,r.a.createElement("h3",{className:"text-gray-700"},"Education:"),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-md"},r.a.createElement("h5",null,r.a.createElement("a",{href:"https://softuni.bg/",target:"_blank",rel:"noopener noreferrer"},"Software University (SoftUni)"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print","aria-hidden":"true"}))),r.a.createElement("p",{className:"text-gray-650 m-0"},"C# Developer"),r.a.createElement("p",{className:"text-gray-650 m-0"},"2016 - 2020")),r.a.createElement("div",{className:"col-md"},r.a.createElement("a",{href:"https://drive.google.com/file/d/1QvpiJIFFTCrxagyJuBrrkqMj8mOVdqkn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("strong",null," - C# Web Developer Diploma "),r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1kWl55vK-h5GMXq0jkgBzMkGuuEIwetRo",target:"_blank",rel:"noopener noreferrer"},"- ASP.NET Core certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1WwOFCy60DIbuEVJwpy9k_5CP7Gj89j2S",target:"_blank",rel:"noopener noreferrer"},"- Entity Framework Core certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1YZ_BhyPA3p-fviwhNtlEibAWEflHizJq",target:"_blank",rel:"noopener noreferrer"},"- MS SQL certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=130aAjx4URH-mIm_0fD1tV9YMCHsOYN0j",target:"_blank",rel:"noopener noreferrer"},"- C# OOP Advanced certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=19E9XMGPwvNi9uDAAb9avd-IFoK398Nh9",target:"_blank",rel:"noopener noreferrer"},"- C# OOP Basics certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1XFocD1up0zAqRAm2AsHjUKa1pvmucdKd",target:"_blank",rel:"noopener noreferrer"},"- C# Advanced certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1-CNZS9ank0tOgahCurlpzK7oKrvdRbSe",target:"_blank",rel:"noopener noreferrer"},"- JavaScript Apps certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1j8RWCUWTXSFDJ5IIPOUczoaywo7bv6r1",target:"_blank",rel:"noopener noreferrer"},"- JavaScript Advanced certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1F8ucSa6Flvg97SlxzRWrwuktLGF7NbBC",target:"_blank",rel:"noopener noreferrer"},"- Software Technologies certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1soVYrbq50kOfP7NPRX47nzcTQ-QE3M_h",target:"_blank",rel:"noopener noreferrer"},"- Programming Fundamentals certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/open?id=1gpYB7-cgm54Cnf5cDiIBve6PXYzmejy3",target:"_blank",rel:"noopener noreferrer"},"- Programming Basics certificate"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"})),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-md"},r.a.createElement("h5",null,r.a.createElement("a",{href:"https://www.vfu.bg/",target:"_blank",rel:"noopener noreferrer"},"Varna Free University (VFU)"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print","aria-hidden":"true"}))),r.a.createElement("p",{className:"text-gray-650 m-0"},"Bachelor's degree in Computer Science"),r.a.createElement("p",{className:"text-gray-650 m-0"},"2016 - 2020")),r.a.createElement("div",{className:"col-md"},r.a.createElement("span",null,"Private University where I took various courses in software development and mathematics."),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-md"},r.a.createElement("h5",null,r.a.createElement("a",{href:"https://www.fels-sofia.org/",target:"_blank",rel:"noopener noreferrer"},"First English Language School (FELS)"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print","aria-hidden":"true"}))),r.a.createElement("p",{className:"text-gray-650 m-0"},'English and Russian with "Math and IT" profiling'),r.a.createElement("p",{className:"text-gray-650 m-0"},"2011 - 2016")),r.a.createElement("div",{className:"col-md"},r.a.createElement("span",null,"Elite highschool with a focus on studying foreign languages. Graduated with an excellent marks and a certificate in English."),r.a.createElement("br",null),r.a.createElement("a",{href:"https://drive.google.com/file/d/1SIKXOtxcUaKH1pl_IvIygeNwCs-bUnZj/view",target:"_blank",rel:"noopener noreferrer"},"- Certificate in Advanced English (C2)"," ",r.a.createElement("i",{className:"fas fa-link fa-xs no-print"}))))),r.a.createElement("hr",null))},m=function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement(c,null))},d=t(3),p=(t(9),t(10),function(e){var a=e.handleClick;return r.a.createElement("div",{className:"app-menu"},r.a.createElement("button",{className:"app-menu-item",onClick:function(){a(),setTimeout((function(){window.print()}),10)}},"Print / Save as .pdf"))}),f=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),l=t[0],i=t[1],s=function(){i(!l)};return r.a.createElement("div",null,r.a.createElement("div",{className:"app-menu-button"},r.a.createElement("button",{className:"btn",onClick:function(){return s()}},r.a.createElement("i",{className:"fas fa-print fa-2x"}))),!0===l?r.a.createElement(p,{handleClick:function(){return s()}}):null)},u=(t(11),function(e){return r.a.createElement("div",{className:"footer no-print"}," ")}),E=r.a.createContext(),g=(r.a.createContext(),function(e){var a=t(12);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.Provider,{value:a},r.a.createElement(f,null),r.a.createElement(m,null),r.a.createElement(u,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13),t(14);var h=document.getElementById("root"),v=r.a.createElement(g,null);i.a.render(v,h),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d6d67175.chunk.js.map