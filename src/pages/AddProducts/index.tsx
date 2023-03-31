import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Input } from '../../components/Input';
import schema from '../../validations/schema';

import { FormStyle, Title } from "./styles";

export function AddProducts() {
  const navigate = useNavigate();
  const initialValues = {
      title: '',
      description: '',
      sizes: '',
      weight: undefined,
      cod: undefined,
      category: [''],
      price: undefined,
      acquisition: Date,
      src: '',
  }

  return (
    <>
      <Title>Cadastrar Produto</Title>
      <Formik 
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          api.post('/data', values)
            .then((response) => {
              alert('Produto cadastrado com sucesso!')
              actions.resetForm() 
              navigate('/default/products');
            })
            .catch((err) => {
              alert("Ops! ocorreu um erro" + err);
            });
        }}
        >
          {({values}) => (
          <FormStyle>
            <Input 
              name="title"
              type="text" 
              placeholder="Produto teste" 
              label="Título"
              required
            />
            <Input 
              name="description" 
              type="text"
              placeholder="Produto muito bom ..."
              label="Descrição"
              required
            />
            <Input 
              name="sizes"
              type="text" 
              placeholder="10 x 20 x 30 cm" 
              label="Medidas"
              required
            />
            <Input 
              name="weight"
              type="number" 
              placeholder="10" 
              min="1" 
              label="Peso (kg)"
              required
            />
            <Input 
              name="cod"
              type="number" 
              placeholder="99999"
              min="1"
              label="Código de barras"
              required
            />
            <Input 
              name="category"
              type="text" 
              placeholder="Camisetas, bermudas" 
              label="Categorias"
              required
            />
            <Input 
              name="price"
              type="number" 
              placeholder="59,90"
              label="Valor"
              required
            />
            <Input 
              name="acquisition"
              type="date" 
              placeholder="01/01/2020" 
              label="Data da aquisição"
              required
            />
            <Input 
              name="src"
              type="text" 
              placeholder="meusite.com.br" 
              label="URL da imagem"
              required
            />

            <button type="submit">Cadastrar</button>
          </FormStyle>
        )}
      </Formik>
    </>
  )
}