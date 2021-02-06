import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export function AppButton2() {
    return (
        <>
            <Tooltip className="mr-2" title="search">
                <Button type="primary" shape="circle" icon={ <SearchOutlined /> } />
            </Tooltip>
            <Button className="mr-2" type="primary" shape="circle">A</Button>
            <Button className="mr-2" type="primary" icon={<SearchOutlined /> }>Search</Button>
            <Tooltip className="mr-2" title="search">
                <Button shape="circle" icon={ <SearchOutlined /> } />
            </Tooltip>
            <Button className="mr-2" icon={<SearchOutlined /> }>Search</Button>
            <Tooltip className="mr-2" title="search">
                <Button shape="circle" type="dashed" icon={ <SearchOutlined /> } />
            </Tooltip>
            <Button className="mr-2" type="dashed" icon={<SearchOutlined /> }>Search</Button>
        </>
    )
}