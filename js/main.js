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

	var _toggleIcons,
		_changeNavText,
		_detectResize;

	_toggleIcons = function() {
		$('nav i').each(function() {
			$(this).on('click', function(evt) {
				$(this).parent().siblings().removeClass('active');
				$(this).parent().toggleClass('active');
			});
		});
	};

	_changeNavText = function() {
		if ($('nav').css('text-align') === 'center') {
			$('nav .mail a').attr('data-text', $('nav .mail a').text());
			$('nav .mail a').text('E-Mail senden');
			$('nav .phone a').attr('data-text', $('nav .phone a').text());
			$('nav .phone a').text('Anrufen');
		} else if ($('nav .mail a').attr('data-text') !== undefined) {
			$('nav .mail a').text($('nav .mail a').attr('data-text'));
			$('nav .phone a').text($('nav .phone a').attr('data-text'));
		}
	};

	_detectResize = function() {
		_changeNavText();
		$(window).on('resize', function() {
			_changeNavText();
		});
	};

	return {
		init: function() {
			_toggleIcons();
			_detectResize();
		}
	};

})(window, document);

window.__ES.ContactToggle.init();
