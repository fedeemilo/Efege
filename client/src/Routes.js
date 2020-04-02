import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import AppMain from './components/AppMain';
import AppNosotros from './components/AppNosotros';
import AppContacto from './components/AppContacto';
import AppTrabajos from './components/AppTrabajos';
import CrearNoticia from './components/CrearNoticia';
import ContadorVisitas from './components/utils/ContadorVisitas';
import AppNoticias from './components/AppNoticias';
import Noticia from './components/Noticia';
import VideoMarketing from './components/servicios/VideoMarketing';
import ManejoRedes from './components/servicios/ManejoRedes';
import DiseñoWeb from './components/servicios/DiseñoWeb';


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
			<Route exact path='/contador_visitas' component={ContadorVisitas} />
			<Route exact path='/video_marketing' component={VideoMarketing} />
			<Route exact path='/manejo_redes' component={ManejoRedes} />
			<Route exact path='/diseño_web' component={DiseñoWeb} />
		</Switch>
	);
};

export default Routes;
