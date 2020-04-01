import React from 'react';

const ResumeEn = (props) => {
    //Projects
    //Skills
    //Education
    //Interests
    return (
        <div>
            <header>
                <div className="text-gray-750">
                    <h1>Petar Staynov</h1>
                    <h5>Frontend Web Developer / Programmer</h5>
                    <hr/>
                    <div className="row">
                        <div className="col-md">
                            <span><i className="fas fa-envelope-square fa-lg"></i> petar.staynov@gmail.com</span>
                        </div>
                        <div className="col-md">
                            <span><i className="fas fa-map-marker-alt fa-lg"></i> Sofia, Bulgaria</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <a href="https://www.facebook.com/profile.php?id=100003782501671" className="m-3"
                               target="_blank">
                                <i className="fab fa-facebook-square fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/petar-staynov/" className="m-3" target="_blank">
                                <i className="fab fa-linkedin fa-2x"></i></a>
                            <a href="https://github.com/petar-staynov" className="m-3" target="_blank">
                                <i className="fab fa-github-square fa-2x"></i></a>
                        </div>
                    </div>
                    <hr/>
                </div>
            </header>
            <section>
                <h3 className="text-gray-700">Work projects:</h3>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://coronatrackerbg.com/" target="_blank">
                                Corona Tracker BG <i className="fas fa-link fa-xs"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2020</p>
                        <p className="text-gray-650 m-0">HTML, CSS, ReactJS, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Design and develop a mobile friendly Coronavirus tracking app that display data
                            from an external API in various ways for different countries.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <span>
                                Browser Based Game
                            </span>
                        </h5>
                        <p className="text-gray-650 m-0">2018 - 2019</p>
                        <p className="text-gray-650 m-0">HTML, CSS, jQuery, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Worked with an international team of 3 people to build and maintain a fluid and
                            responsive website for a now defunct browser based game with ~500 unique monthly visitors.
                            Used a combination of jQuery and Bootstrap to build web pages, fetch and display player
                            data and handle user interactions.
                        </p>
                    </div>
                </div>
            </section>
            <hr/>
            <section>
                <h3 className="text-gray-700">University projects:</h3>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="#" target="_blank">
                                Pizzeria Web App (PizzaDotNet) <i className="fas fa-link fa-xs"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2020</p>
                        <p className="text-gray-650 m-0">HTML, CSS, C#, ASP.NET, EF6, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Fully design the frontend and backend for a Pizza Restaurant Web App using ASP.NET Core 3.1,
                            Entity Framework 6, MS-SQL, Razor Pages and Bootstrap 4.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/react-commerce" target="_blank">
                                Online Store (React Commerce) <i className="fas fa-link fa-xs"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2019</p>
                        <p className="text-gray-650 m-0">HTML, CSS, React, Redux, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Online clothing web store built using ReactJS and Redux with data hosted on Firebase.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="#" target="_blank">
                                Photography Portfolio Site <i className="fas fa-link fa-xs"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2018</p>
                        <p className="text-gray-650 m-0">HTML, CSS, jQuery, Bootstrap 4</p>
                    </div>
                    <div className="col-md">
                        <p>
                            A simple portfolio website built for my personal photography.
                        </p>
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <a href="https://github.com/petar-staynov/CodeShip" target="_blank">
                                CodeShip <i className="fas fa-link fa-xs"></i>
                            </a>
                        </h5>
                        <p className="text-gray-650 m-0">2016</p>
                        <p className="text-gray-650 m-0">HTML 5 Canvas, CSS, JavaScript</p>
                    </div>
                    <div className="col-md">
                        <p>
                            A simple space ship browser based video game made with HTML 5 Canvas and JavaScript.
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
                            <li className="skill-list-box-item">Node</li>
                            <li className="skill-list-box-item">ES6</li>
                            <li className="skill-list-box-item">AJAX</li>
                            <li className="skill-list-box-item">jQuery</li>
                            <li className="skill-list-box-item">React</li>
                            <li className="skill-list-box-item">Redux</li>
                            <li className="skill-list-box-item">redux-thunk</li>
                        </ul>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col">
                        <div className="skill-mark"></div>
                        <h5 className="skill-content">C# /.NET</h5>
                        <div className="skill-content">
                            <span>My secondary technological stack with which I've built projects.</span>
                        </div>
                        <ul className="skill-list">
                            <li className="skill-list-box-item">ASP.NET Core 3.1</li>
                            <li className="skill-list-box-item">Entity Framework 6</li>
                            <li className="skill-list-box-item">LINQ</li>
                            <li className="skill-list-box-item">Razor Pages</li>
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
                            <li className="skill-list-box-item">Bootstrap</li>
                            <li className="skill-list-box-item">Web hosting</li>
                            <li className="skill-list-box-item">Firebase</li>
                            <li className="skill-list-box-item">SEO</li>
                            <li className="skill-list-box-item">Git</li>
                            <li className="skill-list-box-item">MySQL</li>
                            <li className="skill-list-box-item">T-SQL</li>
                            <li className="skill-list-box-item">PHP</li>
                            <li className="skill-list-box-item">MS Office</li>
                            <li className="skill-list-box-item">Photoshop</li>
                            <li className="skill-list-box-item">Lightroom</li>
                            <li className="skill-list-box-item">Premier</li>

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
                            <span>
                                SoftUni - Software University
                            </span>
                        </h5>
                        <p className="text-gray-650 m-0">C# Developer</p>
                        <p className="text-gray-650 m-0">2016 - 2020</p>
                    </div>
                    <div className="col-md">
                        <p>
                            Private academy offering certified courses for developers where I participated in various
                            curriculums and worked on different solo and team projects. Current grade of 5.60/6.00
                        </p>
                        <a href="#" target="_blank">
                            <strong> - .NET Developer Diploma </strong>
                            <i className="fas fa-link fa-xs"></i>
                        </a>
                        <br/>
                        <a href="#" target="_blank">
                            - ASP.NET Core certificate <i className="fas fa-link fa-xs"></i>
                        </a>
                        <br/>
                        <a href="#" target="_blank">
                            - Entity Framework Core certificate <i className="fas fa-link fa-xs"></i>
                        </a>
                        <br/>
                        <a href="#" target="_blank">
                            - MS SQL certificate <i className="fas fa-link fa-xs"></i>
                        </a>
                        <br/>
                        <a href="#" target="_blank">
                            - C# OOP Advanced certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - C# OOP Basics certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - C# Advanced certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - JavaScript Apps certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - JavaScript Advanced certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - JavaScript Essentials certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - Software Technologies certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                        <a href="#" target="_blank">
                            - Programming Fundamentals certificate <i className="fas fa-link fa-xs"></i></a>
                        <br/>

                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <span>
                                VFU - Varna Free University
                            </span>
                        </h5>
                        <p className="text-gray-650 m-0">Bachelor's degree in Computer Science</p>
                        <p className="text-gray-650 m-0">2016 - 2019</p>
                    </div>
                    <div className="col-md">
                        <span>
                            Private University where I took various courses in software development
                            and mathematics before dropping out in 3rd year. Current grade of 5.64/6.00
                            from 32 out of 48 courses.
                        </span>
                        <br/>
                        <a href="https://drive.google.com/open?id=1IxvoO2EseJlGSxBcdGFV-2udAQFly_En" target="_blank">
                            - Report Card <i className="fas fa-link fa-xs"></i></a>
                    </div>
                </div>
                <br/>
                <div className="row text-left">
                    <div className="col-md">
                        <h5>
                            <span>
                                FELS - First English Language School
                            </span>
                        </h5>
                        <p className="text-gray-650 m-0">English and Russian with "Math and IT" profiling</p>
                        <p className="text-gray-650 m-0">2011 - 2016</p>
                    </div>
                    <div className="col-md">
                        <span>
                            Elite highschool with a focus on studying foreign languages.
                            Graduated with an excellent grade of 5.70/6.00 and a certificate in English.
                        </span>
                        <br/>
                        <a href="https://drive.google.com/file/d/1SIKXOtxcUaKH1pl_IvIygeNwCs-bUnZj/view"
                           target="_blank">
                            - Certificate in Advanced English (C2) <i className="fas fa-link fa-xs"></i></a>
                    </div>
                </div>

            </section>
            <hr/>
            <section>
                <h3 className="text-gray-700">Interests:</h3>

            </section>
        </div>
    )
};

export default ResumeEn;