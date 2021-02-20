import { useState } from 'react'
import { InputNumber, Button } from 'antd'

function onChange(value) {
    console.log(value)
}

export function InputNumber3() {
    const [disabled, setDisabled] = useState(true)
    return (
        <>
            <InputNumber min={1} max={10} defaultValue={3} disabled={disabled} onChange={onChange} />
            <div style={{ marginTop: 16 }}>
                <Button type="primary" onClick={() => setDisabled(!disabled)}>Toggle disabled</Button>
            </div>
        </>
    )
}
