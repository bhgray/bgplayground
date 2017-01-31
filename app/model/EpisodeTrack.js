/*
    EpisodeTrack models the name of the class name used in the return JsonP
*/
Ext.define('BGPlayground.model.EpisodeTrack', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ]
    ,
    fields: [
        {
            name: 'trackName',
            mapping: 'song.trackName'
        },
        {
            name: 'composer',
            mapping: 'song.composerName'
        }, {
            name: 'starttime',
            mapping: 'song_start_time'
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'https://api.composer.nprstations.org/v1/widget/53c7dbe1e1c8b9c77b4b9b6e/tracks',
        extraParams: {
            format: 'json',
            limit: 50,
            hide_amazon: false,
            hide_itunes: false,
            hide_arkiv: false,
            share_format: true
        },
        reader: {
            type: 'json',
            rootProperty: function(data) {
                // debugger;
                //console.log(data.tracklist.results);
                return (data.tracklist.results);
            }
        }
    }
});
