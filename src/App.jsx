import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Usuarios from './pages/usuarios/Usuarios'
import Salas from './pages/salas/Salas'
import Empresas from './pages/empresas/Empresas'
import Midias from './pages/midias/Midias'
import Home from './pages/home/Home'
import Cad_empresas from './pages/empresas/Cad_empresas'
import Cad_midias from './pages/midias/Cad_midias'
import Cad_salas from './pages/salas/Cad_salas'
import Cad_usuarios from './pages/usuarios/Cad_usuarios'

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/salas' element={<Salas />} />
        <Route path='/empresas' element={<Empresas />} />
        <Route path='/midias' element={<Midias />} />
        <Route path='/empresas/cadastroempresas' element={<Cad_empresas />} />
        <Route path='/midias/cadastromidias' element={<Cad_midias/>} />
        <Route path='/salas/cadastrosalas' element={<Cad_salas />} />
        <Route path='/usuarios/cadastrousuarios' element={<Cad_usuarios />} />
      </Routes>
    </div>
  )
}

export default App
