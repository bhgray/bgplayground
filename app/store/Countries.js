Ext.define('BGPlayground.store.Countries', {
    extend: 'Ext.data.Store',
    model: 'BGPlayground.model.Country',
    alias: 'store.countries',
    sorters: ['name'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/data/countries.json'
    }
});
