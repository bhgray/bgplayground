/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('BGPlayground.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'BGPlayground.store.Countries',
        'BGPlayground.store.Cities'
    ],
    stores: {
        countries: {
            type: 'countries'
        },
        cities: {
            type: 'cities'
        },
        tracks: {
            model: 'BGPlayground.model.EpisodeTrack',
            autoLoad: false
        }
    },
    data: {
        name: 'BGPlayground'
    }
});
