import { Breadcrumb } from 'antd'

export function Breadcrumb2() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                <a>Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}