import { Tag } from 'antd'
import {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
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
            <Tag icon={<LinkedinOutlined />}>
                LinkedIn
            </Tag>
        </>
    )
}