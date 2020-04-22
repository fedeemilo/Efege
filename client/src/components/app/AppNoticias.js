import React, { useState, useEffect } from 'react';
import AppNav from './AppNavTrabajos';
import AppFooter from './AppFooter';
import '../../assets/css/AppNoticias.css';
import '../../assets/css/JumboMessage.css';
import {
	makeStyles,
	createMuiTheme,
	MuiThemeProvider
} from '@material-ui/core/styles';
import {
	Card,
	CardHeader,
	CardMedia,
	CardActions,
	Grid,
	Link,
	CircularProgress,
	Typography
} from '@material-ui/core';
import { Badge } from 'reactstrap';
import axios from 'axios';
import * as moment from 'moment';
import { CapitalizeText } from '../utils';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"'
		].join(',')
	}
});

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 345,
		transition: '0.5s',
		'&:hover': {
			transform: 'scale(1.01)',
			boxShadow: '7px 7px 5px 0px rgba(0,0,0,0.75)',
			cursor: 'pointer'
		},
		margin: 25,
		width: '100%',
		height: '100%'
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
		verticalAlign: 'bottom'
	},
	grid: {
		marginTop: 50,
		marginBottom: 30,
		display: 'flex',
		height: '400px'
	},
	content: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	header: {
		textAlign: 'center',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginTop: '1rem'
	}
}));

function AppNoticias(props) {
	const classes = useStyles();
	const [noticias, setNoticias] = useState([]);
	const [completed, setCompleted] = useState(false);

	function shuffle(arr) {
		let i, j, temp;
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr; 
	}

	useEffect(() => {
		/* Fetch a todas las noticias */
		const axiosNoticias = async () => {
			await axios
				.get('/news')
				.then((res) => {
					let ascendingData = res.data.sort((a, b) => {
						return a - b;
					});

					setNoticias((noticias) => noticias.concat(ascendingData));
					setCompleted(true);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		axiosNoticias();
	}, []);


	/* Obtener la fecha del posteo */
	const obtenerFecha = (noticia) => {
		let dia = moment(noticia.date).get('date');
		let mes = moment(noticia.date).get('month') + 1;
		let año = moment(noticia.date).get('year');
		return `${dia}/${mes}/${año}`;
	};

	/* Noticia card */
	const Noti = (n) => {
		return (
			<Grid lg={4} md={4} sm={6} xs={12} className={classes.grid}>
				<Link href={`/noticias/${n.noticia._id}`}>
					<Card className={classes.root}>
						<Badge color='secondary'>{obtenerFecha(n.noticia)}</Badge>
						<CardMedia
							className={classes.media}
							image={n.noticia.images[0].url}
						/>
						<CardHeader
							title={CapitalizeText(n.noticia.title)}
							className={classes.header}
						/>
					</Card>
				</Link>
			</Grid>
		);
	};

	/* Mapear y listar todas las provincias */
	const listNoticias = () => {
		return noticias.map((currentNoticia) => {
			return (
				<Noti
					className='contenedor-noticia'
					key={currentNoticia._id}
					noticia={currentNoticia}
					theme={theme}
				/>
			);
		});
	};

	return (
		<MuiThemeProvider theme={theme}>
			<AppNav />
			{!completed ? (
				<div className='d-flex justify-content-center mb-5'>
					<CircularProgress color='primary' />
				</div>
			) : null}
			<Grid container>{listNoticias()}</Grid>
			<AppFooter />
		</MuiThemeProvider>
	);
}

export default AppNoticias;
