import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
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
    </Layout>
  );
}

export default App;
