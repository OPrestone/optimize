/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function () {
	var c, f;
	c = this.jQuery || window.jQuery;
	f = c(window);
	c.fn.stick_in_parent = function (b) {
		var A, w, B, n, p, J, k, E, t, K, q, L;
		null == b && (b = {});
		t = b.sticky_class;
		B = b.inner_scrolling;
		E = b.recalc_every;
		k = b.parent;
		p = b.offset_top;
		n = b.spacer;
		w = b.bottoming;
		null == p && (p = 0);
		null == k && (k = void 0);
		null == B && (B = !0);
		null == t && (t = 'is_stuck');
		A = c(document);
		null == w && (w = !0);
		J = function (a) {
			var b;
			return window.getComputedStyle
				? ((a = window.getComputedStyle(a[0])),
				  (b =
						parseFloat(a.getPropertyValue('width')) +
						parseFloat(a.getPropertyValue('margin-left')) +
						parseFloat(a.getPropertyValue('margin-right'))),
				  'border-box' !== a.getPropertyValue('box-sizing') &&
						(b +=
							parseFloat(a.getPropertyValue('border-left-width')) +
							parseFloat(a.getPropertyValue('border-right-width')) +
							parseFloat(a.getPropertyValue('padding-left')) +
							parseFloat(a.getPropertyValue('padding-right'))),
				  b)
				: a.outerWidth(!0);
		};
		K = function (a, b, q, C, F, u, r, G) {
			var v, H, m, D, I, d, g, x, y, z, h, l;
			if (!a.data('sticky_kit')) {
				a.data('sticky_kit', !0);
				I = A.height();
				g = a.parent();
				null != k && (g = g.closest(k));
				if (!g.length) throw 'failed to find stick parent';
				v = m = !1;
				(h = null != n ? n && a.closest(n) : c('<div />')) && h.css('position', a.css('position'));
				x = function () {
					var d, f, e;
					if (
						!G &&
						((I = A.height()),
						(d = parseInt(g.css('border-top-width'), 10)),
						(f = parseInt(g.css('padding-top'), 10)),
						(b = parseInt(g.css('padding-bottom'), 10)),
						(q = g.offset().top + d + f),
						(C = g.height()),
						m &&
							((v = m = !1),
							null == n && (a.insertAfter(h), h.detach()),
							a.css({ position: '', top: '', width: '', bottom: '' }).removeClass(t),
							(e = !0)),
						(F = a.offset().top - (parseInt(a.css('margin-top'), 10) || 0) - p),
						(u = a.outerHeight(!0)),
						(r = a.css('float')),
						h &&
							h.css({
								width: J(a),
								height: u,
								display: a.css('display'),
								'vertical-align': a.css('vertical-align'),
								float: r,
							}),
						e)
					)
						return l();
				};
				x();
				if (u !== C)
					return (
						(D = void 0),
						(d = p),
						(z = E),
						(l = function () {
							var c, l, e, k;
							if (
								!G &&
								((e = !1),
								null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
								e || A.height() === I || x(),
								(e = f.scrollTop()),
								null != D && (l = e - D),
								(D = e),
								m
									? (w &&
											((k = e + u + d > C + q),
											v &&
												!k &&
												((v = !1),
												a
													.css({ position: 'fixed', bottom: '', top: d })
													.trigger('sticky_kit:unbottom'))),
									  e < F &&
											((m = !1),
											(d = p),
											null == n &&
												(('left' !== r && 'right' !== r) || a.insertAfter(h), h.detach()),
											(c = { position: '', width: '', top: '' }),
											a.css(c).removeClass(t).trigger('sticky_kit:unstick')),
									  B &&
											((c = f.height()),
											u + p > c &&
												!v &&
												((d -= l),
												(d = Math.max(c - u, d)),
												(d = Math.min(p, d)),
												m && a.css({ top: d + 'px' }))))
									: e > F &&
									  ((m = !0),
									  (c = { position: 'fixed', top: d }),
									  (c.width =
											'border-box' === a.css('box-sizing')
												? a.outerWidth() + 'px'
												: a.width() + 'px'),
									  a.css(c).addClass(t),
									  null == n && (a.after(h), ('left' !== r && 'right' !== r) || h.append(a)),
									  a.trigger('sticky_kit:stick')),
								m && w && (null == k && (k = e + u + d > C + q), !v && k))
							)
								return (
									(v = !0),
									'static' === g.css('position') && g.css({ position: 'relative' }),
									a.css({ position: 'absolute', bottom: b, top: 'auto' }).trigger('sticky_kit:bottom')
								);
						}),
						(y = function () {
							x();
							return l();
						}),
						(H = function () {
							G = !0;
							f.off('touchmove', l);
							f.off('scroll', l);
							f.off('resize', y);
							c(document.body).off('sticky_kit:recalc', y);
							a.off('sticky_kit:detach', H);
							a.removeData('sticky_kit');
							a.css({ position: '', bottom: '', top: '', width: '' });
							g.position('position', '');
							if (m)
								return (
									null == n && (('left' !== r && 'right' !== r) || a.insertAfter(h), h.remove()),
									a.removeClass(t)
								);
						}),
						f.on('touchmove', l),
						f.on('scroll', l),
						f.on('resize', y),
						c(document.body).on('sticky_kit:recalc', y),
						a.on('sticky_kit:detach', H),
						setTimeout(l, 0)
					);
			}
		};
		q = 0;
		for (L = this.length; q < L; q++) (b = this[q]), K(c(b));
		return this;
	};
}.call(this));

