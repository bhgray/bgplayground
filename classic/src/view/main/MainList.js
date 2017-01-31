Ext.define('BGPlayground.view.main.MainList', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',
    title: 'main list panel',
    border: true,
    items: [{
        xtype: 'combobox',
        title: 'Where\'s Waldo?',
        reference: 'citylistcombo',
        hideLabel: true,
        bind: {
            store: '{countries}'
        },
        tpl: Ext.create('Ext.XTemplate',
           '<ul class="x-list-plain"><tpl for=".">',
               '<li role="option" class="x-boundlist-item">{abbrev} - {name}</li>',
           '</tpl></ul>'
        ),
        listeners: {
            select: 'onSelect'
        },
        displayField: 'name',
        typeAhead: true,
        queryMode: 'local',
        triggerAction: 'all',
        emptyText: 'Select a country...',
        selectOnFocus: true,
        width: 200,
        indent: true
    }, {
        xtype: 'grid',
        title: 'Cities',
        reference: 'citylist',
        columns: [
            { text: 'Name',  dataIndex: 'name' },
            { text: 'visited?', dataIndex: 'visited', flex: 1 }
        ],
        listeners: {
            select: 'onItemSelected'
        }
    }
]
});
