import React from 'react';
import styled from 'styled-components';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'JAVA',
  'C++',
  'Git',
  'Git Hub',
  'MY SQUL',
  'VS Code',
];

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {skill}
          </SkillItem>
        ))}
      </SkillList>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const SkillsTitle = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const SkillItem = styled.div`
  width: 100%;
  max-width: 510px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  background-color: #your-color; /* Set your desired background color here */
`;

export default Skills;
