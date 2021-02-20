import { Rate } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

export function Rate7() {
    return (
        <>
            <Rate character={<HeartOutlined />} allowHalf />
            <br />
            <Rate character="A" allowHalf defaultValue={3} />
            <br />
            <Rate character="好" allowHalf defaultValue={2} />
        </>
    )
}