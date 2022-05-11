import React from "react";
import ProjectsListItem from "./ProjectsListItem";

const ProjectsList = ({ title, projects }) => {
  return (
    <section className="pagebreak">
      <h3 className="text-gray-700">{title}:</h3>
      {projects.map((project, index) => (
        <ProjectsListItem key={index} project={project} title={title} />
      ))}
    </section>
  );
};

export default ProjectsList;
