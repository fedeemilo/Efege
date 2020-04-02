import React from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	Container,
	Jumbotron
} from 'reactstrap';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	}
}));

export default function CrearNoticia() {
	const classes = useStyles();

	function handleClick(e) {
		console.log(e);
	}

	function handleSubmit(e) {
		console.log(e);
	}

	return (
		<div className=''>
			<Jumbotron className='mt-5 mx-5'>
				<Container>
					<h1 className='text-center mb-4'>Subir Noticia</h1>
					<Form
						action='/news/add'
						method='POST'
						encType='multipart/form-data'
						onSubmit={handleSubmit}
					>
						<FormGroup row>
							<Label for='title' sm={2}>
								Título
							</Label>
							<Col sm={10}>
								<Input
									type='text'
									name='title'
									placeholder='Ingrese el título'
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for='subtitle' sm={2}>
								Subtítulo
							</Label>
							<Col sm={10}>
								<Input
									type='text'
									name='subtitle'
									placeholder='Ingrese el subtítulo'
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for='description' sm={2}>
								Texto/Contenido
							</Label>
							<Col sm={10}>
								<Input
									type='textarea'
									name='description'
									placeholder='Ingrese una descripción'
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={2}>
								<Label>Imágen</Label>
							</Col>
							<Col sm={10}>
								<input
									accept='images/*'
									name='images'
									className={classes.input}
									id='icon-button-file'
									multiple
									type='file'
								/>
								<label htmlFor='icon-button-file'>
									<Button
										variant='contained'
										color='primary'
										component='span'
										startIcon={<PhotoCamera />}
									>
										Upload
									</Button>
								</label>
								<FormText color='muted'>
									Puede ingresar hasta 4 imágenes en una subida.
								</FormText>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for='description' sm={2}>
								Autor
							</Label>
							<Col sm={10}>
								<Input
									type='text'
									name='author'
									placeholder='Ingrese el nombre del autor'
								/>
							</Col>
						</FormGroup>
						<Button
							type='submit'
							variant='contained'
							color='default'
							className={classes.button}
							endIcon={<Icon>send</Icon>}
						>
							Subir
						</Button>
					</Form>
				</Container>
			</Jumbotron>
		</div>
	);
}
