import React from "react";

const ProjectsListItem = ({ title, project: projectData }) => {
  const {
    company,
    project,
    description,
    date,
    link,
    repoLink,
    stack,
    responsibilities,
  } = projectData;

  console.log(description);

  const colStyles = title.includes("Professional")
    ? {
        leftCol: "col-md-4",
        rightCol: "col-md-8",
      }
    : {
        leftCol: "col-md",
        rightCol: "col-md",
      };

  return (
    <>
      <div className="row text-left">
        <div className={colStyles.leftCol}>
          <h5>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {company} <i className="fas fa-link fa-xs no-print"></i>
              </a>
            ) : (
              <p>{company}</p>
            )}
          </h5>
          <p className="text-gray-650 m-0">{project}</p>
          <p className="text-gray-650 m-0">{date}</p>
          <p className="text-gray-650 m-0">
            {stack.map((stackItem, index) => null)}
          </p>
          {repoLink && (
            <p className="text-gray-650 m-0">
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                {repoLink} {""}
                <i className="fas fa-link fa-xs no-print"></i>
              </a>
            </p>
          )}
          <span className="text-gray-650 m-0 text-center">
            <ul className="skill-list">
              {stack.map((stackItem, index) => (
                <li className="skill-list-box-item" key={index}>
                  {stackItem}
                </li>
              ))}
            </ul>
          </span>
        </div>
        <div className={colStyles.rightCol}>
          <p>{description.toString()}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectsListItem;
