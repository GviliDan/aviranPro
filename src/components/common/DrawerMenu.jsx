import { useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';
import { Routes, PageTitles } from '../../enums';

const DrawerMenu = ({ open, onClose }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
    onClose();
  };

  return (
    <Drawer
      placement='left'
      closable={true}
      onClose={onClose}
      open={open}
      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
      className='custom-drawer flex flex-col items-center justify-center'
    >
      <div
        className='flex flex-col items-center justify-center h-full space-y-4 text-3xl font-medium gap-3 text-title'
        lang='en'
      >
        <button onClick={() => handleNavigation(Routes.ABOUT_US)}>
          {PageTitles.ABOUT_US}
        </button>
        <button onClick={() => handleNavigation(Routes.WORKING_PROCESS)}>
          {PageTitles.WORKING_PROCESS}
        </button>
        <button onClick={() => handleNavigation(Routes.PROJECTS)}>
          {PageTitles.PROJECTS}
        </button>
        <button onClick={() => handleNavigation(Routes.CONTACT_US)}>
          {PageTitles.CONTACT_US}
        </button>
        <button onClick={() => handleNavigation(Routes.GALLERY)}>
          {PageTitles.GALLERY}
        </button>
        <button onClick={() => handleNavigation(Routes.PRESENTATION)}>
          {PageTitles.PRESENTATION}
        </button>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
