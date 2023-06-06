import { Divider, Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Mastech } from '@mastech/svgs-icon';
import { menuTypes } from './layout';
const { Sider } = Layout;

function Sidebar({ menuItems }: { menuItems: menuTypes[] }) {
  const [currentBreakPoint, setBreakPoint] = useState('50');
  const [currentMenu, setCurrentMenu] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (e: any) => {
    setCurrentMenu(e.key);
    navigate(`${e.key}`);
  };

  const handleRouteChange = (pathname: string) => {
    const path = pathname.split('/');
    return path[1];
  };

  useEffect(() => {
    const path = handleRouteChange(pathname);
    setCurrentMenu(`/${path}`);
  }, [pathname]);

  return (
    <Sider
      width={250}
      collapsedWidth={currentBreakPoint}
      style={{ backgroundColor: '#FFFFFF' }}
      breakpoint="lg"
      collapsible
      onBreakpoint={(broken) => {
        if (broken) {
          setBreakPoint('0');
        } else {
          setBreakPoint('50');
        }
      }}
    >
      <div className="my-8 flex justify-center">
        <Mastech />
      </div>
      <Divider />
      <Menu
        theme="light"
        selectedKeys={[currentMenu]}
        mode="inline"
        onClick={handleMenuClick}
        items={menuItems}
        style={{ lineHeight: '64px', borderRight: 'none' }}
      />
    </Sider>
  );
}

export default Sidebar;
