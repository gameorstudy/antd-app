import { useState } from 'react'
import { Badge, Space, Switch } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

export const Badge6 = () => {
    const [show, setShow] = useState(true)

    return (
        <>
            <Space>
                <Switch
                    checked={show}
                    onChange={() => setShow(!show)}
                />
                <Badge count={show ? 25 : 0} />
                <Badge count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0} />
                <Badge count={show ? 4 : 0} className='site-badge-conut-4' />
                <Badge
                    className="site-badge-count-109"
                    count={show ? 109 : 0}
                    style={{ backgroundColor: '#52c41a' }}
                />
            </Space>
        </>
    )
} 