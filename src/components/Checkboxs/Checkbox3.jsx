import { Checkbox } from 'antd'

export function Checkbox3() {
    return (
        <>
            <Checkbox defaultChecked={false} disabled />
            <br />
            <Checkbox defaultChecked disabled />
        </>
    )
}