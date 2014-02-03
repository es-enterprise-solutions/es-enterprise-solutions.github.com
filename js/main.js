/**
 * ES Script
 *
 * @author    Marc Görtz <mgoertz@es-enterprise-solutions.de>
 * @copyright Copyright (c) 2011-2013 ES Enterprise Solutions GmbH <info@es-enterprise-solutions.de>
 * @license   MIT License
 */

(function(window, document, undefined) {

	'use strict';

	var _getStyle,
		_toggleIcons,
		_changeNavText,
		_detectResize,
		_navigation = document.getElementsByTagName('nav')[0];

	// [].forEach polyfill
	if (!Array.prototype.forEach) {
		Array.prototype.forEach = function(fn, scope) {
			var i, len;
			for (i = 0, len = this.length; i < len; ++i) {
				if (i in this) {
					fn.call(scope, this[i], i, this);
				}
			}
		};
	}

	// getComputedStyle() for all browsers
	_getStyle = function(elm, prop) {
		return elm.currentStyle ?
			elm.currentStyle[prop] : // IE8
			window.getComputedStyle(elm, '').getPropertyValue(prop);
	};

	// toggle contact content on icon click
	_toggleIcons = function() {
		[].forEach.call(
			_navigation.querySelectorAll('i'),
			function(icon) {
				icon.addEventListener('click', function() {
					var current  = this.parentNode,
						siblings = current.parentNode.childNodes;
					for (var i = 0; i < siblings.length; i++) {
						if (siblings[i].nodeType === 1 && siblings[i] !== current) {
							siblings[i].className = siblings[i].className.replace(/(\s*)active(\s*)/g, '');
						}
					}
					if (current.className.indexOf('active') !== -1) {
						current.className = current.className.replace(/(\s*)active(\s*)/g, '');
					} else {
						current.className += ' active';
					}
				}, false);
			}
		);
	};

	// change contact content depending on style
	_changeNavText = function() {
		var mailLink  = _navigation.querySelector('.mail a'),
			phoneLink = _navigation.querySelector('.phone a'),
			labels    = {
				mailLink:  'E-Mail senden',
				phoneLink: 'Anrufen'
			};
		if (_getStyle(_navigation, 'text-align') === 'center') {
			mailLink.setAttribute('data-text', mailLink.innerHTML);
			mailLink.innerHTML = labels.mailLink;
			phoneLink.setAttribute('data-text', phoneLink.innerHTML);
			phoneLink.innerHTML = labels.phoneLink;
		} else if (mailLink.getAttribute('data-text') !== null) {
			mailLink.innerHTML = mailLink.getAttribute('data-text');
			mailLink.removeAttribute('data-text');
			phoneLink.innerHTML = phoneLink.getAttribute('data-text');
			phoneLink.removeAttribute('data-text');
		}
	};

	// detect window resize
	_detectResize = function() {
		_changeNavText();
		window.addEventListener('resize', function() {
			_changeNavText();
		}, false);
	};

	_toggleIcons();
	_detectResize();

})(window, document);
