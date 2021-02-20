import { Badge } from 'antd'

export function Badge4() {
    return (
        <>
            <a href="#">
                <Badge count={5}>
                    <span className="head-example" />
                </Badge>
            </a>
        </>
    )
}