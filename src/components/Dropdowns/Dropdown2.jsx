import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

export function Dropdown2() {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferer" href="#">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferer" href="#">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferer" href="#">
                    3rd menu item
                </a>
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