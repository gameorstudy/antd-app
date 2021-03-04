import { Popover, Button } from 'antd'

const content = (
    <div>
        <p>content</p>
        <p>content</p>
    </div>
)

export function Popover4() {
    return (
        <>
            <div>
                <Popover content={content} title="Title" trigger="hover">
                    <Button>Hover me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="focus">
                    <Button>Focus me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="click">
                    <Button>Click me</Button>
                </Popover>
            </div>
        </>
    )
}