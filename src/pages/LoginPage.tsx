import React from 'react';
import styled from 'styled-components';
import { MdPerson, MdVpnKey } from 'react-icons/md';

import TextInput from '../components/common/TextInput';
import media from '../lib/styles/media';
import Button from '../components/common/Button';
import useInputs from '../lib/hooks/useInputs';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  height: 100%;
`;

const FormContainer = styled.div`
  width: 50%;
  ${media.medium} {
    width: 100%;
  }

  div + div {
    margin-top: 1rem;
  }
`;

const LoginPage: React.FC = () => {
  const [state, onChange] = useInputs({
    id: '',
    password: '',
  });

  return (
    <LoginContainer>
      <FormContainer>
        <h1>환영합니다! <span role="img" aria-label="흔드는 손">👋</span></h1>
        <TextInput
          icon={<MdPerson size="1.2rem"/>}
          placeholder="아이디"
          name="id"
          value={state.id}
          onChange={onChange} />
        <TextInput
          icon={<MdVpnKey size="1.2rem"/>}
          type="password"
          placeholder="비밀번호"
          name="password"
          value={state.password}
          onChange={onChange} />
        <Button size="small">로그인</Button>
      </FormContainer>
    </LoginContainer>
  );
}

export default LoginPage;