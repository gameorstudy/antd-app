import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export function Avatar6() {
    return (
        <>
            <span className="avatar-item">
                <Badge count={1}>
                    <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
            </span>
            <span>
                <Badge dot>
                    <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
            </span>
        </>
    )
}