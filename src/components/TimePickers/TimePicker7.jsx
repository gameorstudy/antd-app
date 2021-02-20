import React, {useState} from 'react'
import { TimePicker } from 'antd'

export function TimePicker7() {
    const [value, setValue] = useState(null)

    const onChange = time => {
        setValue(time)
    }

    return (
        <>
            <TimePicker value={value} onChange={onChange} />
        </>
    )
}