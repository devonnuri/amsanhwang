import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: left; */
  outline: none;
  border: none;
  border-radius: 10px;

  background-color: white;
  padding: 1rem;
`;

const CardHeader = styled.h3`
  margin: 0;
`;

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  header: string;
  description: string;
  to: string;
}

const MenuCard: React.FC<CardProps> = ({ header, description, to }) => {
  return (
    <Link to={to}>
    <CardContainer>
      <CardHeader>{header}</CardHeader>
      <p>{description}</p>
    </CardContainer>
    </Link>
  );
}

export default MenuCard;