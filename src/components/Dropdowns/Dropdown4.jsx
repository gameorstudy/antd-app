import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

export function Dropdown4() {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a target="_blank" rel="noopener noreferer" href="#">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferer" href="#">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" disabled>
                3rd menu item
            </Menu.Item>
        </Menu>
    )
    return (
        <>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <DownOutlined />
                </a>
            </Dropdown>
        </>
    )
}