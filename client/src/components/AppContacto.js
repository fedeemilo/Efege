import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Container,
	Alert
} from 'reactstrap';

import Button from '@material-ui/core/Button';

export default function AppContacto() {
	const [email, setEmail] = useState('');
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [enviado, setEnviado] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {});

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}

	function handleChangeName(e) {
		setNombre(e.target.value);
	}

	function handleChangeLastName(e) {
		setApellido(e.target.value);
	}

	function handleChangeMessage(e) {
		setMensaje(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		var inpEmail = document.getElementById('email');
		var inpNombre = document.getElementById('nombre');
		var inpApellido = document.getElementById('apellido');
		var inpMensaje = document.getElementById('mensaje');

		await axios
			.post('/send', {
				email,
				nombre,
				apellido,
				mensaje
			})
			.then((res) => {
				console.log(res);
				setEnviado(true);
			})
			.catch((err) => {
				if (err.response) {
					setError(true);
					console.log(err);
				}
			});
		inpEmail.value = '';
		inpNombre.value = '';
		inpApellido.value = '';
		inpMensaje.value = '';

		setTimeout(() => {
			setEnviado(false);
		}, 3000);
	}

	return (
		<div
			id='contacto'
			style={{
				background: '#fff',
				paddingTop: '20px',
				paddingBottom: '40px'
			}}
		>
			{error ? (
				<Alert className='w-75 mx-auto' color='danger'>
					Lo sentimos, ha habido un error en el envío del mensaje.
				</Alert>
			) : null}
			{enviado ? (
				<Alert className='w-75 mx-auto' color='success'>
					Gracias por tu mensaje, nos comunicaremos con usted a la brevedad!
				</Alert>
			) : null}
			<Container
				className='w-75'
				style={{
					border: '1px solid #3696E9',
					padding: '50px',
					borderRadius: '10px',
					background: 'white'
				}}
			>
				<Form onSubmit={handleSubmit}>
					<FormGroup row>
						<Label for='email' sm={2}>
							Email
						</Label>
						<Col sm={10}>
							<Input
								type='email'
								name='email'
								id='email'
								placeholder='Ingresa tu correo'
								onChange={(e) => handleChangeEmail(e)}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for='nombre' sm={2}>
							Nombre
						</Label>
						<Col sm={10}>
							<Input
								type='text'
								name='nombre'
								id='nombre'
								placeholder='Ingresa tu nombre'
								onChange={(e) => handleChangeName(e)}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for='apellido' sm={2}>
							Apellido
						</Label>
						<Col sm={10}>
							<Input
								type='text'
								name='apellido'
								id='apellido'
								placeholder='Ingresa tu apellido'
								onChange={(e) => handleChangeLastName(e)}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for='mensaje' sm={2}>
							Mensaje
						</Label>
						<Col sm={10}>
							<Input
								type='textarea'
								name='text'
								id='mensaje'
								onChange={(e) => handleChangeMessage(e)}
							/>
						</Col>
					</FormGroup>
					<Button variant='contained' className='float-right'>
						Enviar
					</Button>
				</Form>
			</Container>
			
		</div>
	);
}
