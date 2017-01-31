Ext.define('BGPlayground.store.Cities', {
    extend: 'Ext.data.Store',
    model: 'BGPlayground.model.City',
    alias: 'store.cities',
    sorters: ['name'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/data/cities1.json'
    }
});
