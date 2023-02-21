import { Warning } from "phosphor-react";
import { ErrorContainer } from "./styles";

export const Error = () => {
  return (
    <ErrorContainer>
      <Warning />
      <h2>Ocorreu um erro, tente novamente!</h2>
    </ErrorContainer>
  );
};
