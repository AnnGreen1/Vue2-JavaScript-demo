import componentsOthersRoute from './others'
import componentsBasic from './Basic'
const componentsRoute = [
    // {
    //     path:'/DataIndex',
    //     name:'DataIndex',
    //     component: () => import('@/views/Data/DataIndex.vue')
    // },
    ...componentsOthersRoute,
    ...componentsBasic
];
export default componentsRoute;