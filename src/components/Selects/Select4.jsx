import { Select } from 'antd'

const { Option } = Select

function handleChange(value) {
    console.log(`selected ${value}`)
}

export function Select4() {
    return (
        <>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={['China']}
                onChange={handleChange}
                optionLabelProp="label"
            >
                <Option value="China" label="China">
                    <div className="demo-option-label-item">
                        <span role="img" aria-label="China">
                            🇨🇳
                        </span>
                        China（中国）
                    </div>
                </Option>
                <Option value="USA" label="USA">
                    <div className="demo-option-label-item">
                        <span role="img" aria-label="USA">
                            🇺🇸 
                        </span>
                        USA（美国）
                    </div>
                </Option>
            </Select>
        </>
    )
}