import { Tooltip } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { connect } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';


const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <Tooltip title="github">
        <a
          target="_blank"
          href="https://github.com/BoBoooooo"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <GithubOutlined />
        </a>
      </Tooltip>
      <Avatar />
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
