import { useState } from 'react'
import { DatePicker, Radio, Space } from 'antd'

const { RangePicker } = DatePicker

export function DatePicker6() {
    const [size, setSize] = useState('default')

    return (
        <>
            <Space direction="vertical" size={12}>
                <Radio.Group value={size} onChange={e =>setSize(e.target.value)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <DatePicker size={size} />
                <DatePicker size={size} picker="month" />
                <RangePicker size={size} />
                <DatePicker size={size} picker="week" />
            </Space>
        </>
    )
}