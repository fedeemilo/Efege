import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../../assets/css/Slideshow.css';

const zoomOutProperties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	scale: 0.4,
	arrows: true
};

const Slideshow = () => {
	return (
		<div className='slide-container'>
			<Fade {...zoomOutProperties}>
				<div className='each-slide'>
					<div className='slide-background-1'>
						<div className='bg'></div>
						<div className='content-slide'>
							<span
								className='content-slide-1 text-uppercase'
								style={{ fontSize: '4.3rem' }}
							>
								Soluciones Digitales
							</span>
							<h4
								className='text-center'
								
							>
								que se adaptan a tu negocio
							</h4>
						</div>
					</div>
				</div>
				<div className='each-slide'>
					<div className='slide-background-2'>
						<div className='bg'></div>
						<div className='content-slide'>
							<span
								className='content-slide-2 text-uppercase'
								style={{ fontSize: '4.3rem' }}
							>
								Mejoramos tu marca
							</span>
							<h4
								className='text-center'
								
							>
								con un trabajo prolijo y eficiente
							</h4>
						</div>
					</div>
				</div>
				<div className='each-slide'>
					<div className='slide-background-3'>
						<div className='bg'></div>
						<div className='content-slide'>
							<span
								className='content-slide-3 text-uppercase'
								style={{ fontSize: '4.3rem' }}
							>
								Creamos contenido
							</span>
							<h4
								className='text-center'
								
							>
								minimalista, simple y atractivo
							</h4>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Slideshow;
