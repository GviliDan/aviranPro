import { useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';

const DrawerMenu = ({ open, onClose }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
    onClose();
  };

  return (
    <Drawer
      placement='left'
      closable={false}
      onClose={onClose}
      open={open}
      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
      className='flex flex-col items-center justify-center'
    >
      <div
        className='flex flex-col items-center justify-center h-full space-y-4 text-3xl font-medium gap-3'
        lang='en'
      >
        <button onClick={() => handleNavigation('/about-us')}>ABOUT US</button>
        <button onClick={() => handleNavigation('/working-process')}>
          WORKING PROCESS
        </button>
        <button onClick={() => handleNavigation('/projects')}>PROJECTS</button>
        <button onClick={() => handleNavigation('/contact-us')}>
          CONTACT US
        </button>
        <button onClick={() => handleNavigation('/gallery')}>GALLERY</button>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
