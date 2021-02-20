import { Avatar } from 'antd'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'

export function Avatar7() {
    return (
        <>
            <Avatar
                size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100
                }}
                icon={<UserOutlined />}
            />
        </>
    )
}