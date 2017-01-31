/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('BGPlayground.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onSelect: function (combo, record, eOpts) {
        // debugger
         console.log('selected! ' + record.data.abbrev);
        // the long version below....
        // console.log('selected! ' + record.get(record.getFields()[1].getName()));
        var theList = this.lookupReference('citylist'),
            vmodel = this.getViewModel(),
            theStore = vmodel.getStore('cities');
        theStore.clearFilter();
        theStore.filter('country', record.data.abbrev.toLowerCase());
        theList.setStore(theStore);
        theList.setTitle(record.data.name);
    }
    // ,
    // onCountryChange: function (select , newValue , oldValue , eOpts) {
    //     console.log(newValue.data.abbrev);
    // },
    // getCountriesStore: function () {
    //     console.log('retrieving the countries store');
    //     return this.getStore('countries');
    // }
});