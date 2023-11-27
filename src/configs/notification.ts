
import { notification } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

const mapType: any = {
    "success": "Thành công",
    "warning": "Cảnh báo",
    "error": "Thất bại"
}
export const Notification = (type: NotificationType, description: string) => {
    notification[type]({
        message: mapType[type],
        description: description,
    })
}