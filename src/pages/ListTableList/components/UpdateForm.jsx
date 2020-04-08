import React from 'react';
import { Modal } from 'antd';

const UpdateForm = props => {
  const {  onCancel,updateModalVisible } = props;
  return (
    <Modal
      destroyOnClose
      title="编辑用户"
      visible={updateModalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;
