import { Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList)
        }
    },
    defaultFileList: [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error',
            url: 'http://www.baidu.com/xxx.png'
        },
        {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://www.baidu.com/yyy.png'
        },
        {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            url: 'http://www.baidu.com/zzz.png'
        }
    ]
}

export function Upload3() {
    return (
        <>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </>
    )
}