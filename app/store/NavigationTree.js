Ext.define('BGPlayground.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Travels',
                iconCls: 'x-fa fa-globe',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'mainlist',
                routeId: 'travels', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'DragDrop',
                iconCls: 'x-fa fa-arrows',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'dragdroppanel',
                leaf: true
            },
            {
                text: 'WRTI',
                iconCls: 'x-fa fa-music',
                viewType: 'wrtipanel',
                leaf: true
            },
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-cog',
                viewType: '',
                leaf: true
            }
        ]
    }
});
