import React from 'react';
import styled from 'styled-components';

import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import LinkButton from '../components/common/LinkButton';

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
    flex: 0 0 0;
    margin: 1rem 0;
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
        <Button size="medium">로그인</Button>
        <RegisterTypo>
          아직 회원이 아니신가요?
          <LinkButton>회원가입</LinkButton>
        </RegisterTypo>
      </ButtonSet>
    </WelcomeContainer>
  );
}

export default Welcome;