import { Badge } from 'antd'

export function Badge5() {
    return (
        <>
            <Badge count={5} offset={[10, 10]}>
                <a href="#" className="head-example" />
            </Badge>
        </>
    )
}