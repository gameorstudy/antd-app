import { useState } from 'react'
import { Radio, Button } from 'antd'

export function Radio3() {
    const [disabled, setDisabled] = useState(true)

    return (
        <>
            <Radio disabled={disabled}>Disabled</Radio>
            <Radio defaultChecked disabled={disabled}>Disabled</Radio>
            <br />
            <Button type="primary" onClick={() => setDisabled(!disabled)} style={{ marginTop: '16px' }}>Toggle disabled</Button>
        </>
    )
}