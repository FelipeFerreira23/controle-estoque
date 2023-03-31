import { Title, Button, DivButton } from './styles';

export function Home() {
  return (
    <div>
      <Title>Olá, tudo bem? 👋</Title>
      <Title>O que você gostaria de fazer hoje?</Title>

      <DivButton>
        <Button to={'/default/products'}>Listar os produtos</Button>
        <Button to={'/default/add'} primary>Cadastrar novos produtos</Button>
      </DivButton>
    </div>
  )
}