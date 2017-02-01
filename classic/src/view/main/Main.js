Ext.define('BGPlayground.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        // 'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.list.Tree',
        'BGPlayground.store.NavigationTree',
        'BGPlayground.view.main.MainController',
        'BGPlayground.view.main.MainModel',
        'BGPlayground.view.main.MainList',
        'BGPlayground.view.wrti.WrtiPanel',
        'BGPlayground.view.dragdrop.DragDropPanel'
    ],

    controller: 'main',
    viewModel: 'main',
    itemId:  'mainView',
    layout: {
        type: 'vbox',
        align:'stretch'
    },
    listeners: {
        render:  'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            height: 64,
            itemId:  'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'havalinalogo',
                    html: '<div class="main-logo"><img src="resources/images/company-logo.png">Havalina</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                }
            ]
        }, {
            xtype: 'maincontainerwrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionChange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]

    // items: [{
    //     title: 'Travels',
    //     iconCls: 'fa-globe',
    //     items: [{
    //         xtype: 'mainlist'
    //     }]
    // }, {
    //     title: 'DragDrop',
    //     iconCls: 'fa-arrows',
    //     items: [{
    //         xtype: 'dragdroppanel'
    //     }]
    // }, {
    //     title: 'WRTI',
    //     iconCls: 'fa-music',
    //     items: [{
    //         xtype: 'wrtipanel'
    //     }]
    //
    // }, {
    //     title: 'Dashboard',
    //     iconCls: 'fa-cog',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    // }]
});
