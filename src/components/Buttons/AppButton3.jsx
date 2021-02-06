import { Button, Radio } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useState } from 'react'

export function AppButton3() {
    const [size, setSize] = useState('large')

    return (
        <>
            <Radio.Group className="mb-2" value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <div className="mb-2">
                <Button className="mr-2" size={size} type="primary">Primary</Button>
                <Button className="mr-2" size={size}>Default</Button>
                <Button className="mr-2" size={size} type="Dashed">Dashed</Button>
                <Button size={size} type="link">Link</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2" type="primary" size={size} icon={ <DownloadOutlined />} />
                <Button className="mr-2" type="primary" size={size} shape="circle" icon={ <DownloadOutlined />} />
                <Button type="primary" size={size} shape="round" icon={ <DownloadOutlined />} />
            </div>
            <Button className="mr-2" shape="round" type="primary" size={size} icon={<DownloadOutlined />}>Download</Button>
            <Button className="mr-2" type="primary" size={size} icon={<DownloadOutlined />}>Download</Button>
        </>
    )
}