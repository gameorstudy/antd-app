import { Pagination } from 'antd'

function showTotal(total) {
    return `Total ${total} items`
}

export function Pagination5() {
    return (
        <>
            <Pagination size="small" total={50} />
            <Pagination size="small" total={50} showSizeChanger showQuickJumper />
            <Pagination size="small" total={50} showTotal={showTotal} />
            <Pagination
                size="small"
                total={50}
                disabled
                showTotal={showTotal}
                showSizeChanger
                showQuickJumper />
        </>
    )
}