import { useState } from 'react'
import { Radio } from 'antd'

export function Radio5() {
    const [value, setValue] = useState(1)

    const onChange = e => {
        console.log('radio changed', e.target.value)
        setValue(e.target.value)
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
    }

    return (
        <>
            <Radio.Group onChange={onChange} value={value}>
                <Radio style={radioStyle} value={1}>Option A</Radio>
                <Radio style={radioStyle} value={2}>Option B</Radio>
                <Radio style={radioStyle} value={3}>Option C</Radio>
                <Radio style={radioStyle} value={4}>Option D</Radio>
            </Radio.Group>
        </>
    )
}