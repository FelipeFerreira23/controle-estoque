import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEdit, FaRegWindowClose } from "react-icons/fa";

import { List, Title, Button } from "./styles";

import api from "../../api";

export interface ProductProps {
  id: number
  title: string
  description: string
  sizes: string
  weight: number
  cod: number
  category: string[]
  price: number
  acquisition: string
  src: string
}

export function ListProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [updateList, setUpdateList] = useState<boolean>(false);
  const navigate = useNavigate();
  
  function currencyFormat(num: number) {
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  useEffect(() => {
    onLoad();
  }, [updateList]);

  async function onLoad() {
    await api.get('/data')
      .then((response) => {
        setProducts(response.data);
      });
  }

  function onEdit(id: number) {
    navigate(`/default/edit/${id}`)
  }

  async function onDelete(id: number) {
    await api.delete(`/data/${id}`)
    setUpdateList(!updateList)
  }

  return (
    <>
      <Title>Lista de Produtos</Title>
      <List>
      {products.map(product => {
        return (
          <li key={product.id}>
            <div>
              <img src={product.src} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p className="price">{currencyFormat(product.price)}</p>
            </div>

            <div className="buttons">
              <Button onClick={() => {onEdit(product.id)}}><FaEdit fontSize={24} />Editar</Button>
              <Button onClick={() => {onDelete(product.id)}}><FaRegWindowClose fontSize={24} />Deletar</Button>
            </div>
          </li>
        )
      })}
      </List>
    </>
  )
}