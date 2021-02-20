import { useState } from 'react'
import { Switch, Button } from 'antd'

export function Switch5() {
    const [disabled, setDisabled] = useState(true)

    return (
        <>
            <Switch disabled={disabled} />
            <br />
            <Button type="primary" onClick={() => setDisabled(!disabled)}>Toggle disabled</Button>
        </>
    )
}