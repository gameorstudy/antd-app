import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i=10; i < 36; ++i) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange(value) {
    console.log(`selected ${value}`)
}

export function Select5() {
    return (
        <>
            <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
                {children}
            </Select>
        </>
    )
}