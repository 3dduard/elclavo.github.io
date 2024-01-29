import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/HomePage'
import NotFoud from './pages/NotFoudPage'

import Bodega from './pages/Sucursales/BodegaPage'
import CaminoReal from './pages/Sucursales/CaminoRealPage'
import Contabilidad from './pages/Sucursales/ContabilidadPage'
import Indeco from './pages/Sucursales/IndecoPage'
import Miramar from './pages/Sucursales/MiramarPage'
import Morelos from './pages/Sucursales/MorelosPage'
import Paya from './pages/Sucursales/PayaPage'
import Sep from './pages/Sucursales/SepPage'
import Sur from './pages/Sucursales/SurPage'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sucursal/*'>
					<Route path='bodega' element={<Bodega />} />
					{/*
          <Route path='Morelos' element={<CaminoReal />} />
					<Route path='Bodega' element={<Contabilidad />} />
					<Route path='Camino-Real' element={<Indeco />} />
					<Route path='Payas' element={<Miramar />} />
					<Route path='Sep' element={<Morelos />} />
					<Route path='Miramar' element={<Paya />} />
					<Route path='Sur' element={<Sep />} />
					<Route path='5-De-Mayo' element={<Sur />} />
           */}
				</Route>
				<Route path='*' element={<NotFoud />} />
			</Routes>
		</BrowserRouter>
	)
}
