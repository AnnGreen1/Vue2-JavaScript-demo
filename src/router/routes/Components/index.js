import componentsOthersRoute from './others'
import componentsBasic from './Basic'
import componentsData from './Data'
const componentsRoute = [
    // {
    //     path:'/DataIndex',
    //     name:'DataIndex',
    //     component: () => import('@/views/Data/DataIndex.vue')
    // },
    ...componentsOthersRoute,
    ...componentsBasic,
    ...componentsData
];
export default componentsRoute;