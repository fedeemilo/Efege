import React, { useState, useEffect } from 'react';
import '../../assets/css/AppFooter.css';
import logo from '../../assets/img/logo-renovado.png';
import ubicacion from '../../assets/img/ubicacion.svg';
import telefono from '../../assets/img/telefono.svg';
import correo from '../../assets/img/correo.svg';
import Scrollchor from 'react-scrollchor';
import { Col, Container, Row, Alert } from 'reactstrap';
import { Link, Button, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';


export default function AppFooter() {
	const [isNews, setIsNews] = useState(false);

	useEffect(() => {
		if (navBarCheckNews()) {
			setIsNews(true);
		} else if (navBarCheckWorks()) {
			setIsNews(i => !false);
		}
	}, []);

	// retorna verdadero si la url termina en /noticias
	function navBarCheckNews() {
		let urlString = window.location.href;
		return urlString.indexOf('noticias') > -1;
	}

	// retorna verdadero si la url termina en /trabajos
	function navBarCheckWorks() {
		let urlString = window.location.href;
		return urlString.indexOf('trabajos') > -1;
	}

	if (window.location.href)
		return (
			<div className='footer-efege mt-5'>
				<Alert color='info' className='w-100 mb-3'>
					<div className='d-flex justify-content-center align-items-center'>
						<h5 className='mt-2 font-italic'>
							Si te gusta nuestro trabajo puedes apoyarnos en Ko-fi
						</h5>
						<Button
							href='https://ko-fi.com/B0B61JJNV'
							variant='outlined'
							className='ml-3'
							target='_blank'
						>
							Invítanos un Café <LocalCafeIcon />
						</Button>
					</div>
				</Alert>
				<Container>
					<Row className='mt-4'>
						<Col className='mt-1'>
							<img src={logo} style={{ width: '90px' }} alt='efege-logo' />
							<div className='mt-3 nav-items'>
								{isNews ? (
									<div className='d-flex flex-column'>
										<Link
											href='/'
											style={{
												fontSize: '1.4rem',
												marginTop: '3px'
											}}
										>
											Inicio
										</Link>
										<Link
											href='/trabajos'
											style={{
												fontSize: '1.4rem',
												marginTop: '3px'
											}}
										>
											Trabajos
										</Link>
									
									</div>
								) : null}
								{!isNews ? (
									<div>
										<Scrollchor to='#nosotros' className='nav-links'>
											<p className='ml-2'>Nosotros</p>
										</Scrollchor>
										<Scrollchor to='#contacto' className='nav-links'>
											<p className='ml-2'>Contacto</p>
										</Scrollchor>
										<Scrollchor to='#' className='nav-links'>
											<p className='ml-2'>Trabajos</p>
										</Scrollchor>
									</div>
								) : null}
							</div>
						</Col>
						<Col className='mt-5'>
							<h3 className='mt-3 headers-footer'>Contáctanos</h3>
							<ul className='lista-contacto'>
								<li>
									<img className='icon' src={ubicacion} alt='ubicacion' />
									<p>Buenos Aires, Argentina</p>
								</li>
								<li>
									<img className='icon' src={telefono} alt='telefono' />
									<p>+54 221 308-0328 (24/7 WhastApp)</p>
								</li>
								<li>
									<img className='icon' src={correo} alt='correo' />
									<p>efege.creadores@gmail.com</p>
								</li>
							</ul>
						</Col>
						<Col className='mt-5'>
							<h4 className='mt-3 headers-footer'>
								Seguínos en nuestras redes
							</h4>
							<ul className='lista-contacto redes mt-4 ml-5'>
								<IconButton
									color='primary'
									href='https://bit.ly/2Q2cyYH'
									target='_blank'
								>
									<FacebookIcon fontSize='large' />
								</IconButton>
								<IconButton
									className='ml-5'
									color='secondary'
									href='https://bit.ly/2PYtYW3'
									target='_blank'
								>
									<InstagramIcon fontSize='large' />
								</IconButton>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		);
}
