import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './Sidebar';

const { Header, Content } = Layout;

export type menuTypes = {
  icon: React.ReactNode;
  label: string;
  key: string;
};
/* eslint-disable-next-line */
export interface LayoutProps {
  menu: menuTypes[];
}

export function AppLayout(props: LayoutProps) {
  const { menu } = props;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar menuItems={menu} />
      <Layout style={{ backgroundColor: ' #F4F7FE' }}>
        <Header style={{ background: 'transparent', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>{<Outlet />}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
