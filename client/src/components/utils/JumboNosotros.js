import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../../assets/css/JumboMessage.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const JumboNosotros = (props) => {
	return (
		<div id='nosotros' class='mb-5'>
			<Fade>
				<Jumbotron className='jumbo-message' fluid>
					<Container fluid className='text-center'>
						<Zoom class='zoom'>
							<h1 className='jumbo-header'>
								{props.dataTitle}
							</h1>
							<p className='lead jumbo-text'>
								{props.dataText[0]} <br /> {props.dataText[1]}
							</p>
						</Zoom>
					</Container>
				</Jumbotron>
			</Fade>
		</div>
	);
};

export default JumboNosotros;
