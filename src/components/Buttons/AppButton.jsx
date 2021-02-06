import { Button } from 'antd'

export function AppButton() {
    return (
        <>
            <Button className="mr-2" type="primary">Primary Button</Button>
            <Button className="mr-2">Default Button</Button>
            <Button className="mr-2" type="dashed">Dashed Button</Button>
            <Button className="mr-2" type="text">Text Button</Button>
            <Button className="mr-2" type="link">Link Button</Button>
        </>
    )
}
