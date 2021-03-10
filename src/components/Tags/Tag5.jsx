import { Tag } from 'antd'
import {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedOutlined,
} from '@ant-design/icons'

export function Tag5() {
    return (
        <>
            <Tag icon={<TwitterOutlined />}>
                Twitter
            </Tag>
            <Tag icon={<YoutubeOutlined />}>
                Youtube
            </Tag>
            <Tag icon={<FacebookOutlined />}>
                Facebook
            </Tag>
            <Tag icon={<LinkedOutlined />}>
                LinkedIn
            </Tag>
        </>
    )
}