import React, { useState } from 'react';
import logo from '../assets/img/logo-renovado.png';
import home from '../assets/img/home.svg';
import '../assets/css/AppNav.css';
import Button from '@material-ui/core/Button';
import BotonNeon from './utils/BotonNeon';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

function AppNavTrabajos(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Container>
				<Navbar color='white' light expand='md' className='navig sticky-inner'>
					<NavbarBrand href='/'>
						<img src={logo} alt='efege-logo' className='efege-logo' />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar className='mt-5'>
						<Nav className='ml-auto' navbar>
							<NavItem style={{position: 'relative', bottom: '1.2rem', left: '3rem'}}>
								<BotonNeon />
							</NavItem>
							<NavItem>
								<NavLink href='/'>
									<img className='w-25 float-right mt-n4' src={home} />
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</Container>
		</div>
	);
}

export default AppNavTrabajos;
