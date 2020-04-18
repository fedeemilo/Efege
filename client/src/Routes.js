import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import EditarNoticia from './components/utils/EditarNoticia';
import AppMain from './components/app/AppMain';
import AppNosotros from './components/app/AppNosotros';
import AppContacto from './components/app/AppContacto';
import AppTrabajos from './components/app/AppTrabajos';
import CrearNoticia from './components/utils/CrearNoticia';
import AppNoticias from './components/app/AppNoticias';
import Noticia from './components/utils/Noticia';

import {VideoMarketing, ManejoRedes, DiseñoWeb} from './components/services';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={AppMain} />
			<Route exact path='/nosotros' component={AppNosotros} />
			<Route exact path='/contacto' component={AppContacto} />
			<Route exact path='/trabajos' component={AppTrabajos} />
			<Route exact path='/crear_noticia' component={CrearNoticia} />
			<Route exact path='/noticias' component={AppNoticias} />
			<Route exact path='/noticias/:id' component={Noticia} />
			<Route exact path='/video_marketing' component={VideoMarketing} />
			<Route exact path='/manejo_redes' component={ManejoRedes} />
			<Route exact path='/diseño_web' component={DiseñoWeb} />
			<Route exact path='/editar_noticia/:id' component={EditarNoticia} />
		</Switch>
	);
};

export default Routes;
