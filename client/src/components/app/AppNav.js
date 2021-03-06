import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/img/logo-renovado.png';
import '../../assets/css/AppNav.css';
import Scrollchor from 'react-scrollchor';
import BotonNeon from '../utils/BotonNeon';

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

function AppNav(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [classN, setClassN] = useState('');

	const toggle = () => setIsOpen(!isOpen);

	const [isSticky, setSticky] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {
		setSticky(ref.current.getBoundingClientRect().top <= 0);
		const distanceY = window.pageYOffset || document.documentElement.scrollTop;
		const shrinkOn = 200;
		console.log(distanceY);
		console.log(typeof distanceY);

		if (distanceY > shrinkOn) {
			setClassN('smaller');
			console.log(classN);
		} else {
			setClassN('transition-on');
		}

		
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div>
			<Container style={{ fontSize: '1.3rem' }}>
				<div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
					<Navbar
						color='white'
						light
						expand='md'
						className={['navig  sticky-inner ', classN].join('')}
					>
						<NavbarBrand href='/'>
							<img src={logo} alt='efege-logo' className='efege-logo' />
						</NavbarBrand>

						<NavbarToggler onClick={toggle} />
						<Collapse isOpen={isOpen} navbar className='mt-4'>
							<Nav className='ml-auto' navbar>
								<NavItem className='noticias-link'>
									<BotonNeon />
								</NavItem>
								<NavItem>
									<Scrollchor to='#nosotros' className='nav-link'>
										Nosotros
									</Scrollchor>
								</NavItem>
								<NavItem>
									<Scrollchor to='#contacto' className='nav-link'>
										Contacto
									</Scrollchor>
								</NavItem>
								<NavItem>
									<NavLink href='/trabajos' className='nav-link'>
										Trabajos
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			</Container>
		</div>
	);
}

export default AppNav;
