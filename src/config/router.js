const HistogramPage = () => import('@/views/Histogram/index.vue');
const PiePage = () => import('@/views/Pie/index.vue');

export const routes = [{
    path: '/chart',
    children: [
        {
            name: 'histogram',
            path: 'histogram',
            component: HistogramPage
        }, {
            path: 'pie',
            name: 'pie',
            component: PiePage
        }
    ]
}];