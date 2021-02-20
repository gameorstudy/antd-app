import { Switch } from 'antd'

function onChange(checked) {
    console.log(`switch to ${checked}`)
}

export function Switch2() {
    return (
        <>
            <Switch defaultChecked onChange={onChange} />
        </>
    )
}