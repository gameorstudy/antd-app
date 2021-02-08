import { useState } from 'react'
import { Checkbox, Button } from 'antd'

export function Checkbox4() {
    const [checked, setChecked] = useState(true)
    const [disabled, setDisabled] = useState(false)

    function toggleChecked() {
        setChecked(!checked)
    }

    function toggleDisabled() {
        setDisabled(!disabled)
    }

    function onChange(e) {
        console.log(`checked = ${checked}`)
        setChecked(e.target.checked)
    }

    const label = `${checked ? 'Checked' : 'Unchecked'} - ${disabled ? 'Disabled' : 'Enabled'}`

    return (
        <>
            <p style={{ marginBottom: '20px' }}>
                <Checkbox
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                >
                    {label}
                </Checkbox>
            </p>
            <p>
                <Button type="primary" size="small" onClick={toggleChecked}>
                    {checked ? 'UnChecked' : 'Checked'}
                </Button>
                <Button
                    style={{ margin: '0 10px' }}
                    type="primary"
                    size="small"
                    onClick={toggleDisabled}>
                    {disabled ? 'Enabled' : 'Disabled'}
                </Button>
            </p>
        </>
    )
}