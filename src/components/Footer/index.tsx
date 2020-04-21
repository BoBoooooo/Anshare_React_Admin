import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2019 蚂蚁金服体验技术部出品"
    links={[
      {
        key: 'Wiki',
        title: 'Wiki',
        href: 'wiki.anshare.com.cn ',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://https://github.com/BoBoooooo',
        blankTarget: true,
      },
      {
        key: 'Blog',
        title: 'Blog',
        href: 'https://blog.boboooooo.top/',
        blankTarget: true,
      },
    ]}
  />
);
