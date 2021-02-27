import { Popover, Button } from 'antd'

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
)

export function Popover2() {
    return (
        <>
            <Popover content={content} title="Title">
                <Button type="primary">Hover me</Button>
            </Popover>
        </>
    )
}