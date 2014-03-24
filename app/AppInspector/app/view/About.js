/*
 * File: app/view/About.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.view.About', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.about',

    requires: [
        'Ext.grid.property.Grid'
    ],

    itemId: 'About',
    iconCls: 'icn-home',
    title: 'App Details',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'propertygrid',
                    flex: 1,
                    itemId: 'AppDetails',
                    minHeight: 150,
                    header: false,
                    iconCls: 'icon-home',
                    emptyText: 'No Sencha framework found!',
                    nameColumnWidth: '50%',
                    source: {
                        
                    }
                },
                {
                    xtype: 'panel',
                    flex: 2,
                    cls: 'about-details',
                    itemId: 'AboutDetails',
                    loader: {
                        url: 'about.html',
                        autoLoad: true
                    },
                    autoScroll: true,
                    bodyPadding: '5 10',
                    animCollapse: false,
                    collapsible: true,
                    hideCollapseTool: true,
                    title: 'About App Inspector for Sencha',
                    titleCollapse: true
                }
            ],
            listeners: {
                beforeadd: {
                    fn: me.onAboutBeforeAdd,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onAboutBeforeAdd: function(container, component, index, eOpts) {
        this.setTitle(AI.util.i18n.getMessage(this.title));

    }

});