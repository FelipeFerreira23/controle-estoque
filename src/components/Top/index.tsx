import { FaHome } from 'react-icons/fa';
import { Button, DivButton, Wrapper } from './styles';

export function Top() {
  return (
    <Wrapper>
      <p>Controle de Estoque</p>
      <DivButton>
        <Button to={'/'} title='Voltar para a tela inicial'><FaHome /></Button>
      </DivButton>
    </Wrapper>
  )
}