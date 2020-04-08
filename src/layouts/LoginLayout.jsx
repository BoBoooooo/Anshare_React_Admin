import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, connect } from 'umi';
import React from 'react';
import styles from './LoginLayout.less';

const UserLayout = props => {
  // 拿到路由中的子组件
  const {
    children,
  } = props;

  return (
    <HelmetProvider>
      <Helmet>
        <title>欢迎使用 BoBo’s React Admin</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src="https://blog.boboooooo.top/avatar.jpg" />
                <span className={styles.title}>BoBo‘s React Admin</span>
              </Link>
            </div>
            <div className={styles.desc}>Email:boboooooo159@gmail.com</div>
          </div>
          {children}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
