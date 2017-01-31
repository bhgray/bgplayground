Ext.define('BGPlayground.view.dragdrop.DragDropPanel', {
    extend: 'Ext.panel.Panel',
    requires: [
        'BGPlayground.view.dragdrop.DragPanelController'
    ],
    xtype: 'dragdroppanel',
    controller: 'drag-panel',
    title: 'Drag to Group',
    width: 600,
    height: 400,
    bodyPadding: 5,
    html:
        '<div class="group-source-group1 group-source">group1</div>' +
        '<div class="group-source-group2 group-source">group2</div>' +
        '<div class="group-source-both group-source">group1, group2</div>' +

        '<div class="group-target-group1 group-target">group1</div>' +
        '<div class="group-target-group2 group-target">group2</div>' +
        '<div class="group-target-both group-target">group1, group2</div>'
});
