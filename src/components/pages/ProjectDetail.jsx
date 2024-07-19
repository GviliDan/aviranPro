import React from 'react';
import { useParams } from 'react-router-dom';
import aviranLogo from '../../assets/images/aviranLogo.png';
import homePageImage from '../../assets/images/homePageImage.webp';
import { Image } from 'antd';

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

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold text-title pt-8 pb-8'>
        {project.title}
      </h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {project.images.map((image, index) => (
          <div className='h-[160px] w-[160px] md:h-[300px] md:w-[330px]' key={index}>
            <Image
              src={image}
              alt={`${project.title} ${index + 1}`}
              className='object-cover '
              height={'100%'}
              width={'100%'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
