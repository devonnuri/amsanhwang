import React from 'react';
import styled from 'styled-components';

const TextInputContainer = styled.div<{ isIcon: boolean; }>`
  display: flex;
  position: relative;
  align-items: center;
  height: 3.25rem;

  font-size: 1em;
  background: #FFF;
  box-shadow: rgba(51, 51, 51, 0.1) 0px 0px 0px 1px inset;
  border-radius: 4px;
  
  svg {
    position: absolute;
    left: 1rem;
    color: #909090;
  }

  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding-left: ${props => props.isIcon ? '3rem' : '1rem'};
    padding-top: 1rem;
    box-sizing: border-box;

    background: transparent;
    border-style: none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
  }

  label {
    position: absolute;
    top: 50%;
    left: ${props => props.isIcon ? '3rem' : '1rem'};
    pointer-events: none;

    color: #909090;
    transition: 0.2s ease all;
    transform: translateY(-50%);
    transform-origin: left top;
  }

  input:focus + label,
  input:not(:focus):valid + label {
    transform: scale(0.75) translateY(-50%) translateY(-14px);
  }
`;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface TextInputProps extends InputProps {
  icon?: JSX.Element;
  placeholder: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
}

const TextInput: React.FC<TextInputProps> = ({ icon, placeholder, name, type, value, onChange }) => {
  return (
    <TextInputContainer isIcon={!!icon}>
      { icon }
      <input
        type={type || 'text'}
        name={name}
        onChange={onChange}
        value={value}
        required />
      <label>{placeholder}</label>
    </TextInputContainer>
  );
}

export default TextInput;