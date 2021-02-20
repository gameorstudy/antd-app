import { Badge } from 'antd'

export function Badge9() {
    return (
        <>
            <Badge size="default" count={5}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge size="small" count={5}>
                <a href="#" className="head-example" />
            </Badge>
        </>
    )
}