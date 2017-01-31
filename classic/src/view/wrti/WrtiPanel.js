Ext.define('BGPlayground.view.wrti.WrtiPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'wrtipanel',
    controller: 'wrti',
    requires: [
        'BGPlayground.model.EpisodeTrack',
        'BGPlayground.view.TracksView',
        'BGPlayground.view.wrti.WrtiController'
    ],
    items: [{
        xtype: 'tracksview',
        bind: {
            store: '{tracks}'
        }
    }, {
        xtype: 'button',
        text: 'Refresh',
        listeners: {
            click: 'handleClick'
        }
    }]
});
