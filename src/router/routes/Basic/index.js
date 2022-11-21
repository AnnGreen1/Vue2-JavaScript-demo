const basicRoute = [
    {
        path:'/BasicIndex',
        name:'BasicIndex',
        component: () => import('@/views/Basic/BasicIndex.vue')
    },
    /**
     * Button
     */
    {
        path:'/Basic/Button/size',
        name:'Basic-Button-size',
        component: () => import('@/views/Basic/Button/size.vue')
    },
    {
        path:'/Basic/Button/type',
        name:'Basic-Button-type',
        component: () => import('@/views/Basic/Button/type.vue')
    },
    {
        path:'/Basic/Button/plain',
        name:'Basic-Button-plain',
        component: () => import('@/views/Basic/Button/plain.vue')
    },
    {
        path:'/Basic/Button/round',
        name:'Basic-Button-round',
        component: () => import('@/views/Basic/Button/round.vue')
    },
    {
        path:'/Basic/Button/circle',
        name:'Basic-Button-circle',
        component: () => import('@/views/Basic/Button/circle.vue')
    },
];
export default basicRoute;