import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import TextButton from '../components/common/TextButton';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  height: 100%;
`;

const Typo = styled.div`
  flex: 2;
  display: inline-flex;
  flex-direction: column;
    justify-content: center;
  font-size: 5em;
  p {
    margin: 0;
  }
`;

const RegisterTypo = styled.div`
  margin-top: 1rem;
  font-size: 1.3em;
  flex: 1;

  & > div {
    margin-left: 0.4rem;
  }
`;

const ButtonSet = styled.div`
  flex: 1;
`;

const Welcome: React.FC = () => {
  return (
    <WelcomeContainer>
      <Logo/>
      <Typo>
        <p><b>급식 메뉴</b>부터</p>
        <p><b>방과후 신청</b>까지</p>
      </Typo>
      <ButtonSet>
        <Link to="/login">
          <Button size="medium">로그인</Button>
        </Link>
        <RegisterTypo>
          아직 회원이 아니신가요?
          <TextButton>회원가입</TextButton>
        </RegisterTypo>
      </ButtonSet>
    </WelcomeContainer>
  );
}

export default Welcome;