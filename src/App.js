import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout';
import Edit from './pages/Edit';
import Add from './pages/Add';
import Delete from './pages/Delete';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/edit' element={<Edit />} />
          <Route index element={<Add />} />
          <Route path='/add' element={<Add />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
