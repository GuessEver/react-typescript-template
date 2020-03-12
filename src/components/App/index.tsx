import React from 'react';
import { Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.redTextColor}>This is a red text with css module example</div>
      <Tag color="blue">Antd 4 available</Tag>
      <div>
        <span>And example for antd-icons</span>
        <SearchOutlined />
      </div>
    </div>
  );
};

export default App;
