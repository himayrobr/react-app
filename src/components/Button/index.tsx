import { ReactNode } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: red;
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};


function Button({ children, isLoading, onClick }: Props) {
  return (
    <Btn
      onClick={onClick}
      disabled={isLoading}
      type="button"
      // className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? 'perate tantito carnal' :children}
    </Btn>
  );
}

export default Button;
