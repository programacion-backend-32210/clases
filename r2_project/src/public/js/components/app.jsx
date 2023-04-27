const useState = React.useState
const useEffect = React.useEffect
const useCallback = React.useCallback

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchData = useCallback(async() => {
    const result = await fetch(`/api/products?page=${page}`).then(response => response.json())

    setData(result.data)
    setPage(result.data.page)
  }, [page])


  useEffect(() => {
    fetchData && fetchData()
  }, [fetchData])


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
          data.hasPrevPage && <button className="page-link" onClick={() => setPage(page - 1)} >Anterior</button>
        }

        {[...Array(data.totalPages)].map((x, i) => 
          <button className="page-link" onClick={() => setPage(i + 1)} >{i + 1} </button>
        )}

        {
          data.hasNextPage && <button className="page-link" onClick={() => setPage(page + 1)} >Siguiente</button>
        }
      </nav>
    </div>
  );
}
