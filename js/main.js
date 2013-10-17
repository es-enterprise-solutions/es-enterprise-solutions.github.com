/**
 * ES Script
 *
 * @author     Marc Görtz <mgoertz@es-enterprise-solutions.de>
 * @copyright  Copyright (c) 2011-2013 ES Enterprise Solutions GmbH <info@es-enterprise-solutions.de>
 * @license    MIT License
 * @media      all
 */

window.__ES = window.__ES || {};

window.__ES.ContactToggle = (function(window, document, undefined) {

	'use strict';

	var _bindEvents;

	_bindEvents = function() {
		$('nav i').each(function() {
			$(this).on('click', function(evt) {
				$(this).parent().siblings().removeClass('active');
				$(this).parent().toggleClass('active');
			});
		});
	};

	return {
		init: function() {
			_bindEvents();
		}
	};

})(window, document);

window.__ES.ContactToggle.init();

