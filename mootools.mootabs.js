/**
 * Modified Mootabs Plugin
 *
 * This plugin is modified and simplified from Mootabs v0.1 for Mootools 1.2 to suit
 * the needs for simple tabs.
 * 
 * Created by: Jean-Nicolas Jolivet, http://www.silverscripting.com/
 * Modified by: James Lloyd Atwil, http://www.paddsolutions.com/
 */


var mootabs = new Class({
	
	initialize: function(element) {
		this.el = $(element);
		this.id = element;
		this.tabPanels = $$('#' + this.id + ' ul.mootabs-title');
		this.tabPanel = this.tabPanels[0];
		
		$$('#' + this.id + ' div.mootabs-panel').each(function(panel){}.bind(this));

		this.tabs = $$('#' + this.id + ' ul.mootabs-title li a');
		
		this.tabs.each(function(tab) {
			tab.addEvent('click', function(event) {
				event.stop();
				this.activate(tab);
			}.bind(this));
		}.bind(this));

	},
	
	activate: function(tab) {
		var linkName = tab.getProperty('href').split('#')[1];
		this.tabs.each(function(tab) {
			tab.removeClass('active');
		});
		tab.addClass('active');
		
		
		$$('#' + this.id + ' div.mootabs-panel').each(function(panel) {
			panel.removeClass('active');
		});
		
		
		$(linkName).addClass('active');
	},
	
	setActive: function(tabAnchor) {
		this.tabToActivate = tabAnchor;
		$$('#' + this.id + ' ul.mootabs-title').getChildren()[0].each(function(tabLi) {
			if(tabLi.getFirst().getProperty('href') == '#' + this.tabToActivate) {
				this.activate(tabLi.getFirst());
			}
		}.bind(this));
	}
	
});