import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Project = () => {
	const [project, setProject] = useState([]);
	const [playOnce, setPlayOnce] = useState(true);

	useEffect(() => {
		if (playOnce) {
			axios.get('http://game01-dc03.ouiheberg.com:3000/projects').then((res) => {
				setProject(res.data.data);
				setPlayOnce(false);
			});
		}
	}, [playOnce]);
	return (
		<div className='container project'>
			{project.map((a) => (
				<div key={a.id} className='project_card'>
					<div className='project_card_top'>
						<img src={a.project_img} alt={a.project_name} />
					</div>
					<div className='project_card_center container'>
						<h3>{a.project_name}</h3>
						<p>{a.project_desc}</p>
						<a href={a.project_demo} target='_blank' rel='noreferrer'>
							See
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Project;
