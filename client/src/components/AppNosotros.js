import React from 'react';
import nosotrosUno from '../assets/img/nosotros-1.webp';
import nosotrosDos from '../assets/img/nosotros-2.webp';
import nosotrosTres from '../assets/img/nosotros-3.jpg';
import '../assets/css/AppNosotros.css';
import Zoom from 'react-reveal/Zoom';
import 'animate.css/animate.css';

import { Container, Row, Col, Media } from 'reactstrap';

export default function AppNosotros() {
	return (
		<Container>
			<Media className='contenedor-nosotros'>
				<Row>
					<Col xs='12' md='12' lg='6' className='media-pic-1'>
						<Media left href='#'>
							<Zoom>
								<Media
									key='0001'
									object
									className='media-nosotros'
									src={nosotrosUno}
									alt='Generic placeholder image'
								/>
							</Zoom>
						</Media>
					</Col>
					<Col xs='12' md='12' lg='6'>
						<Media body className='text-center text-adjust'>
							<Media heading className='color-brand font-weight-bold'>
									Nuestro equipo
							</Media>
							logra entablar una relación fluida y de comunicación directa
							con el cliente, teniendo siempre en cuenta los requerimientos del
							mismo durante la totalidad del proceso creativo.
						</Media>
					</Col>
				</Row>
			</Media>

			<Media tag='li' style={{marginTop: '15rem'}}>
				<Row className='mt-5 fila-del-medio'>
					<Col xs='12' md='12' lg='6' >'
						<Media body className='media-text text-center text-adjust w-100'>
							<Media heading className='color-brand font-weight-bold'>
								Somos Creativos
							</Media>
							y elaboramos nuevas ideas para tu producto, con especial atención al
							detalle en pos de construir un diseño creativo y original.
						</Media>
					</Col>
					<Col className='media-pic-1' xs='12' md='12' lg='6'>
						<Media href='#' className='media-pic-2'>
							<Zoom>
								<Media
									object
									src={nosotrosDos}
									className='media-nosotros'
									alt='Generic placeholder image'
								/>
							</Zoom>
						</Media>
					</Col>
				</Row>
			</Media>

			<Media style={{marginTop: '15rem'}}>
				<Row className='mt-5 mb-5'>
					<Col xs='12' md='12' lg='6' className='media-pic-1'>
						<Media left href='#'>
							<Zoom>
								<Media
									object
									className='media-nosotros'
									src={nosotrosTres}
									alt='Generic placeholder image'
								/>
							</Zoom>
						</Media>
					</Col>
					<Col xs='12' md='12' lg='6'>
						<Media body className='text-center text-adjust'>
							<Media className='text-content color-brand mt-5 font-weight-bold' heading>
								Diseñamos
							</Media>
							pensando en lograr alinear tus productos y/o
							servicios a tu audiencia y objetivos.
						</Media>
					</Col>
				</Row>
			</Media>
		</Container>
	);
}
