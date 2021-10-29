import Main from './components/Main/Main';
import CartContext from './components/Contexts/CartContext';

function App() {
  return (
    <CartContext>
      <Main/>
    </CartContext>
  )
}

export default App;
