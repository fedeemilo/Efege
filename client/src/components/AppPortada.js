import React from 'react';
import { VideoPortada } from '../assets/videos/efege-portada.mp4';
import { Player } from 'video-react';
import '../assets/css/AppPortada.css';

export default function AppPortada() {
	return (
		<div className='mt-5'>
			<div className='container-video'>
				<video autoPlay muted loop id='myVideo'>
					<source
						src='http://ringofox.agency/efege/videos/efege-portada-web.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
		</div>
	);
}
