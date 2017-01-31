    Ext.define('BGPlayground.view.TracksView', {
    extend: 'Ext.view.View',
    xtype: 'tracksview',
    scrollable: true,
    itemTpl: [
        '<h2>',
        '{trackName}',
        '</h2>',
        '<h3>',
        '{composer}',
        '</h3>',
        '<p>',
        '{starttime}',
        '</p>',

        '<hr>'
    ],
    emptyText: 'Nothing playing currently.'
});
