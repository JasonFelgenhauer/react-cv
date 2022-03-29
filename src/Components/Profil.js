import Navigation from '../Components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
	return (
		<div className='container profil'>
			<div className='profil_top'>
				<img src='https://jason-fel.be/hostedimg/gif-logo.gif' alt='gif web developer' />
				<h3>Jason Felgenhauer</h3>
			</div>
			<div className='profil_center'>
				<Navigation />
			</div>
			<div className='profil_bottom'>
				<ul className='container'>
					<li>
						<a href='https://www.linkedin.com/in/jason-felgenhauer-944525207/'>
							<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a href='https://github.com/JasonFelgenhauer'>
							<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a href='https://codepen.io/Mr__Wigy'>
							<FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a href='https://jason-fel.be'>
							<FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profil;
