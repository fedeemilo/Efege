import React from 'react';
import { Jumbotron, NavLink } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import BotonNeon from '../utils/BotonNeon';
import CardComplex from './CardComplex';



export default function JumboNoticias() {
	return (
		<div className='mt-3' style={{ marginBottom: '2.3rem' }}>
			<Jumbotron className='mb-n5' style={{ background: '#fff' }}>

					<h1
						className='jumbo-header text-center'

					>
						Nuestra sección de noticias
					</h1>

				<p
					className='lead jumbo-text text-center'

				>
					Te mostramos noticias e información alternativa.
				</p>
				<CardComplex />
			</Jumbotron>
		</div>
	);
}
