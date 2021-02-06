import { Button } from 'antd'

export function AppButton4() {
    return (
        <>
            <div className="mb-2">
                <Button className="mr-2" type="primary">Primary</Button>
                <Button className="mr-2" type="primary" disabled>Primary(disabled)</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2">Default</Button>
                <Button className="mr-2" disabled>Default(disabled)</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2" type="dashed">Dashed</Button>
                <Button className="mr-2" type="dashed" disabled>Dashed(disabled)</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2" type="text">Text</Button>
                <Button className="mr-2" type="text" disabled>Text(disabled)</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2" type="link">Link</Button>
                <Button className="mr-2" type="link" disabled>Link(disabled)</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2" danger>Danger Default</Button>
                <Button danger disabled>Danger Default(disabled)</Button>
            </div>
            <div className="mb-2">
                <Button className="mr-2" danger type="text">Danger Text</Button>
                <Button danger type="text" disabled>Danger Text(disabled)</Button>
            </div>
            <div className="site-button-ghost-wrapper">
                <Button ghost>Ghost</Button>
                <Button ghost disabled>Ghost(disabled)</Button>
            </div>
        </>
    )
}