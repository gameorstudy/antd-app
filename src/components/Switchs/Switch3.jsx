import { Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export function Switch3() {
    return (
        <>
            <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
            <br />
            <Switch checkedChildren="1" unCheckedChildren="0" />
            <br />
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
            />
        </>
    )
}