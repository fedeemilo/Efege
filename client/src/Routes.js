import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { EditarNoticia, CrearNoticia, Noticia} from './components/utils';
import {AppMain, AppNosotros, AppContacto, AppTrabajos, AppNoticias} from './components/app';

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
			<Route exact path='/editar_noticia/:id' component={EditarNoticia} />
		</Switch>
	);
};

export default Routes;
