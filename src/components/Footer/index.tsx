import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 BoBo 重构出品"
    links={[
      {
        key: 'BoBo React Admin',
        title: 'BoBo React Admin',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/BoBoooooo',
        blankTarget: true,
      },
      {
        key: 'blog',
        title: 'Blog',
        href: 'https://blog.boboooooo.top/',
        blankTarget: true,
      },
    ]}
  />
);
