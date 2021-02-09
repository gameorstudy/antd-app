import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export function Input3() {
    return (
        <>
            <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input placeholder="default size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
        </>
    )
}