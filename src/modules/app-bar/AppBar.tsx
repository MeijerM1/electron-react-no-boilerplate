import React from 'react';
import { Button, Space } from 'antd';
import { CloseOutlined, MinusOutlined} from '@ant-design/icons'
import styles from './app-bar.module.less';

export const AppBar = () => (
    <div className={styles.container}>
        <Space>
            <Button size="small" ghost className={styles.appBtn} icon={<MinusOutlined/>} />
            <Button size="small" ghost className={styles.appBtn} icon={<CloseOutlined/>} />
        </Space>
    </div>
)