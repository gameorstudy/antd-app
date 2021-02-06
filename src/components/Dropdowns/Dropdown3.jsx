import { Menu, Dropdown, Button, Space } from 'antd'

export function Dropdown3() {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button>ButtonLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>ButtonCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Button>ButtonRight</Button>
                    </Dropdown>
                </Space>
                <Space wrap>
                    <Dropdown overlay={menu} placement="topLeft">
                        <Button>TopLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topCenter">
                        <Button>TopCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topRight">
                        <Button>TopRight</Button>
                    </Dropdown>
                </Space>
            </Space>
        </>
    )
}