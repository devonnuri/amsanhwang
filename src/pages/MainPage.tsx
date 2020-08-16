import React from 'react';
import styled from 'styled-components';

import MenuCard from '../components/main/MenuCard';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  flex: 2;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;
  }
`;


const MainPage: React.FC = () => {
  return (
    <MainContainer>
      <MenuContainer>
        <MenuCard
          header="특수각에 대한 삼각함수"
          description="삼각함수 특수각을 빠르게 계산해봅시다."
          to="/trig_angle"
        />
        <MenuCard
          header="호도법, 60분법 변환"
          description="호도법과 60분법을 빠르게 변환해봅시다."
          to="/"
        />
      </MenuContainer>
    </MainContainer>
  );
}

export default MainPage;