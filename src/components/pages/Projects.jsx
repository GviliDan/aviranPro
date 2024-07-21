import React, { useEffect, useState } from 'react';
import CardProject from '../common/CardProject';
import { storage, ref, listAll, getDownloadURL } from '../../firebase';
import Loader from '../common/Loader';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const storageRef = ref(storage, 'פרויקטים');
      const folderRefs = await listAll(storageRef);

      const projectPromises = folderRefs.prefixes.map(async (folderRef) => {
        const folderName = folderRef.name;
        const mainImageFolderRef = ref(storage, `${folderRef.fullPath}/תמונה ראשית`);
        const imageRefs = await listAll(mainImageFolderRef);

        if (imageRefs.items.length > 0) {
          const firstImageUrl = await getDownloadURL(imageRefs.items[0]);

          return {
            id: folderName,
            title: folderName,
            images: [firstImageUrl],
            route: `/projects/${folderName}`
          };
        } else {
          return {
            id: folderName,
            title: folderName,
            images: ['/path/to/default/image.jpg'],  
            route: `/projects/${folderName}`
          };
        }
      });

      const projectData = await Promise.all(projectPromises);
      setProjects(projectData);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
