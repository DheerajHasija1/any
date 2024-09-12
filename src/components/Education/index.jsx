import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  max-width: 800px;
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

const EducationCard = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) =>
    theme.card}; /* Use the same background as your theme */
  border: 0.1px solid #854ce6; /* Use the same border as your previous cards */
  border-radius: 16px; /* Use the same border radius as your previous cards */
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 20px;
  margin: 20px 0;
`;

const School = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Degree = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const Education = () => {
  const educationData = [
    {
      school: "Chitkara University",
      degree: "Bachelor of Science in Computer Science",
      date: "Undergraduate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue justo at mauris aliquet, a bibendum massa ultrices. Nam id justo vel ante sollicitudin tincidunt. Fusce vitae massa et elit eleifend tempus.",
    },
    {
      school: "Mukat Public School",
      degree: "83%",
      date: "Completed in 2021",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed elit risus. Sed id laoreet justo. Nam eleifend massa a ligula malesuada laoreet.",
    },
    {
      school: "Mukat Public School",
      degree: "84%",
      date: "Completed in 2019",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed elit risus. Sed id laoreet justo. Nam eleifend massa a ligula malesuada laoreet.",
    },
  ];

  const Title = styled.h1`
    font-size: 40px;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
    margin: 10px 0;
  `;
  return (
    <Container>
      <Wrapper>
        <Title id="Education">Education</Title>
        {educationData.map((education, index) => (
          <EducationCard key={index}>
            <School>{education.school}</School>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
            <Description>{education.description}</Description>
          </EducationCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Education;
