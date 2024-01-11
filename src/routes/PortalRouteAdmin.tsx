import React, { lazy } from 'react'
const quanLiTheXe = React.lazy(() => import('../components/organisms/pages/Admin/Quan_ly_the_xe'))
const quanLyNguoiDung = React.lazy(() => import('../components/organisms/pages/Admin/Quan_ky_nguoi_dung'))
const dangKyGiaHan = React.lazy(() => import('../components/organisms/pages/Admin/Dang_ky_gia_han'))
const quanLyThanhToan = React.lazy(() => import('../components/organisms/pages/Admin/Quan_ly_thanh_toan'))
const thongKeDoanhThu = React.lazy(() => import('../components/organisms/pages/Admin/Thong_ke_doanh_thu'))
export const routePortalsAdmin = {
    QUAN_LY_THE_XE: '/quan-ly-the-xe',
    QUAN_LY_NGUOI_DUNG: "/quan-ly-nguoi-dung",
    DANG_KY_GIA_HAN: "/dang-ky-gia-han-ve-xe",
    QUAN_LY_THANH_TOAN: "/quan-ly-thanh-toan",
    THONG_KE_DOANH_THU: "/thong-ke-doanh-thu",
    CAU_HINH_THANH_TOAN: "/cau_hinh_thanh_toan",

}
export const routePortalAdmin = [
    {
        id: 10,
        route: routePortalsAdmin.QUAN_LY_THE_XE,
        component: quanLiTheXe,
    },
    {
        id: 11,
        route: routePortalsAdmin.QUAN_LY_NGUOI_DUNG,
        component: quanLyNguoiDung,
    },
    {
        id: 12,
        route: routePortalsAdmin.DANG_KY_GIA_HAN,
        component: dangKyGiaHan,
    },
    {
        id: 13,
        route: routePortalsAdmin.QUAN_LY_THANH_TOAN,
        component: quanLyThanhToan,
    },
    {
        id: 14,
        route: routePortalsAdmin.THONG_KE_DOANH_THU,
        component: thongKeDoanhThu,
    },
]