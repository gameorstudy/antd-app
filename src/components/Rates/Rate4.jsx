import { useState } from 'react'
import { Rate } from 'antd'

export function Rate4() {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

    const [value, setValue] = useState(3)

    const handleChange = value => {
        setValue(value)
    }

    return (
        <>
            <span>
                <Rate tooltips={desc} onChange={handleChange} value={value} />
                { value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </span>
        </>
    )
}