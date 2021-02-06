import { Menu, Dropdown, Button, Space } from 'antd'

export function Dropdown5() {
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
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <Button>ButtonLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>ButtonCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Button>ButtonRight</Button>
                    </Dropdown>
                </Space>
                <Space wrap>
                    <Dropdown overlay={menu} placement="topLeft" arrow>
                        <Button>TopLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topCenter" arrow>
                        <Button>TopCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topRight" arrow>
                        <Button>TopRight</Button>
                    </Dropdown>
                </Space>
            </Space>
        </>
    )
}