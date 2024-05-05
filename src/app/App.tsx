import { ConfigProvider, theme } from 'antd';
import classNames from './App.module.scss';
import { UserList } from './components/userlist/UserList';
import { UserRegistration } from './components/userregistration/UserRegistration';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm // 'theme.defaultAlgorithm' for light theme
      }}
    >
      <main className={classNames.main}>
        <UserRegistration />
        <div className={classNames.verticalDivider}></div>
        <UserList />
      </main>
    </ConfigProvider>
  );
}
