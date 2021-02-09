import { Input, Select } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const { Option } = Select

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
        <Option value="http://">http://</Option>
        <Option value="https://">htt://</Option>
    </Select>
)

const selectAfter = (
    <Select defaultValue=".com" className="select-after">
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
)

export function Input4() {
    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
            </div>
        </>
    )
}