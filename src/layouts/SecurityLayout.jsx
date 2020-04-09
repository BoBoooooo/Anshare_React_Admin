import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { Redirect, connect } from 'umi';

class SecurityLayout extends React.Component {
  state = {
    isReady: false,
  };
  
  componentDidMount() {
    this.setState({
      isReady: true,
    });
  }

  render() {
    const { isReady } = this.state;
    const { children, loading } = this.props; 
    // 此处判断token是否存在,存在则表示已经登录,否则重定向到登录页
    const isLogin = sessionStorage.getItem('auth');

    if ((!isLogin && loading) || !isReady) {
      return <PageLoading />;
    }

    if (!isLogin && window.location.pathname !== '/user/login') {
      return <Redirect to="/user/login" />;
    }

    return children;
  }
}

export default connect(({ user, loading }) => ({
  loading: loading.models.user,
}))(SecurityLayout);
