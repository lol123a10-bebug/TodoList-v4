import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const BaseButton: React.FC<ButtonHTMLAttributes<any>> = (props) => {
  const { type = "button", children, ...attrs } = props;

  return (
    <Button type={type} {...attrs}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ccc;

  &:hover {
    background-color: #bbb;
  }

  &:active {
    background-color: #eee;
  }
`;

export default BaseButton;
