import React from 'react';
import AppNavTrabajos from './AppNavTrabajos';
import JumboNosotros from './utils/JumboNosotros';
import Trabajos from './utils/Trabajos';
import AppFooter from './AppFooter';

export default function AppTrabajos() {
	const text1 = 'Te mostramos varios ejemplos de nuestros diseños';
	const text2 = '';
	return (
		<div>
			<AppNavTrabajos />
			<JumboNosotros dataTitle='Nuestros Trabajos' dataText={[text1, text2]} />
			<Trabajos />
			<AppFooter />
		</div>
	);
}
