import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Media } from 'reactstrap';
import AppNav from '../app/AppNavTrabajos';
import AppFooter from '../app/AppFooter';
import ReactHtmlParser from 'react-html-parser';
import '../../assets/css/Noticia.css';
import { CapitalizeText } from './';

import axios from 'axios';

export default function Noticia(props) {
	const [noticia, setNoticia] = useState({});
	const [url, setUrl] = useState('');

	useEffect(() => {
		const axiosNoticia = async () => {
			await axios
				.get(`/news/${props.match.params.id}`)
				.then((res) => {
					setNoticia(res.data);
					setUrl(res.data.images[0].url);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		axiosNoticia();
	}, [props.match.params.id]);

	return (
		<div>
			<AppNav />
			<Container className='mt-5'>
				<Jumbotron className='text-center' fluid>
					<Container fluid>
						<h2 className=''> {noticia.title} </h2>{' '}
						<h4 className='font-italic text-capitalize'>
							{' '}
							{CapitalizeText(noticia.subtitle)}{' '}
						</h4>{' '}
						<Media className='mx-auto w-75 noti-pic' src={url} />{' '}
						<h5 className='font-italic'>Autor: {noticia.author}</h5>
					</Container>{' '}
				</Jumbotron>{' '}
				<Media body> {ReactHtmlParser(noticia.description)} </Media>{' '}
			</Container>{' '}
			<AppFooter />
		</div>
	);
}
