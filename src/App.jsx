import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import OrdersPage from './pages/OrdersPage';
import CartSheet from './components/CartSheet';
import { useAppContext } from './context/AppContext';

function App() {
  const { isCartOpen } = useAppContext();

  return (
    <>
      <Header />
      {isCartOpen && <CartSheet />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
