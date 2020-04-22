import React from 'react';
import play from '../../assets/img/boton-de-play.svg';
import redes from '../../assets/img/redes-sociales.svg';
import laptop from '../../assets/img/laptop.svg';
import Zoom from 'react-reveal/Zoom';
import '../../assets/css/Cards.css';

import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle
} from 'reactstrap';

const buttonColor = 'linear-gradient(45deg, #30869F 30%, #12b09e 90%)';

const Cards = (props) => {
	

	return (
		<div>
			<Container className='cards-container'>
				<Row>
					<Col xs='12' sm='4'>
						<Zoom>
							<Card style={{ border: 'none' }} className='mt-5 text-center'>
								<CardImg
									top
									style={{ width: '30%', margin: '0 auto' }}
									src={play}
									alt='Card image cap'
								/>
								<CardBody>
									<CardTitle className='text-uppercase' style={{ fontWeight: '700', fontSize: '120%' }}>
										Video Marketing
									</CardTitle>
									<CardText
										className='font-italic'
										style={{ fontSize: '120%' }}
									>
										Hacemos videos comerciales, institucionales o empresariales
										para que puedas mostrar al mundo tu empresa.
									</CardText>
									
								</CardBody>
							</Card>
						</Zoom>
					</Col>
					<Col xs='12' sm='4'>
						<Zoom>
							<Card style={{ border: 'none' }} className='mt-5 text-center'>
								<CardImg
									top
									style={{ width: '30%', margin: '0 auto' }}
									src={redes}
									alt='Card image cap'
								/>
								<CardBody>
									<CardTitle className='text-uppercase'  style={{ fontWeight: '700', fontSize: '120%' }}>
										Redes Sociales
									</CardTitle>
									<CardText
										className='font-italic'
										style={{ fontSize: '120%' }}
									>
										Mejoramos la imagen de tu marca haciéndola más conocida con
										nuestros servicios de community management.
									</CardText>
					
								</CardBody>
							</Card>
						</Zoom>
					</Col>
					<Col xs='12' sm='4'>
						<Zoom>
							<Card style={{ border: 'none' }} className='mt-5 text-center'>
								<CardImg
									top
									style={{ width: '30%', margin: '0 auto' }}
									src={laptop}
									alt='Card image cap'
								/>
								<CardBody>
									<CardTitle className='text-uppercase'  style={{ fontWeight: '700', fontSize: '120%' }}>
										Diseño Web
									</CardTitle>
									<CardText
										className='font-italic'
										style={{ fontSize: '120%' }}
									>
										Desarrollamos sitios web con diseños personalizados acorde a
										los objetivos y la visión de tu negocio.
									</CardText>
					
								</CardBody>
							</Card>
						</Zoom>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Cards;
