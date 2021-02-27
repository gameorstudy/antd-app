import { Popover, Button } from 'antd'

const text = <span>Title</span>
const content = (
    <div>
        <p>content</p>
        <p>content</p>
    </div>
)

export function Popover3() {
    return (
        <>
            <div>
                <Popover placement="topLeft" title={text} content={content}>
                    <Button>Align edge / 边缘对齐</Button>
                </Popover>
                <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
                    <Button>Arrow points to center / 箭头只想中心</Button>
                </Popover>
            </div>
        </>
    )
}