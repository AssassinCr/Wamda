import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'material-icons' },

    { path: '/pages/timeline', title: 'Timeline Page', icon:'material-icons' },
    { path: '/pages/user', title: 'User Page', icon:'material-icons' },

    { path: '/invoice/newinvoice', title: 'New Invoice', icon:'pe-7s-note2' },
    { path: '/invoice/manageinvoice', title: 'Manage Invoice', icon:'pe-7s-note2' },
    { path: '/invoice/posinvoice', title: 'POS Invoice', icon:'pe-7s-note2' },

    { path: '/medicines/addmedicine', title: 'Add Medicine', icon:'pe-7s-plugin' },
    { path: '/medicines/managemedicine', title: 'Manage Medicine', icon:'pe-7s-plugin' },

    { path: '/supplier/addsupplier', title: 'Add Supplier', icon:'pe-7s-news-paper' },
    { path: '/supplier/managesupplier', title: 'Manage Supplier', icon:'pe-7s-news-paper' },

    { path: '/customer/addcustomer', title: 'Add Customer', icon:'pe-7s-map-marker' },
    { path: '/customer/managecustomer', title: 'Manage Customer', icon:'pe-7s-map-marker' },
    { path: '/customer/creditcustomer', title: 'Credit Customer', icon:'pe-7s-map-marker' },
    { path: '/customer/paidcustomer', title: 'Paid Customer', icon:'pe-7s-map-marker' },

    { path: '/widgets', title: 'Widgets', icon:'material-icons' },

    { path: '/charts', title: 'Charts', icon:'material-icons' },

    { path: '/calendar', title: 'Calendar', icon:'material-icons' },

    { path: '/pages/pricing', title: 'Pricing', icon:'material-icons' },
    { path: '/pages/login', title: 'Login Page', icon:'material-icons' },
    { path: '/pages/register', title: 'Register Page', icon:'material-icons' },
    { path: '/pages/lock', title: 'Lock Screen Page', icon:'material-icons' },




];
