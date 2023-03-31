import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import { Input } from '../../components/Input';
import { ProductProps } from '../ListProducts';
import schema from '../../validations/schema';

import { FormStyle, Title } from "../AddProducts/styles";

export function EditProduct() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/data/${id}`)
      .then((response) => {
        setProducts(response.data);
      });
    }, []);

  return (
    <>
      <Title>Editar Produto</Title>
      <Formik 
        enableReinitialize={true}
        initialValues={products}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          api.put(`/data/${id}`, values)
            .then((response) => {
              alert('Produto atualizado com sucesso!');
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

            <button type="submit">Atualizar</button>
          </FormStyle>
        )}
      </Formik>
    </>
  )
}