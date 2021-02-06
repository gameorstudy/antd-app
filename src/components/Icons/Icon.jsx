import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined
} from '@ant-design/icons'

export function Icon() {
    return (
        <>
            <div className="icons-list">
                <HomeOutlined />
                <SettingFilled />
                <SmileOutlined />
                <SyncOutlined />
                <SmileOutlined rotate={180} />
                <LoadingOutlined />
            </div>
        </>
    )
}