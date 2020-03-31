import { Form } from 'antd';
import React, { useState } from 'react';
import useMergeValue from 'use-merge-value';
import classNames from 'classnames';
import LoginContext from './LoginContext';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';
import styles from './index.less';

const Login = (props) => {
  const { className } = props;
  const [active, setActive] = useState({});
  const [type] = useMergeValue('', {
    value: props.activeKey,
    onChange: props.onTabChange,
  });
  const otherChildren = [];
  React.Children.forEach(props.children, (child) => {
    if (!child) {
      return;
    }
    otherChildren.push(child);
  });
  return (
    <LoginContext.Provider
      value={{
        updateActive: (activeItem) => {
          if (!active) return;

          if (active[type]) {
            active[type].push(activeItem);
          } else {
            active[type] = [activeItem];
          }

          setActive(active);
        },
      }}
    >
      <div className={classNames(className, styles.login)}>
        <Form
          form={props.from}
          onFinish={(values) => {
            if (props.onSubmit) {
              props.onSubmit(values);
            }
          }}
        >
          {props.children}
        </Form>
      </div>
    </LoginContext.Provider>
  );
};

Login.Submit = LoginSubmit;
Login.UserName = LoginItem.UserName;
Login.Password = LoginItem.Password;
export default Login;
