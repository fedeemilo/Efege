import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Container, Row, Col, Media } from 'reactstrap';
import { Paper, Typography } from '@material-ui/core';
import videoDos from '../../assets/img/video-marketing-2.png';
import videoTres from '../../assets/img/video-marketing-3.png';
import videoCuatro from '../../assets/img/video-marketing-4.png';
import {AppNav, AppFooter} from '../app';

const styles = {
	videoHeader: {
		fontSize: '8vw',
		fontWeight: '700'
	},
	textHeader: {
		fontSize: '4.2vw'
	},
	textVideo: {
		fontSize: '2.4vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '200px',
		margin: '0 auto'
	},
	column: {
		marginTop: '10rem'
	}
};

 export default function ManejoRedes() {
	return (
		<div>
			<AppNav />
			<Zoom>
				<Paper elevation={3} className='text-center mt-5 w-50 mx-auto'>
					<Typography variant='h2' gutterBottom style={styles.videoHeader}>
						REDES SOCIALES
						
					</Typography>
				</Paper>
				<Container className='mt-5'>
					<Media style={styles.mediaVideo}>
						<Row>
							<Col xs='12' md='12' lg='6' className='media-pic-1'>
								<Media left href='#'>
									<Zoom>
										<Media
											key='0001'
											object
											className='media-nosotros'
											src={videoCuatro}
											alt='Generic placeholder image'
										/>
									</Zoom>
								</Media>
							</Col>
							<Col xs='12' md='12' lg='6' style={styles.column}>
								<Media body className='text-center' style={styles.textVideo}>
									<Media
										heading
										className='color-brand'
										style={styles.textHeader}
									>
										Ver antes que leer
									</Media>
									Hoy en día muchas personas prefieren ver antes que leer, y es
									por eso que realizamos videos que logren impactar al usuario.
								</Media>
							</Col>
						</Row>
					</Media>
					<Media tag='li' className='mt-5'>
						<Row className='mt-5 fila-del-medio'>
							<Col className='mt-5 text-center' xs='12' md='12' lg='6'>
								<Media body style={styles.textVideo}>
									<Media
										heading
										className='color-brand'
										style={styles.textHeader}
									>
										Aumentar la productividad
									</Media>
									La gente tiende a compartir más los videos, por lo cual se
									puede lograr con mayor facilidad su viralización y así poder
									aumentar la productividad de tus campañas publicitarias.
								</Media>
							</Col>
							<Col className='media-pic-1' xs='12' md='12' lg='6'>
								<Media href='#' className='media-pic-2'>
									<Zoom>
										<Media
											object
											src={videoDos}
											className='media-nosotros'
											alt='Generic placeholder image'
										/>
									</Zoom>
								</Media>
							</Col>
						</Row>
					</Media>
					<Media className='mt-5'>
						<Row className='mt-5 mb-5'>
							<Col xs='12' md='12' lg='6' className='media-pic-1'>
								<Media left href='#'>
									<Zoom>
										<Media
											object
											className='media-nosotros'
											src={videoTres}
											alt='Generic placeholder image'
										/>
									</Zoom>
								</Media>
							</Col>
							<Col xs='12' md='12' lg='6' className='text-center mt-5'>
								<Media body style={styles.textVideo}>
									<Media
										className='text-content color-brand'
										style={styles.textHeader}
										heading
									>
										Reforzar la demanda
									</Media>
									Los videos influyen directamente en la desición de compra de
									los usuarios, es por eso que los mismos refuerzan la demanda
									de los productos que uno ofrece ya que el 90% de los
									internautas ven videos online.
								</Media>
							</Col>
						</Row>
					</Media>
				</Container>
			</Zoom>
			<AppFooter />
		</div>
	);
}

