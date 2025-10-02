import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import OrdersPage from './pages/OrdersPage';
import CartDrawer from './components/CartDrawer';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <CartDrawer />
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
