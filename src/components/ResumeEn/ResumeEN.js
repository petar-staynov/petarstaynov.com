import React from 'react';

const ResumeEn = (props) => {
    return (
        <div>
            <header>
                <div className="text-gray-750">
                    <h1>Petar Staynov</h1>
                    <h5>Web Developer / Programmer</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md-5">
                            <address>
                                <a href="mailto:petar.staynov@gmail.com" className="m-3"target="_blank">
                                    <i className="fas fa-envelope-square fa-lg"></i> petar.staynov@gmail.com
                                </a>
                            </address>
                        </div>
                        <div className="col-md-3">
                            <a href="https://www.google.com/maps/place/Sofia/" className="m-3"target="_blank">
                                <i className="fas fa-map-marker-alt fa-lg"></i> Sofia, Bulgaria
                            </a>
                        </div>
                        <div className="col col-md-4">
                            <a href="https://github.com/petar-staynov"
                               className="m-3" target="_blank">
                                <i className="fab fa-github-square fa-lg"></i> petar-staynov
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <hr/>
            <section>
                <h3 className="text-gray-700">About me:</h3>
                <p>
                    Freelance Web Developer with a preference for front-end work and a passion building useful
                    and user-friendly applications.
                    Focused on  writing clean and readable code and devising optimized solutions to different problems.
                    Interested in the latest trends and everything "tech" from software to hardware.
                </p>
            </section>
            <hr/>
            <section>
                <h3 className="text-gray-700">Projects:</h3>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/SoftUni-PizzaDotNet" target="_blank">
                            PizzaDotNet (Pizzeria Web App) <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2020 / University project</p>
                        <p className="text-gray-650 m-0">HTML, CSS, C#, ASP.NET Core, Entity Framework, AutoMapper, Bootstrap 4</p>
                        <p className="text-gray-650 m-0">
                            <a href="https://pizzadotnetweb20201130231618.azurewebsites.net/" target="_blank">
                            www.pizzadotnetweb.azurewebsites.net <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </p>
                    </div>
                    <div className="col-md">
                        <p>
                            Designed and implemented the frontend and backend
                            for a Pizza Restaurant Web App following an MVC Layered architecture with a Repository and Service
                            patterns as well as adhering to SOLID principles. Other notable mentions are the usage of
                            API Controllers for some of the functionality and the integration of Google Cloud Storage.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/coronavirus-tracker-bg" target="_blank">
                                Corona Tracker BG <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2020 / Personal project</p>
                        <p className="text-gray-650 m-0">HTML, SCSS, ReactJS, Bootstrap 4</p>
                        <p className="text-gray-650 m-0">
                            <a href="https://coronatrackerbg.com" target="_blank">
                                www.coronatrackerbg.com <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </p>

                    </div>
                    <div className="col-md">
                        <p>
                            Mobile friendly Coronavirus tracking app for various countries that gets data
                            using the native fetch api from an external data source and displays it using Apex Charts.
                            Made using functional React components, hooks and context.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <span>
                                Browser Based Game
                            </span>
                        </h5>
                        <p className="text-gray-650 m-0">2018 - 2019 / Work project</p>
                        <p className="text-gray-650 m-0">HTML, CSS, jQuery, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Worked with an international team of 3 people to build and maintain a fluid and
                            responsive website for a now defunct browser based game with ~1000 unique monthly visitors.
                            Used a combination of jQuery and Bootstrap to extend the user interface, fetch and display player
                            data and handle user interactions.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/react-commerce" target="_blank">
                            React-Commerce (Online store) <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2019 / Study project</p>
                        <p className="text-gray-650 m-0">HTML, CSS, React, Redux, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Online clothing web store built using ReactJS and Redux with data hosted on Firebase.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/vimeo-video-downloader" target="_blank">
                                Vimeo Video Downloader (Chrome extension) <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2019 / Personal project</p>
                        <p className="text-gray-650 m-0">JavaScript</p>
                    </div>
                    <div className="col-md">
                        <p>
                            A simple extension for Chrome and Chromium-based browsers that allows downloading
                            videos through an unauthorized API access.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/softuni-better-video-player-extension" target="_blank">
                                SoftUni Better video player (Chrome extension) <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2019 / Personal project</p>
                        <p className="text-gray-650 m-0">JavaScript</p>
                    </div>
                    <div className="col-md">
                        <p>
                            A simple extension for Chrome and Chromium-based browsers that improves the user experience
                            on the SoftUni video player page.
                        </p>
                    </div>
                </div>     

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="#">
                                TopMedica
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2017-2018 / Work project</p>
                        <p className="text-gray-650 m-0">HTML, CSS, PHP, Wordpress</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Built and maintained a Wordpress website for a specialized medical magazine.
                            Wrote custom HTML and CSS, improved SEO, provided technical support.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="http://petarstaynov.photography" target="_blank">
                                Photography Portfolio Site <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2017 / Personal project</p>
                        <p className="text-gray-650 m-0">HTML, CSS, jQuery, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            A portfolio website built for my personal photography.
                            Made using jQuery and jQuery plugins.
                        </p>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/CodeShip" target="_blank">
                                CodeShip <i className="fas fa-link fa-xs no-print"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2016 / University team project</p>
                        <p className="text-gray-650 m-0">HTML 5 Canvas, CSS, JavaScript</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Worked with a team of three to build a simple space ship browser based video game with HTML 5 Canvas and pure JavaScript.
                        </p>
                    </div>
                </div>
            </section>
            <hr/>
            <section>
                <h3 className="text-gray-700">Skills and experience:</h3>
                <div className="row text-left">
                    <div className="col">
                        <div className="skill-mark"></div>
                        <h5 className="skill-content">JavaScript</h5>
                        <div className="skill-content">
                            <span>My primary technologies stack that I'm most comfortable using.</span>
                        </div>
                        <ul className="skill-list">
                            <li className="skill-list-box-item">React</li>
                            <li className="skill-list-box-item">Redux</li>
                            <li className="skill-list-box-item">redux-toolkit</li>
                            <li className="skill-list-box-item">jQuery</li>
                            <li className="skill-list-box-item">ES6</li>
                            <li className="skill-list-box-item">AJAX</li>
                        </ul>
                    </div>
                </div>

                <div className="row text-left">
                    <div className="col">
                        <div className="skill-mark"></div>
                        <h5 className="skill-content">C# /.NET</h5>
                        <div className="skill-content">
                            <span>My secondary technological stack with which I've built projects.</span>
                        </div>
                        <ul className="skill-list">
                            <li className="skill-list-box-item">.NET Framework</li>
                            <li className="skill-list-box-item">ASP.NET Core</li>
                            <li className="skill-list-box-item">Entity Framework Core</li>
                            <li className="skill-list-box-item">Razor Views/Pages</li>
                            <li className="skill-list-box-item">WPF</li>
                        </ul>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col">
                        <div className="skill-mark"></div>
                        <h5 className="skill-content">Other</h5>
                        <div className="skill-content">
                            <span>Miscellaneous technologies I often use or have used</span>
                        </div>
                        <ul className="skill-list">
                            <li className="skill-list-box-item">HTML/CSS</li>
                            <li className="skill-list-box-item">SASS/SCSS</li>
                            <li className="skill-list-box-item">Typescript</li>
                            <li className="skill-list-box-item">Bootstrap</li>
                            <li className="skill-list-box-item">Wordpress</li>
                            <li className="skill-list-box-item">Web hosting</li>
                            <li className="skill-list-box-item">Firebase</li>
                            <li className="skill-list-box-item">SEO</li>
                            <li className="skill-list-box-item">Git</li>
                            <li className="skill-list-box-item">SQL</li>
                            <li className="skill-list-box-item">PHP</li>
                            <li className="skill-list-box-item">MS Office</li>
                            <li className="skill-list-box-item">Photoshop</li>
                            <li className="skill-list-box-item">Linux</li>
                            <li className="skill-list-box-item">macOS</li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr/>
            <section>
                <h3 className="text-gray-700">Education:</h3>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://softuni.bg/" target="_blank">
                                Software University (SoftUni) <i className="fas fa-link fa-xs no-print" aria-hidden="true"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">C# Developer</p>
                        <p className="text-gray-650 m-0">2016 - 2020</p>
                    </div>
                    <div className="col-md">
                        {/*<p>*/}
                        {/*    Private academy offering certified courses for developers where I participated in various*/}
                        {/*    curriculum and worked on different solo and group projects.*/}
                        {/*</p>*/}
                        <a href="https://drive.google.com/file/d/1QvpiJIFFTCrxagyJuBrrkqMj8mOVdqkn" target="_blank">
                            <strong> - C# Web Developer Diploma </strong>
                            <i className="fas fa-link fa-xs no-print"></i>
                        </a>
                        <br/>
                        <a href="https://drive.google.com/open?id=1kWl55vK-h5GMXq0jkgBzMkGuuEIwetRo" target="_blank">
                            - ASP.NET Core certificate <i className="fas fa-link fa-xs no-print"></i>
                        </a>
                        <br/>
                        <a href="https://drive.google.com/open?id=1WwOFCy60DIbuEVJwpy9k_5CP7Gj89j2S" target="_blank">
                            - Entity Framework Core certificate <i className="fas fa-link fa-xs no-print"></i>
                        </a>
                        <br/>
                        <a href="https://drive.google.com/open?id=1YZ_BhyPA3p-fviwhNtlEibAWEflHizJq" target="_blank">
                            - MS SQL certificate <i className="fas fa-link fa-xs no-print"></i>
                        </a>
                        <br/>
                        <a href="https://drive.google.com/open?id=130aAjx4URH-mIm_0fD1tV9YMCHsOYN0j" target="_blank">
                            - C# OOP Advanced certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=19E9XMGPwvNi9uDAAb9avd-IFoK398Nh9" target="_blank">
                            - C# OOP Basics certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=1XFocD1up0zAqRAm2AsHjUKa1pvmucdKd" target="_blank">
                            - C# Advanced certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=1-CNZS9ank0tOgahCurlpzK7oKrvdRbSe" target="_blank">
                            - JavaScript Apps certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=1j8RWCUWTXSFDJ5IIPOUczoaywo7bv6r1" target="_blank">
                            - JavaScript Advanced certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=1F8ucSa6Flvg97SlxzRWrwuktLGF7NbBC" target="_blank">
                            - Software Technologies certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=1soVYrbq50kOfP7NPRX47nzcTQ-QE3M_h" target="_blank">
                            - Programming Fundamentals certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>

                        <a href="https://drive.google.com/open?id=1gpYB7-cgm54Cnf5cDiIBve6PXYzmejy3" target="_blank">
                            - Programming Basics certificate <i className="fas fa-link fa-xs no-print"></i></a>
                        <br/>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://www.vfu.bg/" target="_blank">
                                Varna Free University (VFU) <i className="fas fa-link fa-xs no-print" aria-hidden="true"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">Bachelor's degree in Computer Science</p>
                        <p className="text-gray-650 m-0">2016 - 2020</p>
                    </div>
                    <div className="col-md">
                        <span>
                            Private University where I took various courses in software development
                            and mathematics.
                        </span>
                        <br/>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://www.fels-sofia.org/" target="_blank">
                                First English Language School (FELS) <i className="fas fa-link fa-xs no-print" aria-hidden="true"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">English and Russian with "Math and IT" profiling</p>
                        <p className="text-gray-650 m-0">2011 - 2016</p>
                    </div>
                    <div className="col-md">
                        <span>
                            Elite highschool with a focus on studying foreign languages.
                            Graduated with an excellent marks and a certificate in English.
                        </span>
                        <br/>
                        <a href="https://drive.google.com/file/d/1SIKXOtxcUaKH1pl_IvIygeNwCs-bUnZj/view"
                           target="_blank">
                            - Certificate in Advanced English (C2) <i className="fas fa-link fa-xs no-print"></i>
                        </a>
                    </div>
                </div>

            </section>
            <hr/>
            {/*<section>*/}
            {/*    <h3 className="text-gray-700">Hobbies and Interests:</h3>*/}
            {/*    <div className="row justify-content-center">*/}
            {/*       <div className="col-md-5 col-lg-4">*/}
            {/*           <ul className="interest-list text-left">*/}
            {/*               <li><i className="fas fa-dumbbell"></i> Health and fitness</li>*/}
            {/*               <li><i className="fas fa-hiking"></i> Hiking</li>*/}
            {/*               <li><i className="fas fa-biking"></i> Mountain biking</li>*/}
            {/*               <li><i className="fas fa-camera"></i> Photography and image editing</li>*/}
            {/*           </ul>*/}
            {/*       </div>*/}
            {/*     </div>*/}
            {/*</section>*/}
        </div>
    )
};

export default ResumeEn;