(function ($) {
	'use strict';

	var bn = {
		/**
		 * ------------------------------------------------------------------------
		 * Launch Functions
		 * ------------------------------------------------------------------------
		 */
		Launch: function () {
			bn.Back_to_top();
			bn.Form_validate();
			bn.Showbacktop();
			bn.Block_loadcontent();
			bn.Suggestion_post();
			bn.Hamburger();
			bn.Dropdown_submenu();
			bn.Vertical_tabs();
			bn.Dropdown_animate();
			bn.Slider_mega();
			bn.Sticky();
			bn.Social_windows();
			bn.Progress_scroll();
			bn.Lazy_load();
			bn.Mobile_menu();
			//bn.Owl_carousel();
			//bn.Messages_chat();
			//bn.Youtube_playlist();
			bn.Bootstrap_module();
			bn.Custom();
		},
		/**
		 * ------------------------------------------------------------------------
		 * Back to top function
		 * ------------------------------------------------------------------------
		 */
		Back_to_top: function () {
			// browser window scroll (in pixels) after which the "back to top" link is shown
			var offset = 300,
				//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
				offset_opacity = 1200,
				//grab the "back to top" link
				$back_to_top = $('.back-top');
			//hide or show the "back to top" link
			$(window).scroll(function () {
				$(this).scrollTop() > offset
					? $back_to_top.addClass('backtop-is-visible')
					: $back_to_top.removeClass('backtop-is-visible backtop-fade-out');
				if ($(this).scrollTop() > offset_opacity) {
					$back_to_top.addClass('backtop-fade-out');
				}
			});
			// Material-scrolltop
			function mScrollTop(element, settings) {
				var _ = this,
					breakpoint;
				var scrollTo = 0;
				_.btnClass = '.material-scrolltop';
				_.revealClass = 'reveal';
				_.btnElement = $(_.btnClass);
				_.initial = {
					revealElement: 'body',
					revealPosition: 'top',
					padding: 0,
					duration: 600,
					easing: 'swing',
					onScrollEnd: false,
				};
				_.options = $.extend({}, _.initial, settings);
				_.revealElement = $(_.options.revealElement);
				breakpoint =
					_.options.revealPosition !== 'bottom'
						? _.revealElement.offset().top
						: _.revealElement.offset().top + _.revealElement.height();
				scrollTo = element.offsetTop + _.options.padding;
				$(document).scroll(function () {
					if (breakpoint < $(document).scrollTop()) {
						_.btnElement.addClass(_.revealClass);
					} else {
						_.btnElement.removeClass(_.revealClass);
					}
				});
				_.btnElement.click(function () {
					var trigger = true;
					$('html, body').animate(
						{
							scrollTop: scrollTo,
						},
						_.options.duration,
						_.options.easing,
						function () {
							if (trigger) {
								// Fix callback triggering twice on chromium
								trigger = false;
								var callback = _.options.onScrollEnd;
								if (typeof callback === 'function') {
									callback();
								}
							}
						}
					);
					return false;
				});
			}
			$.fn.materialScrollTop = function () {
				var _ = this,
					opt = arguments[0],
					l = _.length,
					i = 0;
				if (typeof opt == 'object' || typeof opt == 'undefined') {
					_[i].materialScrollTop = new mScrollTop(_[i], opt);
				}
				return _;
			};
			$('body').materialScrollTop({
				// Scroll to the top of <body> element ...
				revealElement: 'header', // Reveal button when scrolling over <header><meta http-equiv="Content-Type" content="text/html; charset=utf-8"> ...
				revealPosition: 'bottom', // ... and do it at the end of </header> element
				duration: 1000, // Animation will run 1000 ms
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Input form validate function
		 * ------------------------------------------------------------------------
		 */
		Form_validate: function () {
			$(document).ready(function () {
				window.addEventListener(
					'load',
					function () {
						// Fetch all the forms we want to apply custom Bootstrap validation styles to
						var forms = document.getElementsByClassName('needs-validation');
						// Loop over them and prevent submission
					},
					false
				);
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Show the navbar when the page is scrolled up function
		 * ------------------------------------------------------------------------
		 */
		Showbacktop: function () {
			var minscreen = 992;

			//primary navigation slide-in effect
			if ($(window).width() > minscreen) {
				var headerHeight = $('#showbacktop').height();
				$(window).on(
					'scroll',
					{
						previousTop: 0,
					},
					function () {
						var currentTop = $(window).scrollTop();
						var min_header = 120;
						//check if user is scrolling up
						if (currentTop < this.previousTop) {
							//if scrolling up...
							if (currentTop > min_header && $('#showbacktop').hasClass('is-fixed')) {
								$('#showbacktop').addClass('is-visible');
							} else {
								$('#showbacktop').removeClass('is-visible is-fixed');
							}
						} else if (currentTop > this.previousTop) {
							//if scrolling down...
							$('#showbacktop').removeClass('is-visible');
							if (currentTop > headerHeight && !$('#showbacktop').hasClass('is-fixed'))
								$('#showbacktop').addClass('is-fixed');
						}
						this.previousTop = currentTop;
					}
				);
			}
		},
		/**
		 * ------------------------------------------------------------------------
		 * Ajax load content function
		 * ------------------------------------------------------------------------
		 */
		Block_loadcontent: function () {
			$(document).ready(function () {
				$('#carouselmega, #featured').carousel({
					interval: false, // remove interval for manual sliding
				});
				$(
					'.nav-block-link li a, .nav-block-link1 li a, .nav-block-link2 li a, .nav-block-link3 li a, .nav-block-link4 li a, .nav-block-link5 li a, .nav-block-link6 li a, .nav-block-link7 li a'
				).click(function () {
					$(this).parent().addClass('active').siblings().removeClass('active');
				});
				$('[data-toggle="tabajax"]').click(function (e) {
					e.preventDefault();
					var loadurl = $(this).attr('href');
					var targ = $(this).attr('data-target');
					$.get(loadurl, function (data) {
						$.ajax({
							beforeSend: function () {
								// Before load
								$(targ).html('<p class="loaders"><i class="fa fa-spinner fa-spin"></i></p>');
							},
							complete: function () {
								// Content Loaded
								$(targ).html(data);
							},
						});
					});
					$(this).tab('show');
				});
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Suggestion function
		 * ------------------------------------------------------------------------
		 */
		Suggestion_post: function () {
			var minscreen = 992;
			//primary navigation slide-in effect
			if ($(window).width() > minscreen) {
				var offset = 2000,
					offset_opacity = 2000,
					$suggestion_box = $('.suggestion-box');
				$(window).scroll(function () {
					$(this).scrollTop() > offset
						? $suggestion_box.addClass('hide')
						: $suggestion_box.removeClass('hide show');
					if ($(this).scrollTop() > offset_opacity) {
						$suggestion_box.addClass('show');
					}
				});
				// close suggestion
				$('#close-suggestion').click(function () {
					$suggestion_box.addClass('close');
				});
			}
		},
		/**
		 * ------------------------------------------------------------------------
		 * Hamburger function
		 * ------------------------------------------------------------------------
		 */
		Hamburger: function () {
			$('.nav-hamburger').on('click', function () {
				// hamburger animation
				$('.hamburger-icon').toggleClass('open');
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Dropdown submenu function
		 * ------------------------------------------------------------------------
		 */
		Dropdown_submenu: function () {
			$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
				if (!$(this).next().hasClass('show')) {
					$(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
				}
				var $subMenu = $(this).next('.dropdown-menu');
				$subMenu.toggleClass('show');

				$(this)
					.parents('li.nav-item.dropdown.show')
					.on('hidden.bs.dropdown', function (e) {
						$('.dropdown-submenu .show').removeClass('show');
						$('.dropdown-menu .show').removeClass('show');
					});

				return false;
			});
			$('.dropdown-menu > li > a.dropdown-toggle').on('click', function (e) {
				$(this).parent().toggleClass('show');
			});
			// sidenav
			$('.sidenav-menu ul').addClass('border-bottom-last-0');
			$('.sidenav-menu ul li a').addClass('list-group-item');
			// if dropdown offscreen
			$('.dropdown li').on('mouseenter mouseleave', function (e) {
				if ($('.dropdown-menu', this).length) {
					var elm = $('.dropdown-menu', this);
					var off = elm.offset();
					var l = off.left;
					var w = elm.width();
					var docW = $(window).width();

					var isEntirelyVisible = l + w <= docW;

					if (!isEntirelyVisible) {
						$(elm).addClass('dropdown-reverse');
					} else {
						$(elm).removeClass('dropdown-reverse');
					}
				}
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Vertical Tabs function
		 * ------------------------------------------------------------------------
		 */
		Vertical_tabs: function () {
			// tabs in mega menu
			$('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
				e.stopPropagation();
				$(this).tab('show');
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Dropdown animate function
		 * ------------------------------------------------------------------------
		 */
		Dropdown_animate: function () {
			// dropdown animate css
			$('.dropdown, .mega-dropdown, .dropdown-menu').on('show.bs.dropdown', function () {
				$(this).children('.dropdown-menu').addClass('animations slideInUp');
			});
			$('.dropdown, .mega-dropdown, .dropdown-menu').on('hide.bs.dropdown', function () {
				$(this).children('.dropdown-menu').removeClass('animations slideInUp');
			});
			// screens
			var screens = 992;
			// Hover animate css only on desktop
			if ($(window).width() > screens) {
				$(function () {
					// dropdown animate on hover mode
					$('.hover-mode a.dropdown-toggle').hover(function () {
						$('.navbar-nav>li>.dropdown-menu').addClass('animations slideInUp');
					});

					// Hover tabs
					$('.mega-hovers').off('click.bs.tab.data-api', '[data-hover="tab"]');
					$('.mega-hovers').on(
						'mouseenter.bs.tab.data-api',
						'[data-toggle="tab"], [data-hover="tab"]',
						function () {
							$(this).tab('show');
						}
					);
				});
			}
		},
		/**
		 * ------------------------------------------------------------------------
		 * Slider navigation function
		 * ------------------------------------------------------------------------
		 */
		Slider_mega: function () {
			$('a[data-slide].navi-mega').click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				// slide
				$('#carouselmega').carousel($(this).data('slide'));
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Sticky function
		 * ------------------------------------------------------------------------
		 */
		Sticky: function () {
			$('.sticky-nav').stick_in_parent();
			// if have scroll top
			var myNav = document.getElementById('showbacktop');
			if (myNav) {
				$('.sticky').stick_in_parent({ offset_top: 70 });
			} else {
				$('.sticky').stick_in_parent({ offset_top: 10 });
			}
		},
		/**
		 * ------------------------------------------------------------------------
		 * Social share function
		 * ------------------------------------------------------------------------
		 */
		Social_windows: function () {
			$('.blank-windows').click(function () {
				var newwindow = window.open($(this).prop('href'), '', 'height=300,width=500');
				if (window.focus) {
					newwindow.focus();
				}
				return false;
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Progress scroll line function
		 * ------------------------------------------------------------------------
		 */
		Progress_scroll: function () {
			// progress line
			$(window).scroll(function () {
				var s = $(window).scrollTop(),
					d = $(document).height(),
					c = $(window).height();
				var scrollPercent = (s / (d - c)) * 100;
				var position = scrollPercent;
				$('#progress-bar').attr('value', position);
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Lazy load images function
		 * ------------------------------------------------------------------------
		 */
		Lazy_load: function () {
			// lazy load in all
			var lazyLoadInstance = new LazyLoad({
				elements_selector: '.lazy',
				callback_reveal: function (el) {
					if (el.complete && el.naturalWidth !== 0) {
						el.classList.remove('loading'), el.classList.add('loaded');
					}
				},
			});
			// lazy load in tabs
			$('a[data-toggle="tabajax"]').on('shown.bs.tab', function () {
				$('.tab-content>.active', function () {
					lazyLoadInstance.update();
				});
			});
			// lazy load slider
			$('.carousel').on('slid.bs.carousel', function () {
				lazyLoadInstance.update();
			});
			$('.owl-carousel').on('translated.owl.carousel', function (event) {
				lazyLoadInstance.update();
			});
		},
		/**
		 * ------------------------------------------------------------------------
		 * Mobile Menu function
		 * ------------------------------------------------------------------------
		 */
		Mobile_menu: function () {
			// Push mobile menu
			$('.back-menu').click(function () {
				$('.menu-mobile').removeClass('pushleft-open pushright-open');
				$('body').removeClass('sidenav-left-open sidenav-right-open');
			});
			// push menu to left
			$('#showLeftPush').click(function () {
				$('body').toggleClass('sidenav-left-open');
				$('.push-left').toggleClass('pushleft-open');
			});
			// push menu to right
			$('#showRightPush').click(function () {
				$('body').toggleClass('sidenav-right-open');
				$('.push-right').toggleClass('pushright-open');
			});
		},

		/**
		 * ------------------------------------------------------------------------
		 * Bootstrap function
		 * ------------------------------------------------------------------------
		 */
		Bootstrap_module: function () {
			// popover
			$('[data-toggle="popover"]').popover();

			// tooltips
			$('[data-toggle="tooltip"]').tooltip();

			// scrollspy
			$('body').scrollspy({ target: '#navbar-scroll' });
			$('main').scrollspy({ target: '#main-scroll' });
		},
		/**
		 * ------------------------------------------------------------------------
		 * Custom JS function
		 * ------------------------------------------------------------------------
		 */
		Custom: function () {
			// Insert your custom javascript in here
		},
	};

	$(document).ready(function () {
		bn.Launch();
	});
})(jQuery);

function _toConsumableArray(t) {
	return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}

function _nonIterableSpread() {
	throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(t) {
	if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
		return Array.from(t);
}

function _arrayWithoutHoles(t) {
	if (Array.isArray(t)) {
		for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
		return n;
	}
}

function _extends() {
	return (_extends =
		Object.assign ||
		function (t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
			}
			return t;
		}).apply(this, arguments);
}

function _typeof(t) {
	return (_typeof =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? function (t) {
					return typeof t;
			  }
			: function (t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
						? 'symbol'
						: typeof t;
			  })(t);
}
!(function (t, e) {
	'object' === ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define(e)
		: (t.LazyLoad = e());
})(this, function () {
	'use strict';
	var t = 'undefined' != typeof window,
		e =
			(t && !('onscroll' in window)) ||
			('undefined' != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
		n = t && 'IntersectionObserver' in window,
		r = t && 'classList' in document.createElement('p'),
		o = {
			elements_selector: 'img',
			container: e || t ? document : null,
			threshold: 300,
			thresholds: null,
			data_src: 'src',
			data_srcset: 'srcset',
			data_sizes: 'sizes',
			data_bg: 'bg',
			data_poster: 'poster',
			class_loading: 'loading',
			class_loaded: 'loaded',
			class_error: 'error',
			load_delay: 0,
			auto_unobserve: !0,
			callback_enter: null,
			callback_exit: null,
			callback_reveal: null,
			callback_loaded: null,
			callback_error: null,
			callback_finish: null,
			use_native: !1,
		},
		a = function (t, e) {
			var n,
				r = new t(e);
			try {
				n = new CustomEvent('LazyLoad::Initialized', { detail: { instance: r } });
			} catch (t) {
				(n = document.createEvent('CustomEvent')).initCustomEvent('LazyLoad::Initialized', !1, !1, {
					instance: r,
				});
			}
			window.dispatchEvent(n);
		};
	var i = function (t, e) {
			return t.getAttribute('data-' + e);
		},
		s = function (t, e, n) {
			var r = 'data-' + e;
			null !== n ? t.setAttribute(r, n) : t.removeAttribute(r);
		},
		c = function (t) {
			return 'true' === i(t, 'was-processed');
		},
		l = function (t, e) {
			return s(t, 'll-timeout', e);
		},
		u = function (t) {
			return i(t, 'll-timeout');
		},
		d = function (t, e, n, r) {
			t && (void 0 === r ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, r));
		},
		f = function (t, e) {
			(t._loadingCount += e),
				0 === t._elements.length && 0 === t._loadingCount && d(t._settings.callback_finish, t);
		},
		_ = function (t) {
			for (var e, n = [], r = 0; (e = t.children[r]); r += 1) 'SOURCE' === e.tagName && n.push(e);
			return n;
		},
		v = function (t, e, n) {
			n && t.setAttribute(e, n);
		},
		b = function (t, e) {
			v(t, 'sizes', i(t, e.data_sizes)), v(t, 'srcset', i(t, e.data_srcset)), v(t, 'src', i(t, e.data_src));
		},
		m = {
			IMG: function (t, e) {
				var n = t.parentNode;
				n &&
					'PICTURE' === n.tagName &&
					_(n).forEach(function (t) {
						b(t, e);
					});
				b(t, e);
			},
			IFRAME: function (t, e) {
				v(t, 'src', i(t, e.data_src));
			},
			VIDEO: function (t, e) {
				_(t).forEach(function (t) {
					v(t, 'src', i(t, e.data_src));
				}),
					v(t, 'poster', i(t, e.data_poster)),
					v(t, 'src', i(t, e.data_src)),
					t.load();
			},
		},
		p = function (t, e) {
			var n,
				r,
				o = e._settings,
				a = t.tagName,
				s = m[a];
			if (s)
				return (
					s(t, o),
					f(e, 1),
					void (e._elements =
						((n = e._elements),
						(r = t),
						n.filter(function (t) {
							return t !== r;
						})))
				);
			!(function (t, e) {
				var n = i(t, e.data_src),
					r = i(t, e.data_bg);
				n && (t.style.backgroundImage = 'url("'.concat(n, '")')), r && (t.style.backgroundImage = r);
			})(t, o);
		},
		g = function (t, e) {
			r ? t.classList.add(e) : (t.className += (t.className ? ' ' : '') + e);
		},
		y = function (t, e) {
			r
				? t.classList.remove(e)
				: (t.className = t.className
						.replace(new RegExp('(^|\\s+)' + e + '(\\s+|$)'), ' ')
						.replace(/^\s+/, '')
						.replace(/\s+$/, ''));
		},
		h = function (t, e, n) {
			t.addEventListener(e, n);
		},
		E = function (t, e, n) {
			t.removeEventListener(e, n);
		},
		w = function (t, e, n) {
			E(t, 'load', e), E(t, 'loadeddata', e), E(t, 'error', n);
		},
		A = function (t, e, n) {
			var r = n._settings,
				o = e ? r.class_loaded : r.class_error,
				a = e ? r.callback_loaded : r.callback_error,
				i = t.target;
			y(i, r.class_loading), g(i, o), d(a, i, n), f(n, -1);
		},
		I = function (t, e) {
			var n = function n(o) {
					A(o, !0, e), w(t, n, r);
				},
				r = function r(o) {
					A(o, !1, e), w(t, n, r);
				};
			!(function (t, e, n) {
				h(t, 'load', e), h(t, 'loadeddata', e), h(t, 'error', n);
			})(t, n, r);
		},
		k = ['IMG', 'IFRAME', 'VIDEO'],
		L = function (t, e) {
			var n = e._observer;
			S(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
		},
		O = function (t) {
			var e = u(t);
			e && (clearTimeout(e), l(t, null));
		},
		x = function (t, e) {
			var n = e._settings.load_delay,
				r = u(t);
			r ||
				((r = setTimeout(function () {
					L(t, e), O(t);
				}, n)),
				l(t, r));
		},
		S = function (t, e, n) {
			var r = e._settings;
			(!n && c(t)) ||
				(k.indexOf(t.tagName) > -1 && (I(t, e), g(t, r.class_loading)),
				p(t, e),
				(function (t) {
					s(t, 'was-processed', 'true');
				})(t),
				d(r.callback_reveal, t, e),
				d(r.callback_set, t, e));
		},
		z = function (t) {
			return (
				!!n &&
				((t._observer = new IntersectionObserver(
					function (e) {
						e.forEach(function (e) {
							return (function (t) {
								return t.isIntersecting || t.intersectionRatio > 0;
							})(e)
								? (function (t, e, n) {
										var r = n._settings;
										d(r.callback_enter, t, e, n), r.load_delay ? x(t, n) : L(t, n);
								  })(e.target, e, t)
								: (function (t, e, n) {
										var r = n._settings;
										d(r.callback_exit, t, e, n), r.load_delay && O(t);
								  })(e.target, e, t);
						});
					},
					{
						root: (e = t._settings).container === document ? null : e.container,
						rootMargin: e.thresholds || e.threshold + 'px',
					}
				)),
				!0)
			);
			var e;
		},
		C = ['IMG', 'IFRAME'],
		N = function (t, e) {
			return (function (t) {
				return t.filter(function (t) {
					return !c(t);
				});
			})(
				((n =
					t ||
					(function (t) {
						return t.container.querySelectorAll(t.elements_selector);
					})(e)),
				Array.prototype.slice.call(n))
			);
			var n;
		},
		M = function (t) {
			var e = t._settings;
			_toConsumableArray(e.container.querySelectorAll('.' + e.class_error)).forEach(function (t) {
				y(t, e.class_error),
					(function (t) {
						s(t, 'was-processed', null);
					})(t);
			}),
				t.update();
		},
		R = function (e, n) {
			var r;
			(this._settings = (function (t) {
				return _extends({}, o, t);
			})(e)),
				(this._loadingCount = 0),
				z(this),
				this.update(n),
				(r = this),
				t &&
					window.addEventListener('online', function (t) {
						M(r);
					});
		};
	return (
		(R.prototype = {
			update: function (t) {
				var n,
					r = this,
					o = this._settings;
				((this._elements = N(t, o)), !e && this._observer)
					? ((function (t) {
							return t.use_native && 'loading' in HTMLImageElement.prototype;
					  })(o) &&
							((n = this)._elements.forEach(function (t) {
								-1 !== C.indexOf(t.tagName) && (t.setAttribute('loading', 'lazy'), S(t, n));
							}),
							(this._elements = N(t, o))),
					  this._elements.forEach(function (t) {
							r._observer.observe(t);
					  }))
					: this.loadAll();
			},
			destroy: function () {
				var t = this;
				this._observer &&
					(this._elements.forEach(function (e) {
						t._observer.unobserve(e);
					}),
					(this._observer = null)),
					(this._elements = null),
					(this._settings = null);
			},
			load: function (t, e) {
				S(t, this, e);
			},
			loadAll: function () {
				var t = this;
				this._elements.forEach(function (e) {
					L(e, t);
				});
			},
		}),
		t &&
			(function (t, e) {
				if (e)
					if (e.length) for (var n, r = 0; (n = e[r]); r += 1) a(t, n);
					else a(t, e);
			})(R, window.lazyLoadOptions),
		R
	);
});
//# sourceMappingURL=lazyload.min.js.map
