import React, { useEffect, useState } from 'react';
import CardProject from '../common/CardProject';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const storageRef = ref(storage, 'פרויקטים');
      const folderRefs = await listAll(storageRef);

      const projectPromises = folderRefs.prefixes.map(async (folderRef) => {
        const folderName = folderRef.name;
        const imageRefs = await listAll(folderRef);
        const firstImageUrl = await getDownloadURL(imageRefs.items[0]);

        return {
          id: folderName,
          title: folderName,
          images: [firstImageUrl],
          route: `/projects/${folderName}`
        };
      });

      const projectData = await Promise.all(projectPromises);
      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  return (
    <div className='flex flex-col items-center md:flex-row gap-8 pt-12 md:flex-wrap md:max-[800px] md:justify-center'>
      {projects.map((project) => (
        <CardProject
          key={project.id}
          title={project.title}
          image={project.images[0]}
          route={project.route}
        />
      ))}
    </div>
  );
}

export default Projects;
