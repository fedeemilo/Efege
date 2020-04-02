import React, { useEffect } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import AppNav from './AppNav';
import JumboNosotros from './utils/JumboNosotros';
import JumboContacto from './utils/JumboContacto';
import JumboNoticias from './utils/JumboNoticias';
import Cards from './utils/Cards';
import Slideshow from './utils/Slideshow';
import AppNosotros from './AppNosotros';
import AppContacto from './AppContacto';
import AppFooter from './AppFooter';
import AppPortada from './AppPortada';
import axios from 'axios';


export default function AppMain() {
	const text1 = 'ayudamos a los clientes a resolver problemas comerciales ';
	const text2 = 'fusionando creatividad, innovación, estrategia y arte.';
	const text3 = 'para poder proveerte de más información sobre nuestro trabajo';
	const text4 = 'y responder cualquier pregunta que puedas tener.';

	useEffect(() => {
		mensajeAlServer();
	}, []);

	async function mensajeAlServer() {
		await axios
			.get('/api')
			.then((res) => {
				console.log(res.data);
				console.log('Iniciando en el sitio..');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<AppNav />
			<AppPortada />
			{/* <Slideshow /> */}
			<Cards />
			<JumboNoticias />
			<JumboNosotros dataTitle='Nosotros' dataText={[text1, text2]} />
			<AppNosotros />
			
			<JumboContacto dataTitle='Contáctanos' dataText={[text3, text4]} />
			<AppContacto />
			<ScrollUpButton
				style={{ width: 60, background: '#2196F3', outline: 'none' }}
				ToggledStyle={{ right: 50 }}
			/>
			<AppFooter />
		</div>
	);
}
