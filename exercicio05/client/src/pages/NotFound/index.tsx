/* eslint-disable react/react-in-jsx-scope */

import { Container } from "./styles";

export function NotFound(): JSX.Element {
  return (
    <Container>
      <p>
        Está pagina não foi encontrada, por favor verifique a url ou tente
        voltar para a dashboard.
      </p>
    </Container>
  );
}
