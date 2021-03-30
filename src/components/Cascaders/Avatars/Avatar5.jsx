import { Avatar, Image } from 'antd'
import { UserOultined, UserOutlined } from '@ant-design/icons'

export function Avatar5() {
    return (
        <>
            <Avatar icon={<UserOutlined />} />
            <Avatar>U</Avatar>
            <Avatar size={40}>USER</Avatar>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar
                src={<Image src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />} />
            <Avatar
                style={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf'
                }}
            >
                U
            </Avatar>
            <Avatar
                style={{
                    backgroundColor: '#87d068'
                }}
                icon={<UserOutlined />}
            />
        </>
    )
}