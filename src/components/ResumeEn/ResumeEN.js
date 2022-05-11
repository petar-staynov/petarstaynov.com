import React, { useContext } from "react";
import { DataEnContext } from "../App";
import ProjectsList from "../shared/ProjectsList";

const ResumeEn = (props) => {
  const dataEnContext = useContext(DataEnContext);

  const { name, title, aboutme, professional, personal } = dataEnContext;

  return (
    <div>
      <header>
        <div className="text-gray-750">
          <h1>{name}</h1>
          <h5>{title}</h5>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <address>
                <a
                  href="mailto:petar.staynov@gmail.com"
                  className="m-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope-square fa-lg"></i>
                  {"  petar.staynov@gmail.com"}
                </a>
              </address>
            </div>
            <div className="col-md-2">
              <a
                href="https://www.google.com/maps/place/Sofia/"
                className="m-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-map-marker-alt fa-lg"></i> Sofia, Bulgaria
              </a>
            </div>
            <div className="col-md-2">
              <a
                href="https://www.linkedin.com/in/petar-staynov/"
                className="m-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-lg"></i> Petar Staynov
              </a>
            </div>
            <div className="col col-md-4">
              <a
                href="https://github.com/petar-staynov"
                className="m-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square fa-lg"></i> petar-staynov
              </a>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <section>
        <h3 className="text-gray-700">About me:</h3>
        <p>{aboutme}</p>
      </section>
      <hr />
      <ProjectsList title={"Professional Experience"} projects={professional} />
      <hr />
      <ProjectsList title={"Personal projects"} projects={personal} />
      <hr />
      <section>
        <h3 className="text-gray-700">Skills and experience:</h3>
        <div className="row text-left">
          <div className="col">
            <div className="skill-mark"></div>
            <h5 className="skill-content">JavaScript</h5>
            <div className="skill-content">
              <span>
                My primary technology stack that I'm most comfortable using.
              </span>
            </div>
            <ul className="skill-list">
              <li className="skill-list-box-item">React</li>
              <li className="skill-list-box-item">Redux</li>
              <li className="skill-list-box-item">Angular</li>
              <li className="skill-list-box-item">Typescript</li>
              <li className="skill-list-box-item">ES6+</li>
              <li className="skill-list-box-item">Babel</li>
              <li className="skill-list-box-item">WebPack</li>
              <li className="skill-list-box-item">ESLint</li>
            </ul>
          </div>
        </div>

        <div className="row text-left">
          <div className="col">
            <div className="skill-mark"></div>
            <h5 className="skill-content">C# /.NET</h5>
            <div className="skill-content">
              <span>
                My secondary technological stack with which I've built projects.
              </span>
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
        <br />
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
              <li className="skill-list-box-item">Bootstrap</li>
              <li className="skill-list-box-item">Web hosting</li>
              <li className="skill-list-box-item">Firebase</li>
              <li className="skill-list-box-item">Google Cloud Storage</li>
              <li className="skill-list-box-item">Azure</li>
              <li className="skill-list-box-item">Git</li>
              <li className="skill-list-box-item">MS Office</li>
              <li className="skill-list-box-item">Photoshop</li>
              <li className="skill-list-box-item">Windows</li>
              <li className="skill-list-box-item">macOS</li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h3 className="text-gray-700">Education:</h3>
        <div className="row text-left">
          <div className="col-md">
            <h5>
              <a
                href="https://softuni.bg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Software University (SoftUni){" "}
                <i
                  className="fas fa-link fa-xs no-print"
                  aria-hidden="true"
                ></i>
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
            <a
              href="https://drive.google.com/file/d/1QvpiJIFFTCrxagyJuBrrkqMj8mOVdqkn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong> - C# Web Developer Diploma </strong>
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />
            <a
              href="https://drive.google.com/open?id=1kWl55vK-h5GMXq0jkgBzMkGuuEIwetRo"
              target="_blank"
              rel="noopener noreferrer"
            >
              - ASP.NET Core certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />
            <a
              href="https://drive.google.com/open?id=1WwOFCy60DIbuEVJwpy9k_5CP7Gj89j2S"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Entity Framework Core certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />
            <a
              href="https://drive.google.com/open?id=1YZ_BhyPA3p-fviwhNtlEibAWEflHizJq"
              target="_blank"
              rel="noopener noreferrer"
            >
              - MS SQL certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />
            <a
              href="https://drive.google.com/open?id=130aAjx4URH-mIm_0fD1tV9YMCHsOYN0j"
              target="_blank"
              rel="noopener noreferrer"
            >
              - C# OOP Advanced certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=19E9XMGPwvNi9uDAAb9avd-IFoK398Nh9"
              target="_blank"
              rel="noopener noreferrer"
            >
              - C# OOP Basics certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=1XFocD1up0zAqRAm2AsHjUKa1pvmucdKd"
              target="_blank"
              rel="noopener noreferrer"
            >
              - C# Advanced certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=1-CNZS9ank0tOgahCurlpzK7oKrvdRbSe"
              target="_blank"
              rel="noopener noreferrer"
            >
              - JavaScript Apps certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=1j8RWCUWTXSFDJ5IIPOUczoaywo7bv6r1"
              target="_blank"
              rel="noopener noreferrer"
            >
              - JavaScript Advanced certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=1F8ucSa6Flvg97SlxzRWrwuktLGF7NbBC"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Software Technologies certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=1soVYrbq50kOfP7NPRX47nzcTQ-QE3M_h"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Programming Fundamentals certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />

            <a
              href="https://drive.google.com/open?id=1gpYB7-cgm54Cnf5cDiIBve6PXYzmejy3"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Programming Basics certificate{" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
            <br />
          </div>
        </div>
        <br />
        <div className="row text-left">
          <div className="col-md">
            <h5>
              <a
                href="https://www.vfu.bg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Varna Free University (VFU){" "}
                <i
                  className="fas fa-link fa-xs no-print"
                  aria-hidden="true"
                ></i>
              </a>
            </h5>
            <p className="text-gray-650 m-0">
              Bachelor's degree in Computer Science
            </p>
            <p className="text-gray-650 m-0">2016 - 2020</p>
          </div>
          <div className="col-md">
            <span>
              Private University where I took various courses in software
              development and mathematics.
            </span>
            <br />
          </div>
        </div>
        <br />
        <div className="row text-left">
          <div className="col-md">
            <h5>
              <a
                href="https://www.fels-sofia.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                First English Language School (FELS){" "}
                <i
                  className="fas fa-link fa-xs no-print"
                  aria-hidden="true"
                ></i>
              </a>
            </h5>
            <p className="text-gray-650 m-0">
              English and Russian with "Math and IT" profiling
            </p>
            <p className="text-gray-650 m-0">2011 - 2016</p>
          </div>
          <div className="col-md">
            <span>
              Elite highschool with a focus on studying foreign languages.
              Graduated with an excellent marks and a certificate in English.
            </span>
            <br />
            <a
              href="https://drive.google.com/file/d/1SIKXOtxcUaKH1pl_IvIygeNwCs-bUnZj/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Certificate in Advanced English (C2){" "}
              <i className="fas fa-link fa-xs no-print"></i>
            </a>
          </div>
        </div>
      </section>
      <hr />
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
  );
};

export default ResumeEn;
