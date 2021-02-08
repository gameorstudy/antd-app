import { Checkbox } from 'antd'

function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
}

export function Checkbox2() {
    return (
        <>
            <Checkbox onChange={onChange}></Checkbox>
        </>
    )
}