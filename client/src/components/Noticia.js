import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Media } from 'reactstrap';
import AppNav from '../components/AppNavTrabajos';
import AppFooter from '../components/AppFooter';
import ReactHtmlParser from 'react-html-parser';
import '../assets/css/Noticia.css';

import axios from 'axios';

export default function Noticia(props) {
	const [noticia, setNoticia] = useState({});
	const [url, setUrl] = useState('');

	let noticiaId = props.match.params.id;

	useEffect(() => {
		axiosNoticia();
	}, []);

	async function axiosNoticia() {
		await axios
			.get(`/news/${noticiaId}`)
			.then((res) => {
				console.log(res.data);
				console.log(typeof res.data);
				console.log(res.data.images[0].url);

				setNoticia(res.data);
				setUrl(res.data.images[0].url);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<AppNav />
			<Container className='mt-5'>
				<Jumbotron className='text-center' fluid>
					<Container fluid>
						<h2 className=''>{noticia.title}</h2>
						<h4 className='font-italic text-capitalize'>{noticia.subtitle}</h4>
						<Media className='mx-auto w-75' src={url} />
					</Container>
				</Jumbotron>
				<Media body>
					{ReactHtmlParser(noticia.description)}
				</Media>
			</Container>
            <AppFooter />
		</div>
	);
}
