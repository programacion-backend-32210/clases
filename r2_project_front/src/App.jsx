import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/products')
      .then(response => response.json())
      .then(result => {
        console.log("Result", result.data)
        setData(result.data)
      })
      .catch(e => {
        console.error('Fallo', e)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>

      <table>
        <thead>
          <tr>
            <td><strong>Producto</strong></td>
            <td><strong>Descripción</strong></td>
            <td><strong>Precio</strong></td>
            <td><strong>Código</strong></td>
            <td><strong>Stock</strong></td>
            <td><strong>Categoría</strong></td>
          </tr>
        </thead>
        <tbody>

          {data.docs && data.docs.map((product) => {
            return (<tr key={product.id}>
              <td>{product.title} </td>
              <td>{product.description} </td>
              <td>{product.price} </td>
              <td>{product.code} </td>
              <td>{product.stock} </td>
              <td>{product.category} </td>
            </tr>)
          })}
        </tbody>

      </table>
      <hr />
      <nav aria-label="Page navigation example">
        {
          data.hasPrevPage && <i className="page-link" >Anterior</i>
        }
        <i className="page-link">{data.page ? data.page : 0} </i>

        {
          data.hasNextPage && <i className="page-link" >Siguiente</i>
        }
      </nav>
    </div>
  );
}

export default App;
