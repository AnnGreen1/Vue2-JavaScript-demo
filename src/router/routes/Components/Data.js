const componentsData = [
    {
        path:'/Components/Data/Table/ConfigTable/BasicTable',
        name:'Components-Data-Table-ConfigTable-BasicTable',
        component: () => import('@/views/Components/Data/Table/ConfigTable/BasicTable.vue')
    },
    {
        path:'/Components/Data/Table/ConfigTable/StripeTable',
        name:'Components-Data-Table-ConfigTable-StripeTable',
        component: () => import('@/views/Components/Data/Table/ConfigTable/StripeTable.vue')
    },
    {
        path:'/Components/Data/Table/ConfigTable/RenderTable',
        name:'Components-Data-Table-ConfigTable-RenderTable',
        component: () => import('@/views/Components/Data/Table/ConfigTable/RenderTable.vue')
    },
];
export default componentsData;