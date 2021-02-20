import { Select } from 'antd'

const { Option } = Select

function handleChange(value) {
    console.log(`selected ${value}`)
}

export function Select7() {
    return (
        <>
            <Select
                labelInValue
                defaultValue={{ value: 'lucy' }}
                style={{ width: 120 }}
                onChange={handleChange}
            >
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
            </Select>
        </>
    )
}