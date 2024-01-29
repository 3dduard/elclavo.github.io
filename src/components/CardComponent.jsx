import React from 'react'

export default function CardComponent() {
	return (
		<div className='card'>
			<div className='card-header'>Nombre de la terminal</div>
			<div className='card-body'>
				<table className='table'>
					<tbody>
						<tr>
							<td scope='row'>Procesador</td>
							<td>
								Intel(R) Core(TM) i5-6500 CPU @ 3.20GHz 3.19 GHz
							</td>
						</tr>
						<tr>
							<td scope='row'>Ram</td>
							<td>8.00 GB (7.88 GB utilizable)</td>
						</tr>
						<tr>
							<td scope='row'>Id. Del dispositivo</td>
							<td>A0CF9844-1198-4DBC-8EC9-B746628441AC</td>
						</tr>
						<tr>
							<td scope='row'>Id del producto</td>
							<td>00330-50681-79801-AAOEM</td>
						</tr>
						<tr>
							<td scope='row'>Tipo de sistema</td>
							<td>Windows 10 Pro, 64 bits</td>
						</tr>
						<tr>
							<td scope='row'>Se instalo el </td>
							<td>23/03/2022</td>
						</tr>
						<tr>
							<td scope='row'>Modelo</td>
							<td>HP Prodesk</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
