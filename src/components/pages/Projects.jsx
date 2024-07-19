import React from 'react';
import homePageImage from '../../assets/images/homePageImage.webp';
import CardProject from '../common/CardProject';
import aviranLogo from '../../assets/images/aviranLogo.png';

const projects = [
  {
    id: '1',
    title: 'ISRAEL',
    images: [aviranLogo, aviranLogo, aviranLogo, aviranLogo],
  },
  {
    id: '2',
    title: 'ITALY',
    images: [homePageImage, homePageImage, homePageImage, homePageImage],
  },
];

function Projects() {
  return (
    <div className='flex flex-col items-center md:flex-row gap-8 pt-12 md:flex-wrap md:max-[800px] md:justify-center'>
      {projects.map((project) => (
        <CardProject
          key={project.id}
          title={project.title}
          image={project.images[0]}
          route={`/projects/${project.id}`}
        />
      ))}
    </div>
  );
}

export default Projects;
