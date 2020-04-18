import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { JumboNosotros, JumboContacto, JumboNoticias, Slideshow, Cards } from '../utils'
import { AppNosotros, AppContacto, AppFooter, AppNav } from './';

export default function AppMain() {
	const text1 = 'ayudamos a los clientes a resolver problemas comerciales ';
	const text2 = 'fusionando creatividad, innovación, estrategia y arte.';
	const text3 = 'para poder proveerte de más información sobre nuestro trabajo';
	const text4 = 'y responder cualquier pregunta que puedas tener.';

	return (
		<div>
			<AppNav />
			<Slideshow />
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
