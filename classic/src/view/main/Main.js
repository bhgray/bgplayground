/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('BGPlayground.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'BGPlayground.view.main.MainController',
        'BGPlayground.view.main.MainModel',
        'BGPlayground.view.main.MainList',
        'BGPlayground.view.wrti.WrtiPanel',
        'BGPlayground.view.dragdrop.DragDropPanel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [{
        title: 'Travels',
        iconCls: 'fa-globe',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'DragDrop',
        iconCls: 'fa-arrows',
        items: [{
            xtype: 'dragdroppanel'
        }]
    }, {
        title: 'WRTI',
        iconCls: 'fa-music',
        items: [{
            xtype: 'wrtipanel'
        }]

    }, {
        title: 'Dashboard',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
