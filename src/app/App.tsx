import { ConfigProvider, theme } from 'antd';
import classNames from './App.module.scss';
import { UserList } from './components/userlist/UserList';
import { UserRegistrationForm } from './components/userregistrationform/UserRegistrationForm';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm // 'theme.defaultAlgorithm' for light theme
      }}
    >
      <main className={classNames.main}>
        <UserRegistrationForm />
        <div className={classNames.verticalDivider}></div>
        <UserList />
      </main>
    </ConfigProvider>
  );
}
