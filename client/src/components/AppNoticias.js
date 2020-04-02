import React, { useState, useEffect } from 'react';
import { Container, Media } from 'reactstrap';
import AppNav from './AppNavTrabajos';
import AppFooter from './AppFooter';
import '../assets/css/AppNoticias.css';
import axios from 'axios';
import StackGrid from 'react-stack-grid';
import sizeMe from 'react-sizeme';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../assets/css/JumboMessage.css';
import JumboNoticias from './utils/JumboNoticias';

function AppNoticias(props) {
	const [noticias, setNoticias] = useState([]);
	const [width, setWidth] = useState('');
	const [capitalizeSub, setCapitalizeSub] = useState('');

	useEffect(() => {
		setWidth(props.size.width);
		axiosNoticias();
	}, []);

	async function axiosNoticias() {
		await axios
			.get('/news')
			.then((res) => {
				setNoticias((noticias) => noticias.concat(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function Noti(noticias) {
		// capitalize subtitle
		let notiSubtitle = noticias.noticia.subtitle;
		if (notiSubtitle[0] == '¿') {
			notiSubtitle =
				notiSubtitle.charAt(0) +
				notiSubtitle[1].toUpperCase() +
				notiSubtitle.slice(2).toLowerCase();
		} else {
			notiSubtitle =
				notiSubtitle.charAt(0).toUpperCase() +
				notiSubtitle.slice(1).toLowerCase();
		}

		return (
			<div className='mt-5 p-3'>
				<h2 className='text-uppercase text-center w-75 mx-auto'>
					{noticias.noticia.title}
				</h2>
				<h5 className='text-center font-italic'>{notiSubtitle}</h5>

				{noticias.noticia.images.map((img) => {
					return (
						<div className='contenedor-imagen-noticias'>
							<Media href={'/noticias/' + noticias.noticia._id}>
								<Media className='imagen-noticia' src={img.url} />
							</Media>
							<p className='font-italic mt-1'>
								Autor: {noticias.noticia.author}
							</p>
						</div>
					);
				})}
			</div>
		);
	}

	function listNoticias() {
		return noticias.map((currentNoticia) => {
			return (
				<Noti
					className='contenedor-noticia'
					key={currentNoticia._id}
					noticia={currentNoticia}
				/>
			);
		});
	}

	return (
		<div>
			<AppNav />
			<JumboNoticias />
			<Container>
				<StackGrid columnWidth={width <= 768 ? '100%' : '45%'}>
					{listNoticias()}
				</StackGrid>
			</Container>
			<AppFooter />
		</div>
	);
}

export default sizeMe()(AppNoticias);
