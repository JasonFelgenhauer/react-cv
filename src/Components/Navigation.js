import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='container navigation'>
			<NavLink to='/' activeclassname='active'>
				Home
			</NavLink>
			<NavLink to='/projects' activeclassname='active'>
				Projects
			</NavLink>
		</div>
	);
};

export default Navigation;
