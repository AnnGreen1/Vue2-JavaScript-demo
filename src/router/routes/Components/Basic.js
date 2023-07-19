const componentsBasic = [
    {
        path:'/components/others/dialog/mydialog',
        name:'components-others-dialog-mydialog',
        component: () => import('@/views/Components/Others/Dialog/MyDialogView.vue')
    },
    {
        path:'/components/others/dialog/tongxiadialog',
        name:'components-others-dialog-tongxiadialog',
        component: () => import('@/views/Components/Others/Dialog/TongxiaDialogView.vue')
    }
];
export default componentsBasic;