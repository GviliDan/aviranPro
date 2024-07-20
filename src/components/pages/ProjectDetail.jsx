import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectImages, setProjectImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const projectRef = ref(storage, `פרויקטים/${projectId}`);
        setProjectTitle(projectId);

        const imageRefs = await listAll(projectRef);
        const imageUrls = await Promise.all(
          imageRefs.items.map((item) => getDownloadURL(item))
        );

        setProjectImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project details:', error);
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectImages.length) {
    return <div>Project not found</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold text-title pt-8 pb-8'>
        {projectTitle}
      </h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {projectImages.map((image, index) => (
          <div
            className='h-[160px] w-[160px] md:h-[300px] md:w-[330px]'
            key={index}
          >
            <Image
              src={image}
              alt={`${projectTitle} ${index + 1}`}
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
