import { Button, Menu, Dropdown } from 'antd'

export function AppButton6() {
    function handleMenuClick(e) {
        console.log(e);
    }

    const menu = (
        <Menu onClick={(e) => handleMenuClick(e)}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    )
    return (
        <>
            <Button className="mr-2" type="primary">primary</Button>
            <Button className="mr-2">secondary</Button>
            <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
        </>
    )
}