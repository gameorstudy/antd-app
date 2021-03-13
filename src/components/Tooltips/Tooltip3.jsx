import { Tooltip, Button } from 'antd'

export function Tooltip3() {
    return (
        <>
            <div>
                <Tooltip placement="topLeft" title="Prompt Text">
                    <Button>Align Button / 边缘对齐</Button>
                </Tooltip>
                <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
                    <Button>Arrow points to center / 箭头指向中心</Button>
                </Tooltip>
            </div>
        </>
    )
}