Ext.define('BGPlayground.store.CitiesChainedStore', {
    extend: 'Ext.data.ChainedStore',
    model: 'BGPlayground.model.City',
    source: 'BGPlayground.store.CitiesChainedStore',
    alias: 'store.citieschainedstore',
    sorters: [{
        property: 'name',
        direction: 'ASC'
    }],
    filters: [
        function(item) {
            return item.country === '{currentRecord.abbrev}';
        }
    ]
});
