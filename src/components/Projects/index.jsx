import React from 'react';
import styled from 'styled-components';

const ProjectItem = styled.li`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 24px;
  margin: 20px; /* Add margin between cards */
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 16px;
`;

const Projects = ({ projects }) => {
  // Limit to showing only four projects
  // const projectsToShow = projects.slice(0, 4);

  return (
    <div>
      {projectsToShow.map((project, index) => (
        <ProjectItem key={index}>
          <ProjectImage src={project.image} alt={project.title} />
        </ProjectItem>
      ))}
    </div>
  );
};

export default Projects;
