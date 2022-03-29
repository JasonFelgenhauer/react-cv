import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
	const [playOnce, setPlayOnce] = useState(true);
	const [hardSkills, setHardSkills] = useState([]);
	const [softSkills, setSoftSkills] = useState([]);

	useEffect(() => {
		if (playOnce) {
			axios.get('http://game01-dc03.ouiheberg.com:3000/hardskills').then((res) => {
				setHardSkills(res.data.data);
			});
			axios.get('http://game01-dc03.ouiheberg.com:3000/softskills').then((res) => {
				setSoftSkills(res.data.data);
			});
			setPlayOnce(false);
		}
	}, [playOnce]);
	return (
		<div className='container skills'>
			<div className='skills_top'>
				<h4>Tecnichal skills</h4>
				<ul>
					{hardSkills.map((a) => (
						<li key={a.id}>{a.hskills_name}</li>
					))}
				</ul>
			</div>
			<div className='skills_bottom'>
				<h4>Soft skills</h4>
				<ul>
					{softSkills.map((a) => (
						<li key={a.id}>{a.sskills_name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Skills;
