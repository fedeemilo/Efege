import React from 'react';
import trabajosUno from '../../assets/img/efege-trabajo-cosas-ricas.jpeg';
import trabajosDos from '../../assets/img/flyer-cosas-ricas-3.png';
import trabajosTres from '../../assets/img/flyer-cosas-ricas-2.png';
import trabajosCuatro from '../../assets/img/flyer-cosas-ricas-1.png';
import trabajosCinco from '../../assets/img/efege-flyer-7.png';
import trabajosSeis from '../../assets/img/efege-flyer-8.png';
import trabajosSiete from '../../assets/img/efege-flyer-9.png';
import trabajosOcho from '../../assets/img/efege-flyer-10.png';
import trabajosNueve from '../../assets/img/efege-flyer-14.png';
import trabajosDiez from '../../assets/img/efege-flyer-15.png';
import '../../assets/css/Trabajos.css';
import Zoom from 'react-reveal/Zoom';
import Divider from '@material-ui/core/Divider';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import 'animate.css/animate.css';

import { Container, Row, Col, Media, Button } from 'reactstrap';

export default function Trabajos() {
	return (
		<Container>
			<Row>
				<Col xs='12' md='12' lg='6' className='col-media-trabajos'>
					<Media left>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Logo Cosas Ricas</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={-100}
									defaultPositionY={200}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '84%' }}
													src={trabajosUno}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>
					</Media>
				</Col>
				<Col xs='12' md='12' lg='6' className='col-media-trabajos'>
					<Media right className='float-right'>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>
									Flyer Cosas Ricas 1
								</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={-100}
									defaultPositionY={200}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosDos}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>
					</Media>
				</Col>
			</Row>
			<Row>
				<Col xs='12' md='12' lg='6' className='col-media-trabajos'>
					<Media left>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>
									Flyer Cosas Ricas 2
								</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosCuatro}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>
					</Media>
				</Col>
				<Col xs='12' md='12' lg='6' className='col-media-trabajos'>
					<Media right className='float-right'>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>
									Flyer Cosas Ricas 3
								</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosTres}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>
					</Media>
				</Col>
			</Row>
			<Row>
				<Col xs='12' sm='12' lg='6' className='col-media-trabajos'>
					<Media left>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Flyer Efege 1</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosCinco}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>{' '}
					</Media>
				</Col>
				<Col xs='12' sm='12' lg='6' className='col-media-trabajos'>
					<Media right className='float-right'>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Flyer Efege 2</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosSeis}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>{' '}
					</Media>
				</Col>
			</Row>
			<Row>
				<Col xs='12' sm='12' lg='6' className='col-media-trabajos'>
					<Media left>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Flyer Efege 3</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosSiete}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>{' '}
					</Media>
				</Col>
				<Col xs='12' sm='12' lg='6' className='col-media-trabajos'>
					<Media right className='float-right'>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Flyer Efege 4</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosOcho}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>{' '}
					</Media>
				</Col>
			</Row>
			<Row>
				<Col xs='12' sm='12' lg='6' className='col-media-trabajos'>
					<Media left>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Flyer Efege 5</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosNueve}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>{' '}
					</Media>
				</Col>
				<Col xs='12' sm='12' lg='6' className='col-media-trabajos'>
					<Media right className='float-right'>
						<Zoom>
							<div className='text-center'>
								<h4 className='mt-4 mb-3 header-trabajo'>Flyer Efege 6</h4>
							</div>
							<div className='contenedor-trabajos'>
								<TransformWrapper
									defaultScale={1}
									defaultPositionX={100}
									defaultPositionY={100}
								>
									{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
										<React.Fragment>
											<div className='tools p-1 mb-2 text-center'>
												<Button
													onClick={zoomIn}
													className='m-2 font-weight-bolder'
												>
													+
												</Button>
												<Button
													onClick={zoomOut}
													className='m-2 font-weight-bolder'
												>
													-
												</Button>
												<Button
													onClick={resetTransform}
													className='m-2 font-weight-bolder'
												>
													x
												</Button>
											</div>
											<TransformComponent className='text-center'>
												<Media
													key='0001'
													object
													className='text-center mx-auto'
													style={{ borderRadius: '10px', width: '76%' }}
													src={trabajosDiez}
													alt='Generic placeholder image'
												/>
											</TransformComponent>
										</React.Fragment>
									)}
								</TransformWrapper>
							</div>
						</Zoom>{' '}
					</Media>
				</Col>
			</Row>
			{/* línea divisora */}
			<Divider />
		</Container>
	);
}
