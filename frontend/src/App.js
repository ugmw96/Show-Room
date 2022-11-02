import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import NewProductForm from './pages/products/NewProductForm';
import Product from './pages/products/Product';
import Users from './pages/users/Users';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/products' element={<Product/>}/>
      </Routes>
      <Routes>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      <Routes>
        <Route path='/newProduct' element={<NewProductForm/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
