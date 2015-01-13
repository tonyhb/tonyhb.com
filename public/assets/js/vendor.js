/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** multi vendor ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! jquery */1);
	__webpack_require__(/*! underscore */2);
	__webpack_require__(/*! backbone */3);
	__webpack_require__(/*! marionette */4);
	__webpack_require__(/*! radio */5);
	module.exports = __webpack_require__(/*! mustache */6);


/***/ },
/* 1 */
/*!********************************************!*\
  !*** ./public/assets/libs/jquery-2.1.3.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-18T15:11Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//
	
	var arr = [];
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
		version = "2.1.3",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},
	
		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
	
			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );
	
			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				}
	
			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		if ( obj.nodeType === 1 && length ) {
			return true;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
		nodeType = context.nodeType;
	
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		if ( !seed && documentIsHTML ) {
	
			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;
	
		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return doc;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context !== document && context;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {
	
			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;
	
			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var matched = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}
	
			return matched;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});
	
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	Data.accepts = jQuery.acceptData;
	
	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}
	
			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];
	
			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;
	
				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );
	
				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}
	
			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}
	
			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];
	
			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}
	
			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			if ( key === undefined ) {
				this.cache[ unlock ] = {};
	
			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();
	
	var data_user = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );
	
					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}
	
			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};
	
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	
	
	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;
	
	
	
	support.focusinBubbles = "onfocusin" in window;
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );
	
					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
	
			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			_default: [ 0, "", "" ]
		};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}
	
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			data_user.set( dest, udataCur );
		}
	}
	
	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];
	
						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );
	
						// Remember the top-level container
						tmp = fragment.firstChild;
	
						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}
	
			// Remove wrapper from fragment
			fragment.textContent = "";
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			return fragment;
		},
	
		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];
	
					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});
	
	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},
	
		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}
	
				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var arg = arguments[ 0 ];
	
			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;
	
				jQuery.cleanData( getAll( this ) );
	
				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});
	
			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, callback ) {
	
			// Flatten any nested arrays
			args = concat.apply( [], args );
	
			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call( this[ i ], node, i );
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}
	
			return this;
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	
	var iframe,
		elemdisplay = {};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
	
				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = (/^margin/);
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}
	
			return window.getComputedStyle( elem, null );
		};
	
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}
	
		if ( computed ) {
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}
	
	
	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );
	
			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";
	
			docElem.removeChild( container );
		}
	
		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {
	
					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {
	
					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );
	
					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );
	
					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );
	
					docElem.removeChild( container );
					div.removeChild( marginDiv );
	
					return ret;
				}
			});
		}
	})();
	
	
	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend({
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;
	
				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );
	
					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}
	
				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}
	
				return tween;
			} ]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
	
				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
				ret = jQuery.find.attr( elem, name );
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});
	
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );
	
			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});
	
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Document location
		ajaxLocation = window.location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport(function( options ) {
		var callback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;
	
					xhr.open( options.type, options.url, options.async, options.username, options.password );
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
	
					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");
	
					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = jQuery.buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
	
	
	
	
	var docElem = window.document.documentElement;
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || docElem;
			});
		}
	});
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	
	}));


/***/ },
/* 2 */
/*!*************************************************!*\
  !*** ./public/assets/libs/lodash.underscore.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	;(function() {
	
	  /** Used as a safe reference for `undefined` in pre ES5 environments */
	  var undefined;
	
	  /** Used to generate unique IDs */
	  var idCounter = 0;
	
	  /** Used internally to indicate various things */
	  var indicatorObject = {};
	
	  /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
	  var keyPrefix = +new Date + '';
	
	  /** Used to match "interpolate" template delimiters */
	  var reInterpolate = /<%=([\s\S]+?)%>/g;
	
	  /** Used to ensure capturing order of template delimiters */
	  var reNoMatch = /($^)/;
	
	  /** Used to match unescaped characters in compiled string literals */
	  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
	
	  /** `Object#toString` result shortcuts */
	  var argsClass = '[object Arguments]',
	      arrayClass = '[object Array]',
	      boolClass = '[object Boolean]',
	      dateClass = '[object Date]',
	      funcClass = '[object Function]',
	      numberClass = '[object Number]',
	      objectClass = '[object Object]',
	      regexpClass = '[object RegExp]',
	      stringClass = '[object String]';
	
	  /** Used to determine if values are of the language type Object */
	  var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	  };
	
	  /** Used to escape characters for inclusion in compiled string literals */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\t': 't',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  /** Used as a reference to the global object */
	  var root = (objectTypes[typeof window] && window) || this;
	
	  /** Detect free variable `exports` */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  /** Detect free variable `module` */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	
	  /** Detect the popular CommonJS extension `module.exports` */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
	
	  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
	  var freeGlobal = objectTypes[typeof global] && global;
	  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * The base implementation of `_.indexOf` without support for binary searches
	   * or `fromIndex` constraints.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {number} Returns the index of the matched value or `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    var index = (fromIndex || 0) - 1,
	        length = array ? array.length : 0;
	
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * Used by `sortBy` to compare transformed `collection` elements, stable sorting
	   * them in ascending order.
	   *
	   * @private
	   * @param {Object} a The object to compare to `b`.
	   * @param {Object} b The object to compare to `a`.
	   * @returns {number} Returns the sort order indicator of `1` or `-1`.
	   */
	  function compareAscending(a, b) {
	    var ac = a.criteria,
	        bc = b.criteria,
	        index = -1,
	        length = ac.length;
	
	    while (++index < length) {
	      var value = ac[index],
	          other = bc[index];
	
	      if (value !== other) {
	        if (value > other || typeof value == 'undefined') {
	          return 1;
	        }
	        if (value < other || typeof other == 'undefined') {
	          return -1;
	        }
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to return the same value for
	    // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See http://code.google.com/p/v8/issues/detail?id=90
	    return a.index - b.index;
	  }
	
	  /**
	   * Used by `template` to escape characters for inclusion in compiled
	   * string literals.
	   *
	   * @private
	   * @param {string} match The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(match) {
	    return '\\' + stringEscapes[match];
	  }
	
	  /**
	   * Slices the `collection` from the `start` index up to, but not including,
	   * the `end` index.
	   *
	   * Note: This function is used instead of `Array#slice` to support node lists
	   * in IE < 9 and to ensure dense arrays are returned.
	   *
	   * @private
	   * @param {Array|Object|string} collection The collection to slice.
	   * @param {number} start The start index.
	   * @param {number} end The end index.
	   * @returns {Array} Returns the new array.
	   */
	  function slice(array, start, end) {
	    start || (start = 0);
	    if (typeof end == 'undefined') {
	      end = array ? array.length : 0;
	    }
	    var index = -1,
	        length = end - start || 0,
	        result = Array(length < 0 ? 0 : length);
	
	    while (++index < length) {
	      result[index] = array[start + index];
	    }
	    return result;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Used for `Array` method references.
	   *
	   * Normally `Array.prototype` would suffice, however, using an array literal
	   * avoids issues in Narwhal.
	   */
	  var arrayRef = [];
	
	  /** Used for native method references */
	  var objectProto = Object.prototype;
	
	  /** Used to restore the original `_` reference in `noConflict` */
	  var oldDash = root._;
	
	  /** Used to resolve the internal [[Class]] of values */
	  var toString = objectProto.toString;
	
	  /** Used to detect if a method is native */
	  var reNative = RegExp('^' +
	    String(toString)
	      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	      .replace(/toString| for [^\]]+/g, '.*?') + '$'
	  );
	
	  /** Native method shortcuts */
	  var ceil = Math.ceil,
	      floor = Math.floor,
	      hasOwnProperty = objectProto.hasOwnProperty,
	      push = arrayRef.push,
	      propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	  /* Native method shortcuts for methods with the same name as other `lodash` methods */
	  var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
	      nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
	      nativeIsFinite = root.isFinite,
	      nativeIsNaN = root.isNaN,
	      nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
	      nativeMax = Math.max,
	      nativeMin = Math.min,
	      nativeRandom = Math.random;
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Creates a `lodash` object which wraps the given value to enable intuitive
	   * method chaining.
	   *
	   * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
	   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
	   * and `unshift`
	   *
	   * Chaining is supported in custom builds as long as the `value` method is
	   * implicitly or explicitly included in the build.
	   *
	   * The chainable wrapper functions are:
	   * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
	   * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
	   * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
	   * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	   * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	   * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
	   * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
	   * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
	   * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
	   * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
	   * and `zip`
	   *
	   * The non-chainable wrapper functions are:
	   * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
	   * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
	   * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	   * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
	   * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
	   * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
	   * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
	   * `template`, `unescape`, `uniqueId`, and `value`
	   *
	   * The wrapper functions `first` and `last` return wrapped values when `n` is
	   * provided, otherwise they return unwrapped values.
	   *
	   * Explicit chaining can be enabled by using the `_.chain` method.
	   *
	   * @name _
	   * @constructor
	   * @category Chaining
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @returns {Object} Returns a `lodash` instance.
	   * @example
	   *
	   * var wrapped = _([1, 2, 3]);
	   *
	   * // returns an unwrapped value
	   * wrapped.reduce(function(sum, num) {
	   *   return sum + num;
	   * });
	   * // => 6
	   *
	   * // returns a wrapped value
	   * var squares = wrapped.map(function(num) {
	   *   return num * num;
	   * });
	   *
	   * _.isArray(squares);
	   * // => false
	   *
	   * _.isArray(squares.value());
	   * // => true
	   */
	  function lodash(value) {
	    return (value instanceof lodash)
	      ? value
	      : new lodashWrapper(value);
	  }
	
	  /**
	   * A fast path for creating `lodash` wrapper objects.
	   *
	   * @private
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @param {boolean} chainAll A flag to enable chaining for all methods
	   * @returns {Object} Returns a `lodash` instance.
	   */
	  function lodashWrapper(value, chainAll) {
	    this.__chain__ = !!chainAll;
	    this.__wrapped__ = value;
	  }
	  // ensure `new lodashWrapper` is an instance of `lodash`
	  lodashWrapper.prototype = lodash.prototype;
	
	  /**
	   * An object used to flag environments features.
	   *
	   * @static
	   * @memberOf _
	   * @type Object
	   */
	  var support = {};
	
	  (function() {
	    var object = { '0': 1, 'length': 1 };
	
	    /**
	     * Detect if `Array#shift` and `Array#splice` augment array-like objects correctly.
	     *
	     * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
	     * and `splice()` functions that fail to remove the last element, `value[0]`,
	     * of array-like objects even though the `length` property is set to `0`.
	     * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
	     * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
	     *
	     * @memberOf _.support
	     * @type boolean
	     */
	    support.spliceObjects = (arrayRef.splice.call(object, 0, 1), !object[0]);
	  }(1));
	
	  /**
	   * By default, the template delimiters used by Lo-Dash are similar to those in
	   * embedded Ruby (ERB). Change the following template settings to use alternative
	   * delimiters.
	   *
	   * @static
	   * @memberOf _
	   * @type Object
	   */
	  lodash.templateSettings = {
	
	    /**
	     * Used to detect `data` property values to be HTML-escaped.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'escape': /<%-([\s\S]+?)%>/g,
	
	    /**
	     * Used to detect code to be evaluated.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'evaluate': /<%([\s\S]+?)%>/g,
	
	    /**
	     * Used to detect `data` property values to inject.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'interpolate': reInterpolate,
	
	    /**
	     * Used to reference the data object in the template text.
	     *
	     * @memberOf _.templateSettings
	     * @type string
	     */
	    'variable': ''
	  };
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * The base implementation of `_.bind` that creates the bound function and
	   * sets its meta data.
	   *
	   * @private
	   * @param {Array} bindData The bind data array.
	   * @returns {Function} Returns the new bound function.
	   */
	  function baseBind(bindData) {
	    var func = bindData[0],
	        partialArgs = bindData[2],
	        thisArg = bindData[4];
	
	    function bound() {
	      // `Function#bind` spec
	      // http://es5.github.io/#x15.3.4.5
	      if (partialArgs) {
	        // avoid `arguments` object deoptimizations by using `slice` instead
	        // of `Array.prototype.slice.call` and not assigning `arguments` to a
	        // variable as a ternary expression
	        var args = slice(partialArgs);
	        push.apply(args, arguments);
	      }
	      // mimic the constructor's `return` behavior
	      // http://es5.github.io/#x13.2.2
	      if (this instanceof bound) {
	        // ensure `new bound` is an instance of `func`
	        var thisBinding = baseCreate(func.prototype),
	            result = func.apply(thisBinding, args || arguments);
	        return isObject(result) ? result : thisBinding;
	      }
	      return func.apply(thisArg, args || arguments);
	    }
	    return bound;
	  }
	
	  /**
	   * The base implementation of `_.create` without support for assigning
	   * properties to the created object.
	   *
	   * @private
	   * @param {Object} prototype The object to inherit from.
	   * @returns {Object} Returns the new object.
	   */
	  function baseCreate(prototype, properties) {
	    return isObject(prototype) ? nativeCreate(prototype) : {};
	  }
	  // fallback for browsers without `Object.create`
	  if (!nativeCreate) {
	    baseCreate = (function() {
	      function Object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          Object.prototype = prototype;
	          var result = new Object;
	          Object.prototype = null;
	        }
	        return result || root.Object();
	      };
	    }());
	  }
	
	  /**
	   * The base implementation of `_.createCallback` without support for creating
	   * "_.pluck" or "_.where" style callbacks.
	   *
	   * @private
	   * @param {*} [func=identity] The value to convert to a callback.
	   * @param {*} [thisArg] The `this` binding of the created callback.
	   * @param {number} [argCount] The number of arguments the callback accepts.
	   * @returns {Function} Returns a callback function.
	   */
	  function baseCreateCallback(func, thisArg, argCount) {
	    if (typeof func != 'function') {
	      return identity;
	    }
	    // exit early for no `thisArg` or already bound by `Function#bind`
	    if (typeof thisArg == 'undefined' || !('prototype' in func)) {
	      return func;
	    }
	    switch (argCount) {
	      case 1: return function(value) {
	        return func.call(thisArg, value);
	      };
	      case 2: return function(a, b) {
	        return func.call(thisArg, a, b);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(thisArg, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(thisArg, accumulator, value, index, collection);
	      };
	    }
	    return bind(func, thisArg);
	  }
	
	  /**
	   * The base implementation of `createWrapper` that creates the wrapper and
	   * sets its meta data.
	   *
	   * @private
	   * @param {Array} bindData The bind data array.
	   * @returns {Function} Returns the new function.
	   */
	  function baseCreateWrapper(bindData) {
	    var func = bindData[0],
	        bitmask = bindData[1],
	        partialArgs = bindData[2],
	        partialRightArgs = bindData[3],
	        thisArg = bindData[4],
	        arity = bindData[5];
	
	    var isBind = bitmask & 1,
	        isBindKey = bitmask & 2,
	        isCurry = bitmask & 4,
	        isCurryBound = bitmask & 8,
	        key = func;
	
	    function bound() {
	      var thisBinding = isBind ? thisArg : this;
	      if (partialArgs) {
	        var args = slice(partialArgs);
	        push.apply(args, arguments);
	      }
	      if (partialRightArgs || isCurry) {
	        args || (args = slice(arguments));
	        if (partialRightArgs) {
	          push.apply(args, partialRightArgs);
	        }
	        if (isCurry && args.length < arity) {
	          bitmask |= 16 & ~32;
	          return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
	        }
	      }
	      args || (args = arguments);
	      if (isBindKey) {
	        func = thisBinding[key];
	      }
	      if (this instanceof bound) {
	        thisBinding = baseCreate(func.prototype);
	        var result = func.apply(thisBinding, args);
	        return isObject(result) ? result : thisBinding;
	      }
	      return func.apply(thisBinding, args);
	    }
	    return bound;
	  }
	
	  /**
	   * The base implementation of `_.difference` that accepts a single array
	   * of values to exclude.
	   *
	   * @private
	   * @param {Array} array The array to process.
	   * @param {Array} [values] The array of values to exclude.
	   * @returns {Array} Returns a new array of filtered values.
	   */
	  function baseDifference(array, values) {
	    var index = -1,
	        indexOf = getIndexOf(),
	        length = array ? array.length : 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	      if (indexOf(values, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.flatten` without support for callback
	   * shorthands or `thisArg` binding.
	   *
	   * @private
	   * @param {Array} array The array to flatten.
	   * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
	   * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
	   * @param {number} [fromIndex=0] The index to start from.
	   * @returns {Array} Returns a new flattened array.
	   */
	  function baseFlatten(array, isShallow, isStrict, fromIndex) {
	    var index = (fromIndex || 0) - 1,
	        length = array ? array.length : 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	
	      if (value && typeof value == 'object' && typeof value.length == 'number'
	          && (isArray(value) || isArguments(value))) {
	        // recursively flatten arrays (susceptible to call stack limits)
	        if (!isShallow) {
	          value = baseFlatten(value, isShallow, isStrict);
	        }
	        var valIndex = -1,
	            valLength = value.length,
	            resIndex = result.length;
	
	        result.length += valLength;
	        while (++valIndex < valLength) {
	          result[resIndex++] = value[valIndex];
	        }
	      } else if (!isStrict) {
	        result.push(value);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.isEqual`, without support for `thisArg` binding,
	   * that allows partial "_.where" style comparisons.
	   *
	   * @private
	   * @param {*} a The value to compare.
	   * @param {*} b The other value to compare.
	   * @param {Function} [callback] The function to customize comparing values.
	   * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
	   * @param {Array} [stackA=[]] Tracks traversed `a` objects.
	   * @param {Array} [stackB=[]] Tracks traversed `b` objects.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   */
	  function baseIsEqual(a, b, stackA, stackB) {
	    if (a === b) {
	      return a !== 0 || (1 / a == 1 / b);
	    }
	    var type = typeof a,
	        otherType = typeof b;
	
	    if (a === a &&
	        !(a && objectTypes[type]) &&
	        !(b && objectTypes[otherType])) {
	      return false;
	    }
	    if (a == null || b == null) {
	      return a === b;
	    }
	    var className = toString.call(a),
	        otherClass = toString.call(b);
	
	    if (className != otherClass) {
	      return false;
	    }
	    switch (className) {
	      case boolClass:
	      case dateClass:
	        return +a == +b;
	
	      case numberClass:
	        return a != +a
	          ? b != +b
	          : (a == 0 ? (1 / a == 1 / b) : a == +b);
	
	      case regexpClass:
	      case stringClass:
	        return a == String(b);
	    }
	    var isArr = className == arrayClass;
	    if (!isArr) {
	      var aWrapped = a instanceof lodash,
	          bWrapped = b instanceof lodash;
	
	      if (aWrapped || bWrapped) {
	        return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, stackA, stackB);
	      }
	      if (className != objectClass) {
	        return false;
	      }
	      var ctorA = a.constructor,
	          ctorB = b.constructor;
	
	      if (ctorA != ctorB &&
	            !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
	            ('constructor' in a && 'constructor' in b)
	          ) {
	        return false;
	      }
	    }
	    stackA || (stackA = []);
	    stackB || (stackB = []);
	
	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == a) {
	        return stackB[length] == b;
	      }
	    }
	    var result = true,
	        size = 0;
	
	    stackA.push(a);
	    stackB.push(b);
	
	    if (isArr) {
	      size = b.length;
	      result = size == a.length;
	
	      if (result) {
	        while (size--) {
	          if (!(result = baseIsEqual(a[size], b[size], stackA, stackB))) {
	            break;
	          }
	        }
	      }
	    }
	    else {
	      forIn(b, function(value, key, b) {
	        if (hasOwnProperty.call(b, key)) {
	          size++;
	          return !(result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, stackA, stackB)) && indicatorObject;
	        }
	      });
	
	      if (result) {
	        forIn(a, function(value, key, a) {
	          if (hasOwnProperty.call(a, key)) {
	            return !(result = --size > -1) && indicatorObject;
	          }
	        });
	      }
	    }
	    stackA.pop();
	    stackB.pop();
	    return result;
	  }
	
	  /**
	   * The base implementation of `_.random` without argument juggling or support
	   * for returning floating-point numbers.
	   *
	   * @private
	   * @param {number} min The minimum possible value.
	   * @param {number} max The maximum possible value.
	   * @returns {number} Returns a random number.
	   */
	  function baseRandom(min, max) {
	    return min + floor(nativeRandom() * (max - min + 1));
	  }
	
	  /**
	   * The base implementation of `_.uniq` without support for callback shorthands
	   * or `thisArg` binding.
	   *
	   * @private
	   * @param {Array} array The array to process.
	   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
	   * @param {Function} [callback] The function called per iteration.
	   * @returns {Array} Returns a duplicate-value-free array.
	   */
	  function baseUniq(array, isSorted, callback) {
	    var index = -1,
	        indexOf = getIndexOf(),
	        length = array ? array.length : 0,
	        result = [],
	        seen = callback ? [] : result;
	
	    while (++index < length) {
	      var value = array[index],
	          computed = callback ? callback(value, index, array) : value;
	
	      if (isSorted
	            ? !index || seen[seen.length - 1] !== computed
	            : indexOf(seen, computed) < 0
	          ) {
	        if (callback) {
	          seen.push(computed);
	        }
	        result.push(value);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Creates a function that aggregates a collection, creating an object composed
	   * of keys generated from the results of running each element of the collection
	   * through a callback. The given `setter` function sets the keys and values
	   * of the composed object.
	   *
	   * @private
	   * @param {Function} setter The setter function.
	   * @returns {Function} Returns the new aggregator function.
	   */
	  function createAggregator(setter) {
	    return function(collection, callback, thisArg) {
	      var result = {};
	      callback = createCallback(callback, thisArg, 3);
	
	      var index = -1,
	          length = collection ? collection.length : 0;
	
	      if (typeof length == 'number') {
	        while (++index < length) {
	          var value = collection[index];
	          setter(result, value, callback(value, index, collection), collection);
	        }
	      } else {
	        forOwn(collection, function(value, key, collection) {
	          setter(result, value, callback(value, key, collection), collection);
	        });
	      }
	      return result;
	    };
	  }
	
	  /**
	   * Creates a function that, when called, either curries or invokes `func`
	   * with an optional `this` binding and partially applied arguments.
	   *
	   * @private
	   * @param {Function|string} func The function or method name to reference.
	   * @param {number} bitmask The bitmask of method flags to compose.
	   *  The bitmask may be composed of the following flags:
	   *  1 - `_.bind`
	   *  2 - `_.bindKey`
	   *  4 - `_.curry`
	   *  8 - `_.curry` (bound)
	   *  16 - `_.partial`
	   *  32 - `_.partialRight`
	   * @param {Array} [partialArgs] An array of arguments to prepend to those
	   *  provided to the new function.
	   * @param {Array} [partialRightArgs] An array of arguments to append to those
	   *  provided to the new function.
	   * @param {*} [thisArg] The `this` binding of `func`.
	   * @param {number} [arity] The arity of `func`.
	   * @returns {Function} Returns the new function.
	   */
	  function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
	    var isBind = bitmask & 1,
	        isBindKey = bitmask & 2,
	        isCurry = bitmask & 4,
	        isCurryBound = bitmask & 8,
	        isPartial = bitmask & 16,
	        isPartialRight = bitmask & 32;
	
	    if (!isBindKey && !isFunction(func)) {
	      throw new TypeError;
	    }
	    if (isPartial && !partialArgs.length) {
	      bitmask &= ~16;
	      isPartial = partialArgs = false;
	    }
	    if (isPartialRight && !partialRightArgs.length) {
	      bitmask &= ~32;
	      isPartialRight = partialRightArgs = false;
	    }
	    // fast path for `_.bind`
	    var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
	    return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
	  }
	
	  /**
	   * Used by `escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} match The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(match) {
	    return htmlEscapes[match];
	  }
	
	  /**
	   * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	   * customized, this method returns the custom method, otherwise it returns
	   * the `baseIndexOf` function.
	   *
	   * @private
	   * @returns {Function} Returns the "indexOf" function.
	   */
	  function getIndexOf() {
	    var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
	    return result;
	  }
	
	  /**
	   * Checks if `value` is a native function.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
	   */
	  function isNative(value) {
	    return typeof value == 'function' && reNative.test(value);
	  }
	
	  /**
	   * Used by `unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} match The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(match) {
	    return htmlUnescapes[match];
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Checks if `value` is an `arguments` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
	   * @example
	   *
	   * (function() { return _.isArguments(arguments); })(1, 2, 3);
	   * // => true
	   *
	   * _.isArguments([1, 2, 3]);
	   * // => false
	   */
	  function isArguments(value) {
	    return value && typeof value == 'object' && typeof value.length == 'number' &&
	      toString.call(value) == argsClass || false;
	  }
	  // fallback for browsers that can't detect `arguments` objects by [[Class]]
	  if (!isArguments(arguments)) {
	    isArguments = function(value) {
	      return value && typeof value == 'object' && typeof value.length == 'number' &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee') || false;
	    };
	  }
	
	  /**
	   * Checks if `value` is an array.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
	   * @example
	   *
	   * (function() { return _.isArray(arguments); })();
	   * // => false
	   *
	   * _.isArray([1, 2, 3]);
	   * // => true
	   */
	  var isArray = nativeIsArray || function(value) {
	    return value && typeof value == 'object' && typeof value.length == 'number' &&
	      toString.call(value) == arrayClass || false;
	  };
	
	  /**
	   * A fallback implementation of `Object.keys` which produces an array of the
	   * given object's own enumerable property names.
	   *
	   * @private
	   * @type Function
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property names.
	   */
	  var shimKeys = function(object) {
	    var index, iterable = object, result = [];
	    if (!iterable) return result;
	    if (!(objectTypes[typeof object])) return result;
	      for (index in iterable) {
	        if (hasOwnProperty.call(iterable, index)) {
	          result.push(index);
	        }
	      }
	    return result
	  };
	
	  /**
	   * Creates an array composed of the own enumerable property names of an object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property names.
	   * @example
	   *
	   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
	   */
	  var keys = !nativeKeys ? shimKeys : function(object) {
	    if (!isObject(object)) {
	      return [];
	    }
	    return nativeKeys(object);
	  };
	
	  /**
	   * Used to convert characters to HTML entities:
	   *
	   * Though the `>` character is escaped for symmetry, characters like `>` and `/`
	   * don't require escaping in HTML and have no special meaning unless they're part
	   * of a tag or an unquoted attribute value.
	   * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
	   */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;'
	  };
	
	  /** Used to convert HTML entities to characters */
	  var htmlUnescapes = invert(htmlEscapes);
	
	  /** Used to match HTML entities and HTML characters */
	  var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
	      reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object. Subsequent sources will overwrite property assignments of previous
	   * sources. If a callback is provided it will be executed to produce the
	   * assigned values. The callback is bound to `thisArg` and invoked with two
	   * arguments; (objectValue, sourceValue).
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @alias extend
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {...Object} [source] The source objects.
	   * @param {Function} [callback] The function to customize assigning values.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
	   * // => { 'name': 'fred', 'employer': 'slate' }
	   *
	   * var defaults = _.partialRight(_.assign, function(a, b) {
	   *   return typeof a == 'undefined' ? b : a;
	   * });
	   *
	   * var object = { 'name': 'barney' };
	   * defaults(object, { 'name': 'fred', 'employer': 'slate' });
	   * // => { 'name': 'barney', 'employer': 'slate' }
	   */
	  function assign(object) {
	    if (!object) {
	      return object;
	    }
	    for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
	      var iterable = arguments[argsIndex];
	      if (iterable) {
	        for (var key in iterable) {
	          object[key] = iterable[key];
	        }
	      }
	    }
	    return object;
	  }
	
	  /**
	   * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
	   * be cloned, otherwise they will be assigned by reference. If a callback
	   * is provided it will be executed to produce the cloned values. If the
	   * callback returns `undefined` cloning will be handled by the method instead.
	   * The callback is bound to `thisArg` and invoked with one argument; (value).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to clone.
	   * @param {boolean} [isDeep=false] Specify a deep clone.
	   * @param {Function} [callback] The function to customize cloning values.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the cloned value.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * var shallow = _.clone(characters);
	   * shallow[0] === characters[0];
	   * // => true
	   *
	   * var deep = _.clone(characters, true);
	   * deep[0] === characters[0];
	   * // => false
	   *
	   * _.mixin({
	   *   'clone': _.partialRight(_.clone, function(value) {
	   *     return _.isElement(value) ? value.cloneNode(false) : undefined;
	   *   })
	   * });
	   *
	   * var clone = _.clone(document.body);
	   * clone.childNodes.length;
	   * // => 0
	   */
	  function clone(value) {
	    return isObject(value)
	      ? (isArray(value) ? slice(value) : assign({}, value))
	      : value;
	  }
	
	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object for all destination properties that resolve to `undefined`. Once a
	   * property is set, additional defaults of the same property will be ignored.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {...Object} [source] The source objects.
	   * @param- {Object} [guard] Allows working with `_.reduce` without using its
	   *  `key` and `object` arguments as sources.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * var object = { 'name': 'barney' };
	   * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
	   * // => { 'name': 'barney', 'employer': 'slate' }
	   */
	  function defaults(object) {
	    if (!object) {
	      return object;
	    }
	    for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
	      var iterable = arguments[argsIndex];
	      if (iterable) {
	        for (var key in iterable) {
	          if (typeof object[key] == 'undefined') {
	            object[key] = iterable[key];
	          }
	        }
	      }
	    }
	    return object;
	  }
	
	  /**
	   * Iterates over own and inherited enumerable properties of an object,
	   * executing the callback for each property. The callback is bound to `thisArg`
	   * and invoked with three arguments; (value, key, object). Callbacks may exit
	   * iteration early by explicitly returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The object to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * function Shape() {
	   *   this.x = 0;
	   *   this.y = 0;
	   * }
	   *
	   * Shape.prototype.move = function(x, y) {
	   *   this.x += x;
	   *   this.y += y;
	   * };
	   *
	   * _.forIn(new Shape, function(value, key) {
	   *   console.log(key);
	   * });
	   * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
	   */
	  var forIn = function(collection, callback) {
	    var index, iterable = collection, result = iterable;
	    if (!iterable) return result;
	    if (!objectTypes[typeof iterable]) return result;
	      for (index in iterable) {
	        if (callback(iterable[index], index, collection) === indicatorObject) return result;
	      }
	    return result
	  };
	
	  /**
	   * Iterates over own enumerable properties of an object, executing the callback
	   * for each property. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, key, object). Callbacks may exit iteration early by
	   * explicitly returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The object to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
	   *   console.log(key);
	   * });
	   * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
	   */
	  var forOwn = function(collection, callback) {
	    var index, iterable = collection, result = iterable;
	    if (!iterable) return result;
	    if (!objectTypes[typeof iterable]) return result;
	      for (index in iterable) {
	        if (hasOwnProperty.call(iterable, index)) {
	          if (callback(iterable[index], index, collection) === indicatorObject) return result;
	        }
	      }
	    return result
	  };
	
	  /**
	   * Creates a sorted array of property names of all enumerable properties,
	   * own and inherited, of `object` that have function values.
	   *
	   * @static
	   * @memberOf _
	   * @alias methods
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property names that have function values.
	   * @example
	   *
	   * _.functions(_);
	   * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
	   */
	  function functions(object) {
	    var result = [];
	    forIn(object, function(value, key) {
	      if (isFunction(value)) {
	        result.push(key);
	      }
	    });
	    return result.sort();
	  }
	
	  /**
	   * Checks if the specified property name exists as a direct property of `object`,
	   * instead of an inherited property.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @param {string} key The name of the property to check.
	   * @returns {boolean} Returns `true` if key is a direct property, else `false`.
	   * @example
	   *
	   * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
	   * // => true
	   */
	  function has(object, key) {
	    return object ? hasOwnProperty.call(object, key) : false;
	  }
	
	  /**
	   * Creates an object composed of the inverted keys and values of the given object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to invert.
	   * @returns {Object} Returns the created inverted object.
	   * @example
	   *
	   * _.invert({ 'first': 'fred', 'second': 'barney' });
	   * // => { 'fred': 'first', 'barney': 'second' }
	   */
	  function invert(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = {};
	
	    while (++index < length) {
	      var key = props[index];
	      result[object[key]] = key;
	    }
	    return result;
	  }
	
	  /**
	   * Checks if `value` is a boolean value.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
	   * @example
	   *
	   * _.isBoolean(null);
	   * // => false
	   */
	  function isBoolean(value) {
	    return value === true || value === false ||
	      value && typeof value == 'object' && toString.call(value) == boolClass || false;
	  }
	
	  /**
	   * Checks if `value` is a date.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
	   * @example
	   *
	   * _.isDate(new Date);
	   * // => true
	   */
	  function isDate(value) {
	    return value && typeof value == 'object' && toString.call(value) == dateClass || false;
	  }
	
	  /**
	   * Checks if `value` is a DOM element.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
	   * @example
	   *
	   * _.isElement(document.body);
	   * // => true
	   */
	  function isElement(value) {
	    return value && value.nodeType === 1 || false;
	  }
	
	  /**
	   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
	   * length of `0` and objects with no own enumerable properties are considered
	   * "empty".
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Array|Object|string} value The value to inspect.
	   * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
	   * @example
	   *
	   * _.isEmpty([1, 2, 3]);
	   * // => false
	   *
	   * _.isEmpty({});
	   * // => true
	   *
	   * _.isEmpty('');
	   * // => true
	   */
	  function isEmpty(value) {
	    if (!value) {
	      return true;
	    }
	    if (isArray(value) || isString(value)) {
	      return !value.length;
	    }
	    for (var key in value) {
	      if (hasOwnProperty.call(value, key)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  /**
	   * Performs a deep comparison between two values to determine if they are
	   * equivalent to each other. If a callback is provided it will be executed
	   * to compare values. If the callback returns `undefined` comparisons will
	   * be handled by the method instead. The callback is bound to `thisArg` and
	   * invoked with two arguments; (a, b).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} a The value to compare.
	   * @param {*} b The other value to compare.
	   * @param {Function} [callback] The function to customize comparing values.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   * @example
	   *
	   * var object = { 'name': 'fred' };
	   * var copy = { 'name': 'fred' };
	   *
	   * object == copy;
	   * // => false
	   *
	   * _.isEqual(object, copy);
	   * // => true
	   *
	   * var words = ['hello', 'goodbye'];
	   * var otherWords = ['hi', 'goodbye'];
	   *
	   * _.isEqual(words, otherWords, function(a, b) {
	   *   var reGreet = /^(?:hello|hi)$/i,
	   *       aGreet = _.isString(a) && reGreet.test(a),
	   *       bGreet = _.isString(b) && reGreet.test(b);
	   *
	   *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
	   * });
	   * // => true
	   */
	  function isEqual(a, b) {
	    return baseIsEqual(a, b);
	  }
	
	  /**
	   * Checks if `value` is, or can be coerced to, a finite number.
	   *
	   * Note: This is not the same as native `isFinite` which will return true for
	   * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
	   * @example
	   *
	   * _.isFinite(-101);
	   * // => true
	   *
	   * _.isFinite('10');
	   * // => true
	   *
	   * _.isFinite(true);
	   * // => false
	   *
	   * _.isFinite('');
	   * // => false
	   *
	   * _.isFinite(Infinity);
	   * // => false
	   */
	  function isFinite(value) {
	    return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
	  }
	
	  /**
	   * Checks if `value` is a function.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
	   * @example
	   *
	   * _.isFunction(_);
	   * // => true
	   */
	  function isFunction(value) {
	    return typeof value == 'function';
	  }
	  // fallback for older versions of Chrome and Safari
	  if (isFunction(/x/)) {
	    isFunction = function(value) {
	      return typeof value == 'function' && toString.call(value) == funcClass;
	    };
	  }
	
	  /**
	   * Checks if `value` is the language type of Object.
	   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
	   * @example
	   *
	   * _.isObject({});
	   * // => true
	   *
	   * _.isObject([1, 2, 3]);
	   * // => true
	   *
	   * _.isObject(1);
	   * // => false
	   */
	  function isObject(value) {
	    // check if the value is the ECMAScript language type of Object
	    // http://es5.github.io/#x8
	    // and avoid a V8 bug
	    // http://code.google.com/p/v8/issues/detail?id=2291
	    return !!(value && objectTypes[typeof value]);
	  }
	
	  /**
	   * Checks if `value` is `NaN`.
	   *
	   * Note: This is not the same as native `isNaN` which will return `true` for
	   * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
	   * @example
	   *
	   * _.isNaN(NaN);
	   * // => true
	   *
	   * _.isNaN(new Number(NaN));
	   * // => true
	   *
	   * isNaN(undefined);
	   * // => true
	   *
	   * _.isNaN(undefined);
	   * // => false
	   */
	  function isNaN(value) {
	    // `NaN` as a primitive is the only value that is not equal to itself
	    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
	    return isNumber(value) && value != +value;
	  }
	
	  /**
	   * Checks if `value` is `null`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
	   * @example
	   *
	   * _.isNull(null);
	   * // => true
	   *
	   * _.isNull(undefined);
	   * // => false
	   */
	  function isNull(value) {
	    return value === null;
	  }
	
	  /**
	   * Checks if `value` is a number.
	   *
	   * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
	   * @example
	   *
	   * _.isNumber(8.4 * 5);
	   * // => true
	   */
	  function isNumber(value) {
	    return typeof value == 'number' ||
	      value && typeof value == 'object' && toString.call(value) == numberClass || false;
	  }
	
	  /**
	   * Checks if `value` is a regular expression.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
	   * @example
	   *
	   * _.isRegExp(/fred/);
	   * // => true
	   */
	  function isRegExp(value) {
	    return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false;
	  }
	
	  /**
	   * Checks if `value` is a string.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
	   * @example
	   *
	   * _.isString('fred');
	   * // => true
	   */
	  function isString(value) {
	    return typeof value == 'string' ||
	      value && typeof value == 'object' && toString.call(value) == stringClass || false;
	  }
	
	  /**
	   * Checks if `value` is `undefined`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
	   * @example
	   *
	   * _.isUndefined(void 0);
	   * // => true
	   */
	  function isUndefined(value) {
	    return typeof value == 'undefined';
	  }
	
	  /**
	   * Creates a shallow clone of `object` excluding the specified properties.
	   * Property names may be specified as individual arguments or as arrays of
	   * property names. If a callback is provided it will be executed for each
	   * property of `object` omitting the properties the callback returns truey
	   * for. The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, key, object).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The source object.
	   * @param {Function|...string|string[]} [callback] The properties to omit or the
	   *  function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns an object without the omitted properties.
	   * @example
	   *
	   * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
	   * // => { 'name': 'fred' }
	   *
	   * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
	   *   return typeof value == 'number';
	   * });
	   * // => { 'name': 'fred' }
	   */
	  function omit(object) {
	    var props = [];
	    forIn(object, function(value, key) {
	      props.push(key);
	    });
	    props = baseDifference(props, baseFlatten(arguments, true, false, 1));
	
	    var index = -1,
	        length = props.length,
	        result = {};
	
	    while (++index < length) {
	      var key = props[index];
	      result[key] = object[key];
	    }
	    return result;
	  }
	
	  /**
	   * Creates a two dimensional array of an object's key-value pairs,
	   * i.e. `[[key1, value1], [key2, value2]]`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns new array of key-value pairs.
	   * @example
	   *
	   * _.pairs({ 'barney': 36, 'fred': 40 });
	   * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
	   */
	  function pairs(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);
	
	    while (++index < length) {
	      var key = props[index];
	      result[index] = [key, object[key]];
	    }
	    return result;
	  }
	
	  /**
	   * Creates a shallow clone of `object` composed of the specified properties.
	   * Property names may be specified as individual arguments or as arrays of
	   * property names. If a callback is provided it will be executed for each
	   * property of `object` picking the properties the callback returns truey
	   * for. The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, key, object).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The source object.
	   * @param {Function|...string|string[]} [callback] The function called per
	   *  iteration or property names to pick, specified as individual property
	   *  names or arrays of property names.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns an object composed of the picked properties.
	   * @example
	   *
	   * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
	   * // => { 'name': 'fred' }
	   *
	   * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
	   *   return key.charAt(0) != '_';
	   * });
	   * // => { 'name': 'fred' }
	   */
	  function pick(object) {
	    var index = -1,
	        props = baseFlatten(arguments, true, false, 1),
	        length = props.length,
	        result = {};
	
	    while (++index < length) {
	      var key = props[index];
	      if (key in object) {
	        result[key] = object[key];
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Creates an array composed of the own enumerable property values of `object`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property values.
	   * @example
	   *
	   * _.values({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => [1, 2, 3] (property order is not guaranteed across environments)
	   */
	  function values(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);
	
	    while (++index < length) {
	      result[index] = object[props[index]];
	    }
	    return result;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Checks if a given value is present in a collection using strict equality
	   * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
	   * offset from the end of the collection.
	   *
	   * @static
	   * @memberOf _
	   * @alias include
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {*} target The value to check for.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
	   * @example
	   *
	   * _.contains([1, 2, 3], 1);
	   * // => true
	   *
	   * _.contains([1, 2, 3], 1, 2);
	   * // => false
	   *
	   * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
	   * // => true
	   *
	   * _.contains('pebbles', 'eb');
	   * // => true
	   */
	  function contains(collection, target) {
	    var indexOf = getIndexOf(),
	        length = collection ? collection.length : 0,
	        result = false;
	    if (length && typeof length == 'number') {
	      result = indexOf(collection, target) > -1;
	    } else {
	      forOwn(collection, function(value) {
	        return (result = value === target) && indicatorObject;
	      });
	    }
	    return result;
	  }
	
	  /**
	   * Creates an object composed of keys generated from the results of running
	   * each element of `collection` through the callback. The corresponding value
	   * of each key is the number of times the key was returned by the callback.
	   * The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
	   * // => { '4': 1, '6': 2 }
	   *
	   * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
	   * // => { '4': 1, '6': 2 }
	   *
	   * _.countBy(['one', 'two', 'three'], 'length');
	   * // => { '3': 2, '5': 1 }
	   */
	  var countBy = createAggregator(function(result, value, key) {
	    (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
	  });
	
	  /**
	   * Checks if the given callback returns truey value for **all** elements of
	   * a collection. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias all
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {boolean} Returns `true` if all elements passed the callback check,
	   *  else `false`.
	   * @example
	   *
	   * _.every([true, 1, null, 'yes']);
	   * // => false
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.every(characters, 'age');
	   * // => true
	   *
	   * // using "_.where" callback shorthand
	   * _.every(characters, { 'age': 36 });
	   * // => false
	   */
	  function every(collection, callback, thisArg) {
	    var result = true;
	    callback = createCallback(callback, thisArg, 3);
	
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    if (typeof length == 'number') {
	      while (++index < length) {
	        if (!(result = !!callback(collection[index], index, collection))) {
	          break;
	        }
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        return !(result = !!callback(value, index, collection)) && indicatorObject;
	      });
	    }
	    return result;
	  }
	
	  /**
	   * Iterates over elements of a collection, returning an array of all elements
	   * the callback returns truey for. The callback is bound to `thisArg` and
	   * invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias select
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of elements that passed the callback check.
	   * @example
	   *
	   * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => [2, 4, 6]
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'blocked': false },
	   *   { 'name': 'fred',   'age': 40, 'blocked': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.filter(characters, 'blocked');
	   * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
	   *
	   * // using "_.where" callback shorthand
	   * _.filter(characters, { 'age': 36 });
	   * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
	   */
	  function filter(collection, callback, thisArg) {
	    var result = [];
	    callback = createCallback(callback, thisArg, 3);
	
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    if (typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (callback(value, index, collection)) {
	          result.push(value);
	        }
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        if (callback(value, index, collection)) {
	          result.push(value);
	        }
	      });
	    }
	    return result;
	  }
	
	  /**
	   * Iterates over elements of a collection, returning the first element that
	   * the callback returns truey for. The callback is bound to `thisArg` and
	   * invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias detect, findWhere
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the found element, else `undefined`.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'age': 36, 'blocked': false },
	   *   { 'name': 'fred',    'age': 40, 'blocked': true },
	   *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
	   * ];
	   *
	   * _.find(characters, function(chr) {
	   *   return chr.age < 40;
	   * });
	   * // => { 'name': 'barney', 'age': 36, 'blocked': false }
	   *
	   * // using "_.where" callback shorthand
	   * _.find(characters, { 'age': 1 });
	   * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
	   *
	   * // using "_.pluck" callback shorthand
	   * _.find(characters, 'blocked');
	   * // => { 'name': 'fred', 'age': 40, 'blocked': true }
	   */
	  function find(collection, callback, thisArg) {
	    callback = createCallback(callback, thisArg, 3);
	
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    if (typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (callback(value, index, collection)) {
	          return value;
	        }
	      }
	    } else {
	      var result;
	      forOwn(collection, function(value, index, collection) {
	        if (callback(value, index, collection)) {
	          result = value;
	          return indicatorObject;
	        }
	      });
	      return result;
	    }
	  }
	
	  /**
	   * Examines each element in a `collection`, returning the first that
	   * has the given properties. When checking `properties`, this method
	   * performs a deep comparison between values to determine if they are
	   * equivalent to each other.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Object} properties The object of property values to filter by.
	   * @returns {*} Returns the found element, else `undefined`.
	   * @example
	   *
	   * var food = [
	   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
	   *   { 'name': 'banana', 'organic': true,  'type': 'fruit' },
	   *   { 'name': 'beet',   'organic': false, 'type': 'vegetable' }
	   * ];
	   *
	   * _.findWhere(food, { 'type': 'vegetable' });
	   * // => { 'name': 'beet', 'organic': false, 'type': 'vegetable' }
	   */
	  function findWhere(object, properties) {
	    return where(object, properties, true);
	  }
	
	  /**
	   * Iterates over elements of a collection, executing the callback for each
	   * element. The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection). Callbacks may exit iteration early by
	   * explicitly returning `false`.
	   *
	   * Note: As with other "Collections" methods, objects with a `length` property
	   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	   * may be used for object iteration.
	   *
	   * @static
	   * @memberOf _
	   * @alias each
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array|Object|string} Returns `collection`.
	   * @example
	   *
	   * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
	   * // => logs each number and returns '1,2,3'
	   *
	   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
	   * // => logs each number and returns the object (property order is not guaranteed across environments)
	   */
	  function forEach(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
	    if (typeof length == 'number') {
	      while (++index < length) {
	        if (callback(collection[index], index, collection) === indicatorObject) {
	          break;
	        }
	      }
	    } else {
	      forOwn(collection, callback);
	    }
	  }
	
	  /**
	   * This method is like `_.forEach` except that it iterates over elements
	   * of a `collection` from right to left.
	   *
	   * @static
	   * @memberOf _
	   * @alias eachRight
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array|Object|string} Returns `collection`.
	   * @example
	   *
	   * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
	   * // => logs each number from right to left and returns '3,2,1'
	   */
	  function forEachRight(collection, callback) {
	    var length = collection ? collection.length : 0;
	    if (typeof length == 'number') {
	      while (length--) {
	        if (callback(collection[length], length, collection) === false) {
	          break;
	        }
	      }
	    } else {
	      var props = keys(collection);
	      length = props.length;
	      forOwn(collection, function(value, key, collection) {
	        key = props ? props[--length] : --length;
	        return callback(collection[key], key, collection) === false && indicatorObject;
	      });
	    }
	  }
	
	  /**
	   * Creates an object composed of keys generated from the results of running
	   * each element of a collection through the callback. The corresponding value
	   * of each key is an array of the elements responsible for generating the key.
	   * The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
	   * // => { '4': [4.2], '6': [6.1, 6.4] }
	   *
	   * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
	   * // => { '4': [4.2], '6': [6.1, 6.4] }
	   *
	   * // using "_.pluck" callback shorthand
	   * _.groupBy(['one', 'two', 'three'], 'length');
	   * // => { '3': ['one', 'two'], '5': ['three'] }
	   */
	  var groupBy = createAggregator(function(result, value, key) {
	    (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
	  });
	
	  /**
	   * Creates an object composed of keys generated from the results of running
	   * each element of the collection through the given callback. The corresponding
	   * value of each key is the last element responsible for generating the key.
	   * The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * var keys = [
	   *   { 'dir': 'left', 'code': 97 },
	   *   { 'dir': 'right', 'code': 100 }
	   * ];
	   *
	   * _.indexBy(keys, 'dir');
	   * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	   *
	   * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
	   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	   *
	   * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
	   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	   */
	  var indexBy = createAggregator(function(result, value, key) {
	    result[key] = value;
	  });
	
	  /**
	   * Invokes the method named by `methodName` on each element in the `collection`
	   * returning an array of the results of each invoked method. Additional arguments
	   * will be provided to each invoked method. If `methodName` is a function it
	   * will be invoked for, and `this` bound to, each element in the `collection`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|string} methodName The name of the method to invoke or
	   *  the function invoked per iteration.
	   * @param {...*} [arg] Arguments to invoke the method with.
	   * @returns {Array} Returns a new array of the results of each invoked method.
	   * @example
	   *
	   * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	   * // => [[1, 5, 7], [1, 2, 3]]
	   *
	   * _.invoke([123, 456], String.prototype.split, '');
	   * // => [['1', '2', '3'], ['4', '5', '6']]
	   */
	  function invoke(collection, methodName) {
	    var args = slice(arguments, 2),
	        index = -1,
	        isFunc = typeof methodName == 'function',
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);
	
	    forEach(collection, function(value) {
	      result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
	    });
	    return result;
	  }
	
	  /**
	   * Creates an array of values by running each element in the collection
	   * through the callback. The callback is bound to `thisArg` and invoked with
	   * three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias collect
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of the results of each `callback` execution.
	   * @example
	   *
	   * _.map([1, 2, 3], function(num) { return num * 3; });
	   * // => [3, 6, 9]
	   *
	   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
	   * // => [3, 6, 9] (property order is not guaranteed across environments)
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.map(characters, 'name');
	   * // => ['barney', 'fred']
	   */
	  function map(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    callback = createCallback(callback, thisArg, 3);
	    if (typeof length == 'number') {
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = callback(collection[index], index, collection);
	      }
	    } else {
	      result = [];
	      forOwn(collection, function(value, key, collection) {
	        result[++index] = callback(value, key, collection);
	      });
	    }
	    return result;
	  }
	
	  /**
	   * Retrieves the maximum value of a collection. If the collection is empty or
	   * falsey `-Infinity` is returned. If a callback is provided it will be executed
	   * for each value in the collection to generate the criterion by which the value
	   * is ranked. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the maximum value.
	   * @example
	   *
	   * _.max([4, 2, 8, 6]);
	   * // => 8
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * _.max(characters, function(chr) { return chr.age; });
	   * // => { 'name': 'fred', 'age': 40 };
	   *
	   * // using "_.pluck" callback shorthand
	   * _.max(characters, 'age');
	   * // => { 'name': 'fred', 'age': 40 };
	   */
	  function max(collection, callback, thisArg) {
	    var computed = -Infinity,
	        result = computed;
	
	    // allows working with functions like `_.map` without using
	    // their `index` argument as a callback
	    if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
	      callback = null;
	    }
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    if (callback == null && typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      callback = createCallback(callback, thisArg, 3);
	
	      forEach(collection, function(value, index, collection) {
	        var current = callback(value, index, collection);
	        if (current > computed) {
	          computed = current;
	          result = value;
	        }
	      });
	    }
	    return result;
	  }
	
	  /**
	   * Retrieves the minimum value of a collection. If the collection is empty or
	   * falsey `Infinity` is returned. If a callback is provided it will be executed
	   * for each value in the collection to generate the criterion by which the value
	   * is ranked. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the minimum value.
	   * @example
	   *
	   * _.min([4, 2, 8, 6]);
	   * // => 2
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * _.min(characters, function(chr) { return chr.age; });
	   * // => { 'name': 'barney', 'age': 36 };
	   *
	   * // using "_.pluck" callback shorthand
	   * _.min(characters, 'age');
	   * // => { 'name': 'barney', 'age': 36 };
	   */
	  function min(collection, callback, thisArg) {
	    var computed = Infinity,
	        result = computed;
	
	    // allows working with functions like `_.map` without using
	    // their `index` argument as a callback
	    if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
	      callback = null;
	    }
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    if (callback == null && typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      callback = createCallback(callback, thisArg, 3);
	
	      forEach(collection, function(value, index, collection) {
	        var current = callback(value, index, collection);
	        if (current < computed) {
	          computed = current;
	          result = value;
	        }
	      });
	    }
	    return result;
	  }
	
	  /**
	   * Retrieves the value of a specified property from all elements in the collection.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {string} property The name of the property to pluck.
	   * @returns {Array} Returns a new array of property values.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * _.pluck(characters, 'name');
	   * // => ['barney', 'fred']
	   */
	  var pluck = map;
	
	  /**
	   * Reduces a collection to a value which is the accumulated result of running
	   * each element in the collection through the callback, where each successive
	   * callback execution consumes the return value of the previous execution. If
	   * `accumulator` is not provided the first element of the collection will be
	   * used as the initial `accumulator` value. The callback is bound to `thisArg`
	   * and invoked with four arguments; (accumulator, value, index|key, collection).
	   *
	   * @static
	   * @memberOf _
	   * @alias foldl, inject
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [accumulator] Initial value of the accumulator.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the accumulated value.
	   * @example
	   *
	   * var sum = _.reduce([1, 2, 3], function(sum, num) {
	   *   return sum + num;
	   * });
	   * // => 6
	   *
	   * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	   *   result[key] = num * 3;
	   *   return result;
	   * }, {});
	   * // => { 'a': 3, 'b': 6, 'c': 9 }
	   */
	  function reduce(collection, callback, accumulator, thisArg) {
	    if (!collection) return accumulator;
	    var noaccum = arguments.length < 3;
	    callback = createCallback(callback, thisArg, 4);
	
	    var index = -1,
	        length = collection.length;
	
	    if (typeof length == 'number') {
	      if (noaccum) {
	        accumulator = collection[++index];
	      }
	      while (++index < length) {
	        accumulator = callback(accumulator, collection[index], index, collection);
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        accumulator = noaccum
	          ? (noaccum = false, value)
	          : callback(accumulator, value, index, collection)
	      });
	    }
	    return accumulator;
	  }
	
	  /**
	   * This method is like `_.reduce` except that it iterates over elements
	   * of a `collection` from right to left.
	   *
	   * @static
	   * @memberOf _
	   * @alias foldr
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [accumulator] Initial value of the accumulator.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the accumulated value.
	   * @example
	   *
	   * var list = [[0, 1], [2, 3], [4, 5]];
	   * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
	   * // => [4, 5, 2, 3, 0, 1]
	   */
	  function reduceRight(collection, callback, accumulator, thisArg) {
	    var noaccum = arguments.length < 3;
	    callback = createCallback(callback, thisArg, 4);
	    forEachRight(collection, function(value, index, collection) {
	      accumulator = noaccum
	        ? (noaccum = false, value)
	        : callback(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }
	
	  /**
	   * The opposite of `_.filter` this method returns the elements of a
	   * collection that the callback does **not** return truey for.
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of elements that failed the callback check.
	   * @example
	   *
	   * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => [1, 3, 5]
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'blocked': false },
	   *   { 'name': 'fred',   'age': 40, 'blocked': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.reject(characters, 'blocked');
	   * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
	   *
	   * // using "_.where" callback shorthand
	   * _.reject(characters, { 'age': 36 });
	   * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
	   */
	  function reject(collection, callback, thisArg) {
	    callback = createCallback(callback, thisArg, 3);
	    return filter(collection, function(value, index, collection) {
	      return !callback(value, index, collection);
	    });
	  }
	
	  /**
	   * Retrieves a random element or `n` random elements from a collection.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to sample.
	   * @param {number} [n] The number of elements to sample.
	   * @param- {Object} [guard] Allows working with functions like `_.map`
	   *  without using their `index` arguments as `n`.
	   * @returns {Array} Returns the random sample(s) of `collection`.
	   * @example
	   *
	   * _.sample([1, 2, 3, 4]);
	   * // => 2
	   *
	   * _.sample([1, 2, 3, 4], 2);
	   * // => [3, 1]
	   */
	  function sample(collection, n, guard) {
	    if (collection && typeof collection.length != 'number') {
	      collection = values(collection);
	    }
	    if (n == null || guard) {
	      return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
	    }
	    var result = shuffle(collection);
	    result.length = nativeMin(nativeMax(0, n), result.length);
	    return result;
	  }
	
	  /**
	   * Creates an array of shuffled values, using a version of the Fisher-Yates
	   * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to shuffle.
	   * @returns {Array} Returns a new shuffled collection.
	   * @example
	   *
	   * _.shuffle([1, 2, 3, 4, 5, 6]);
	   * // => [4, 1, 6, 3, 5, 2]
	   */
	  function shuffle(collection) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);
	
	    forEach(collection, function(value) {
	      var rand = baseRandom(0, ++index);
	      result[index] = result[rand];
	      result[rand] = value;
	    });
	    return result;
	  }
	
	  /**
	   * Gets the size of the `collection` by returning `collection.length` for arrays
	   * and array-like objects or the number of own enumerable properties for objects.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to inspect.
	   * @returns {number} Returns `collection.length` or number of own enumerable properties.
	   * @example
	   *
	   * _.size([1, 2]);
	   * // => 2
	   *
	   * _.size({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => 3
	   *
	   * _.size('pebbles');
	   * // => 7
	   */
	  function size(collection) {
	    var length = collection ? collection.length : 0;
	    return typeof length == 'number' ? length : keys(collection).length;
	  }
	
	  /**
	   * Checks if the callback returns a truey value for **any** element of a
	   * collection. The function returns as soon as it finds a passing value and
	   * does not iterate over the entire collection. The callback is bound to
	   * `thisArg` and invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias any
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {boolean} Returns `true` if any element passed the callback check,
	   *  else `false`.
	   * @example
	   *
	   * _.some([null, 0, 'yes', false], Boolean);
	   * // => true
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'blocked': false },
	   *   { 'name': 'fred',   'age': 40, 'blocked': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.some(characters, 'blocked');
	   * // => true
	   *
	   * // using "_.where" callback shorthand
	   * _.some(characters, { 'age': 1 });
	   * // => false
	   */
	  function some(collection, callback, thisArg) {
	    var result;
	    callback = createCallback(callback, thisArg, 3);
	
	    var index = -1,
	        length = collection ? collection.length : 0;
	
	    if (typeof length == 'number') {
	      while (++index < length) {
	        if ((result = callback(collection[index], index, collection))) {
	          break;
	        }
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        return (result = callback(value, index, collection)) && indicatorObject;
	      });
	    }
	    return !!result;
	  }
	
	  /**
	   * Creates an array of elements, sorted in ascending order by the results of
	   * running each element in a collection through the callback. This method
	   * performs a stable sort, that is, it will preserve the original sort order
	   * of equal elements. The callback is bound to `thisArg` and invoked with
	   * three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an array of property names is provided for `callback` the collection
	   * will be sorted by each property value.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Array|Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of sorted elements.
	   * @example
	   *
	   * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
	   * // => [3, 1, 2]
	   *
	   * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
	   * // => [3, 1, 2]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'age': 36 },
	   *   { 'name': 'fred',    'age': 40 },
	   *   { 'name': 'barney',  'age': 26 },
	   *   { 'name': 'fred',    'age': 30 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.map(_.sortBy(characters, 'age'), _.values);
	   * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
	   *
	   * // sorting by multiple properties
	   * _.map(_.sortBy(characters, ['name', 'age']), _.values);
	   * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
	   */
	  function sortBy(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);
	
	    callback = createCallback(callback, thisArg, 3);
	    forEach(collection, function(value, key, collection) {
	      result[++index] = {
	        'criteria': [callback(value, key, collection)],
	        'index': index,
	        'value': value
	      };
	    });
	
	    length = result.length;
	    result.sort(compareAscending);
	    while (length--) {
	      result[length] = result[length].value;
	    }
	    return result;
	  }
	
	  /**
	   * Converts the `collection` to an array.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to convert.
	   * @returns {Array} Returns the new converted array.
	   * @example
	   *
	   * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
	   * // => [2, 3, 4]
	   */
	  function toArray(collection) {
	    if (isArray(collection)) {
	      return slice(collection);
	    }
	    if (collection && typeof collection.length == 'number') {
	      return map(collection);
	    }
	    return values(collection);
	  }
	
	  /**
	   * Performs a deep comparison of each element in a `collection` to the given
	   * `properties` object, returning an array of all elements that have equivalent
	   * property values.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Object} props The object of property values to filter by.
	   * @returns {Array} Returns a new array of elements that have the given properties.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
	   *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
	   * ];
	   *
	   * _.where(characters, { 'age': 36 });
	   * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
	   *
	   * _.where(characters, { 'pets': ['dino'] });
	   * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
	   */
	  function where(collection, properties, first) {
	    return (first && isEmpty(properties))
	      ? undefined
	      : (first ? find : filter)(collection, properties);
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Creates an array with all falsey values removed. The values `false`, `null`,
	   * `0`, `""`, `undefined`, and `NaN` are all falsey.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to compact.
	   * @returns {Array} Returns a new array of filtered values.
	   * @example
	   *
	   * _.compact([0, 1, false, 2, '', 3]);
	   * // => [1, 2, 3]
	   */
	  function compact(array) {
	    var index = -1,
	        length = array ? array.length : 0,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index];
	      if (value) {
	        result.push(value);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Creates an array excluding all values of the provided arrays using strict
	   * equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to process.
	   * @param {...Array} [values] The arrays of values to exclude.
	   * @returns {Array} Returns a new array of filtered values.
	   * @example
	   *
	   * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
	   * // => [1, 3, 4]
	   */
	  function difference(array) {
	    return baseDifference(array, baseFlatten(arguments, true, true, 1));
	  }
	
	  /**
	   * Gets the first element or first `n` elements of an array. If a callback
	   * is provided elements at the beginning of the array are returned as long
	   * as the callback returns truey. The callback is bound to `thisArg` and
	   * invoked with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias head, take
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback] The function called
	   *  per element or the number of elements to return. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the first element(s) of `array`.
	   * @example
	   *
	   * _.first([1, 2, 3]);
	   * // => 1
	   *
	   * _.first([1, 2, 3], 2);
	   * // => [1, 2]
	   *
	   * _.first([1, 2, 3], function(num) {
	   *   return num < 3;
	   * });
	   * // => [1, 2]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.first(characters, 'blocked');
	   * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
	   *
	   * // using "_.where" callback shorthand
	   * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
	   * // => ['barney', 'fred']
	   */
	  function first(array, callback, thisArg) {
	    var n = 0,
	        length = array ? array.length : 0;
	
	    if (typeof callback != 'number' && callback != null) {
	      var index = -1;
	      callback = createCallback(callback, thisArg, 3);
	      while (++index < length && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = callback;
	      if (n == null || thisArg) {
	        return array ? array[0] : undefined;
	      }
	    }
	    return slice(array, 0, nativeMin(nativeMax(0, n), length));
	  }
	
	  /**
	   * Flattens a nested array (the nesting can be to any depth). If `isShallow`
	   * is truey, the array will only be flattened a single level. If a callback
	   * is provided each element of the array is passed through the callback before
	   * flattening. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to flatten.
	   * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new flattened array.
	   * @example
	   *
	   * _.flatten([1, [2], [3, [[4]]]]);
	   * // => [1, 2, 3, 4];
	   *
	   * _.flatten([1, [2], [3, [[4]]]], true);
	   * // => [1, 2, 3, [[4]]];
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
	   *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.flatten(characters, 'pets');
	   * // => ['hoppy', 'baby puss', 'dino']
	   */
	  function flatten(array, isShallow) {
	    return baseFlatten(array, isShallow);
	  }
	
	  /**
	   * Gets the index at which the first occurrence of `value` is found using
	   * strict equality for comparisons, i.e. `===`. If the array is already sorted
	   * providing `true` for `fromIndex` will run a faster binary search.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	   *  to perform a binary search on a sorted array.
	   * @returns {number} Returns the index of the matched value or `-1`.
	   * @example
	   *
	   * _.indexOf([1, 2, 3, 1, 2, 3], 2);
	   * // => 1
	   *
	   * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
	   * // => 4
	   *
	   * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
	   * // => 2
	   */
	  function indexOf(array, value, fromIndex) {
	    if (typeof fromIndex == 'number') {
	      var length = array ? array.length : 0;
	      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
	    } else if (fromIndex) {
	      var index = sortedIndex(array, value);
	      return array[index] === value ? index : -1;
	    }
	    return baseIndexOf(array, value, fromIndex);
	  }
	
	  /**
	   * Gets all but the last element or last `n` elements of an array. If a
	   * callback is provided elements at the end of the array are excluded from
	   * the result as long as the callback returns truey. The callback is bound
	   * to `thisArg` and invoked with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback=1] The function called
	   *  per element or the number of elements to exclude. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a slice of `array`.
	   * @example
	   *
	   * _.initial([1, 2, 3]);
	   * // => [1, 2]
	   *
	   * _.initial([1, 2, 3], 2);
	   * // => [1]
	   *
	   * _.initial([1, 2, 3], function(num) {
	   *   return num > 1;
	   * });
	   * // => [1]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.initial(characters, 'blocked');
	   * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
	   *
	   * // using "_.where" callback shorthand
	   * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
	   * // => ['barney', 'fred']
	   */
	  function initial(array, callback, thisArg) {
	    var n = 0,
	        length = array ? array.length : 0;
	
	    if (typeof callback != 'number' && callback != null) {
	      var index = length;
	      callback = createCallback(callback, thisArg, 3);
	      while (index-- && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = (callback == null || thisArg) ? 1 : callback || n;
	    }
	    return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
	  }
	
	  /**
	   * Creates an array of unique values present in all provided arrays using
	   * strict equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {...Array} [array] The arrays to inspect.
	   * @returns {Array} Returns an array of shared values.
	   * @example
	   *
	   * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
	   * // => [1, 2]
	   */
	  function intersection() {
	    var args = [],
	        argsIndex = -1,
	        argsLength = arguments.length;
	
	    while (++argsIndex < argsLength) {
	      var value = arguments[argsIndex];
	       if (isArray(value) || isArguments(value)) {
	         args.push(value);
	       }
	    }
	    var array = args[0],
	        index = -1,
	        indexOf = getIndexOf(),
	        length = array ? array.length : 0,
	        result = [];
	
	    outer:
	    while (++index < length) {
	      value = array[index];
	      if (indexOf(result, value) < 0) {
	        var argsIndex = argsLength;
	        while (--argsIndex) {
	          if (indexOf(args[argsIndex], value) < 0) {
	            continue outer;
	          }
	        }
	        result.push(value);
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Gets the last element or last `n` elements of an array. If a callback is
	   * provided elements at the end of the array are returned as long as the
	   * callback returns truey. The callback is bound to `thisArg` and invoked
	   * with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback] The function called
	   *  per element or the number of elements to return. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the last element(s) of `array`.
	   * @example
	   *
	   * _.last([1, 2, 3]);
	   * // => 3
	   *
	   * _.last([1, 2, 3], 2);
	   * // => [2, 3]
	   *
	   * _.last([1, 2, 3], function(num) {
	   *   return num > 1;
	   * });
	   * // => [2, 3]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.pluck(_.last(characters, 'blocked'), 'name');
	   * // => ['fred', 'pebbles']
	   *
	   * // using "_.where" callback shorthand
	   * _.last(characters, { 'employer': 'na' });
	   * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
	   */
	  function last(array, callback, thisArg) {
	    var n = 0,
	        length = array ? array.length : 0;
	
	    if (typeof callback != 'number' && callback != null) {
	      var index = length;
	      callback = createCallback(callback, thisArg, 3);
	      while (index-- && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = callback;
	      if (n == null || thisArg) {
	        return array ? array[length - 1] : undefined;
	      }
	    }
	    return slice(array, nativeMax(0, length - n));
	  }
	
	  /**
	   * Gets the index at which the last occurrence of `value` is found using strict
	   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
	   * as the offset from the end of the collection.
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} [fromIndex=array.length-1] The index to search from.
	   * @returns {number} Returns the index of the matched value or `-1`.
	   * @example
	   *
	   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
	   * // => 4
	   *
	   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
	   * // => 1
	   */
	  function lastIndexOf(array, value, fromIndex) {
	    var index = array ? array.length : 0;
	    if (typeof fromIndex == 'number') {
	      index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
	    }
	    while (index--) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * Creates an array of numbers (positive and/or negative) progressing from
	   * `start` up to but not including `end`. If `start` is less than `stop` a
	   * zero-length range is created unless a negative `step` is specified.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {number} [start=0] The start of the range.
	   * @param {number} end The end of the range.
	   * @param {number} [step=1] The value to increment or decrement by.
	   * @returns {Array} Returns a new range array.
	   * @example
	   *
	   * _.range(4);
	   * // => [0, 1, 2, 3]
	   *
	   * _.range(1, 5);
	   * // => [1, 2, 3, 4]
	   *
	   * _.range(0, 20, 5);
	   * // => [0, 5, 10, 15]
	   *
	   * _.range(0, -4, -1);
	   * // => [0, -1, -2, -3]
	   *
	   * _.range(1, 4, 0);
	   * // => [1, 1, 1]
	   *
	   * _.range(0);
	   * // => []
	   */
	  function range(start, end, step) {
	    start = +start || 0;
	    step =  (+step || 1);
	
	    if (end == null) {
	      end = start;
	      start = 0;
	    }
	    // use `Array(length)` so engines like Chakra and V8 avoid slower modes
	    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
	    var index = -1,
	        length = nativeMax(0, ceil((end - start) / step)),
	        result = Array(length);
	
	    while (++index < length) {
	      result[index] = start;
	      start += step;
	    }
	    return result;
	  }
	
	  /**
	   * The opposite of `_.initial` this method gets all but the first element or
	   * first `n` elements of an array. If a callback function is provided elements
	   * at the beginning of the array are excluded from the result as long as the
	   * callback returns truey. The callback is bound to `thisArg` and invoked
	   * with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias drop, tail
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback=1] The function called
	   *  per element or the number of elements to exclude. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a slice of `array`.
	   * @example
	   *
	   * _.rest([1, 2, 3]);
	   * // => [2, 3]
	   *
	   * _.rest([1, 2, 3], 2);
	   * // => [3]
	   *
	   * _.rest([1, 2, 3], function(num) {
	   *   return num < 3;
	   * });
	   * // => [3]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.pluck(_.rest(characters, 'blocked'), 'name');
	   * // => ['fred', 'pebbles']
	   *
	   * // using "_.where" callback shorthand
	   * _.rest(characters, { 'employer': 'slate' });
	   * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
	   */
	  function rest(array, callback, thisArg) {
	    if (typeof callback != 'number' && callback != null) {
	      var n = 0,
	          index = -1,
	          length = array ? array.length : 0;
	
	      callback = createCallback(callback, thisArg, 3);
	      while (++index < length && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
	    }
	    return slice(array, n);
	  }
	
	  /**
	   * Uses a binary search to determine the smallest index at which a value
	   * should be inserted into a given sorted array in order to maintain the sort
	   * order of the array. If a callback is provided it will be executed for
	   * `value` and each element of `array` to compute their sort ranking. The
	   * callback is bound to `thisArg` and invoked with one argument; (value).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to evaluate.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {number} Returns the index at which `value` should be inserted
	   *  into `array`.
	   * @example
	   *
	   * _.sortedIndex([20, 30, 50], 40);
	   * // => 2
	   *
	   * // using "_.pluck" callback shorthand
	   * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	   * // => 2
	   *
	   * var dict = {
	   *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
	   * };
	   *
	   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
	   *   return dict.wordToNumber[word];
	   * });
	   * // => 2
	   *
	   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
	   *   return this.wordToNumber[word];
	   * }, dict);
	   * // => 2
	   */
	  function sortedIndex(array, value, callback, thisArg) {
	    var low = 0,
	        high = array ? array.length : low;
	
	    // explicitly reference `identity` for better inlining in Firefox
	    callback = callback ? createCallback(callback, thisArg, 1) : identity;
	    value = callback(value);
	
	    while (low < high) {
	      var mid = (low + high) >>> 1;
	      (callback(array[mid]) < value)
	        ? low = mid + 1
	        : high = mid;
	    }
	    return low;
	  }
	
	  /**
	   * Creates an array of unique values, in order, of the provided arrays using
	   * strict equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {...Array} [array] The arrays to inspect.
	   * @returns {Array} Returns an array of combined values.
	   * @example
	   *
	   * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
	   * // => [1, 2, 3, 5, 4]
	   */
	  function union() {
	    return baseUniq(baseFlatten(arguments, true, true));
	  }
	
	  /**
	   * Creates a duplicate-value-free version of an array using strict equality
	   * for comparisons, i.e. `===`. If the array is sorted, providing
	   * `true` for `isSorted` will use a faster algorithm. If a callback is provided
	   * each element of `array` is passed through the callback before uniqueness
	   * is computed. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias unique
	   * @category Arrays
	   * @param {Array} array The array to process.
	   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a duplicate-value-free array.
	   * @example
	   *
	   * _.uniq([1, 2, 1, 3, 1]);
	   * // => [1, 2, 3]
	   *
	   * _.uniq([1, 1, 2, 2, 3], true);
	   * // => [1, 2, 3]
	   *
	   * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
	   * // => ['A', 'b', 'C']
	   *
	   * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
	   * // => [1, 2.5, 3]
	   *
	   * // using "_.pluck" callback shorthand
	   * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	   * // => [{ 'x': 1 }, { 'x': 2 }]
	   */
	  function uniq(array, isSorted, callback, thisArg) {
	    // juggle arguments
	    if (typeof isSorted != 'boolean' && isSorted != null) {
	      thisArg = callback;
	      callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
	      isSorted = false;
	    }
	    if (callback != null) {
	      callback = createCallback(callback, thisArg, 3);
	    }
	    return baseUniq(array, isSorted, callback);
	  }
	
	  /**
	   * Creates an array excluding all provided values using strict equality for
	   * comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to filter.
	   * @param {...*} [value] The values to exclude.
	   * @returns {Array} Returns a new array of filtered values.
	   * @example
	   *
	   * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
	   * // => [2, 3, 4]
	   */
	  function without(array) {
	    return baseDifference(array, slice(arguments, 1));
	  }
	
	  /**
	   * Creates an array of grouped elements, the first of which contains the first
	   * elements of the given arrays, the second of which contains the second
	   * elements of the given arrays, and so on.
	   *
	   * @static
	   * @memberOf _
	   * @alias unzip
	   * @category Arrays
	   * @param {...Array} [array] Arrays to process.
	   * @returns {Array} Returns a new array of grouped elements.
	   * @example
	   *
	   * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	   * // => [['fred', 30, true], ['barney', 40, false]]
	   */
	  function zip() {
	    var index = -1,
	        length = max(pluck(arguments, 'length')),
	        result = Array(length < 0 ? 0 : length);
	
	    while (++index < length) {
	      result[index] = pluck(arguments, index);
	    }
	    return result;
	  }
	
	  /**
	   * Creates an object composed from arrays of `keys` and `values`. Provide
	   * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
	   * or two arrays, one of `keys` and one of corresponding `values`.
	   *
	   * @static
	   * @memberOf _
	   * @alias object
	   * @category Arrays
	   * @param {Array} keys The array of keys.
	   * @param {Array} [values=[]] The array of values.
	   * @returns {Object} Returns an object composed of the given keys and
	   *  corresponding values.
	   * @example
	   *
	   * _.zipObject(['fred', 'barney'], [30, 40]);
	   * // => { 'fred': 30, 'barney': 40 }
	   */
	  function zipObject(keys, values) {
	    var index = -1,
	        length = keys ? keys.length : 0,
	        result = {};
	
	    if (!values && length && !isArray(keys[0])) {
	      values = [];
	    }
	    while (++index < length) {
	      var key = keys[index];
	      if (values) {
	        result[key] = values[index];
	      } else if (key) {
	        result[key[0]] = key[1];
	      }
	    }
	    return result;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Creates a function that executes `func`, with  the `this` binding and
	   * arguments of the created function, only after being called `n` times.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {number} n The number of times the function must be called before
	   *  `func` is executed.
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var saves = ['profile', 'settings'];
	   *
	   * var done = _.after(saves.length, function() {
	   *   console.log('Done saving!');
	   * });
	   *
	   * _.forEach(saves, function(type) {
	   *   asyncSave({ 'type': type, 'complete': done });
	   * });
	   * // => logs 'Done saving!', after all saves have completed
	   */
	  function after(n, func) {
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    return function() {
	      if (--n < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  }
	
	  /**
	   * Creates a function that, when called, invokes `func` with the `this`
	   * binding of `thisArg` and prepends any additional `bind` arguments to those
	   * provided to the bound function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to bind.
	   * @param {*} [thisArg] The `this` binding of `func`.
	   * @param {...*} [arg] Arguments to be partially applied.
	   * @returns {Function} Returns the new bound function.
	   * @example
	   *
	   * var func = function(greeting) {
	   *   return greeting + ' ' + this.name;
	   * };
	   *
	   * func = _.bind(func, { 'name': 'fred' }, 'hi');
	   * func();
	   * // => 'hi fred'
	   */
	  function bind(func, thisArg) {
	    return arguments.length > 2
	      ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
	      : createWrapper(func, 1, null, null, thisArg);
	  }
	
	  /**
	   * Binds methods of an object to the object itself, overwriting the existing
	   * method. Method names may be specified as individual arguments or as arrays
	   * of method names. If no method names are provided all the function properties
	   * of `object` will be bound.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Object} object The object to bind and assign the bound methods to.
	   * @param {...string} [methodName] The object method names to
	   *  bind, specified as individual method names or arrays of method names.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * var view = {
	   *   'label': 'docs',
	   *   'onClick': function() { console.log('clicked ' + this.label); }
	   * };
	   *
	   * _.bindAll(view);
	   * jQuery('#docs').on('click', view.onClick);
	   * // => logs 'clicked docs', when the button is clicked
	   */
	  function bindAll(object) {
	    var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
	        index = -1,
	        length = funcs.length;
	
	    while (++index < length) {
	      var key = funcs[index];
	      object[key] = createWrapper(object[key], 1, null, null, object);
	    }
	    return object;
	  }
	
	  /**
	   * Creates a function that is the composition of the provided functions,
	   * where each function consumes the return value of the function that follows.
	   * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
	   * Each function is executed with the `this` binding of the composed function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {...Function} [func] Functions to compose.
	   * @returns {Function} Returns the new composed function.
	   * @example
	   *
	   * var realNameMap = {
	   *   'pebbles': 'penelope'
	   * };
	   *
	   * var format = function(name) {
	   *   name = realNameMap[name.toLowerCase()] || name;
	   *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	   * };
	   *
	   * var greet = function(formatted) {
	   *   return 'Hiya ' + formatted + '!';
	   * };
	   *
	   * var welcome = _.compose(greet, format);
	   * welcome('pebbles');
	   * // => 'Hiya Penelope!'
	   */
	  function compose() {
	    var funcs = arguments,
	        length = funcs.length;
	
	    while (length--) {
	      if (!isFunction(funcs[length])) {
	        throw new TypeError;
	      }
	    }
	    return function() {
	      var args = arguments,
	          length = funcs.length;
	
	      while (length--) {
	        args = [funcs[length].apply(this, args)];
	      }
	      return args[0];
	    };
	  }
	
	  /**
	   * Creates a function that will delay the execution of `func` until after
	   * `wait` milliseconds have elapsed since the last time it was invoked.
	   * Provide an options object to indicate that `func` should be invoked on
	   * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
	   * to the debounced function will return the result of the last `func` call.
	   *
	   * Note: If `leading` and `trailing` options are `true` `func` will be called
	   * on the trailing edge of the timeout only if the the debounced function is
	   * invoked more than once during the `wait` timeout.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to debounce.
	   * @param {number} wait The number of milliseconds to delay.
	   * @param {Object} [options] The options object.
	   * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
	   * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
	   * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
	   * @returns {Function} Returns the new debounced function.
	   * @example
	   *
	   * // avoid costly calculations while the window size is in flux
	   * var lazyLayout = _.debounce(calculateLayout, 150);
	   * jQuery(window).on('resize', lazyLayout);
	   *
	   * // execute `sendMail` when the click event is fired, debouncing subsequent calls
	   * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	   *   'leading': true,
	   *   'trailing': false
	   * });
	   *
	   * // ensure `batchLog` is executed once after 1 second of debounced calls
	   * var source = new EventSource('/stream');
	   * source.addEventListener('message', _.debounce(batchLog, 250, {
	   *   'maxWait': 1000
	   * }, false);
	   */
	  function debounce(func, wait, options) {
	    var args,
	        maxTimeoutId,
	        result,
	        stamp,
	        thisArg,
	        timeoutId,
	        trailingCall,
	        lastCalled = 0,
	        maxWait = false,
	        trailing = true;
	
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    wait = nativeMax(0, wait) || 0;
	    if (options === true) {
	      var leading = true;
	      trailing = false;
	    } else if (isObject(options)) {
	      leading = options.leading;
	      maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
	      trailing = 'trailing' in options ? options.trailing : trailing;
	    }
	    var delayed = function() {
	      var remaining = wait - (now() - stamp);
	      if (remaining <= 0) {
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        var isCalled = trailingCall;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = null;
	          }
	        }
	      } else {
	        timeoutId = setTimeout(delayed, remaining);
	      }
	    };
	
	    var maxDelayed = function() {
	      if (timeoutId) {
	        clearTimeout(timeoutId);
	      }
	      maxTimeoutId = timeoutId = trailingCall = undefined;
	      if (trailing || (maxWait !== wait)) {
	        lastCalled = now();
	        result = func.apply(thisArg, args);
	        if (!timeoutId && !maxTimeoutId) {
	          args = thisArg = null;
	        }
	      }
	    };
	
	    return function() {
	      args = arguments;
	      stamp = now();
	      thisArg = this;
	      trailingCall = trailing && (timeoutId || !leading);
	
	      if (maxWait === false) {
	        var leadingCall = leading && !timeoutId;
	      } else {
	        if (!maxTimeoutId && !leading) {
	          lastCalled = stamp;
	        }
	        var remaining = maxWait - (stamp - lastCalled),
	            isCalled = remaining <= 0;
	
	        if (isCalled) {
	          if (maxTimeoutId) {
	            maxTimeoutId = clearTimeout(maxTimeoutId);
	          }
	          lastCalled = stamp;
	          result = func.apply(thisArg, args);
	        }
	        else if (!maxTimeoutId) {
	          maxTimeoutId = setTimeout(maxDelayed, remaining);
	        }
	      }
	      if (isCalled && timeoutId) {
	        timeoutId = clearTimeout(timeoutId);
	      }
	      else if (!timeoutId && wait !== maxWait) {
	        timeoutId = setTimeout(delayed, wait);
	      }
	      if (leadingCall) {
	        isCalled = true;
	        result = func.apply(thisArg, args);
	      }
	      if (isCalled && !timeoutId && !maxTimeoutId) {
	        args = thisArg = null;
	      }
	      return result;
	    };
	  }
	
	  /**
	   * Defers executing the `func` function until the current call stack has cleared.
	   * Additional arguments will be provided to `func` when it is invoked.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to defer.
	   * @param {...*} [arg] Arguments to invoke the function with.
	   * @returns {number} Returns the timer id.
	   * @example
	   *
	   * _.defer(function(text) { console.log(text); }, 'deferred');
	   * // logs 'deferred' after one or more milliseconds
	   */
	  function defer(func) {
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    var args = slice(arguments, 1);
	    return setTimeout(function() { func.apply(undefined, args); }, 1);
	  }
	
	  /**
	   * Executes the `func` function after `wait` milliseconds. Additional arguments
	   * will be provided to `func` when it is invoked.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to delay.
	   * @param {number} wait The number of milliseconds to delay execution.
	   * @param {...*} [arg] Arguments to invoke the function with.
	   * @returns {number} Returns the timer id.
	   * @example
	   *
	   * _.delay(function(text) { console.log(text); }, 1000, 'later');
	   * // => logs 'later' after one second
	   */
	  function delay(func, wait) {
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    var args = slice(arguments, 2);
	    return setTimeout(function() { func.apply(undefined, args); }, wait);
	  }
	
	  /**
	   * Creates a function that memoizes the result of `func`. If `resolver` is
	   * provided it will be used to determine the cache key for storing the result
	   * based on the arguments provided to the memoized function. By default, the
	   * first argument provided to the memoized function is used as the cache key.
	   * The `func` is executed with the `this` binding of the memoized function.
	   * The result cache is exposed as the `cache` property on the memoized function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to have its output memoized.
	   * @param {Function} [resolver] A function used to resolve the cache key.
	   * @returns {Function} Returns the new memoizing function.
	   * @example
	   *
	   * var fibonacci = _.memoize(function(n) {
	   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	   * });
	   *
	   * fibonacci(9)
	   * // => 34
	   *
	   * var data = {
	   *   'fred': { 'name': 'fred', 'age': 40 },
	   *   'pebbles': { 'name': 'pebbles', 'age': 1 }
	   * };
	   *
	   * // modifying the result cache
	   * var get = _.memoize(function(name) { return data[name]; }, _.identity);
	   * get('pebbles');
	   * // => { 'name': 'pebbles', 'age': 1 }
	   *
	   * get.cache.pebbles.name = 'penelope';
	   * get('pebbles');
	   * // => { 'name': 'penelope', 'age': 1 }
	   */
	  function memoize(func, resolver) {
	    var cache = {};
	    return function() {
	      var key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
	      return hasOwnProperty.call(cache, key)
	        ? cache[key]
	        : (cache[key] = func.apply(this, arguments));
	    };
	  }
	
	  /**
	   * Creates a function that is restricted to execute `func` once. Repeat calls to
	   * the function will return the value of the first call. The `func` is executed
	   * with the `this` binding of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var initialize = _.once(createApplication);
	   * initialize();
	   * initialize();
	   * // `initialize` executes `createApplication` once
	   */
	  function once(func) {
	    var ran,
	        result;
	
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    return function() {
	      if (ran) {
	        return result;
	      }
	      ran = true;
	      result = func.apply(this, arguments);
	
	      // clear the `func` variable so the function may be garbage collected
	      func = null;
	      return result;
	    };
	  }
	
	  /**
	   * Creates a function that, when called, invokes `func` with any additional
	   * `partial` arguments prepended to those provided to the new function. This
	   * method is similar to `_.bind` except it does **not** alter the `this` binding.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to partially apply arguments to.
	   * @param {...*} [arg] Arguments to be partially applied.
	   * @returns {Function} Returns the new partially applied function.
	   * @example
	   *
	   * var greet = function(greeting, name) { return greeting + ' ' + name; };
	   * var hi = _.partial(greet, 'hi');
	   * hi('fred');
	   * // => 'hi fred'
	   */
	  function partial(func) {
	    return createWrapper(func, 16, slice(arguments, 1));
	  }
	
	  /**
	   * Creates a function that, when executed, will only call the `func` function
	   * at most once per every `wait` milliseconds. Provide an options object to
	   * indicate that `func` should be invoked on the leading and/or trailing edge
	   * of the `wait` timeout. Subsequent calls to the throttled function will
	   * return the result of the last `func` call.
	   *
	   * Note: If `leading` and `trailing` options are `true` `func` will be called
	   * on the trailing edge of the timeout only if the the throttled function is
	   * invoked more than once during the `wait` timeout.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to throttle.
	   * @param {number} wait The number of milliseconds to throttle executions to.
	   * @param {Object} [options] The options object.
	   * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
	   * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
	   * @returns {Function} Returns the new throttled function.
	   * @example
	   *
	   * // avoid excessively updating the position while scrolling
	   * var throttled = _.throttle(updatePosition, 100);
	   * jQuery(window).on('scroll', throttled);
	   *
	   * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
	   * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	   *   'trailing': false
	   * }));
	   */
	  function throttle(func, wait, options) {
	    var leading = true,
	        trailing = true;
	
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    if (options === false) {
	      leading = false;
	    } else if (isObject(options)) {
	      leading = 'leading' in options ? options.leading : leading;
	      trailing = 'trailing' in options ? options.trailing : trailing;
	    }
	    options = {};
	    options.leading = leading;
	    options.maxWait = wait;
	    options.trailing = trailing;
	
	    return debounce(func, wait, options);
	  }
	
	  /**
	   * Creates a function that provides `value` to the wrapper function as its
	   * first argument. Additional arguments provided to the function are appended
	   * to those provided to the wrapper function. The wrapper is executed with
	   * the `this` binding of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {*} value The value to wrap.
	   * @param {Function} wrapper The wrapper function.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var p = _.wrap(_.escape, function(func, text) {
	   *   return '<p>' + func(text) + '</p>';
	   * });
	   *
	   * p('Fred, Wilma, & Pebbles');
	   * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
	   */
	  function wrap(value, wrapper) {
	    return createWrapper(wrapper, 16, [value]);
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Produces a callback bound to an optional `thisArg`. If `func` is a property
	   * name the created callback will return the property value for a given element.
	   * If `func` is an object the created callback will return `true` for elements
	   * that contain the equivalent object properties, otherwise it will return `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {*} [func=identity] The value to convert to a callback.
	   * @param {*} [thisArg] The `this` binding of the created callback.
	   * @param {number} [argCount] The number of arguments the callback accepts.
	   * @returns {Function} Returns a callback function.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // wrap to create custom callback shorthands
	   * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
	   *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
	   *   return !match ? func(callback, thisArg) : function(object) {
	   *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
	   *   };
	   * });
	   *
	   * _.filter(characters, 'age__gt38');
	   * // => [{ 'name': 'fred', 'age': 40 }]
	   */
	  function createCallback(func, thisArg, argCount) {
	    var type = typeof func;
	    if (func == null || type == 'function') {
	      return baseCreateCallback(func, thisArg, argCount);
	    }
	    // handle "_.pluck" style callback shorthands
	    if (type != 'object') {
	      return property(func);
	    }
	    var props = keys(func);
	    return function(object) {
	      var length = props.length,
	          result = false;
	
	      while (length--) {
	        if (!(result = object[props[length]] === func[props[length]])) {
	          break;
	        }
	      }
	      return result;
	    };
	  }
	
	  /**
	   * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
	   * corresponding HTML entities.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} string The string to escape.
	   * @returns {string} Returns the escaped string.
	   * @example
	   *
	   * _.escape('Fred, Wilma, & Pebbles');
	   * // => 'Fred, Wilma, &amp; Pebbles'
	   */
	  function escape(string) {
	    return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
	  }
	
	  /**
	   * This method returns the first argument provided to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {*} value Any value.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * var object = { 'name': 'fred' };
	   * _.identity(object) === object;
	   * // => true
	   */
	  function identity(value) {
	    return value;
	  }
	
	  /**
	   * Adds function properties of a source object to the destination object.
	   * If `object` is a function methods will be added to its prototype as well.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Function|Object} [object=lodash] object The destination object.
	   * @param {Object} source The object of functions to add.
	   * @param {Object} [options] The options object.
	   * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
	   * @example
	   *
	   * function capitalize(string) {
	   *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	   * }
	   *
	   * _.mixin({ 'capitalize': capitalize });
	   * _.capitalize('fred');
	   * // => 'Fred'
	   *
	   * _('fred').capitalize().value();
	   * // => 'Fred'
	   *
	   * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
	   * _('fred').capitalize();
	   * // => 'Fred'
	   */
	  function mixin(object) {
	    forEach(functions(object), function(methodName) {
	      var func = lodash[methodName] = object[methodName];
	
	      lodash.prototype[methodName] = function() {
	        var args = [this.__wrapped__];
	        push.apply(args, arguments);
	
	        var result = func.apply(lodash, args);
	        return this.__chain__
	          ? new lodashWrapper(result, true)
	          : result;
	      };
	    });
	  }
	
	  /**
	   * Reverts the '_' variable to its previous value and returns a reference to
	   * the `lodash` function.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @returns {Function} Returns the `lodash` function.
	   * @example
	   *
	   * var lodash = _.noConflict();
	   */
	  function noConflict() {
	    root._ = oldDash;
	    return this;
	  }
	
	  /**
	   * A no-operation function.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @example
	   *
	   * var object = { 'name': 'fred' };
	   * _.noop(object) === undefined;
	   * // => true
	   */
	  function noop() {
	    // no operation performed
	  }
	
	  /**
	   * Gets the number of milliseconds that have elapsed since the Unix epoch
	   * (1 January 1970 00:00:00 UTC).
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @example
	   *
	   * var stamp = _.now();
	   * _.defer(function() { console.log(_.now() - stamp); });
	   * // => logs the number of milliseconds it took for the deferred function to be called
	   */
	  var now = isNative(now = Date.now) && now || function() {
	    return new Date().getTime();
	  };
	
	  /**
	   * Creates a "_.pluck" style function, which returns the `key` value of a
	   * given object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} key The name of the property to retrieve.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'fred',   'age': 40 },
	   *   { 'name': 'barney', 'age': 36 }
	   * ];
	   *
	   * var getName = _.property('name');
	   *
	   * _.map(characters, getName);
	   * // => ['barney', 'fred']
	   *
	   * _.sortBy(characters, getName);
	   * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
	   */
	  function property(key) {
	    return function(object) {
	      return object[key];
	    };
	  }
	
	  /**
	   * Produces a random number between `min` and `max` (inclusive). If only one
	   * argument is provided a number between `0` and the given number will be
	   * returned. If `floating` is truey or either `min` or `max` are floats a
	   * floating-point number will be returned instead of an integer.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {number} [min=0] The minimum possible value.
	   * @param {number} [max=1] The maximum possible value.
	   * @param {boolean} [floating=false] Specify returning a floating-point number.
	   * @returns {number} Returns a random number.
	   * @example
	   *
	   * _.random(0, 5);
	   * // => an integer between 0 and 5
	   *
	   * _.random(5);
	   * // => also an integer between 0 and 5
	   *
	   * _.random(5, true);
	   * // => a floating-point number between 0 and 5
	   *
	   * _.random(1.2, 5.2);
	   * // => a floating-point number between 1.2 and 5.2
	   */
	  function random(min, max) {
	    if (min == null && max == null) {
	      max = 1;
	    }
	    min = +min || 0;
	    if (max == null) {
	      max = min;
	      min = 0;
	    } else {
	      max = +max || 0;
	    }
	    return min + floor(nativeRandom() * (max - min + 1));
	  }
	
	  /**
	   * Resolves the value of property `key` on `object`. If `key` is a function
	   * it will be invoked with the `this` binding of `object` and its result returned,
	   * else the property value is returned. If `object` is falsey then `undefined`
	   * is returned.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Object} object The object to inspect.
	   * @param {string} key The name of the property to resolve.
	   * @returns {*} Returns the resolved value.
	   * @example
	   *
	   * var object = {
	   *   'cheese': 'crumpets',
	   *   'stuff': function() {
	   *     return 'nonsense';
	   *   }
	   * };
	   *
	   * _.result(object, 'cheese');
	   * // => 'crumpets'
	   *
	   * _.result(object, 'stuff');
	   * // => 'nonsense'
	   */
	  function result(object, key) {
	    if (object) {
	      var value = object[key];
	      return isFunction(value) ? object[key]() : value;
	    }
	  }
	
	  /**
	   * A micro-templating method that handles arbitrary delimiters, preserves
	   * whitespace, and correctly escapes quotes within interpolated code.
	   *
	   * Note: In the development build, `_.template` utilizes sourceURLs for easier
	   * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
	   *
	   * For more information on precompiling templates see:
	   * http://lodash.com/custom-builds
	   *
	   * For more information on Chrome extension sandboxes see:
	   * http://developer.chrome.com/stable/extensions/sandboxingEval.html
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} text The template text.
	   * @param {Object} data The data object used to populate the text.
	   * @param {Object} [options] The options object.
	   * @param {RegExp} [options.escape] The "escape" delimiter.
	   * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	   * @param {Object} [options.imports] An object to import into the template as local variables.
	   * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	   * @param {string} [sourceURL] The sourceURL of the template's compiled source.
	   * @param {string} [variable] The data object variable name.
	   * @returns {Function|string} Returns a compiled function when no `data` object
	   *  is given, else it returns the interpolated text.
	   * @example
	   *
	   * // using the "interpolate" delimiter to create a compiled template
	   * var compiled = _.template('hello <%= name %>');
	   * compiled({ 'name': 'fred' });
	   * // => 'hello fred'
	   *
	   * // using the "escape" delimiter to escape HTML in data property values
	   * _.template('<b><%- value %></b>', { 'value': '<script>' });
	   * // => '<b>&lt;script&gt;</b>'
	   *
	   * // using the "evaluate" delimiter to generate HTML
	   * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
	   * _.template(list, { 'people': ['fred', 'barney'] });
	   * // => '<li>fred</li><li>barney</li>'
	   *
	   * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
	   * _.template('hello ${ name }', { 'name': 'pebbles' });
	   * // => 'hello pebbles'
	   *
	   * // using the internal `print` function in "evaluate" delimiters
	   * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
	   * // => 'hello barney!'
	   *
	   * // using a custom template delimiters
	   * _.templateSettings = {
	   *   'interpolate': /{{([\s\S]+?)}}/g
	   * };
	   *
	   * _.template('hello {{ name }}!', { 'name': 'mustache' });
	   * // => 'hello mustache!'
	   *
	   * // using the `imports` option to import jQuery
	   * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
	   * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
	   * // => '<li>fred</li><li>barney</li>'
	   *
	   * // using the `sourceURL` option to specify a custom sourceURL for the template
	   * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
	   * compiled(data);
	   * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	   *
	   * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	   * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
	   * compiled.source;
	   * // => function(data) {
	   *   var __t, __p = '', __e = _.escape;
	   *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
	   *   return __p;
	   * }
	   *
	   * // using the `source` property to inline compiled templates for meaningful
	   * // line numbers in error messages and a stack trace
	   * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	   *   var JST = {\
	   *     "main": ' + _.template(mainText).source + '\
	   *   };\
	   * ');
	   */
	  function template(text, data, options) {
	    var _ = lodash,
	        settings = _.templateSettings;
	
	    text = String(text || '');
	    options = defaults({}, options, settings);
	
	    var index = 0,
	        source = "__p += '",
	        variable = options.variable;
	
	    var reDelimiters = RegExp(
	      (options.escape || reNoMatch).source + '|' +
	      (options.interpolate || reNoMatch).source + '|' +
	      (options.evaluate || reNoMatch).source + '|$'
	    , 'g');
	
	    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, evaluateValue, offset) {
	      source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	      if (escapeValue) {
	        source += "' +\n_.escape(" + escapeValue + ") +\n'";
	      }
	      if (evaluateValue) {
	        source += "';\n" + evaluateValue + ";\n__p += '";
	      }
	      if (interpolateValue) {
	        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	      }
	      index = offset + match.length;
	      return match;
	    });
	
	    source += "';\n";
	    if (!variable) {
	      variable = 'obj';
	      source = 'with (' + variable + ' || {}) {\n' + source + '\n}\n';
	    }
	    source = 'function(' + variable + ') {\n' +
	      "var __t, __p = '', __j = Array.prototype.join;\n" +
	      "function print() { __p += __j.call(arguments, '') }\n" +
	      source +
	      'return __p\n}';
	
	    try {
	      var result = Function('_', 'return ' + source)(_);
	    } catch(e) {
	      e.source = source;
	      throw e;
	    }
	    if (data) {
	      return result(data);
	    }
	    result.source = source;
	    return result;
	  }
	
	  /**
	   * Executes the callback `n` times, returning an array of the results
	   * of each callback execution. The callback is bound to `thisArg` and invoked
	   * with one argument; (index).
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {number} n The number of times to execute the callback.
	   * @param {Function} callback The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns an array of the results of each `callback` execution.
	   * @example
	   *
	   * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
	   * // => [3, 6, 4]
	   *
	   * _.times(3, function(n) { mage.castSpell(n); });
	   * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
	   *
	   * _.times(3, function(n) { this.cast(n); }, mage);
	   * // => also calls `mage.castSpell(n)` three times
	   */
	  function times(n, callback, thisArg) {
	    n = (n = +n) > -1 ? n : 0;
	    var index = -1,
	        result = Array(n);
	
	    callback = baseCreateCallback(callback, thisArg, 1);
	    while (++index < n) {
	      result[index] = callback(index);
	    }
	    return result;
	  }
	
	  /**
	   * The inverse of `_.escape` this method converts the HTML entities
	   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
	   * corresponding characters.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} string The string to unescape.
	   * @returns {string} Returns the unescaped string.
	   * @example
	   *
	   * _.unescape('Fred, Barney &amp; Pebbles');
	   * // => 'Fred, Barney & Pebbles'
	   */
	  function unescape(string) {
	    return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
	  }
	
	  /**
	   * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} [prefix] The value to prefix the ID with.
	   * @returns {string} Returns the unique ID.
	   * @example
	   *
	   * _.uniqueId('contact_');
	   * // => 'contact_104'
	   *
	   * _.uniqueId();
	   * // => '105'
	   */
	  function uniqueId(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Creates a `lodash` object that wraps the given value with explicit
	   * method chaining enabled.
	   *
	   * @static
	   * @memberOf _
	   * @category Chaining
	   * @param {*} value The value to wrap.
	   * @returns {Object} Returns the wrapper object.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'age': 36 },
	   *   { 'name': 'fred',    'age': 40 },
	   *   { 'name': 'pebbles', 'age': 1 }
	   * ];
	   *
	   * var youngest = _.chain(characters)
	   *     .sortBy('age')
	   *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
	   *     .first()
	   *     .value();
	   * // => 'pebbles is 1'
	   */
	  function chain(value) {
	    value = new lodashWrapper(value);
	    value.__chain__ = true;
	    return value;
	  }
	
	  /**
	   * Invokes `interceptor` with the `value` as the first argument and then
	   * returns `value`. The purpose of this method is to "tap into" a method
	   * chain in order to perform operations on intermediate results within
	   * the chain.
	   *
	   * @static
	   * @memberOf _
	   * @category Chaining
	   * @param {*} value The value to provide to `interceptor`.
	   * @param {Function} interceptor The function to invoke.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * _([1, 2, 3, 4])
	   *  .tap(function(array) { array.pop(); })
	   *  .reverse()
	   *  .value();
	   * // => [3, 2, 1]
	   */
	  function tap(value, interceptor) {
	    interceptor(value);
	    return value;
	  }
	
	  /**
	   * Enables explicit method chaining on the wrapper object.
	   *
	   * @name chain
	   * @memberOf _
	   * @category Chaining
	   * @returns {*} Returns the wrapper object.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // without explicit chaining
	   * _(characters).first();
	   * // => { 'name': 'barney', 'age': 36 }
	   *
	   * // with explicit chaining
	   * _(characters).chain()
	   *   .first()
	   *   .pick('age')
	   *   .value();
	   * // => { 'age': 36 }
	   */
	  function wrapperChain() {
	    this.__chain__ = true;
	    return this;
	  }
	
	  /**
	   * Extracts the wrapped value.
	   *
	   * @name valueOf
	   * @memberOf _
	   * @alias value
	   * @category Chaining
	   * @returns {*} Returns the wrapped value.
	   * @example
	   *
	   * _([1, 2, 3]).valueOf();
	   * // => [1, 2, 3]
	   */
	  function wrapperValueOf() {
	    return this.__wrapped__;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  // add functions that return wrapped values when chaining
	  lodash.after = after;
	  lodash.bind = bind;
	  lodash.bindAll = bindAll;
	  lodash.chain = chain;
	  lodash.compact = compact;
	  lodash.compose = compose;
	  lodash.countBy = countBy;
	  lodash.debounce = debounce;
	  lodash.defaults = defaults;
	  lodash.defer = defer;
	  lodash.delay = delay;
	  lodash.difference = difference;
	  lodash.filter = filter;
	  lodash.flatten = flatten;
	  lodash.forEach = forEach;
	  lodash.functions = functions;
	  lodash.groupBy = groupBy;
	  lodash.indexBy = indexBy;
	  lodash.initial = initial;
	  lodash.intersection = intersection;
	  lodash.invert = invert;
	  lodash.invoke = invoke;
	  lodash.keys = keys;
	  lodash.map = map;
	  lodash.max = max;
	  lodash.memoize = memoize;
	  lodash.min = min;
	  lodash.omit = omit;
	  lodash.once = once;
	  lodash.pairs = pairs;
	  lodash.partial = partial;
	  lodash.pick = pick;
	  lodash.pluck = pluck;
	  lodash.range = range;
	  lodash.reject = reject;
	  lodash.rest = rest;
	  lodash.shuffle = shuffle;
	  lodash.sortBy = sortBy;
	  lodash.tap = tap;
	  lodash.throttle = throttle;
	  lodash.times = times;
	  lodash.toArray = toArray;
	  lodash.union = union;
	  lodash.uniq = uniq;
	  lodash.values = values;
	  lodash.where = where;
	  lodash.without = without;
	  lodash.wrap = wrap;
	  lodash.zip = zip;
	
	  // add aliases
	  lodash.collect = map;
	  lodash.drop = rest;
	  lodash.each = forEach;
	  lodash.extend = assign;
	  lodash.methods = functions;
	  lodash.object = zipObject;
	  lodash.select = filter;
	  lodash.tail = rest;
	  lodash.unique = uniq;
	
	  /*--------------------------------------------------------------------------*/
	
	  // add functions that return unwrapped values when chaining
	  lodash.clone = clone;
	  lodash.contains = contains;
	  lodash.escape = escape;
	  lodash.every = every;
	  lodash.find = find;
	  lodash.has = has;
	  lodash.identity = identity;
	  lodash.indexOf = indexOf;
	  lodash.isArguments = isArguments;
	  lodash.isArray = isArray;
	  lodash.isBoolean = isBoolean;
	  lodash.isDate = isDate;
	  lodash.isElement = isElement;
	  lodash.isEmpty = isEmpty;
	  lodash.isEqual = isEqual;
	  lodash.isFinite = isFinite;
	  lodash.isFunction = isFunction;
	  lodash.isNaN = isNaN;
	  lodash.isNull = isNull;
	  lodash.isNumber = isNumber;
	  lodash.isObject = isObject;
	  lodash.isRegExp = isRegExp;
	  lodash.isString = isString;
	  lodash.isUndefined = isUndefined;
	  lodash.lastIndexOf = lastIndexOf;
	  lodash.mixin = mixin;
	  lodash.noConflict = noConflict;
	  lodash.random = random;
	  lodash.reduce = reduce;
	  lodash.reduceRight = reduceRight;
	  lodash.result = result;
	  lodash.size = size;
	  lodash.some = some;
	  lodash.sortedIndex = sortedIndex;
	  lodash.template = template;
	  lodash.unescape = unescape;
	  lodash.uniqueId = uniqueId;
	
	  // add aliases
	  lodash.all = every;
	  lodash.any = some;
	  lodash.detect = find;
	  lodash.findWhere = findWhere;
	  lodash.foldl = reduce;
	  lodash.foldr = reduceRight;
	  lodash.include = contains;
	  lodash.inject = reduce;
	
	  /*--------------------------------------------------------------------------*/
	
	  // add functions capable of returning wrapped and unwrapped values when chaining
	  lodash.first = first;
	  lodash.last = last;
	  lodash.sample = sample;
	
	  // add aliases
	  lodash.take = first;
	  lodash.head = first;
	
	  /*--------------------------------------------------------------------------*/
	
	  // add functions to `lodash.prototype`
	  mixin(lodash);
	
	  /**
	   * The semantic version number.
	   *
	   * @static
	   * @memberOf _
	   * @type string
	   */
	  lodash.VERSION = '2.4.1';
	
	  // add "Chaining" functions to the wrapper
	  lodash.prototype.chain = wrapperChain;
	  lodash.prototype.value = wrapperValueOf;
	
	    // add `Array` mutator functions to the wrapper
	    forEach(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	      var func = arrayRef[methodName];
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__;
	        func.apply(value, arguments);
	
	        // avoid array-like object bugs with `Array#shift` and `Array#splice`
	        // in Firefox < 10 and IE < 9
	        if (!support.spliceObjects && value.length === 0) {
	          delete value[0];
	        }
	        return this;
	      };
	    });
	
	    // add `Array` accessor functions to the wrapper
	    forEach(['concat', 'join', 'slice'], function(methodName) {
	      var func = arrayRef[methodName];
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            result = func.apply(value, arguments);
	
	        if (this.__chain__) {
	          result = new lodashWrapper(result);
	          result.__chain__ = true;
	        }
	        return result;
	      };
	    });
	
	  /*--------------------------------------------------------------------------*/
	
	  // some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose Lo-Dash to the global object even when an AMD loader is present in
	    // case Lo-Dash is loaded with a RequireJS shim config.
	    // See http://requirejs.org/docs/api.html#config-shim
	    root._ = lodash;
	
	    // define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return lodash;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // check for `exports` after `define` in case a build optimizer adds an `exports` object
	  else if (freeExports && freeModule) {
	    // in Node.js or RingoJS
	    if (moduleExports) {
	      (freeModule.exports = lodash)._ = lodash;
	    }
	    // in Narwhal or Rhino -require
	    else {
	      freeExports._ = lodash;
	    }
	  }
	  else {
	    // in a browser or Rhino
	    root._ = lodash;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 13)(module), (function() { return this; }())))

/***/ },
/* 3 */
/*!****************************************!*\
  !*** ./public/assets/libs/backbone.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.1.2
	
	//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org
	
	(function(root, factory) {
	
	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! underscore */ 2), __webpack_require__(/*! jquery */ 1), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore');
	    factory(root, exports, _);
	
	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }
	
	}(this, function(root, Backbone, _, $) {
	
	  // Initial Setup
	  // -------------
	
	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;
	
	  // Create local references to array methods we'll want to use later.
	  var array = [];
	  var push = array.push;
	  var slice = array.slice;
	  var splice = array.splice;
	
	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.1.2';
	
	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;
	
	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };
	
	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;
	
	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;
	
	  // Backbone.Events
	  // ---------------
	
	  // A module that can be mixed in to *any object* in order to provide it with
	  // custom events. You may bind with `on` or remove with `off` callback
	  // functions to an event; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {
	
	    // Bind an event to a `callback` function. Passing `"all"` will bind
	    // the callback to all events fired.
	    on: function(name, callback, context) {
	      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	      this._events || (this._events = {});
	      var events = this._events[name] || (this._events[name] = []);
	      events.push({callback: callback, context: context, ctx: context || this});
	      return this;
	    },
	
	    // Bind an event to only be triggered a single time. After the first time
	    // the callback is invoked, it will be removed.
	    once: function(name, callback, context) {
	      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	      var self = this;
	      var once = _.once(function() {
	        self.off(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	      return this.on(name, once, context);
	    },
	
	    // Remove one or many callbacks. If `context` is null, removes all
	    // callbacks with that function. If `callback` is null, removes all
	    // callbacks for the event. If `name` is null, removes all bound
	    // callbacks for all events.
	    off: function(name, callback, context) {
	      var retain, ev, events, names, i, l, j, k;
	      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	      if (!name && !callback && !context) {
	        this._events = void 0;
	        return this;
	      }
	      names = name ? [name] : _.keys(this._events);
	      for (i = 0, l = names.length; i < l; i++) {
	        name = names[i];
	        if (events = this._events[name]) {
	          this._events[name] = retain = [];
	          if (callback || context) {
	            for (j = 0, k = events.length; j < k; j++) {
	              ev = events[j];
	              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                  (context && context !== ev.context)) {
	                retain.push(ev);
	              }
	            }
	          }
	          if (!retain.length) delete this._events[name];
	        }
	      }
	
	      return this;
	    },
	
	    // Trigger one or many events, firing all bound callbacks. Callbacks are
	    // passed the same arguments as `trigger` is, apart from the event name
	    // (unless you're listening on `"all"`, which will cause your callback to
	    // receive the true name of the event as the first argument).
	    trigger: function(name) {
	      if (!this._events) return this;
	      var args = slice.call(arguments, 1);
	      if (!eventsApi(this, 'trigger', name, args)) return this;
	      var events = this._events[name];
	      var allEvents = this._events.all;
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, arguments);
	      return this;
	    },
	
	    // Tell this object to stop listening to either specific events ... or
	    // to every object it's currently listening to.
	    stopListening: function(obj, name, callback) {
	      var listeningTo = this._listeningTo;
	      if (!listeningTo) return this;
	      var remove = !name && !callback;
	      if (!callback && typeof name === 'object') callback = this;
	      if (obj) (listeningTo = {})[obj._listenId] = obj;
	      for (var id in listeningTo) {
	        obj = listeningTo[id];
	        obj.off(name, callback, this);
	        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	      }
	      return this;
	    }
	
	  };
	
	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;
	
	  // Implement fancy features of the Events API such as multiple event
	  // names `"change blur"` and jQuery-style event maps `{change: action}`
	  // in terms of the existing API.
	  var eventsApi = function(obj, action, name, rest) {
	    if (!name) return true;
	
	    // Handle event maps.
	    if (typeof name === 'object') {
	      for (var key in name) {
	        obj[action].apply(obj, [key, name[key]].concat(rest));
	      }
	      return false;
	    }
	
	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        obj[action].apply(obj, [names[i]].concat(rest));
	      }
	      return false;
	    }
	
	    return true;
	  };
	
	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };
	
	  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};
	
	  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
	  // listen to an event in another object ... keeping track of what it's
	  // listening to.
	  _.each(listenMethods, function(implementation, method) {
	    Events[method] = function(obj, name, callback) {
	      var listeningTo = this._listeningTo || (this._listeningTo = {});
	      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	      listeningTo[id] = obj;
	      if (!callback && typeof name === 'object') callback = this;
	      obj[implementation](name, callback, this);
	      return this;
	    };
	  });
	
	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;
	
	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);
	
	  // Backbone.Model
	  // --------------
	
	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.
	
	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId('c');
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };
	
	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {
	
	    // A hash of attributes whose current and previous value differ.
	    changed: null,
	
	    // The value returned during the last failed validation.
	    validationError: null,
	
	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},
	
	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },
	
	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },
	
	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },
	
	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },
	
	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },
	
	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      var attr, attrs, unset, changes, silent, changing, prev, current;
	      if (key == null) return this;
	
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }
	
	      options || (options = {});
	
	      // Run validation.
	      if (!this._validate(attrs, options)) return false;
	
	      // Extract attributes and options.
	      unset           = options.unset;
	      silent          = options.silent;
	      changes         = [];
	      changing        = this._changing;
	      this._changing  = true;
	
	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }
	      current = this.attributes, prev = this._previousAttributes;
	
	      // Check for changes of `id`.
	      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
	
	      // For each `set` attribute, update or delete the current value.
	      for (attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          this.changed[attr] = val;
	        } else {
	          delete this.changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }
	
	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0, l = changes.length; i < l; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }
	
	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },
	
	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },
	
	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },
	
	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },
	
	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var val, changed = false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      for (var attr in diff) {
	        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
	        (changed || (changed = {}))[attr] = val;
	      }
	      return changed;
	    },
	
	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },
	
	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },
	
	    // Fetch the model from the server. If the server's representation of the
	    // model differs from its current attributes, they will be overridden,
	    // triggering a `"change"` event.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        if (!model.set(model.parse(resp, options), options)) return false;
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },
	
	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      var attrs, method, xhr, attributes = this.attributes;
	
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }
	
	      options = _.extend({validate: true}, options);
	
	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !options.wait) {
	        if (!this.set(attrs, options)) return false;
	      } else {
	        if (!this._validate(attrs, options)) return false;
	      }
	
	      // Set temporary attributes if `{wait: true}`.
	      if (attrs && options.wait) {
	        this.attributes = _.extend({}, attributes, attrs);
	      }
	
	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = model.parse(resp, options);
	        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
	        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
	          return false;
	        }
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	
	      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch') options.attrs = attrs;
	      xhr = this.sync(method, this, options);
	
	      // Restore attributes.
	      if (attrs && options.wait) this.attributes = attributes;
	
	      return xhr;
	    },
	
	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	
	      var destroy = function() {
	        model.trigger('destroy', model, model.collection, options);
	      };
	
	      options.success = function(resp) {
	        if (options.wait || model.isNew()) destroy();
	        if (success) success(model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };
	
	      if (this.isNew()) {
	        options.success();
	        return false;
	      }
	      wrapError(this, options);
	
	      var xhr = this.sync('delete', this, options);
	      if (!options.wait) destroy();
	      return xhr;
	    },
	
	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
	    },
	
	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },
	
	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },
	
	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },
	
	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend(options || {}, { validate: true }));
	    },
	
	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Model.
	  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];
	
	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  _.each(modelMethods, function(method) {
	    Model.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.attributes);
	      return _[method].apply(_, args);
	    };
	  });
	
	  // Backbone.Collection
	  // -------------------
	
	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analagous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.
	
	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };
	
	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};
	
	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {
	
	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},
	
	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model){ return model.toJSON(options); });
	    },
	
	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },
	
	    // Add a model, or list of models to the set.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },
	
	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      var singular = !_.isArray(models);
	      models = singular ? [models] : _.clone(models);
	      options || (options = {});
	      var i, l, index, model;
	      for (i = 0, l = models.length; i < l; i++) {
	        model = models[i] = this.get(models[i]);
	        if (!model) continue;
	        delete this._byId[model.id];
	        delete this._byId[model.cid];
	        index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	        this._removeReference(model, options);
	      }
	      return singular ? models[0] : models;
	    },
	
	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      options = _.defaults({}, options, setOptions);
	      if (options.parse) models = this.parse(models, options);
	      var singular = !_.isArray(models);
	      models = singular ? (models ? [models] : []) : _.clone(models);
	      var i, l, id, model, attrs, existing, sort;
	      var at = options.at;
	      var targetModel = this.model;
	      var sortable = this.comparator && (at == null) && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
	      var toAdd = [], toRemove = [], modelMap = {};
	      var add = options.add, merge = options.merge, remove = options.remove;
	      var order = !sortable && add && remove ? [] : false;
	
	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      for (i = 0, l = models.length; i < l; i++) {
	        attrs = models[i] || {};
	        if (attrs instanceof Model) {
	          id = model = attrs;
	        } else {
	          id = attrs[targetModel.prototype.idAttribute || 'id'];
	        }
	
	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        if (existing = this.get(id)) {
	          if (remove) modelMap[existing.cid] = true;
	          if (merge) {
	            attrs = attrs === model ? model.attributes : attrs;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
	          }
	          models[i] = existing;
	
	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(attrs, options);
	          if (!model) continue;
	          toAdd.push(model);
	          this._addReference(model, options);
	        }
	
	        // Do not add multiple models with the same `id`.
	        model = existing || model;
	        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
	        modelMap[model.id] = true;
	      }
	
	      // Remove nonexistent models if appropriate.
	      if (remove) {
	        for (i = 0, l = this.length; i < l; ++i) {
	          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this.remove(toRemove, options);
	      }
	
	      // See if sorting is needed, update `length` and splice in new models.
	      if (toAdd.length || (order && order.length)) {
	        if (sortable) sort = true;
	        this.length += toAdd.length;
	        if (at != null) {
	          for (i = 0, l = toAdd.length; i < l; i++) {
	            this.models.splice(at + i, 0, toAdd[i]);
	          }
	        } else {
	          if (order) this.models.length = 0;
	          var orderedModels = order || toAdd;
	          for (i = 0, l = orderedModels.length; i < l; i++) {
	            this.models.push(orderedModels[i]);
	          }
	        }
	      }
	
	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});
	
	      // Unless silenced, it's time to fire all appropriate add/sort events.
	      if (!options.silent) {
	        for (i = 0, l = toAdd.length; i < l; i++) {
	          (model = toAdd[i]).trigger('add', model, this, options);
	        }
	        if (sort || (order && order.length)) this.trigger('sort', this, options);
	      }
	
	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },
	
	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options || (options = {});
	      for (var i = 0, l = this.models.length; i < l; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },
	
	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },
	
	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      this.remove(model, options);
	      return model;
	    },
	
	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },
	
	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      this.remove(model, options);
	      return model;
	    },
	
	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },
	
	    // Get a model from the set by id.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
	    },
	
	    // Get the model at the given index.
	    at: function(index) {
	      return this.models[index];
	    },
	
	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      if (_.isEmpty(attrs)) return first ? void 0 : [];
	      return this[first ? 'find' : 'filter'](function(model) {
	        for (var key in attrs) {
	          if (attrs[key] !== model.get(key)) return false;
	        }
	        return true;
	      });
	    },
	
	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },
	
	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});
	
	      // Run sort based on type of `comparator`.
	      if (_.isString(this.comparator) || this.comparator.length === 1) {
	        this.models = this.sortBy(this.comparator, this);
	      } else {
	        this.models.sort(_.bind(this.comparator, this));
	      }
	
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },
	
	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return _.invoke(this.models, 'get', attr);
	    },
	
	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success(collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },
	
	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      if (!(model = this._prepareModel(model, options))) return false;
	      if (!options.wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(model, resp) {
	        if (options.wait) collection.add(model, options);
	        if (success) success(model, resp, options);
	      };
	      model.save(null, options);
	      return model;
	    },
	
	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },
	
	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models);
	    },
	
	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },
	
	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (attrs instanceof Model) return attrs;
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },
	
	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      if (model.id != null) this._byId[model.id] = model;
	      if (!model.collection) model.collection = this;
	      model.on('all', this._onModelEvent, this);
	    },
	
	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },
	
	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if ((event === 'add' || event === 'remove') && collection !== this) return;
	      if (event === 'destroy') this.remove(model, options);
	      if (model && event === 'change:' + model.idAttribute) {
	        delete this._byId[model.previous(model.idAttribute)];
	        if (model.id != null) this._byId[model.id] = model;
	      }
	      this.trigger.apply(this, arguments);
	    }
	
	  });
	
	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
	    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
	    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
	    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
	    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
	    'lastIndexOf', 'isEmpty', 'chain', 'sample'];
	
	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  _.each(methods, function(method) {
	    Collection.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.models);
	      return _[method].apply(_, args);
	    };
	  });
	
	  // Underscore methods that take a property name as an argument.
	  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];
	
	  // Use attributes instead of properties.
	  _.each(attributeMethods, function(method) {
	    Collection.prototype[method] = function(value, context) {
	      var iterator = _.isFunction(value) ? value : function(model) {
	        return model.get(value);
	      };
	      return _[method](this.models, iterator, context);
	    };
	  });
	
	  // Backbone.View
	  // -------------
	
	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.
	
	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    options || (options = {});
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	    this.delegateEvents();
	  };
	
	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	  // List of view options to be merged as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
	
	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {
	
	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',
	
	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},
	
	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },
	
	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this.$el.remove();
	      this.stopListening();
	      return this;
	    },
	
	    // Change the view's element (`this.el` property), including event
	    // re-delegation.
	    setElement: function(element, delegate) {
	      if (this.$el) this.undelegateEvents();
	      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
	      this.el = this.$el[0];
	      if (delegate !== false) this.delegateEvents();
	      return this;
	    },
	
	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    // This only works for delegate-able events: not `focus`, `blur`, and
	    // not `change`, `submit`, and `reset` in Internet Explorer.
	    delegateEvents: function(events) {
	      if (!(events || (events = _.result(this, 'events')))) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[events[key]];
	        if (!method) continue;
	
	        var match = key.match(delegateEventSplitter);
	        var eventName = match[1], selector = match[2];
	        method = _.bind(method, this);
	        eventName += '.delegateEvents' + this.cid;
	        if (selector === '') {
	          this.$el.on(eventName, method);
	        } else {
	          this.$el.on(eventName, selector, method);
	        }
	      }
	      return this;
	    },
	
	    // Clears all callbacks previously bound to the view with `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },
	
	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
	        this.setElement($el, false);
	      } else {
	        this.setElement(_.result(this, 'el'), false);
	      }
	    }
	
	  });
	
	  // Backbone.sync
	  // -------------
	
	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];
	
	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });
	
	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};
	
	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }
	
	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }
	
	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }
	
	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }
	
	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }
	
	    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
	    // that still has ActiveX enabled by default, override jQuery to use that
	    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
	    if (params.type === 'PATCH' && noXhrPatch) {
	      params.xhr = function() {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	      };
	    }
	
	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };
	
	  var noXhrPatch =
	    typeof window !== 'undefined' && !!window.ActiveXObject &&
	      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
	
	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch':  'PATCH',
	    'delete': 'DELETE',
	    'read':   'GET'
	  };
	
	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };
	
	  // Backbone.Router
	  // ---------------
	
	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };
	
	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	
	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {
	
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},
	
	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        router.execute(callback, args);
	        router.trigger.apply(router, ['route:' + name].concat(args));
	        router.trigger('route', name, args);
	        Backbone.history.trigger('route', router, name, args);
	      });
	      return this;
	    },
	
	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args) {
	      if (callback) callback.apply(this, args);
	    },
	
	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },
	
	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },
	
	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },
	
	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }
	
	  });
	
	  // Backbone.History
	  // ----------------
	
	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    _.bindAll(this, 'checkUrl');
	
	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };
	
	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;
	
	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;
	
	  // Cached regex for detecting MSIE.
	  var isExplorer = /msie [\w.]+/;
	
	  // Cached regex for removing a trailing slash.
	  var trailingSlash = /\/$/;
	
	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;
	
	  // Has the history handling already been started?
	  History.started = false;
	
	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {
	
	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,
	
	    // Are we at the app root?
	    atRoot: function() {
	      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
	    },
	
	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },
	
	    // Get the cross-browser normalized URL fragment, either from the URL,
	    // the hash, or the override.
	    getFragment: function(fragment, forcePushState) {
	      if (fragment == null) {
	        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
	          fragment = decodeURI(this.location.pathname + this.location.search);
	          var root = this.root.replace(trailingSlash, '');
	          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },
	
	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error("Backbone.history has already been started");
	      History.started = true;
	
	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
	      var fragment          = this.getFragment();
	      var docMode           = document.documentMode;
	      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));
	
	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');
	
	      if (oldIE && this._wantsHashChange) {
	        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
	        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
	        this.navigate(fragment);
	      }
	
	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._hasPushState) {
	        Backbone.$(window).on('popstate', this.checkUrl);
	      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
	        Backbone.$(window).on('hashchange', this.checkUrl);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }
	
	      // Determine if we need to change the base url, for a pushState link
	      // opened by a non-pushState browser.
	      this.fragment = fragment;
	      var loc = this.location;
	
	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {
	
	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          this.fragment = this.getFragment(null, true);
	          this.location.replace(this.root + '#' + this.fragment);
	          // Return immediately as browser will do redirect to new url
	          return true;
	
	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot() && loc.hash) {
	          this.fragment = this.getHash().replace(routeStripper, '');
	          this.history.replaceState({}, document.title, this.root + this.fragment);
	        }
	
	      }
	
	      if (!this.options.silent) return this.loadUrl();
	    },
	
	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },
	
	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },
	
	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();
	      if (current === this.fragment && this.iframe) {
	        current = this.getFragment(this.getHash(this.iframe));
	      }
	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },
	
	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.any(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },
	
	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};
	
	      var url = this.root + (fragment = this.getFragment(fragment || ''));
	
	      // Strip the hash for matching.
	      fragment = fragment.replace(pathStripper, '');
	
	      if (this.fragment === fragment) return;
	      this.fragment = fragment;
	
	      // Don't include a trailing slash on the root.
	      if (fragment === '' && url !== '/') url = url.slice(0, -1);
	
	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._hasPushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
	
	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if(!options.replace) this.iframe.document.open().close();
	          this._updateHash(this.iframe.location, fragment, options.replace);
	        }
	
	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },
	
	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }
	
	  });
	
	  // Create the default Backbone.history.
	  Backbone.history = new History;
	
	  // Helpers
	  // -------
	
	  // Helper function to correctly set up the prototype chain, for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;
	
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }
	
	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);
	
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    var Surrogate = function(){ this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;
	
	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) _.extend(child.prototype, protoProps);
	
	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;
	
	    return child;
	  };
	
	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
	
	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };
	
	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error(model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };
	
	  return Backbone;
	
	}));


/***/ },
/* 4 */
/*!***************************************************!*\
  !*** ./public/assets/libs/backbone.marionette.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MarionetteJS (Backbone.Marionette)
	// ----------------------------------
	// v2.3.0
	//
	// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://marionettejs.com
	
	
	/*!
	 * Includes BabySitter
	 * https://github.com/marionettejs/backbone.babysitter/
	 *
	 * Includes Wreqr
	 * https://github.com/marionettejs/backbone.wreqr/
	 */
	
	
	(function(root, factory) {
	
	  /* istanbul ignore next */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! backbone */ 3), __webpack_require__(/*! underscore */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Backbone, _) {
	      return (root.Marionette = root.Mn = factory(root, Backbone, _));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    module.exports = factory(root, Backbone, _);
	  } else {
	    root.Marionette = root.Mn = factory(root, root.Backbone, root._);
	  }
	
	}(this, function(root, Backbone, _) {
	  'use strict';
	
	  /* istanbul ignore next */
	  // Backbone.BabySitter
	  // -------------------
	  // v0.1.4
	  //
	  // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	  // Distributed under MIT license
	  //
	  // http://github.com/marionettejs/backbone.babysitter
	  (function(Backbone, _) {
	    "use strict";
	    var previousChildViewContainer = Backbone.ChildViewContainer;
	    // BabySitter.ChildViewContainer
	    // -----------------------------
	    //
	    // Provide a container to store, retrieve and
	    // shut down child views.
	    Backbone.ChildViewContainer = function(Backbone, _) {
	      // Container Constructor
	      // ---------------------
	      var Container = function(views) {
	        this._views = {};
	        this._indexByModel = {};
	        this._indexByCustom = {};
	        this._updateLength();
	        _.each(views, this.add, this);
	      };
	      // Container Methods
	      // -----------------
	      _.extend(Container.prototype, {
	        // Add a view to this container. Stores the view
	        // by `cid` and makes it searchable by the model
	        // cid (and model itself). Optionally specify
	        // a custom key to store an retrieve the view.
	        add: function(view, customIndex) {
	          var viewCid = view.cid;
	          // store the view
	          this._views[viewCid] = view;
	          // index it by model
	          if (view.model) {
	            this._indexByModel[view.model.cid] = viewCid;
	          }
	          // index by custom
	          if (customIndex) {
	            this._indexByCustom[customIndex] = viewCid;
	          }
	          this._updateLength();
	          return this;
	        },
	        // Find a view by the model that was attached to
	        // it. Uses the model's `cid` to find it.
	        findByModel: function(model) {
	          return this.findByModelCid(model.cid);
	        },
	        // Find a view by the `cid` of the model that was attached to
	        // it. Uses the model's `cid` to find the view `cid` and
	        // retrieve the view using it.
	        findByModelCid: function(modelCid) {
	          var viewCid = this._indexByModel[modelCid];
	          return this.findByCid(viewCid);
	        },
	        // Find a view by a custom indexer.
	        findByCustom: function(index) {
	          var viewCid = this._indexByCustom[index];
	          return this.findByCid(viewCid);
	        },
	        // Find by index. This is not guaranteed to be a
	        // stable index.
	        findByIndex: function(index) {
	          return _.values(this._views)[index];
	        },
	        // retrieve a view by its `cid` directly
	        findByCid: function(cid) {
	          return this._views[cid];
	        },
	        // Remove a view
	        remove: function(view) {
	          var viewCid = view.cid;
	          // delete model index
	          if (view.model) {
	            delete this._indexByModel[view.model.cid];
	          }
	          // delete custom index
	          _.any(this._indexByCustom, function(cid, key) {
	            if (cid === viewCid) {
	              delete this._indexByCustom[key];
	              return true;
	            }
	          }, this);
	          // remove the view from the container
	          delete this._views[viewCid];
	          // update the length
	          this._updateLength();
	          return this;
	        },
	        // Call a method on every view in the container,
	        // passing parameters to the call method one at a
	        // time, like `function.call`.
	        call: function(method) {
	          this.apply(method, _.tail(arguments));
	        },
	        // Apply a method on every view in the container,
	        // passing parameters to the call method one at a
	        // time, like `function.apply`.
	        apply: function(method, args) {
	          _.each(this._views, function(view) {
	            if (_.isFunction(view[method])) {
	              view[method].apply(view, args || []);
	            }
	          });
	        },
	        // Update the `.length` attribute on this container
	        _updateLength: function() {
	          this.length = _.size(this._views);
	        }
	      });
	      // Borrowing this code from Backbone.Collection:
	      // http://backbonejs.org/docs/backbone.html#section-106
	      //
	      // Mix in methods from Underscore, for iteration, and other
	      // collection related features.
	      var methods = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck" ];
	      _.each(methods, function(method) {
	        Container.prototype[method] = function() {
	          var views = _.values(this._views);
	          var args = [ views ].concat(_.toArray(arguments));
	          return _[method].apply(_, args);
	        };
	      });
	      // return the public API
	      return Container;
	    }(Backbone, _);
	    Backbone.ChildViewContainer.VERSION = "0.1.4";
	    Backbone.ChildViewContainer.noConflict = function() {
	      Backbone.ChildViewContainer = previousChildViewContainer;
	      return this;
	    };
	    return Backbone.ChildViewContainer;
	  })(Backbone, _);
	
	  /* istanbul ignore next */
	  // Backbone.Wreqr (Backbone.Marionette)
	  // ----------------------------------
	  // v1.3.1
	  //
	  // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	  // Distributed under MIT license
	  //
	  // http://github.com/marionettejs/backbone.wreqr
	  (function(Backbone, _) {
	    "use strict";
	    var previousWreqr = Backbone.Wreqr;
	    var Wreqr = Backbone.Wreqr = {};
	    Backbone.Wreqr.VERSION = "1.3.1";
	    Backbone.Wreqr.noConflict = function() {
	      Backbone.Wreqr = previousWreqr;
	      return this;
	    };
	    // Handlers
	    // --------
	    // A registry of functions to call, given a name
	    Wreqr.Handlers = function(Backbone, _) {
	      "use strict";
	      // Constructor
	      // -----------
	      var Handlers = function(options) {
	        this.options = options;
	        this._wreqrHandlers = {};
	        if (_.isFunction(this.initialize)) {
	          this.initialize(options);
	        }
	      };
	      Handlers.extend = Backbone.Model.extend;
	      // Instance Members
	      // ----------------
	      _.extend(Handlers.prototype, Backbone.Events, {
	        // Add multiple handlers using an object literal configuration
	        setHandlers: function(handlers) {
	          _.each(handlers, function(handler, name) {
	            var context = null;
	            if (_.isObject(handler) && !_.isFunction(handler)) {
	              context = handler.context;
	              handler = handler.callback;
	            }
	            this.setHandler(name, handler, context);
	          }, this);
	        },
	        // Add a handler for the given name, with an
	        // optional context to run the handler within
	        setHandler: function(name, handler, context) {
	          var config = {
	            callback: handler,
	            context: context
	          };
	          this._wreqrHandlers[name] = config;
	          this.trigger("handler:add", name, handler, context);
	        },
	        // Determine whether or not a handler is registered
	        hasHandler: function(name) {
	          return !!this._wreqrHandlers[name];
	        },
	        // Get the currently registered handler for
	        // the specified name. Throws an exception if
	        // no handler is found.
	        getHandler: function(name) {
	          var config = this._wreqrHandlers[name];
	          if (!config) {
	            return;
	          }
	          return function() {
	            var args = Array.prototype.slice.apply(arguments);
	            return config.callback.apply(config.context, args);
	          };
	        },
	        // Remove a handler for the specified name
	        removeHandler: function(name) {
	          delete this._wreqrHandlers[name];
	        },
	        // Remove all handlers from this registry
	        removeAllHandlers: function() {
	          this._wreqrHandlers = {};
	        }
	      });
	      return Handlers;
	    }(Backbone, _);
	    // Wreqr.CommandStorage
	    // --------------------
	    //
	    // Store and retrieve commands for execution.
	    Wreqr.CommandStorage = function() {
	      "use strict";
	      // Constructor function
	      var CommandStorage = function(options) {
	        this.options = options;
	        this._commands = {};
	        if (_.isFunction(this.initialize)) {
	          this.initialize(options);
	        }
	      };
	      // Instance methods
	      _.extend(CommandStorage.prototype, Backbone.Events, {
	        // Get an object literal by command name, that contains
	        // the `commandName` and the `instances` of all commands
	        // represented as an array of arguments to process
	        getCommands: function(commandName) {
	          var commands = this._commands[commandName];
	          // we don't have it, so add it
	          if (!commands) {
	            // build the configuration
	            commands = {
	              command: commandName,
	              instances: []
	            };
	            // store it
	            this._commands[commandName] = commands;
	          }
	          return commands;
	        },
	        // Add a command by name, to the storage and store the
	        // args for the command
	        addCommand: function(commandName, args) {
	          var command = this.getCommands(commandName);
	          command.instances.push(args);
	        },
	        // Clear all commands for the given `commandName`
	        clearCommands: function(commandName) {
	          var command = this.getCommands(commandName);
	          command.instances = [];
	        }
	      });
	      return CommandStorage;
	    }();
	    // Wreqr.Commands
	    // --------------
	    //
	    // A simple command pattern implementation. Register a command
	    // handler and execute it.
	    Wreqr.Commands = function(Wreqr) {
	      "use strict";
	      return Wreqr.Handlers.extend({
	        // default storage type
	        storageType: Wreqr.CommandStorage,
	        constructor: function(options) {
	          this.options = options || {};
	          this._initializeStorage(this.options);
	          this.on("handler:add", this._executeCommands, this);
	          var args = Array.prototype.slice.call(arguments);
	          Wreqr.Handlers.prototype.constructor.apply(this, args);
	        },
	        // Execute a named command with the supplied args
	        execute: function(name, args) {
	          name = arguments[0];
	          args = Array.prototype.slice.call(arguments, 1);
	          if (this.hasHandler(name)) {
	            this.getHandler(name).apply(this, args);
	          } else {
	            this.storage.addCommand(name, args);
	          }
	        },
	        // Internal method to handle bulk execution of stored commands
	        _executeCommands: function(name, handler, context) {
	          var command = this.storage.getCommands(name);
	          // loop through and execute all the stored command instances
	          _.each(command.instances, function(args) {
	            handler.apply(context, args);
	          });
	          this.storage.clearCommands(name);
	        },
	        // Internal method to initialize storage either from the type's
	        // `storageType` or the instance `options.storageType`.
	        _initializeStorage: function(options) {
	          var storage;
	          var StorageType = options.storageType || this.storageType;
	          if (_.isFunction(StorageType)) {
	            storage = new StorageType();
	          } else {
	            storage = StorageType;
	          }
	          this.storage = storage;
	        }
	      });
	    }(Wreqr);
	    // Wreqr.RequestResponse
	    // ---------------------
	    //
	    // A simple request/response implementation. Register a
	    // request handler, and return a response from it
	    Wreqr.RequestResponse = function(Wreqr) {
	      "use strict";
	      return Wreqr.Handlers.extend({
	        request: function() {
	          var name = arguments[0];
	          var args = Array.prototype.slice.call(arguments, 1);
	          if (this.hasHandler(name)) {
	            return this.getHandler(name).apply(this, args);
	          }
	        }
	      });
	    }(Wreqr);
	    // Event Aggregator
	    // ----------------
	    // A pub-sub object that can be used to decouple various parts
	    // of an application through event-driven architecture.
	    Wreqr.EventAggregator = function(Backbone, _) {
	      "use strict";
	      var EA = function() {};
	      // Copy the `extend` function used by Backbone's classes
	      EA.extend = Backbone.Model.extend;
	      // Copy the basic Backbone.Events on to the event aggregator
	      _.extend(EA.prototype, Backbone.Events);
	      return EA;
	    }(Backbone, _);
	    // Wreqr.Channel
	    // --------------
	    //
	    // An object that wraps the three messaging systems:
	    // EventAggregator, RequestResponse, Commands
	    Wreqr.Channel = function(Wreqr) {
	      "use strict";
	      var Channel = function(channelName) {
	        this.vent = new Backbone.Wreqr.EventAggregator();
	        this.reqres = new Backbone.Wreqr.RequestResponse();
	        this.commands = new Backbone.Wreqr.Commands();
	        this.channelName = channelName;
	      };
	      _.extend(Channel.prototype, {
	        // Remove all handlers from the messaging systems of this channel
	        reset: function() {
	          this.vent.off();
	          this.vent.stopListening();
	          this.reqres.removeAllHandlers();
	          this.commands.removeAllHandlers();
	          return this;
	        },
	        // Connect a hash of events; one for each messaging system
	        connectEvents: function(hash, context) {
	          this._connect("vent", hash, context);
	          return this;
	        },
	        connectCommands: function(hash, context) {
	          this._connect("commands", hash, context);
	          return this;
	        },
	        connectRequests: function(hash, context) {
	          this._connect("reqres", hash, context);
	          return this;
	        },
	        // Attach the handlers to a given message system `type`
	        _connect: function(type, hash, context) {
	          if (!hash) {
	            return;
	          }
	          context = context || this;
	          var method = type === "vent" ? "on" : "setHandler";
	          _.each(hash, function(fn, eventName) {
	            this[type][method](eventName, _.bind(fn, context));
	          }, this);
	        }
	      });
	      return Channel;
	    }(Wreqr);
	    // Wreqr.Radio
	    // --------------
	    //
	    // An object that lets you communicate with many channels.
	    Wreqr.radio = function(Wreqr) {
	      "use strict";
	      var Radio = function() {
	        this._channels = {};
	        this.vent = {};
	        this.commands = {};
	        this.reqres = {};
	        this._proxyMethods();
	      };
	      _.extend(Radio.prototype, {
	        channel: function(channelName) {
	          if (!channelName) {
	            throw new Error("Channel must receive a name");
	          }
	          return this._getChannel(channelName);
	        },
	        _getChannel: function(channelName) {
	          var channel = this._channels[channelName];
	          if (!channel) {
	            channel = new Wreqr.Channel(channelName);
	            this._channels[channelName] = channel;
	          }
	          return channel;
	        },
	        _proxyMethods: function() {
	          _.each([ "vent", "commands", "reqres" ], function(system) {
	            _.each(messageSystems[system], function(method) {
	              this[system][method] = proxyMethod(this, system, method);
	            }, this);
	          }, this);
	        }
	      });
	      var messageSystems = {
	        vent: [ "on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce" ],
	        commands: [ "execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ],
	        reqres: [ "request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ]
	      };
	      var proxyMethod = function(radio, system, method) {
	        return function(channelName) {
	          var messageSystem = radio._getChannel(channelName)[system];
	          var args = Array.prototype.slice.call(arguments, 1);
	          return messageSystem[method].apply(messageSystem, args);
	        };
	      };
	      return new Radio();
	    }(Wreqr);
	    return Backbone.Wreqr;
	  })(Backbone, _);
	
	  var previousMarionette = root.Marionette;
	
	  var Marionette = Backbone.Marionette = {};
	
	  Marionette.VERSION = '2.3.0';
	
	  Marionette.noConflict = function() {
	    root.Marionette = previousMarionette;
	    return this;
	  };
	
	  Backbone.Marionette = Marionette;
	
	  // Get the Deferred creator for later use
	  Marionette.Deferred = Backbone.$.Deferred;
	
	  /* jshint unused: false *//* global console */
	  
	  // Helpers
	  // -------
	  
	  // Marionette.extend
	  // -----------------
	  
	  // Borrow the Backbone `extend` method so we can use it as needed
	  Marionette.extend = Backbone.Model.extend;
	  
	  // Marionette.isNodeAttached
	  // -------------------------
	  
	  // Determine if `el` is a child of the document
	  Marionette.isNodeAttached = function(el) {
	    return Backbone.$.contains(document.documentElement, el);
	  };
	  
	  
	  // Marionette.getOption
	  // --------------------
	  
	  // Retrieve an object, function or other value from a target
	  // object or its `options`, with `options` taking precedence.
	  Marionette.getOption = function(target, optionName) {
	    if (!target || !optionName) { return; }
	    if (target.options && (target.options[optionName] !== undefined)) {
	      return target.options[optionName];
	    } else {
	      return target[optionName];
	    }
	  };
	  
	  // Proxy `Marionette.getOption`
	  Marionette.proxyGetOption = function(optionName) {
	    return Marionette.getOption(this, optionName);
	  };
	  
	  // Marionette.normalizeMethods
	  // ----------------------
	  
	  // Pass in a mapping of events => functions or function names
	  // and return a mapping of events => functions
	  Marionette.normalizeMethods = function(hash) {
	    return _.reduce(hash, function(normalizedHash, method, name) {
	      if (!_.isFunction(method)) {
	        method = this[method];
	      }
	      if (method) {
	        normalizedHash[name] = method;
	      }
	      return normalizedHash;
	    }, {}, this);
	  };
	  
	  // utility method for parsing @ui. syntax strings
	  // into associated selector
	  Marionette.normalizeUIString = function(uiString, ui) {
	    return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(r) {
	      return ui[r.slice(4)];
	    });
	  };
	  
	  // allows for the use of the @ui. syntax within
	  // a given key for triggers and events
	  // swaps the @ui with the associated selector.
	  // Returns a new, non-mutated, parsed events hash.
	  Marionette.normalizeUIKeys = function(hash, ui) {
	    return _.reduce(hash, function(memo, val, key) {
	      var normalizedKey = Marionette.normalizeUIString(key, ui);
	      memo[normalizedKey] = val;
	      return memo;
	    }, {});
	  };
	  
	  // allows for the use of the @ui. syntax within
	  // a given value for regions
	  // swaps the @ui with the associated selector
	  Marionette.normalizeUIValues = function(hash, ui) {
	    _.each(hash, function(val, key) {
	      if (_.isString(val)) {
	        hash[key] = Marionette.normalizeUIString(val, ui);
	      }
	    });
	    return hash;
	  };
	  
	  // Mix in methods from Underscore, for iteration, and other
	  // collection related features.
	  // Borrowing this code from Backbone.Collection:
	  // http://backbonejs.org/docs/backbone.html#section-121
	  Marionette.actAsCollection = function(object, listProperty) {
	    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
	      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
	      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
	      'last', 'without', 'isEmpty', 'pluck'];
	  
	    _.each(methods, function(method) {
	      object[method] = function() {
	        var list = _.values(_.result(this, listProperty));
	        var args = [list].concat(_.toArray(arguments));
	        return _[method].apply(_, args);
	      };
	    });
	  };
	  
	  var deprecate = Marionette.deprecate = function(message, test) {
	    if (_.isObject(message)) {
	      message = (
	        message.prev + ' is going to be removed in the future. ' +
	        'Please use ' + message.next + ' instead.' +
	        (message.url ? ' See: ' + message.url : '')
	      );
	    }
	  
	    if ((test === undefined || !test) && !deprecate._cache[message]) {
	      deprecate._warn('Deprecation warning: ' + message);
	      deprecate._cache[message] = true;
	    }
	  };
	  
	  deprecate._warn = typeof console !== 'undefined' && (console.warn || console.log) || function() {};
	  deprecate._cache = {};
	  
	  /* jshint maxstatements: 14, maxcomplexity: 7 */
	  
	  // Trigger Method
	  // --------------
	  
	  
	  Marionette._triggerMethod = (function() {
	    // split the event name on the ":"
	    var splitter = /(^|:)(\w)/gi;
	  
	    // take the event section ("section1:section2:section3")
	    // and turn it in to uppercase name
	    function getEventName(match, prefix, eventName) {
	      return eventName.toUpperCase();
	    }
	  
	    return function(context, event, args) {
	      var noEventArg = arguments.length < 3;
	      if (noEventArg) {
	        args = event;
	        event = args[0];
	      }
	  
	      // get the method name from the event name
	      var methodName = 'on' + event.replace(splitter, getEventName);
	      var method = context[methodName];
	      var result;
	  
	      // call the onMethodName if it exists
	      if (_.isFunction(method)) {
	        // pass all args, except the event name
	        result = method.apply(context, noEventArg ? _.rest(args) : args);
	      }
	  
	      // trigger the event, if a trigger method exists
	      if (_.isFunction(context.trigger)) {
	        if (noEventArg + args.length > 1) {
	          context.trigger.apply(context, noEventArg ? args : [event].concat(_.rest(args, 0)));
	        } else {
	          context.trigger(event);
	        }
	      }
	  
	      return result;
	    };
	  })();
	  
	  // Trigger an event and/or a corresponding method name. Examples:
	  //
	  // `this.triggerMethod("foo")` will trigger the "foo" event and
	  // call the "onFoo" method.
	  //
	  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
	  // call the "onFooBar" method.
	  Marionette.triggerMethod = function(event) {
	    return Marionette._triggerMethod(this, arguments);
	  };
	  
	  // triggerMethodOn invokes triggerMethod on a specific context
	  //
	  // e.g. `Marionette.triggerMethodOn(view, 'show')`
	  // will trigger a "show" event or invoke onShow the view.
	  Marionette.triggerMethodOn = function(context) {
	    var fnc = _.isFunction(context.triggerMethod) ?
	                  context.triggerMethod :
	                  Marionette.triggerMethod;
	  
	    return fnc.apply(context, _.rest(arguments));
	  };
	  
	  // DOM Refresh
	  // -----------
	  
	  // Monitor a view's state, and after it has been rendered and shown
	  // in the DOM, trigger a "dom:refresh" event every time it is
	  // re-rendered.
	  
	  Marionette.MonitorDOMRefresh = function(view) {
	  
	    // track when the view has been shown in the DOM,
	    // using a Marionette.Region (or by other means of triggering "show")
	    function handleShow() {
	      view._isShown = true;
	      triggerDOMRefresh();
	    }
	  
	    // track when the view has been rendered
	    function handleRender() {
	      view._isRendered = true;
	      triggerDOMRefresh();
	    }
	  
	    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
	    function triggerDOMRefresh() {
	      if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
	        if (_.isFunction(view.triggerMethod)) {
	          view.triggerMethod('dom:refresh');
	        }
	      }
	    }
	  
	    view.on({
	      show: handleShow,
	      render: handleRender
	    });
	  };
	  
	  /* jshint maxparams: 5 */
	  
	  // Bind Entity Events & Unbind Entity Events
	  // -----------------------------------------
	  //
	  // These methods are used to bind/unbind a backbone "entity" (collection/model)
	  // to methods on a target object.
	  //
	  // The first parameter, `target`, must have a `listenTo` method from the
	  // EventBinder object.
	  //
	  // The second parameter is the entity (Backbone.Model or Backbone.Collection)
	  // to bind the events from.
	  //
	  // The third parameter is a hash of { "event:name": "eventHandler" }
	  // configuration. Multiple handlers can be separated by a space. A
	  // function can be supplied instead of a string handler name.
	  
	  (function(Marionette) {
	    'use strict';
	  
	    // Bind the event to handlers specified as a string of
	    // handler names on the target object
	    function bindFromStrings(target, entity, evt, methods) {
	      var methodNames = methods.split(/\s+/);
	  
	      _.each(methodNames, function(methodName) {
	  
	        var method = target[methodName];
	        if (!method) {
	          throw new Marionette.Error('Method "' + methodName +
	            '" was configured as an event handler, but does not exist.');
	        }
	  
	        target.listenTo(entity, evt, method);
	      });
	    }
	  
	    // Bind the event to a supplied callback function
	    function bindToFunction(target, entity, evt, method) {
	      target.listenTo(entity, evt, method);
	    }
	  
	    // Bind the event to handlers specified as a string of
	    // handler names on the target object
	    function unbindFromStrings(target, entity, evt, methods) {
	      var methodNames = methods.split(/\s+/);
	  
	      _.each(methodNames, function(methodName) {
	        var method = target[methodName];
	        target.stopListening(entity, evt, method);
	      });
	    }
	  
	    // Bind the event to a supplied callback function
	    function unbindToFunction(target, entity, evt, method) {
	      target.stopListening(entity, evt, method);
	    }
	  
	  
	    // generic looping function
	    function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
	      if (!entity || !bindings) { return; }
	  
	      // type-check bindings
	      if (!_.isFunction(bindings) && !_.isObject(bindings)) {
	        throw new Marionette.Error({
	          message: 'Bindings must be an object or function.',
	          url: 'marionette.functions.html#marionettebindentityevents'
	        });
	      }
	  
	      // allow the bindings to be a function
	      if (_.isFunction(bindings)) {
	        bindings = bindings.call(target);
	      }
	  
	      // iterate the bindings and bind them
	      _.each(bindings, function(methods, evt) {
	  
	        // allow for a function as the handler,
	        // or a list of event names as a string
	        if (_.isFunction(methods)) {
	          functionCallback(target, entity, evt, methods);
	        } else {
	          stringCallback(target, entity, evt, methods);
	        }
	  
	      });
	    }
	  
	    // Export Public API
	    Marionette.bindEntityEvents = function(target, entity, bindings) {
	      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
	    };
	  
	    Marionette.unbindEntityEvents = function(target, entity, bindings) {
	      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
	    };
	  
	    // Proxy `bindEntityEvents`
	    Marionette.proxyBindEntityEvents = function(entity, bindings) {
	      return Marionette.bindEntityEvents(this, entity, bindings);
	    };
	  
	    // Proxy `unbindEntityEvents`
	    Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
	      return Marionette.unbindEntityEvents(this, entity, bindings);
	    };
	  })(Marionette);
	  
	
	  // Error
	  // -----
	  
	  var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'];
	  
	  Marionette.Error = Marionette.extend.call(Error, {
	    urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',
	  
	    constructor: function(message, options) {
	      if (_.isObject(message)) {
	        options = message;
	        message = options.message;
	      } else if (!options) {
	        options = {};
	      }
	  
	      var error = Error.call(this, message);
	      _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
	  
	      this.captureStackTrace();
	  
	      if (options.url) {
	        this.url = this.urlRoot + options.url;
	      }
	    },
	  
	    captureStackTrace: function() {
	      if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, Marionette.Error);
	      }
	    },
	  
	    toString: function() {
	      return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
	    }
	  });
	  
	  Marionette.Error.extend = Marionette.extend;
	  
	  // Callbacks
	  // ---------
	  
	  // A simple way of managing a collection of callbacks
	  // and executing them at a later point in time, using jQuery's
	  // `Deferred` object.
	  Marionette.Callbacks = function() {
	    this._deferred = Marionette.Deferred();
	    this._callbacks = [];
	  };
	  
	  _.extend(Marionette.Callbacks.prototype, {
	  
	    // Add a callback to be executed. Callbacks added here are
	    // guaranteed to execute, even if they are added after the
	    // `run` method is called.
	    add: function(callback, contextOverride) {
	      var promise = _.result(this._deferred, 'promise');
	  
	      this._callbacks.push({cb: callback, ctx: contextOverride});
	  
	      promise.then(function(args) {
	        if (contextOverride){ args.context = contextOverride; }
	        callback.call(args.context, args.options);
	      });
	    },
	  
	    // Run all registered callbacks with the context specified.
	    // Additional callbacks can be added after this has been run
	    // and they will still be executed.
	    run: function(options, context) {
	      this._deferred.resolve({
	        options: options,
	        context: context
	      });
	    },
	  
	    // Resets the list of callbacks to be run, allowing the same list
	    // to be run multiple times - whenever the `run` method is called.
	    reset: function() {
	      var callbacks = this._callbacks;
	      this._deferred = Marionette.Deferred();
	      this._callbacks = [];
	  
	      _.each(callbacks, function(cb) {
	        this.add(cb.cb, cb.ctx);
	      }, this);
	    }
	  });
	  
	  // Controller
	  // ----------
	  
	  // A multi-purpose object to use as a controller for
	  // modules and routers, and as a mediator for workflow
	  // and coordination of other objects, views, and more.
	  Marionette.Controller = function(options) {
	    this.options = options || {};
	  
	    if (_.isFunction(this.initialize)) {
	      this.initialize(this.options);
	    }
	  };
	  
	  Marionette.Controller.extend = Marionette.extend;
	  
	  // Controller Methods
	  // --------------
	  
	  // Ensure it can trigger events with Backbone.Events
	  _.extend(Marionette.Controller.prototype, Backbone.Events, {
	    destroy: function() {
	      Marionette._triggerMethod(this, 'before:destroy', arguments);
	      Marionette._triggerMethod(this, 'destroy', arguments);
	  
	      this.stopListening();
	      this.off();
	      return this;
	    },
	  
	    // import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption
	  
	  });
	  
	  // Object
	  // ------
	  
	  // A Base Class that other Classes should descend from.
	  // Object borrows many conventions and utilities from Backbone.
	  Marionette.Object = function(options) {
	    this.options = _.extend({}, _.result(this, 'options'), options);
	  
	    this.initialize.apply(this, arguments);
	  };
	  
	  Marionette.Object.extend = Marionette.extend;
	  
	  // Object Methods
	  // --------------
	  
	  // Ensure it can trigger events with Backbone.Events
	  _.extend(Marionette.Object.prototype, Backbone.Events, {
	  
	    //this is a noop method intended to be overridden by classes that extend from this base
	    initialize: function() {},
	  
	    destroy: function() {
	      this.triggerMethod('before:destroy');
	      this.triggerMethod('destroy');
	      this.stopListening();
	    },
	  
	    // Import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption,
	  
	    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
	    bindEntityEvents: Marionette.proxyBindEntityEvents,
	  
	    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
	    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
	  });
	  
	  /* jshint maxcomplexity: 16, maxstatements: 45, maxlen: 120 */
	  
	  // Region
	  // ------
	  
	  // Manage the visual regions of your composite application. See
	  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/
	  
	  Marionette.Region = Marionette.Object.extend({
	    constructor: function (options) {
	  
	      // set options temporarily so that we can get `el`.
	      // options will be overriden by Object.constructor
	      this.options = options || {};
	      this.el = this.getOption('el');
	  
	      // Handle when this.el is passed in as a $ wrapped element.
	      this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
	  
	      if (!this.el) {
	        throw new Marionette.Error({
	          name: 'NoElError',
	          message: 'An "el" must be specified for a region.'
	        });
	      }
	  
	      this.$el = this.getEl(this.el);
	      Marionette.Object.call(this, options);
	    },
	  
	    // Displays a backbone view instance inside of the region.
	    // Handles calling the `render` method for you. Reads content
	    // directly from the `el` attribute. Also calls an optional
	    // `onShow` and `onDestroy` method on your view, just after showing
	    // or just before destroying the view, respectively.
	    // The `preventDestroy` option can be used to prevent a view from
	    // the old view being destroyed on show.
	    // The `forceShow` option can be used to force a view to be
	    // re-rendered if it's already shown in the region.
	    show: function(view, options){
	      if (!this._ensureElement()) {
	        return;
	      }
	  
	      this._ensureViewIsIntact(view);
	  
	      var showOptions     = options || {};
	      var isDifferentView = view !== this.currentView;
	      var preventDestroy  = !!showOptions.preventDestroy;
	      var forceShow       = !!showOptions.forceShow;
	  
	      // We are only changing the view if there is a current view to change to begin with
	      var isChangingView = !!this.currentView;
	  
	      // Only destroy the current view if we don't want to `preventDestroy` and if
	      // the view given in the first argument is different than `currentView`
	      var _shouldDestroyView = isDifferentView && !preventDestroy;
	  
	      // Only show the view given in the first argument if it is different than
	      // the current view or if we want to re-show the view. Note that if
	      // `_shouldDestroyView` is true, then `_shouldShowView` is also necessarily true.
	      var _shouldShowView = isDifferentView || forceShow;
	  
	      if (isChangingView) {
	        this.triggerMethod('before:swapOut', this.currentView, this, options);
	      }
	  
	      if (this.currentView) {
	        delete this.currentView._parent;
	      }
	  
	      if (_shouldDestroyView) {
	        this.empty();
	  
	      // A `destroy` event is attached to the clean up manually removed views.
	      // We need to detach this event when a new view is going to be shown as it
	      // is no longer relevant.
	      } else if (isChangingView && _shouldShowView) {
	        this.currentView.off('destroy', this.empty, this);
	      }
	  
	      if (_shouldShowView) {
	  
	        // We need to listen for if a view is destroyed
	        // in a way other than through the region.
	        // If this happens we need to remove the reference
	        // to the currentView since once a view has been destroyed
	        // we can not reuse it.
	        view.once('destroy', this.empty, this);
	        view.render();
	  
	        view._parent = this;
	  
	        if (isChangingView) {
	          this.triggerMethod('before:swap', view, this, options);
	        }
	  
	        this.triggerMethod('before:show', view, this, options);
	        Marionette.triggerMethodOn(view, 'before:show', view, this, options);
	  
	        if (isChangingView) {
	          this.triggerMethod('swapOut', this.currentView, this, options);
	        }
	  
	        // An array of views that we're about to display
	        var attachedRegion = Marionette.isNodeAttached(this.el);
	  
	        // The views that we're about to attach to the document
	        // It's important that we prevent _getNestedViews from being executed unnecessarily
	        // as it's a potentially-slow method
	        var displayedViews = [];
	  
	        var triggerBeforeAttach = showOptions.triggerBeforeAttach || this.triggerBeforeAttach;
	        var triggerAttach = showOptions.triggerAttach || this.triggerAttach;
	  
	        if (attachedRegion && triggerBeforeAttach) {
	          displayedViews = this._displayedViews(view);
	          this._triggerAttach(displayedViews, 'before:');
	        }
	  
	        this.attachHtml(view);
	        this.currentView = view;
	  
	        if (attachedRegion && triggerAttach) {
	          displayedViews = this._displayedViews(view);
	          this._triggerAttach(displayedViews);
	        }
	  
	        if (isChangingView) {
	          this.triggerMethod('swap', view, this, options);
	        }
	  
	        this.triggerMethod('show', view, this, options);
	        Marionette.triggerMethodOn(view, 'show', view, this, options);
	  
	        return this;
	      }
	  
	      return this;
	    },
	  
	    triggerBeforeAttach: true,
	    triggerAttach: true,
	  
	    _triggerAttach: function(views, prefix) {
	      var eventName = (prefix || '') + 'attach';
	      _.each(views, function(view) {
	        Marionette.triggerMethodOn(view, eventName, view, this);
	      }, this);
	    },
	  
	    _displayedViews: function(view) {
	      return _.union([view], _.result(view, '_getNestedViews') || []);
	    },
	  
	    _ensureElement: function(){
	      if (!_.isObject(this.el)) {
	        this.$el = this.getEl(this.el);
	        this.el = this.$el[0];
	      }
	  
	      if (!this.$el || this.$el.length === 0) {
	        if (this.getOption('allowMissingEl')) {
	          return false;
	        } else {
	          throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
	        }
	      }
	      return true;
	    },
	  
	    _ensureViewIsIntact: function(view) {
	      if (!view) {
	        throw new Marionette.Error({
	          name: 'ViewNotValid',
	          message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
	        });
	      }
	  
	      if (view.isDestroyed) {
	        throw new Marionette.Error({
	          name: 'ViewDestroyedError',
	          message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
	        });
	      }
	    },
	  
	    // Override this method to change how the region finds the
	    // DOM element that it manages. Return a jQuery selector object.
	    getEl: function(el) {
	      return Backbone.$(el);
	    },
	  
	    // Override this method to change how the new view is
	    // appended to the `$el` that the region is managing
	    attachHtml: function(view) {
	      // empty the node and append new view
	      // We can not use `.innerHTML` due to the fact that IE
	      // will not let us clear the html of tables and selects.
	      // We also do not want to use the more declarative `empty` method
	      // that jquery exposes since `.empty` loops over all of the children DOM
	      // nodes and unsets the listeners on each node. While this seems like
	      // a desirable thing, it comes at quite a high perf cost. For that reason
	      // we are simply clearing the html contents of the node.
	      this.$el.html('');
	      this.el.appendChild(view.el);
	    },
	  
	    // Destroy the current view, if there is one. If there is no
	    // current view, it does nothing and returns immediately.
	    empty: function() {
	      var view = this.currentView;
	  
	      // If there is no view in the region
	      // we should not remove anything
	      if (!view) { return; }
	  
	      view.off('destroy', this.empty, this);
	      this.triggerMethod('before:empty', view);
	      this._destroyView();
	      this.triggerMethod('empty', view);
	  
	      // Remove region pointer to the currentView
	      delete this.currentView;
	      return this;
	    },
	  
	    // call 'destroy' or 'remove', depending on which is found
	    // on the view (if showing a raw Backbone view or a Marionette View)
	    _destroyView: function() {
	      var view = this.currentView;
	  
	      if (view.destroy && !view.isDestroyed) {
	        view.destroy();
	      } else if (view.remove) {
	        view.remove();
	  
	        // appending isDestroyed to raw Backbone View allows regions
	        // to throw a ViewDestroyedError for this view
	        view.isDestroyed = true;
	      }
	    },
	  
	    // Attach an existing view to the region. This
	    // will not call `render` or `onShow` for the new view,
	    // and will not replace the current HTML for the `el`
	    // of the region.
	    attachView: function(view) {
	      this.currentView = view;
	      return this;
	    },
	  
	    // Checks whether a view is currently present within
	    // the region. Returns `true` if there is and `false` if
	    // no view is present.
	    hasView: function() {
	      return !!this.currentView;
	    },
	  
	    // Reset the region by destroying any existing view and
	    // clearing out the cached `$el`. The next time a view
	    // is shown via this region, the region will re-query the
	    // DOM for the region's `el`.
	    reset: function() {
	      this.empty();
	  
	      if (this.$el) {
	        this.el = this.$el.selector;
	      }
	  
	      delete this.$el;
	      return this;
	    }
	  
	  },
	  
	  // Static Methods
	  {
	  
	    // Build an instance of a region by passing in a configuration object
	    // and a default region class to use if none is specified in the config.
	    //
	    // The config object should either be a string as a jQuery DOM selector,
	    // a Region class directly, or an object literal that specifies a selector,
	    // a custom regionClass, and any options to be supplied to the region:
	    //
	    // ```js
	    // {
	    //   selector: "#foo",
	    //   regionClass: MyCustomRegion,
	    //   allowMissingEl: false
	    // }
	    // ```
	    //
	    buildRegion: function(regionConfig, DefaultRegionClass) {
	      if (_.isString(regionConfig)) {
	        return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
	      }
	  
	      if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
	        return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
	      }
	  
	      if (_.isFunction(regionConfig)) {
	        return this._buildRegionFromRegionClass(regionConfig);
	      }
	  
	      throw new Marionette.Error({
	        message: 'Improper region configuration type.',
	        url: 'marionette.region.html#region-configuration-types'
	      });
	    },
	  
	    // Build the region from a string selector like '#foo-region'
	    _buildRegionFromSelector: function(selector, DefaultRegionClass) {
	      return new DefaultRegionClass({ el: selector });
	    },
	  
	    // Build the region from a configuration object
	    // ```js
	    // { selector: '#foo', regionClass: FooRegion, allowMissingEl: false }
	    // ```
	    _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
	      var RegionClass = regionConfig.regionClass || DefaultRegionClass;
	      var options = _.omit(regionConfig, 'selector', 'regionClass');
	  
	      if (regionConfig.selector && !options.el) {
	        options.el = regionConfig.selector;
	      }
	  
	      var region = new RegionClass(options);
	  
	      // override the `getEl` function if we have a parentEl
	      // this must be overridden to ensure the selector is found
	      // on the first use of the region. if we try to assign the
	      // region's `el` to `parentEl.find(selector)` in the object
	      // literal to build the region, the element will not be
	      // guaranteed to be in the DOM already, and will cause problems
	      if (regionConfig.parentEl) {
	        region.getEl = function(el) {
	          if (_.isObject(el)) {
	            return Backbone.$(el);
	          }
	          var parentEl = regionConfig.parentEl;
	          if (_.isFunction(parentEl)) {
	            parentEl = parentEl();
	          }
	          return parentEl.find(el);
	        };
	      }
	  
	      return region;
	    },
	  
	    // Build the region directly from a given `RegionClass`
	    _buildRegionFromRegionClass: function(RegionClass) {
	      return new RegionClass();
	    }
	  });
	  
	  // Region Manager
	  // --------------
	  
	  // Manage one or more related `Marionette.Region` objects.
	  Marionette.RegionManager = Marionette.Controller.extend({
	    constructor: function(options) {
	      this._regions = {};
	  
	      Marionette.Controller.call(this, options);
	  
	      this.addRegions(this.getOption('regions'));
	    },
	  
	    // Add multiple regions using an object literal or a
	    // function that returns an object literal, where
	    // each key becomes the region name, and each value is
	    // the region definition.
	    addRegions: function(regionDefinitions, defaults) {
	      if (_.isFunction(regionDefinitions)) {
	        regionDefinitions = regionDefinitions.apply(this, arguments);
	      }
	  
	      var regions = {};
	  
	      _.each(regionDefinitions, function(definition, name) {
	        if (_.isString(definition)) {
	          definition = {selector: definition};
	        }
	  
	        if (definition.selector) {
	          definition = _.defaults({}, definition, defaults);
	        }
	  
	        var region = this.addRegion(name, definition);
	        regions[name] = region;
	      }, this);
	  
	      return regions;
	    },
	  
	    // Add an individual region to the region manager,
	    // and return the region instance
	    addRegion: function(name, definition) {
	      var region;
	  
	      if (definition instanceof Marionette.Region) {
	        region = definition;
	      } else {
	        region = Marionette.Region.buildRegion(definition, Marionette.Region);
	      }
	  
	      this.triggerMethod('before:add:region', name, region);
	  
	      region._parent = this;
	      this._store(name, region);
	  
	      this.triggerMethod('add:region', name, region);
	      return region;
	    },
	  
	    // Get a region by name
	    get: function(name) {
	      return this._regions[name];
	    },
	  
	    // Gets all the regions contained within
	    // the `regionManager` instance.
	    getRegions: function(){
	      return _.clone(this._regions);
	    },
	  
	    // Remove a region by name
	    removeRegion: function(name) {
	      var region = this._regions[name];
	      this._remove(name, region);
	  
	      return region;
	    },
	  
	    // Empty all regions in the region manager, and
	    // remove them
	    removeRegions: function() {
	      var regions = this.getRegions();
	      _.each(this._regions, function(region, name) {
	        this._remove(name, region);
	      }, this);
	  
	      return regions;
	    },
	  
	    // Empty all regions in the region manager, but
	    // leave them attached
	    emptyRegions: function() {
	      var regions = this.getRegions();
	      _.invoke(regions, 'empty');
	      return regions;
	    },
	  
	    // Destroy all regions and shut down the region
	    // manager entirely
	    destroy: function() {
	      this.removeRegions();
	      return Marionette.Controller.prototype.destroy.apply(this, arguments);
	    },
	  
	    // internal method to store regions
	    _store: function(name, region) {
	      this._regions[name] = region;
	      this._setLength();
	    },
	  
	    // internal method to remove a region
	    _remove: function(name, region) {
	      this.triggerMethod('before:remove:region', name, region);
	      region.empty();
	      region.stopListening();
	  
	      delete region._parent;
	      delete this._regions[name];
	      this._setLength();
	      this.triggerMethod('remove:region', name, region);
	    },
	  
	    // set the number of regions current held
	    _setLength: function() {
	      this.length = _.size(this._regions);
	    }
	  });
	  
	  Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');
	  
	
	  // Template Cache
	  // --------------
	  
	  // Manage templates stored in `<script>` blocks,
	  // caching them for faster access.
	  Marionette.TemplateCache = function(templateId) {
	    this.templateId = templateId;
	  };
	  
	  // TemplateCache object-level methods. Manage the template
	  // caches from these method calls instead of creating
	  // your own TemplateCache instances
	  _.extend(Marionette.TemplateCache, {
	    templateCaches: {},
	  
	    // Get the specified template by id. Either
	    // retrieves the cached version, or loads it
	    // from the DOM.
	    get: function(templateId) {
	      var cachedTemplate = this.templateCaches[templateId];
	  
	      if (!cachedTemplate) {
	        cachedTemplate = new Marionette.TemplateCache(templateId);
	        this.templateCaches[templateId] = cachedTemplate;
	      }
	  
	      return cachedTemplate.load();
	    },
	  
	    // Clear templates from the cache. If no arguments
	    // are specified, clears all templates:
	    // `clear()`
	    //
	    // If arguments are specified, clears each of the
	    // specified templates from the cache:
	    // `clear("#t1", "#t2", "...")`
	    clear: function() {
	      var i;
	      var args = _.toArray(arguments);
	      var length = args.length;
	  
	      if (length > 0) {
	        for (i = 0; i < length; i++) {
	          delete this.templateCaches[args[i]];
	        }
	      } else {
	        this.templateCaches = {};
	      }
	    }
	  });
	  
	  // TemplateCache instance methods, allowing each
	  // template cache object to manage its own state
	  // and know whether or not it has been loaded
	  _.extend(Marionette.TemplateCache.prototype, {
	  
	    // Internal method to load the template
	    load: function() {
	      // Guard clause to prevent loading this template more than once
	      if (this.compiledTemplate) {
	        return this.compiledTemplate;
	      }
	  
	      // Load the template and compile it
	      var template = this.loadTemplate(this.templateId);
	      this.compiledTemplate = this.compileTemplate(template);
	  
	      return this.compiledTemplate;
	    },
	  
	    // Load a template from the DOM, by default. Override
	    // this method to provide your own template retrieval
	    // For asynchronous loading with AMD/RequireJS, consider
	    // using a template-loader plugin as described here:
	    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
	    loadTemplate: function(templateId) {
	      var template = Backbone.$(templateId).html();
	  
	      if (!template || template.length === 0) {
	        throw new Marionette.Error({
	          name: 'NoTemplateError',
	          message: 'Could not find template: "' + templateId + '"'
	        });
	      }
	  
	      return template;
	    },
	  
	    // Pre-compile the template before caching it. Override
	    // this method if you do not need to pre-compile a template
	    // (JST / RequireJS for example) or if you want to change
	    // the template engine used (Handebars, etc).
	    compileTemplate: function(rawTemplate) {
	      return _.template(rawTemplate);
	    }
	  });
	  
	  // Renderer
	  // --------
	  
	  // Render a template with data by passing in the template
	  // selector and the data to render.
	  Marionette.Renderer = {
	  
	    // Render a template with data. The `template` parameter is
	    // passed to the `TemplateCache` object to retrieve the
	    // template function. Override this method to provide your own
	    // custom rendering and template handling for all of Marionette.
	    render: function(template, data) {
	      if (!template) {
	        throw new Marionette.Error({
	          name: 'TemplateNotFoundError',
	          message: 'Cannot render the template since its false, null or undefined.'
	        });
	      }
	  
	      var templateFunc;
	      if (typeof template === 'function') {
	        templateFunc = template;
	      } else {
	        templateFunc = Marionette.TemplateCache.get(template);
	      }
	  
	      return templateFunc(data);
	    }
	  };
	  
	
	  /* jshint maxlen: 114, nonew: false */
	  // View
	  // ----
	  
	  // The core view class that other Marionette views extend from.
	  Marionette.View = Backbone.View.extend({
	  
	    constructor: function(options) {
	      _.bindAll(this, 'render');
	  
	      options = _.isFunction(options) ? options.call(this) : options;
	  
	      // this exposes view options to the view initializer
	      // this is a backfill since backbone removed the assignment
	      // of this.options
	      // at some point however this may be removed
	      this.options = _.extend({}, _.result(this, 'options'), options);
	  
	      this._behaviors = Marionette.Behaviors(this);
	  
	      Backbone.View.apply(this, arguments);
	  
	      Marionette.MonitorDOMRefresh(this);
	      this.on('show', this.onShowCalled);
	    },
	  
	    // Get the template for this view
	    // instance. You can set a `template` attribute in the view
	    // definition or pass a `template: "whatever"` parameter in
	    // to the constructor options.
	    getTemplate: function() {
	      return this.getOption('template');
	    },
	  
	    // Serialize a model by returning its attributes. Clones
	    // the attributes to allow modification.
	    serializeModel: function(model){
	      return model.toJSON.apply(model, _.rest(arguments));
	    },
	  
	    // Mix in template helper methods. Looks for a
	    // `templateHelpers` attribute, which can either be an
	    // object literal, or a function that returns an object
	    // literal. All methods and attributes from this object
	    // are copies to the object passed in.
	    mixinTemplateHelpers: function(target) {
	      target = target || {};
	      var templateHelpers = this.getOption('templateHelpers');
	      if (_.isFunction(templateHelpers)) {
	        templateHelpers = templateHelpers.call(this);
	      }
	      return _.extend(target, templateHelpers);
	    },
	  
	    // normalize the keys of passed hash with the views `ui` selectors.
	    // `{"@ui.foo": "bar"}`
	    normalizeUIKeys: function(hash) {
	      var uiBindings = _.result(this, '_uiBindings');
	      return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
	    },
	  
	    // normalize the values of passed hash with the views `ui` selectors.
	    // `{foo: "@ui.bar"}`
	    normalizeUIValues: function(hash) {
	      var ui = _.result(this, 'ui');
	      var uiBindings = _.result(this, '_uiBindings');
	      return Marionette.normalizeUIValues(hash, uiBindings || ui);
	    },
	  
	    // Configure `triggers` to forward DOM events to view
	    // events. `triggers: {"click .foo": "do:foo"}`
	    configureTriggers: function() {
	      if (!this.triggers) { return; }
	  
	      // Allow `triggers` to be configured as a function
	      var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));
	  
	      // Configure the triggers, prevent default
	      // action and stop propagation of DOM events
	      return _.reduce(triggers, function(events, value, key) {
	        events[key] = this._buildViewTrigger(value);
	        return events;
	      }, {}, this);
	    },
	  
	    // Overriding Backbone.View's delegateEvents to handle
	    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
	    delegateEvents: function(events) {
	      this._delegateDOMEvents(events);
	      this.bindEntityEvents(this.model, this.getOption('modelEvents'));
	      this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));
	  
	      _.each(this._behaviors, function(behavior) {
	        behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
	        behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
	      }, this);
	  
	      return this;
	    },
	  
	    // internal method to delegate DOM events and triggers
	    _delegateDOMEvents: function(eventsArg) {
	      var events = eventsArg || this.events;
	      if (_.isFunction(events)) { events = events.call(this); }
	  
	      // normalize ui keys
	      events = this.normalizeUIKeys(events);
	      if(_.isUndefined(eventsArg)) {this.events = events;}
	  
	      var combinedEvents = {};
	  
	      // look up if this view has behavior events
	      var behaviorEvents = _.result(this, 'behaviorEvents') || {};
	      var triggers = this.configureTriggers();
	      var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};
	  
	      // behavior events will be overriden by view events and or triggers
	      _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
	  
	      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
	    },
	  
	    // Overriding Backbone.View's undelegateEvents to handle unbinding
	    // the `triggers`, `modelEvents`, and `collectionEvents` config
	    undelegateEvents: function() {
	      Backbone.View.prototype.undelegateEvents.apply(this, arguments);
	  
	      this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
	      this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));
	  
	      _.each(this._behaviors, function(behavior) {
	        behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
	        behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
	      }, this);
	  
	      return this;
	    },
	  
	    // Internal method, handles the `show` event.
	    onShowCalled: function() {},
	  
	    // Internal helper method to verify whether the view hasn't been destroyed
	    _ensureViewIsIntact: function() {
	      if (this.isDestroyed) {
	        throw new Marionette.Error({
	          name: 'ViewDestroyedError',
	          message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
	        });
	      }
	    },
	  
	    // Default `destroy` implementation, for removing a view from the
	    // DOM and unbinding it. Regions will call this method
	    // for you. You can specify an `onDestroy` method in your view to
	    // add custom code that is called after the view is destroyed.
	    destroy: function() {
	      if (this.isDestroyed) { return; }
	  
	      var args = _.toArray(arguments);
	  
	      this.triggerMethod.apply(this, ['before:destroy'].concat(args));
	  
	      // mark as destroyed before doing the actual destroy, to
	      // prevent infinite loops within "destroy" event handlers
	      // that are trying to destroy other views
	      this.isDestroyed = true;
	      this.triggerMethod.apply(this, ['destroy'].concat(args));
	  
	      // unbind UI elements
	      this.unbindUIElements();
	  
	      // remove the view from the DOM
	      this.remove();
	  
	      // Call destroy on each behavior after
	      // destroying the view.
	      // This unbinds event listeners
	      // that behaviors have registered for.
	      _.invoke(this._behaviors, 'destroy', args);
	  
	      return this;
	    },
	  
	    bindUIElements: function() {
	      this._bindUIElements();
	      _.invoke(this._behaviors, this._bindUIElements);
	    },
	  
	    // This method binds the elements specified in the "ui" hash inside the view's code with
	    // the associated jQuery selectors.
	    _bindUIElements: function() {
	      if (!this.ui) { return; }
	  
	      // store the ui hash in _uiBindings so they can be reset later
	      // and so re-rendering the view will be able to find the bindings
	      if (!this._uiBindings) {
	        this._uiBindings = this.ui;
	      }
	  
	      // get the bindings result, as a function or otherwise
	      var bindings = _.result(this, '_uiBindings');
	  
	      // empty the ui so we don't have anything to start with
	      this.ui = {};
	  
	      // bind each of the selectors
	      _.each(_.keys(bindings), function(key) {
	        var selector = bindings[key];
	        this.ui[key] = this.$(selector);
	      }, this);
	    },
	  
	    // This method unbinds the elements specified in the "ui" hash
	    unbindUIElements: function() {
	      this._unbindUIElements();
	      _.invoke(this._behaviors, this._unbindUIElements);
	    },
	  
	    _unbindUIElements: function() {
	      if (!this.ui || !this._uiBindings) { return; }
	  
	      // delete all of the existing ui bindings
	      _.each(this.ui, function($el, name) {
	        delete this.ui[name];
	      }, this);
	  
	      // reset the ui element to the original bindings configuration
	      this.ui = this._uiBindings;
	      delete this._uiBindings;
	    },
	  
	    // Internal method to create an event handler for a given `triggerDef` like
	    // 'click:foo'
	    _buildViewTrigger: function(triggerDef) {
	      var hasOptions = _.isObject(triggerDef);
	  
	      var options = _.defaults({}, (hasOptions ? triggerDef : {}), {
	        preventDefault: true,
	        stopPropagation: true
	      });
	  
	      var eventName = hasOptions ? options.event : triggerDef;
	  
	      return function(e) {
	        if (e) {
	          if (e.preventDefault && options.preventDefault) {
	            e.preventDefault();
	          }
	  
	          if (e.stopPropagation && options.stopPropagation) {
	            e.stopPropagation();
	          }
	        }
	  
	        var args = {
	          view: this,
	          model: this.model,
	          collection: this.collection
	        };
	  
	        this.triggerMethod(eventName, args);
	      };
	    },
	  
	    setElement: function() {
	      var ret = Backbone.View.prototype.setElement.apply(this, arguments);
	  
	      // proxy behavior $el to the view's $el.
	      // This is needed because a view's $el proxy
	      // is not set until after setElement is called.
	      _.invoke(this._behaviors, 'proxyViewProperties', this);
	  
	      return ret;
	    },
	  
	    // import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: function() {
	      var triggerMethod = Marionette._triggerMethod;
	      var ret = triggerMethod(this, arguments);
	      var behaviors = this._behaviors;
	      // Use good ol' for as this is a very hot function
	      for (var i = 0, length = behaviors && behaviors.length; i < length; i++) {
	        triggerMethod(behaviors[i], arguments);
	      }
	  
	      return ret;
	    },
	  
	    // This method returns any views that are immediate
	    // children of this view
	    _getImmediateChildren: function() {
	      return [];
	    },
	  
	    // Returns an array of every nested view within this view
	    _getNestedViews: function() {
	      var children = this._getImmediateChildren();
	  
	      if (!children.length) { return children; }
	  
	      return _.reduce(children, function(memo, view) {
	        if (!view._getNestedViews) { return memo; }
	        return memo.concat(view._getNestedViews());
	      }, children);
	    },
	  
	    // Imports the "normalizeMethods" to transform hashes of
	    // events=>function references/names to a hash of events=>function references
	    normalizeMethods: Marionette.normalizeMethods,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption,
	  
	    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
	    bindEntityEvents: Marionette.proxyBindEntityEvents,
	  
	    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
	    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
	  });
	  
	  // Item View
	  // ---------
	  
	  // A single item view implementation that contains code for rendering
	  // with underscore.js templates, serializing the view's model or collection,
	  // and calling several methods on extended views, such as `onRender`.
	  Marionette.ItemView = Marionette.View.extend({
	  
	    // Setting up the inheritance chain which allows changes to
	    // Marionette.View.prototype.constructor which allows overriding
	    constructor: function() {
	      Marionette.View.apply(this, arguments);
	    },
	  
	    // Serialize the model or collection for the view. If a model is
	    // found, the view's `serializeModel` is called. If a collection is found,
	    // each model in the collection is serialized by calling
	    // the view's `serializeCollection` and put into an `items` array in
	    // the resulting data. If both are found, defaults to the model.
	    // You can override the `serializeData` method in your own view definition,
	    // to provide custom serialization for your view's data.
	    serializeData: function(){
	      if (!this.model && !this.collection) {
	        return {};
	      }
	  
	      var args = [this.model || this.collection];
	      if (arguments.length) {
	        args.push.apply(args, arguments);
	      }
	  
	      if (this.model) {
	        return this.serializeModel.apply(this, args);
	      } else {
	        return {
	          items: this.serializeCollection.apply(this, args)
	        };
	      }
	    },
	  
	    // Serialize a collection by serializing each of its models.
	    serializeCollection: function(collection){
	      return collection.toJSON.apply(collection, _.rest(arguments));
	    },
	  
	    // Render the view, defaulting to underscore.js templates.
	    // You can override this in your view definition to provide
	    // a very specific rendering for your view. In general, though,
	    // you should override the `Marionette.Renderer` object to
	    // change how Marionette renders views.
	    render: function() {
	      this._ensureViewIsIntact();
	  
	      this.triggerMethod('before:render', this);
	  
	      this._renderTemplate();
	      this.bindUIElements();
	  
	      this.triggerMethod('render', this);
	  
	      return this;
	    },
	  
	    // Internal method to render the template with the serialized data
	    // and template helpers via the `Marionette.Renderer` object.
	    // Throws an `UndefinedTemplateError` error if the template is
	    // any falsely value but literal `false`.
	    _renderTemplate: function() {
	      var template = this.getTemplate();
	  
	      // Allow template-less item views
	      if (template === false) {
	        return;
	      }
	  
	      if (!template) {
	        throw new Marionette.Error({
	          name: 'UndefinedTemplateError',
	          message: 'Cannot render the template since it is null or undefined.'
	        });
	      }
	  
	      // Add in entity data and template helpers
	      var data = this.serializeData();
	      data = this.mixinTemplateHelpers(data);
	  
	      // Render and add to el
	      var html = Marionette.Renderer.render(template, data, this);
	      this.attachElContent(html);
	  
	      return this;
	    },
	  
	    // Attaches the content of a given view.
	    // This method can be overridden to optimize rendering,
	    // or to render in a non standard way.
	    //
	    // For example, using `innerHTML` instead of `$el.html`
	    //
	    // ```js
	    // attachElContent: function(html) {
	    //   this.el.innerHTML = html;
	    //   return this;
	    // }
	    // ```
	    attachElContent: function(html) {
	      this.$el.html(html);
	  
	      return this;
	    }
	  });
	  
	  /* jshint maxstatements: 14 */
	  
	  // Collection View
	  // ---------------
	  
	  // A view that iterates over a Backbone.Collection
	  // and renders an individual child view for each model.
	  Marionette.CollectionView = Marionette.View.extend({
	  
	    // used as the prefix for child view events
	    // that are forwarded through the collectionview
	    childViewEventPrefix: 'childview',
	  
	    // constructor
	    // option to pass `{sort: false}` to prevent the `CollectionView` from
	    // maintaining the sorted order of the collection.
	    // This will fallback onto appending childView's to the end.
	    constructor: function(options){
	      var initOptions = options || {};
	      if (_.isUndefined(this.sort)){
	        this.sort = _.isUndefined(initOptions.sort) ? true : initOptions.sort;
	      }
	  
	      this.once('render', this._initialEvents);
	      this._initChildViewStorage();
	  
	      Marionette.View.apply(this, arguments);
	  
	      this.initRenderBuffer();
	    },
	  
	    // Instead of inserting elements one by one into the page,
	    // it's much more performant to insert elements into a document
	    // fragment and then insert that document fragment into the page
	    initRenderBuffer: function() {
	      this.elBuffer = document.createDocumentFragment();
	      this._bufferedChildren = [];
	    },
	  
	    startBuffering: function() {
	      this.initRenderBuffer();
	      this.isBuffering = true;
	    },
	  
	    endBuffering: function() {
	      this.isBuffering = false;
	      this._triggerBeforeShowBufferedChildren();
	      this.attachBuffer(this, this.elBuffer);
	      this._triggerShowBufferedChildren();
	      this.initRenderBuffer();
	    },
	  
	    _triggerBeforeShowBufferedChildren: function() {
	      if (this._isShown) {
	        _.each(this._bufferedChildren, _.partial(this._triggerMethodOnChild, 'before:show'));
	      }
	    },
	  
	    _triggerShowBufferedChildren: function() {
	      if (this._isShown) {
	        _.each(this._bufferedChildren, _.partial(this._triggerMethodOnChild, 'show'));
	  
	        this._bufferedChildren = [];
	      }
	    },
	  
	    // Internal method for _.each loops to call `Marionette.triggerMethodOn` on
	    // a child view
	    _triggerMethodOnChild: function(event, childView) {
	      Marionette.triggerMethodOn(childView, event);
	    },
	  
	    // Configured the initial events that the collection view
	    // binds to.
	    _initialEvents: function() {
	      if (this.collection) {
	        this.listenTo(this.collection, 'add', this._onCollectionAdd);
	        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
	        this.listenTo(this.collection, 'reset', this.render);
	  
	        if (this.sort) {
	          this.listenTo(this.collection, 'sort', this._sortViews);
	        }
	      }
	    },
	  
	    // Handle a child added to the collection
	    _onCollectionAdd: function(child) {
	      this.destroyEmptyView();
	      var ChildView = this.getChildView(child);
	      var index = this.collection.indexOf(child);
	      this.addChild(child, ChildView, index);
	    },
	  
	    // get the child view by model it holds, and remove it
	    _onCollectionRemove: function(model) {
	      var view = this.children.findByModel(model);
	      this.removeChildView(view);
	      this.checkEmpty();
	    },
	  
	    // Override from `Marionette.View` to trigger show on child views
	    onShowCalled: function() {
	      this.children.each(_.partial(this._triggerMethodOnChild, 'show'));
	    },
	  
	    // Render children views. Override this method to
	    // provide your own implementation of a render function for
	    // the collection view.
	    render: function() {
	      this._ensureViewIsIntact();
	      this.triggerMethod('before:render', this);
	      this._renderChildren();
	      this.triggerMethod('render', this);
	      return this;
	    },
	  
	    // Render view after sorting. Override this method to
	    // change how the view renders after a `sort` on the collection.
	    // An example of this would be to only `renderChildren` in a `CompositeView`
	    // rather than the full view.
	    resortView: function() {
	      this.render();
	    },
	  
	    // Internal method. This checks for any changes in the order of the collection.
	    // If the index of any view doesn't match, it will render.
	    _sortViews: function() {
	      // check for any changes in sort order of views
	      var orderChanged = this.collection.find(function(item, index){
	        var view = this.children.findByModel(item);
	        return !view || view._index !== index;
	      }, this);
	  
	      if (orderChanged) {
	        this.resortView();
	      }
	    },
	  
	    // Internal reference to what index a `emptyView` is.
	    _emptyViewIndex: -1,
	  
	    // Internal method. Separated so that CompositeView can have
	    // more control over events being triggered, around the rendering
	    // process
	    _renderChildren: function() {
	      this.destroyEmptyView();
	      this.destroyChildren();
	  
	      if (this.isEmpty(this.collection)) {
	        this.showEmptyView();
	      } else {
	        this.triggerMethod('before:render:collection', this);
	        this.startBuffering();
	        this.showCollection();
	        this.endBuffering();
	        this.triggerMethod('render:collection', this);
	      }
	    },
	  
	    // Internal method to loop through collection and show each child view.
	    showCollection: function() {
	      var ChildView;
	      this.collection.each(function(child, index) {
	        ChildView = this.getChildView(child);
	        this.addChild(child, ChildView, index);
	      }, this);
	    },
	  
	    // Internal method to show an empty view in place of
	    // a collection of child views, when the collection is empty
	    showEmptyView: function() {
	      var EmptyView = this.getEmptyView();
	  
	      if (EmptyView && !this._showingEmptyView) {
	        this.triggerMethod('before:render:empty');
	  
	        this._showingEmptyView = true;
	        var model = new Backbone.Model();
	        this.addEmptyView(model, EmptyView);
	  
	        this.triggerMethod('render:empty');
	      }
	    },
	  
	    // Internal method to destroy an existing emptyView instance
	    // if one exists. Called when a collection view has been
	    // rendered empty, and then a child is added to the collection.
	    destroyEmptyView: function() {
	      if (this._showingEmptyView) {
	        this.triggerMethod('before:remove:empty');
	  
	        this.destroyChildren();
	        delete this._showingEmptyView;
	  
	        this.triggerMethod('remove:empty');
	      }
	    },
	  
	    // Retrieve the empty view class
	    getEmptyView: function() {
	      return this.getOption('emptyView');
	    },
	  
	    // Render and show the emptyView. Similar to addChild method
	    // but "child:added" events are not fired, and the event from
	    // emptyView are not forwarded
	    addEmptyView: function(child, EmptyView) {
	  
	      // get the emptyViewOptions, falling back to childViewOptions
	      var emptyViewOptions = this.getOption('emptyViewOptions') ||
	                            this.getOption('childViewOptions');
	  
	      if (_.isFunction(emptyViewOptions)){
	        emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
	      }
	  
	      // build the empty view
	      var view = this.buildChildView(child, EmptyView, emptyViewOptions);
	  
	      view._parent = this;
	  
	      // Proxy emptyView events
	      this.proxyChildEvents(view);
	  
	      // trigger the 'before:show' event on `view` if the collection view
	      // has already been shown
	      if (this._isShown) {
	        Marionette.triggerMethodOn(view, 'before:show');
	      }
	  
	      // Store the `emptyView` like a `childView` so we can properly
	      // remove and/or close it later
	      this.children.add(view);
	  
	      // Render it and show it
	      this.renderChildView(view, this._emptyViewIndex);
	  
	      // call the 'show' method if the collection view
	      // has already been shown
	      if (this._isShown) {
	        Marionette.triggerMethodOn(view, 'show');
	      }
	    },
	  
	    // Retrieve the `childView` class, either from `this.options.childView`
	    // or from the `childView` in the object definition. The "options"
	    // takes precedence.
	    // This method receives the model that will be passed to the instance
	    // created from this `childView`. Overriding methods may use the child
	    // to determine what `childView` class to return.
	    getChildView: function(child) {
	      var childView = this.getOption('childView');
	  
	      if (!childView) {
	        throw new Marionette.Error({
	          name: 'NoChildViewError',
	          message: 'A "childView" must be specified'
	        });
	      }
	  
	      return childView;
	    },
	  
	    // Render the child's view and add it to the
	    // HTML for the collection view at a given index.
	    // This will also update the indices of later views in the collection
	    // in order to keep the children in sync with the collection.
	    addChild: function(child, ChildView, index) {
	      var childViewOptions = this.getOption('childViewOptions');
	      if (_.isFunction(childViewOptions)) {
	        childViewOptions = childViewOptions.call(this, child, index);
	      }
	  
	      var view = this.buildChildView(child, ChildView, childViewOptions);
	  
	      // increment indices of views after this one
	      this._updateIndices(view, true, index);
	  
	      this._addChildView(view, index);
	  
	      view._parent = this;
	  
	      return view;
	    },
	  
	    // Internal method. This decrements or increments the indices of views after the
	    // added/removed view to keep in sync with the collection.
	    _updateIndices: function(view, increment, index) {
	      if (!this.sort) {
	        return;
	      }
	  
	      if (increment) {
	        // assign the index to the view
	        view._index = index;
	  
	        // increment the index of views after this one
	        this.children.each(function (laterView) {
	          if (laterView._index >= view._index) {
	            laterView._index++;
	          }
	        });
	      }
	      else {
	        // decrement the index of views after this one
	        this.children.each(function (laterView) {
	          if (laterView._index >= view._index) {
	            laterView._index--;
	          }
	        });
	      }
	    },
	  
	  
	    // Internal Method. Add the view to children and render it at
	    // the given index.
	    _addChildView: function(view, index) {
	      // set up the child view event forwarding
	      this.proxyChildEvents(view);
	  
	      this.triggerMethod('before:add:child', view);
	  
	      // Store the child view itself so we can properly
	      // remove and/or destroy it later
	      this.children.add(view);
	      this.renderChildView(view, index);
	  
	      if (this._isShown && !this.isBuffering) {
	        Marionette.triggerMethodOn(view, 'show');
	      }
	  
	      this.triggerMethod('add:child', view);
	    },
	  
	    // render the child view
	    renderChildView: function(view, index) {
	      view.render();
	      this.attachHtml(this, view, index);
	      return view;
	    },
	  
	    // Build a `childView` for a model in the collection.
	    buildChildView: function(child, ChildViewClass, childViewOptions) {
	      var options = _.extend({model: child}, childViewOptions);
	      return new ChildViewClass(options);
	    },
	  
	    // Remove the child view and destroy it.
	    // This function also updates the indices of
	    // later views in the collection in order to keep
	    // the children in sync with the collection.
	    removeChildView: function(view) {
	  
	      if (view) {
	        this.triggerMethod('before:remove:child', view);
	        // call 'destroy' or 'remove', depending on which is found
	        if (view.destroy) { view.destroy(); }
	        else if (view.remove) { view.remove(); }
	  
	        delete view._parent;
	        this.stopListening(view);
	        this.children.remove(view);
	        this.triggerMethod('remove:child', view);
	  
	        // decrement the index of views after this one
	        this._updateIndices(view, false);
	      }
	  
	      return view;
	    },
	  
	    // check if the collection is empty
	    isEmpty: function() {
	      return !this.collection || this.collection.length === 0;
	    },
	  
	    // If empty, show the empty view
	    checkEmpty: function() {
	      if (this.isEmpty(this.collection)) {
	        this.showEmptyView();
	      }
	    },
	  
	    // You might need to override this if you've overridden attachHtml
	    attachBuffer: function(collectionView, buffer) {
	      collectionView.$el.append(buffer);
	    },
	  
	    // Append the HTML to the collection's `el`.
	    // Override this method to do something other
	    // than `.append`.
	    attachHtml: function(collectionView, childView, index) {
	      if (collectionView.isBuffering) {
	        // buffering happens on reset events and initial renders
	        // in order to reduce the number of inserts into the
	        // document, which are expensive.
	        collectionView.elBuffer.appendChild(childView.el);
	        collectionView._bufferedChildren.push(childView);
	      }
	      else {
	        // If we've already rendered the main collection, append
	        // the new child into the correct order if we need to. Otherwise
	        // append to the end.
	        if (!collectionView._insertBefore(childView, index)){
	          collectionView._insertAfter(childView);
	        }
	      }
	    },
	  
	    // Internal method. Check whether we need to insert the view into
	    // the correct position.
	    _insertBefore: function(childView, index) {
	      var currentView;
	      var findPosition = this.sort && (index < this.children.length - 1);
	      if (findPosition) {
	        // Find the view after this one
	        currentView = this.children.find(function (view) {
	          return view._index === index + 1;
	        });
	      }
	  
	      if (currentView) {
	        currentView.$el.before(childView.el);
	        return true;
	      }
	  
	      return false;
	    },
	  
	    // Internal method. Append a view to the end of the $el
	    _insertAfter: function(childView) {
	      this.$el.append(childView.el);
	    },
	  
	    // Internal method to set up the `children` object for
	    // storing all of the child views
	    _initChildViewStorage: function() {
	      this.children = new Backbone.ChildViewContainer();
	    },
	  
	    // Handle cleanup and other destroying needs for the collection of views
	    destroy: function() {
	      if (this.isDestroyed) { return; }
	  
	      this.triggerMethod('before:destroy:collection');
	      this.destroyChildren();
	      this.triggerMethod('destroy:collection');
	  
	      return Marionette.View.prototype.destroy.apply(this, arguments);
	    },
	  
	    // Destroy the child views that this collection view
	    // is holding on to, if any
	    destroyChildren: function() {
	      var childViews = this.children.map(_.identity);
	      this.children.each(this.removeChildView, this);
	      this.checkEmpty();
	      return childViews;
	    },
	  
	    // Set up the child view event forwarding. Uses a "childview:"
	    // prefix in front of all forwarded events.
	    proxyChildEvents: function(view) {
	      var prefix = this.getOption('childViewEventPrefix');
	  
	      // Forward all child view events through the parent,
	      // prepending "childview:" to the event name
	      this.listenTo(view, 'all', function() {
	        var args = _.toArray(arguments);
	        var rootEvent = args[0];
	        var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));
	  
	        args[0] = prefix + ':' + rootEvent;
	        args.splice(1, 0, view);
	  
	        // call collectionView childEvent if defined
	        if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
	          childEvents[rootEvent].apply(this, args.slice(1));
	        }
	  
	        this.triggerMethod.apply(this, args);
	      }, this);
	    },
	  
	    _getImmediateChildren: function() {
	      return _.values(this.children._views);
	    }
	  });
	  
	  /* jshint maxstatements: 17, maxlen: 117 */
	  
	  // Composite View
	  // --------------
	  
	  // Used for rendering a branch-leaf, hierarchical structure.
	  // Extends directly from CollectionView and also renders an
	  // a child view as `modelView`, for the top leaf
	  Marionette.CompositeView = Marionette.CollectionView.extend({
	  
	    // Setting up the inheritance chain which allows changes to
	    // Marionette.CollectionView.prototype.constructor which allows overriding
	    // option to pass '{sort: false}' to prevent the CompositeView from
	    // maintaining the sorted order of the collection.
	    // This will fallback onto appending childView's to the end.
	    constructor: function() {
	      Marionette.CollectionView.apply(this, arguments);
	    },
	  
	    // Configured the initial events that the composite view
	    // binds to. Override this method to prevent the initial
	    // events, or to add your own initial events.
	    _initialEvents: function() {
	  
	      // Bind only after composite view is rendered to avoid adding child views
	      // to nonexistent childViewContainer
	  
	      if (this.collection) {
	        this.listenTo(this.collection, 'add', this._onCollectionAdd);
	        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
	        this.listenTo(this.collection, 'reset', this._renderChildren);
	  
	        if (this.sort) {
	          this.listenTo(this.collection, 'sort', this._sortViews);
	        }
	      }
	    },
	  
	    // Retrieve the `childView` to be used when rendering each of
	    // the items in the collection. The default is to return
	    // `this.childView` or Marionette.CompositeView if no `childView`
	    // has been defined
	    getChildView: function(child) {
	      var childView = this.getOption('childView') || this.constructor;
	  
	      return childView;
	    },
	  
	    // Serialize the model for the view.
	    // You can override the `serializeData` method in your own view
	    // definition, to provide custom serialization for your view's data.
	    serializeData: function() {
	      var data = {};
	  
	      if (this.model){
	        data = _.partial(this.serializeModel, this.model).apply(this, arguments);
	      }
	  
	      return data;
	    },
	  
	    // Renders the model and the collection.
	    render: function() {
	      this._ensureViewIsIntact();
	      this.isRendered = true;
	      this.resetChildViewContainer();
	  
	      this.triggerMethod('before:render', this);
	  
	      this._renderTemplate();
	      this._renderChildren();
	  
	      this.triggerMethod('render', this);
	      return this;
	    },
	  
	    _renderChildren: function() {
	      if (this.isRendered) {
	        Marionette.CollectionView.prototype._renderChildren.call(this);
	      }
	    },
	  
	    // Render the root template that the children
	    // views are appended to
	    _renderTemplate: function() {
	      var data = {};
	      data = this.serializeData();
	      data = this.mixinTemplateHelpers(data);
	  
	      this.triggerMethod('before:render:template');
	  
	      var template = this.getTemplate();
	      var html = Marionette.Renderer.render(template, data, this);
	      this.attachElContent(html);
	  
	      // the ui bindings is done here and not at the end of render since they
	      // will not be available until after the model is rendered, but should be
	      // available before the collection is rendered.
	      this.bindUIElements();
	      this.triggerMethod('render:template');
	    },
	  
	    // Attaches the content of the root.
	    // This method can be overridden to optimize rendering,
	    // or to render in a non standard way.
	    //
	    // For example, using `innerHTML` instead of `$el.html`
	    //
	    // ```js
	    // attachElContent: function(html) {
	    //   this.el.innerHTML = html;
	    //   return this;
	    // }
	    // ```
	    attachElContent: function(html) {
	      this.$el.html(html);
	  
	      return this;
	    },
	  
	    // You might need to override this if you've overridden attachHtml
	    attachBuffer: function(compositeView, buffer) {
	      var $container = this.getChildViewContainer(compositeView);
	      $container.append(buffer);
	    },
	  
	    // Internal method. Append a view to the end of the $el.
	    // Overidden from CollectionView to ensure view is appended to
	    // childViewContainer
	    _insertAfter: function (childView) {
	      var $container = this.getChildViewContainer(this, childView);
	      $container.append(childView.el);
	    },
	  
	    // Internal method to ensure an `$childViewContainer` exists, for the
	    // `attachHtml` method to use.
	    getChildViewContainer: function(containerView, childView) {
	      if ('$childViewContainer' in containerView) {
	        return containerView.$childViewContainer;
	      }
	  
	      var container;
	      var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
	      if (childViewContainer) {
	  
	        var selector = _.isFunction(childViewContainer) ? childViewContainer.call(containerView) : childViewContainer;
	  
	        if (selector.charAt(0) === '@' && containerView.ui) {
	          container = containerView.ui[selector.substr(4)];
	        } else {
	          container = containerView.$(selector);
	        }
	  
	        if (container.length <= 0) {
	          throw new Marionette.Error({
	            name: 'ChildViewContainerMissingError',
	            message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
	          });
	        }
	  
	      } else {
	        container = containerView.$el;
	      }
	  
	      containerView.$childViewContainer = container;
	      return container;
	    },
	  
	    // Internal method to reset the `$childViewContainer` on render
	    resetChildViewContainer: function() {
	      if (this.$childViewContainer) {
	        delete this.$childViewContainer;
	      }
	    }
	  });
	  
	  // Layout View
	  // -----------
	  
	  // Used for managing application layoutViews, nested layoutViews and
	  // multiple regions within an application or sub-application.
	  //
	  // A specialized view class that renders an area of HTML and then
	  // attaches `Region` instances to the specified `regions`.
	  // Used for composite view management and sub-application areas.
	  Marionette.LayoutView = Marionette.ItemView.extend({
	    regionClass: Marionette.Region,
	  
	    // Ensure the regions are available when the `initialize` method
	    // is called.
	    constructor: function(options) {
	      options = options || {};
	  
	      this._firstRender = true;
	      this._initializeRegions(options);
	  
	      Marionette.ItemView.call(this, options);
	    },
	  
	    // LayoutView's render will use the existing region objects the
	    // first time it is called. Subsequent calls will destroy the
	    // views that the regions are showing and then reset the `el`
	    // for the regions to the newly rendered DOM elements.
	    render: function() {
	      this._ensureViewIsIntact();
	  
	      if (this._firstRender) {
	        // if this is the first render, don't do anything to
	        // reset the regions
	        this._firstRender = false;
	      } else {
	        // If this is not the first render call, then we need to
	        // re-initialize the `el` for each region
	        this._reInitializeRegions();
	      }
	  
	      return Marionette.ItemView.prototype.render.apply(this, arguments);
	    },
	  
	    // Handle destroying regions, and then destroy the view itself.
	    destroy: function() {
	      if (this.isDestroyed) { return this; }
	  
	      this.regionManager.destroy();
	      return Marionette.ItemView.prototype.destroy.apply(this, arguments);
	    },
	  
	    // Add a single region, by name, to the layoutView
	    addRegion: function(name, definition) {
	      var regions = {};
	      regions[name] = definition;
	      return this._buildRegions(regions)[name];
	    },
	  
	    // Add multiple regions as a {name: definition, name2: def2} object literal
	    addRegions: function(regions) {
	      this.regions = _.extend({}, this.regions, regions);
	      return this._buildRegions(regions);
	    },
	  
	    // Remove a single region from the LayoutView, by name
	    removeRegion: function(name) {
	      delete this.regions[name];
	      return this.regionManager.removeRegion(name);
	    },
	  
	    // Provides alternative access to regions
	    // Accepts the region name
	    // getRegion('main')
	    getRegion: function(region) {
	      return this.regionManager.get(region);
	    },
	  
	    // Get all regions
	    getRegions: function(){
	      return this.regionManager.getRegions();
	    },
	  
	    // internal method to build regions
	    _buildRegions: function(regions) {
	      var defaults = {
	        regionClass: this.getOption('regionClass'),
	        parentEl: _.partial(_.result, this, '$el')
	      };
	  
	      return this.regionManager.addRegions(regions, defaults);
	    },
	  
	    // Internal method to initialize the regions that have been defined in a
	    // `regions` attribute on this layoutView.
	    _initializeRegions: function(options) {
	      var regions;
	      this._initRegionManager();
	  
	      if (_.isFunction(this.regions)) {
	        regions = this.regions(options);
	      } else {
	        regions = this.regions || {};
	      }
	  
	      // Enable users to define `regions` as instance options.
	      var regionOptions = this.getOption.call(options, 'regions');
	  
	      // enable region options to be a function
	      if (_.isFunction(regionOptions)) {
	        regionOptions = regionOptions.call(this, options);
	      }
	  
	      _.extend(regions, regionOptions);
	  
	      // Normalize region selectors hash to allow
	      // a user to use the @ui. syntax.
	      regions = this.normalizeUIValues(regions);
	  
	      this.addRegions(regions);
	    },
	  
	    // Internal method to re-initialize all of the regions by updating the `el` that
	    // they point to
	    _reInitializeRegions: function() {
	      this.regionManager.invoke('reset');
	    },
	  
	    // Enable easy overriding of the default `RegionManager`
	    // for customized region interactions and business specific
	    // view logic for better control over single regions.
	    getRegionManager: function() {
	      return new Marionette.RegionManager();
	    },
	  
	    // Internal method to initialize the region manager
	    // and all regions in it
	    _initRegionManager: function() {
	      this.regionManager = this.getRegionManager();
	      this.regionManager._parent = this;
	  
	      this.listenTo(this.regionManager, 'before:add:region', function(name) {
	        this.triggerMethod('before:add:region', name);
	      });
	  
	      this.listenTo(this.regionManager, 'add:region', function(name, region) {
	        this[name] = region;
	        this.triggerMethod('add:region', name, region);
	      });
	  
	      this.listenTo(this.regionManager, 'before:remove:region', function(name) {
	        this.triggerMethod('before:remove:region', name);
	      });
	  
	      this.listenTo(this.regionManager, 'remove:region', function(name, region) {
	        delete this[name];
	        this.triggerMethod('remove:region', name, region);
	      });
	    },
	  
	    _getImmediateChildren: function() {
	      return _.chain(this.regionManager.getRegions())
	        .pluck('currentView')
	        .compact()
	        .value();
	    }
	  });
	  
	
	  // Behavior
	  // --------
	  
	  // A Behavior is an isolated set of DOM /
	  // user interactions that can be mixed into any View.
	  // Behaviors allow you to blackbox View specific interactions
	  // into portable logical chunks, keeping your views simple and your code DRY.
	  
	  Marionette.Behavior = Marionette.Object.extend({
	    constructor: function(options, view) {
	      // Setup reference to the view.
	      // this comes in handle when a behavior
	      // wants to directly talk up the chain
	      // to the view.
	      this.view = view;
	      this.defaults = _.result(this, 'defaults') || {};
	      this.options  = _.extend({}, this.defaults, options);
	  
	      Marionette.Object.apply(this, arguments);
	    },
	  
	    // proxy behavior $ method to the view
	    // this is useful for doing jquery DOM lookups
	    // scoped to behaviors view.
	    $: function() {
	      return this.view.$.apply(this.view, arguments);
	    },
	  
	    // Stops the behavior from listening to events.
	    // Overrides Object#destroy to prevent additional events from being triggered.
	    destroy: function() {
	      this.stopListening();
	    },
	  
	    proxyViewProperties: function (view) {
	      this.$el = view.$el;
	      this.el = view.el;
	    }
	  });
	  
	  /* jshint maxlen: 143 */
	  // Behaviors
	  // ---------
	  
	  // Behaviors is a utility class that takes care of
	  // gluing your behavior instances to their given View.
	  // The most important part of this class is that you
	  // **MUST** override the class level behaviorsLookup
	  // method for things to work properly.
	  
	  Marionette.Behaviors = (function(Marionette, _) {
	  
	    function Behaviors(view, behaviors) {
	  
	      if (!_.isObject(view.behaviors)) {
	        return {};
	      }
	  
	      // Behaviors defined on a view can be a flat object literal
	      // or it can be a function that returns an object.
	      behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));
	  
	      // Wraps several of the view's methods
	      // calling the methods first on each behavior
	      // and then eventually calling the method on the view.
	      Behaviors.wrap(view, behaviors, _.keys(methods));
	      return behaviors;
	    }
	  
	    var methods = {
	      behaviorTriggers: function(behaviorTriggers, behaviors) {
	        var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
	        return triggerBuilder.buildBehaviorTriggers();
	      },
	  
	      behaviorEvents: function(behaviorEvents, behaviors) {
	        var _behaviorsEvents = {};
	        var viewUI = _.result(this, 'ui');
	  
	        _.each(behaviors, function(b, i) {
	          var _events = {};
	          var behaviorEvents = _.clone(_.result(b, 'events')) || {};
	          var behaviorUI = _.result(b, 'ui');
	  
	          // Construct an internal UI hash first using
	          // the views UI hash and then the behaviors UI hash.
	          // This allows the user to use UI hash elements
	          // defined in the parent view as well as those
	          // defined in the given behavior.
	          var ui = _.extend({}, viewUI, behaviorUI);
	  
	          // Normalize behavior events hash to allow
	          // a user to use the @ui. syntax.
	          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, ui);
	  
	          _.each(_.keys(behaviorEvents), function(key) {
	            // Append white-space at the end of each key to prevent behavior key collisions.
	            // This is relying on the fact that backbone events considers "click .foo" the same as
	            // "click .foo ".
	  
	            // +2 is used because new Array(1) or 0 is "" and not " "
	            var whitespace = (new Array(i + 2)).join(' ');
	            var eventKey   = key + whitespace;
	            var handler    = _.isFunction(behaviorEvents[key]) ? behaviorEvents[key] : b[behaviorEvents[key]];
	  
	            _events[eventKey] = _.bind(handler, b);
	          });
	  
	          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
	        });
	  
	        return _behaviorsEvents;
	      }
	    };
	  
	    _.extend(Behaviors, {
	  
	      // Placeholder method to be extended by the user.
	      // The method should define the object that stores the behaviors.
	      // i.e.
	      //
	      // ```js
	      // Marionette.Behaviors.behaviorsLookup: function() {
	      //   return App.Behaviors
	      // }
	      // ```
	      behaviorsLookup: function() {
	        throw new Marionette.Error({
	          message: 'You must define where your behaviors are stored.',
	          url: 'marionette.behaviors.html#behaviorslookup'
	        });
	      },
	  
	      // Takes care of getting the behavior class
	      // given options and a key.
	      // If a user passes in options.behaviorClass
	      // default to using that. Otherwise delegate
	      // the lookup to the users `behaviorsLookup` implementation.
	      getBehaviorClass: function(options, key) {
	        if (options.behaviorClass) {
	          return options.behaviorClass;
	        }
	  
	        // Get behavior class can be either a flat object or a method
	        return _.isFunction(Behaviors.behaviorsLookup) ? Behaviors.behaviorsLookup.apply(this, arguments)[key] : Behaviors.behaviorsLookup[key];
	      },
	  
	      // Iterate over the behaviors object, for each behavior
	      // instantiate it and get its grouped behaviors.
	      parseBehaviors: function(view, behaviors) {
	        return _.chain(behaviors).map(function(options, key) {
	          var BehaviorClass = Behaviors.getBehaviorClass(options, key);
	  
	          var behavior = new BehaviorClass(options, view);
	          var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));
	  
	          return [behavior].concat(nestedBehaviors);
	        }).flatten().value();
	      },
	  
	      // Wrap view internal methods so that they delegate to behaviors. For example,
	      // `onDestroy` should trigger destroy on all of the behaviors and then destroy itself.
	      // i.e.
	      //
	      // `view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);`
	      wrap: function(view, behaviors, methodNames) {
	        _.each(methodNames, function(methodName) {
	          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
	        });
	      }
	    });
	  
	    // Class to build handlers for `triggers` on behaviors
	    // for views
	    function BehaviorTriggersBuilder(view, behaviors) {
	      this._view      = view;
	      this._viewUI    = _.result(view, 'ui');
	      this._behaviors = behaviors;
	      this._triggers  = {};
	    }
	  
	    _.extend(BehaviorTriggersBuilder.prototype, {
	      // Main method to build the triggers hash with event keys and handlers
	      buildBehaviorTriggers: function() {
	        _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
	        return this._triggers;
	      },
	  
	      // Internal method to build all trigger handlers for a given behavior
	      _buildTriggerHandlersForBehavior: function(behavior, i) {
	        var ui = _.extend({}, this._viewUI, _.result(behavior, 'ui'));
	        var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};
	  
	        triggersHash = Marionette.normalizeUIKeys(triggersHash, ui);
	  
	        _.each(triggersHash, _.partial(this._setHandlerForBehavior, behavior, i), this);
	      },
	  
	      // Internal method to create and assign the trigger handler for a given
	      // behavior
	      _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
	        // Unique identifier for the `this._triggers` hash
	        var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
	          return triggerName + '.' + 'behaviortriggers' + i;
	        });
	  
	        this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
	      }
	    });
	  
	    return Behaviors;
	  
	  })(Marionette, _);
	  
	
	  // App Router
	  // ----------
	  
	  // Reduce the boilerplate code of handling route events
	  // and then calling a single method on another object.
	  // Have your routers configured to call the method on
	  // your object, directly.
	  //
	  // Configure an AppRouter with `appRoutes`.
	  //
	  // App routers can only take one `controller` object.
	  // It is recommended that you divide your controller
	  // objects in to smaller pieces of related functionality
	  // and have multiple routers / controllers, instead of
	  // just one giant router and controller.
	  //
	  // You can also add standard routes to an AppRouter.
	  
	  Marionette.AppRouter = Backbone.Router.extend({
	  
	    constructor: function(options) {
	      this.options = options || {};
	  
	      Backbone.Router.apply(this, arguments);
	  
	      var appRoutes = this.getOption('appRoutes');
	      var controller = this._getController();
	      this.processAppRoutes(controller, appRoutes);
	      this.on('route', this._processOnRoute, this);
	    },
	  
	    // Similar to route method on a Backbone Router but
	    // method is called on the controller
	    appRoute: function(route, methodName) {
	      var controller = this._getController();
	      this._addAppRoute(controller, route, methodName);
	    },
	  
	    // process the route event and trigger the onRoute
	    // method call, if it exists
	    _processOnRoute: function(routeName, routeArgs) {
	      // make sure an onRoute before trying to call it
	      if (_.isFunction(this.onRoute)) {
	        // find the path that matches the current route
	        var routePath = _.invert(this.getOption('appRoutes'))[routeName];
	        this.onRoute(routeName, routePath, routeArgs);
	      }
	    },
	  
	    // Internal method to process the `appRoutes` for the
	    // router, and turn them in to routes that trigger the
	    // specified method on the specified `controller`.
	    processAppRoutes: function(controller, appRoutes) {
	      if (!appRoutes) { return; }
	  
	      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes
	  
	      _.each(routeNames, function(route) {
	        this._addAppRoute(controller, route, appRoutes[route]);
	      }, this);
	    },
	  
	    _getController: function() {
	      return this.getOption('controller');
	    },
	  
	    _addAppRoute: function(controller, route, methodName) {
	      var method = controller[methodName];
	  
	      if (!method) {
	        throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
	      }
	  
	      this.route(route, methodName, _.bind(method, controller));
	    },
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption,
	  
	    triggerMethod: Marionette.triggerMethod,
	  
	    bindEntityEvents: Marionette.proxyBindEntityEvents,
	  
	    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
	  });
	  
	  // Application
	  // -----------
	  
	  // Contain and manage the composite application as a whole.
	  // Stores and starts up `Region` objects, includes an
	  // event aggregator as `app.vent`
	  Marionette.Application = Marionette.Object.extend({
	    constructor: function(options) {
	      this._initializeRegions(options);
	      this._initCallbacks = new Marionette.Callbacks();
	      this.submodules = {};
	      _.extend(this, options);
	      this._initChannel();
	      Marionette.Object.call(this, options);
	    },
	  
	    // Command execution, facilitated by Backbone.Wreqr.Commands
	    execute: function() {
	      this.commands.execute.apply(this.commands, arguments);
	    },
	  
	    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
	    request: function() {
	      return this.reqres.request.apply(this.reqres, arguments);
	    },
	  
	    // Add an initializer that is either run at when the `start`
	    // method is called, or run immediately if added after `start`
	    // has already been called.
	    addInitializer: function(initializer) {
	      this._initCallbacks.add(initializer);
	    },
	  
	    // kick off all of the application's processes.
	    // initializes all of the regions that have been added
	    // to the app, and runs all of the initializer functions
	    start: function(options) {
	      this.triggerMethod('before:start', options);
	      this._initCallbacks.run(options, this);
	      this.triggerMethod('start', options);
	    },
	  
	    // Add regions to your app.
	    // Accepts a hash of named strings or Region objects
	    // addRegions({something: "#someRegion"})
	    // addRegions({something: Region.extend({el: "#someRegion"}) });
	    addRegions: function(regions) {
	      return this._regionManager.addRegions(regions);
	    },
	  
	    // Empty all regions in the app, without removing them
	    emptyRegions: function() {
	      return this._regionManager.emptyRegions();
	    },
	  
	    // Removes a region from your app, by name
	    // Accepts the regions name
	    // removeRegion('myRegion')
	    removeRegion: function(region) {
	      return this._regionManager.removeRegion(region);
	    },
	  
	    // Provides alternative access to regions
	    // Accepts the region name
	    // getRegion('main')
	    getRegion: function(region) {
	      return this._regionManager.get(region);
	    },
	  
	    // Get all the regions from the region manager
	    getRegions: function(){
	      return this._regionManager.getRegions();
	    },
	  
	    // Create a module, attached to the application
	    module: function(moduleNames, moduleDefinition) {
	  
	      // Overwrite the module class if the user specifies one
	      var ModuleClass = Marionette.Module.getClass(moduleDefinition);
	  
	      var args = _.toArray(arguments);
	      args.unshift(this);
	  
	      // see the Marionette.Module object for more information
	      return ModuleClass.create.apply(ModuleClass, args);
	    },
	  
	    // Enable easy overriding of the default `RegionManager`
	    // for customized region interactions and business-specific
	    // view logic for better control over single regions.
	    getRegionManager: function() {
	      return new Marionette.RegionManager();
	    },
	  
	    // Internal method to initialize the regions that have been defined in a
	    // `regions` attribute on the application instance
	    _initializeRegions: function(options) {
	      var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};
	  
	      this._initRegionManager();
	  
	      // Enable users to define `regions` in instance options.
	      var optionRegions = Marionette.getOption(options, 'regions');
	  
	      // Enable region options to be a function
	      if (_.isFunction(optionRegions)) {
	        optionRegions = optionRegions.call(this, options);
	      }
	  
	      // Overwrite current regions with those passed in options
	      _.extend(regions, optionRegions);
	  
	      this.addRegions(regions);
	  
	      return this;
	    },
	  
	    // Internal method to set up the region manager
	    _initRegionManager: function() {
	      this._regionManager = this.getRegionManager();
	      this._regionManager._parent = this;
	  
	      this.listenTo(this._regionManager, 'before:add:region', function() {
	        Marionette._triggerMethod(this, 'before:add:region', arguments);
	      });
	  
	      this.listenTo(this._regionManager, 'add:region', function(name, region) {
	        this[name] = region;
	        Marionette._triggerMethod(this, 'add:region', arguments);
	      });
	  
	      this.listenTo(this._regionManager, 'before:remove:region', function() {
	        Marionette._triggerMethod(this, 'before:remove:region', arguments);
	      });
	  
	      this.listenTo(this._regionManager, 'remove:region', function(name) {
	        delete this[name];
	        Marionette._triggerMethod(this, 'remove:region', arguments);
	      });
	    },
	  
	    // Internal method to setup the Wreqr.radio channel
	    _initChannel: function() {
	      this.channelName = _.result(this, 'channelName') || 'global';
	      this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
	      this.vent = _.result(this, 'vent') || this.channel.vent;
	      this.commands = _.result(this, 'commands') || this.channel.commands;
	      this.reqres = _.result(this, 'reqres') || this.channel.reqres;
	    }
	  });
	  
	  /* jshint maxparams: 9 */
	  
	  // Module
	  // ------
	  
	  // A simple module system, used to create privacy and encapsulation in
	  // Marionette applications
	  Marionette.Module = function(moduleName, app, options) {
	    this.moduleName = moduleName;
	    this.options = _.extend({}, this.options, options);
	    // Allow for a user to overide the initialize
	    // for a given module instance.
	    this.initialize = options.initialize || this.initialize;
	  
	    // Set up an internal store for sub-modules.
	    this.submodules = {};
	  
	    this._setupInitializersAndFinalizers();
	  
	    // Set an internal reference to the app
	    // within a module.
	    this.app = app;
	  
	    if (_.isFunction(this.initialize)) {
	      this.initialize(moduleName, app, this.options);
	    }
	  };
	  
	  Marionette.Module.extend = Marionette.extend;
	  
	  // Extend the Module prototype with events / listenTo, so that the module
	  // can be used as an event aggregator or pub/sub.
	  _.extend(Marionette.Module.prototype, Backbone.Events, {
	  
	    // By default modules start with their parents.
	    startWithParent: true,
	  
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic when extending Marionette.Module.
	    initialize: function() {},
	  
	    // Initializer for a specific module. Initializers are run when the
	    // module's `start` method is called.
	    addInitializer: function(callback) {
	      this._initializerCallbacks.add(callback);
	    },
	  
	    // Finalizers are run when a module is stopped. They are used to teardown
	    // and finalize any variables, references, events and other code that the
	    // module had set up.
	    addFinalizer: function(callback) {
	      this._finalizerCallbacks.add(callback);
	    },
	  
	    // Start the module, and run all of its initializers
	    start: function(options) {
	      // Prevent re-starting a module that is already started
	      if (this._isInitialized) { return; }
	  
	      // start the sub-modules (depth-first hierarchy)
	      _.each(this.submodules, function(mod) {
	        // check to see if we should start the sub-module with this parent
	        if (mod.startWithParent) {
	          mod.start(options);
	        }
	      });
	  
	      // run the callbacks to "start" the current module
	      this.triggerMethod('before:start', options);
	  
	      this._initializerCallbacks.run(options, this);
	      this._isInitialized = true;
	  
	      this.triggerMethod('start', options);
	    },
	  
	    // Stop this module by running its finalizers and then stop all of
	    // the sub-modules for this module
	    stop: function() {
	      // if we are not initialized, don't bother finalizing
	      if (!this._isInitialized) { return; }
	      this._isInitialized = false;
	  
	      this.triggerMethod('before:stop');
	  
	      // stop the sub-modules; depth-first, to make sure the
	      // sub-modules are stopped / finalized before parents
	      _.invoke(this.submodules, 'stop');
	  
	      // run the finalizers
	      this._finalizerCallbacks.run(undefined, this);
	  
	      // reset the initializers and finalizers
	      this._initializerCallbacks.reset();
	      this._finalizerCallbacks.reset();
	  
	      this.triggerMethod('stop');
	    },
	  
	    // Configure the module with a definition function and any custom args
	    // that are to be passed in to the definition function
	    addDefinition: function(moduleDefinition, customArgs) {
	      this._runModuleDefinition(moduleDefinition, customArgs);
	    },
	  
	    // Internal method: run the module definition function with the correct
	    // arguments
	    _runModuleDefinition: function(definition, customArgs) {
	      // If there is no definition short circut the method.
	      if (!definition) { return; }
	  
	      // build the correct list of arguments for the module definition
	      var args = _.flatten([
	        this,
	        this.app,
	        Backbone,
	        Marionette,
	        Backbone.$, _,
	        customArgs
	      ]);
	  
	      definition.apply(this, args);
	    },
	  
	    // Internal method: set up new copies of initializers and finalizers.
	    // Calling this method will wipe out all existing initializers and
	    // finalizers.
	    _setupInitializersAndFinalizers: function() {
	      this._initializerCallbacks = new Marionette.Callbacks();
	      this._finalizerCallbacks = new Marionette.Callbacks();
	    },
	  
	    // import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod
	  });
	  
	  // Class methods to create modules
	  _.extend(Marionette.Module, {
	  
	    // Create a module, hanging off the app parameter as the parent object.
	    create: function(app, moduleNames, moduleDefinition) {
	      var module = app;
	  
	      // get the custom args passed in after the module definition and
	      // get rid of the module name and definition function
	      var customArgs = _.rest(arguments, 3);
	  
	      // Split the module names and get the number of submodules.
	      // i.e. an example module name of `Doge.Wow.Amaze` would
	      // then have the potential for 3 module definitions.
	      moduleNames = moduleNames.split('.');
	      var length = moduleNames.length;
	  
	      // store the module definition for the last module in the chain
	      var moduleDefinitions = [];
	      moduleDefinitions[length - 1] = moduleDefinition;
	  
	      // Loop through all the parts of the module definition
	      _.each(moduleNames, function(moduleName, i) {
	        var parentModule = module;
	        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
	        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
	      }, this);
	  
	      // Return the last module in the definition chain
	      return module;
	    },
	  
	    _getModule: function(parentModule, moduleName, app, def, args) {
	      var options = _.extend({}, def);
	      var ModuleClass = this.getClass(def);
	  
	      // Get an existing module of this name if we have one
	      var module = parentModule[moduleName];
	  
	      if (!module) {
	        // Create a new module if we don't have one
	        module = new ModuleClass(moduleName, app, options);
	        parentModule[moduleName] = module;
	        // store the module on the parent
	        parentModule.submodules[moduleName] = module;
	      }
	  
	      return module;
	    },
	  
	    // ## Module Classes
	    //
	    // Module classes can be used as an alternative to the define pattern.
	    // The extend function of a Module is identical to the extend functions
	    // on other Backbone and Marionette classes.
	    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
	    getClass: function(moduleDefinition) {
	      var ModuleClass = Marionette.Module;
	  
	      if (!moduleDefinition) {
	        return ModuleClass;
	      }
	  
	      // If all of the module's functionality is defined inside its class,
	      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
	      if (moduleDefinition.prototype instanceof ModuleClass) {
	        return moduleDefinition;
	      }
	  
	      return moduleDefinition.moduleClass || ModuleClass;
	    },
	  
	    // Add the module definition and add a startWithParent initializer function.
	    // This is complicated because module definitions are heavily overloaded
	    // and support an anonymous function, module class, or options object
	    _addModuleDefinition: function(parentModule, module, def, args) {
	      var fn = this._getDefine(def);
	      var startWithParent = this._getStartWithParent(def, module);
	  
	      if (fn) {
	        module.addDefinition(fn, args);
	      }
	  
	      this._addStartWithParent(parentModule, module, startWithParent);
	    },
	  
	    _getStartWithParent: function(def, module) {
	      var swp;
	  
	      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
	        swp = module.constructor.prototype.startWithParent;
	        return _.isUndefined(swp) ? true : swp;
	      }
	  
	      if (_.isObject(def)) {
	        swp = def.startWithParent;
	        return _.isUndefined(swp) ? true : swp;
	      }
	  
	      return true;
	    },
	  
	    _getDefine: function(def) {
	      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
	        return def;
	      }
	  
	      if (_.isObject(def)) {
	        return def.define;
	      }
	  
	      return null;
	    },
	  
	    _addStartWithParent: function(parentModule, module, startWithParent) {
	      module.startWithParent = module.startWithParent && startWithParent;
	  
	      if (!module.startWithParent || !!module.startWithParentIsConfigured) {
	        return;
	      }
	  
	      module.startWithParentIsConfigured = true;
	  
	      parentModule.addInitializer(function(options) {
	        if (module.startWithParent) {
	          module.start(options);
	        }
	      });
	    }
	  });
	  
	
	  return Marionette;
	}));


/***/ },
/* 5 */
/*!**********************************************!*\
  !*** ./public/assets/libs/backbone.radio.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.Radio v0.8.4
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! backbone */ 3), __webpack_require__(/*! underscore */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Backbone, _) {
	      return factory(Backbone, _);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    module.exports = factory(Backbone, _);
	  }
	  else {
	    factory(root.Backbone, root._);
	  }
	}(this, function(Backbone, _) {
	  'use strict';
	
	  var previousRadio = Backbone.Radio;
	  
	  var Radio = Backbone.Radio = {};
	  
	  Radio.VERSION = '0.8.4';
	  
	  // This allows you to run multiple instances of Radio on the same
	  // webapp. After loading the new version, call `noConflict()` to
	  // get a reference to it. At the same time the old version will be
	  // returned to Backbone.Radio.
	  Radio.noConflict = function () {
	    Backbone.Radio = previousRadio;
	    return this;
	  };
	  
	  // Whether or not we're in DEBUG mode or not. DEBUG mode helps you
	  // get around the issues of lack of warnings when events are mis-typed.
	  Radio.DEBUG = false;
	  
	  // This is the method that's called when an unregistered event was called.
	  // By default, it logs warning to the console. By overriding this you could
	  // make it throw an Error, for instance. This would make firing a nonexistent event
	  // have the same consequence as firing a nonexistent method on an Object.
	  function debugLog(warning, eventName, channelName) {
	    if (!Radio.DEBUG) { return; }
	    var channelText = channelName ? ' on the ' + channelName + ' channel' : '';
	    if (console && console.warn) {
	      console.warn(warning + channelText + ': "' + eventName + '"');
	    }
	  }
	  
	  var eventSplitter = /\s+/;
	  
	  // An internal method used to handle Radio's method overloading for Requests and
	  // Commands. It's borrowed from Backbone.Events. It differs from Backbone's overload
	  // API (which is used in Backbone.Events) in that it doesn't support space-separated
	  // event names.
	  function eventsApi(obj, action, name, rest) {
	    if (!name) {
	      return false;
	    }
	  
	    var results = [];
	  
	    // Handle event maps.
	    if (typeof name === 'object') {
	      for (var key in name) {
	        results.push(obj[action].apply(obj, [key, name[key]].concat(rest)));
	      }
	      return results;
	    }
	  
	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        results.push(obj[action].apply(obj, [names[i]].concat(rest)));
	      }
	      return results;
	    }
	  
	    return false;
	  }
	  
	  // An optimized way to execute callbacks.
	  function callHandler(callback, context, args) {
	    var a1 = args[0], a2 = args[1], a3 = args[2];
	    switch(args.length) {
	      case 0: return callback.call(context);
	      case 1: return callback.call(context, a1);
	      case 2: return callback.call(context, a1, a2);
	      case 3: return callback.call(context, a1, a2, a3);
	      default: return callback.apply(context, args);
	    }
	  }
	  
	  // A helper used by `off` methods to the handler from the store
	  function removeHandler(store, name, callback, context) {
	    var event = store[name];
	    if (
	       (!callback || (callback === event.callback || callback === event.callback._callback)) &&
	       (!context || (context === event.context))
	    ) {
	      delete store[name];
	      return true;
	    }
	  }
	  
	  function removeHandlers(store, name, callback, context) {
	    store || (store = {});
	    var names = name ? [name] : _.keys(store);
	    var matched = false;
	  
	    for (var i = 0, length = names.length; i < length; i++) {
	      name = names[i];
	  
	      // If there's no event by this name, log it and continue
	      // with the loop
	      if (!store[name]) {
	        continue;
	      }
	  
	      if (removeHandler(store, name, callback, context)) {
	        matched = true;
	      }
	    }
	  
	    return matched;
	  }
	  
	  /*
	   * tune-in
	   * -------
	   * Get console logs of a channel's activity
	   *
	   */
	  
	  var _logs = {};
	  
	  // This is to produce an identical function in both tuneIn and tuneOut,
	  // so that Backbone.Events unregisters it.
	  function _partial(channelName) {
	    return _logs[channelName] || (_logs[channelName] = _.partial(Radio.log, channelName));
	  }
	  
	  _.extend(Radio, {
	  
	    // Log information about the channel and event
	    log: function(channelName, eventName) {
	      var args = _.rest(arguments, 2);
	      console.log('[' + channelName + '] "' + eventName + '"', args);
	    },
	  
	    // Logs all events on this channel to the console. It sets an
	    // internal value on the channel telling it we're listening,
	    // then sets a listener on the Backbone.Events
	    tuneIn: function(channelName) {
	      var channel = Radio.channel(channelName);
	      channel._tunedIn = true;
	      channel.on('all', _partial(channelName));
	      return this;
	    },
	  
	    // Stop logging all of the activities on this channel to the console
	    tuneOut: function(channelName) {
	      var channel = Radio.channel(channelName);
	      channel._tunedIn = false;
	      channel.off('all', _partial(channelName));
	      delete _logs[channelName];
	      return this;
	    }
	  });
	  
	  /*
	   * Backbone.Radio.Commands
	   * -----------------------
	   * A messaging system for sending orders.
	   *
	   */
	  
	  Radio.Commands = {
	  
	    // Issue a command
	    command: function(name) {
	      var args = _.rest(arguments);
	      if (eventsApi(this, 'command', name, args)) {
	        return this;
	      }
	      var channelName = this.channelName;
	      var commands = this._commands;
	  
	      // Check if we should log the command, and if so, do it
	      if (channelName && this._tunedIn) {
	        Radio.log.apply(this, [channelName, name].concat(args));
	      }
	  
	      // If the command isn't handled, log it in DEBUG mode and exit
	      if (commands && (commands[name] || commands['default'])) {
	        var handler = commands[name] || commands['default'];
	        args = commands[name] ? args : arguments;
	        callHandler(handler.callback, handler.context, args);
	      } else {
	        debugLog('An unhandled command was fired', name, channelName);
	      }
	  
	      return this;
	    },
	  
	    // Register a handler for a command.
	    comply: function(name, callback, context) {
	      if (eventsApi(this, 'comply', name, [callback, context])) {
	        return this;
	      }
	      this._commands || (this._commands = {});
	  
	      if (this._commands[name]) {
	        debugLog('A command was overwritten', name, this.channelName);
	      }
	  
	      this._commands[name] = {
	        callback: callback,
	        context: context || this
	      };
	  
	      return this;
	    },
	  
	    // Register a handler for a command that happens just once.
	    complyOnce: function(name, callback, context) {
	      if (eventsApi(this, 'complyOnce', name, [callback, context])) {
	        return this;
	      }
	      var self = this;
	  
	      var once = _.once(function() {
	        self.stopComplying(name);
	        return callback.apply(this, arguments);
	      });
	  
	      return this.comply(name, once, context);
	    },
	  
	    // Remove handler(s)
	    stopComplying: function(name, callback, context) {
	      if (eventsApi(this, 'stopComplying', name)) {
	        return this;
	      }
	  
	      // Remove everything if there are no arguments passed
	      if (!name && !callback && !context) {
	        delete this._commands;
	      } else if (!removeHandlers(this._commands, name, callback, context)) {
	        debugLog('Attempted to remove the unregistered command', name, this.channelName);
	      }
	  
	      return this;
	    }
	  };
	  
	  /*
	   * Backbone.Radio.Requests
	   * -----------------------
	   * A messaging system for requesting data.
	   *
	   */
	  
	  function makeCallback(callback) {
	    return _.isFunction(callback) ? callback : function () { return callback; };
	  }
	  
	  Radio.Requests = {
	  
	    // Make a request
	    request: function(name) {
	      var args = _.rest(arguments);
	      var results = eventsApi(this, 'request', name, args);
	      if (results) {
	        return results;
	      }
	      var channelName = this.channelName;
	      var requests = this._requests;
	  
	      // Check if we should log the request, and if so, do it
	      if (channelName && this._tunedIn) {
	        Radio.log.apply(this, [channelName, name].concat(args));
	      }
	  
	      // If the request isn't handled, log it in DEBUG mode and exit
	      if (requests && (requests[name] || requests['default'])) {
	        var handler = requests[name] || requests['default'];
	        args = requests[name] ? args : arguments;
	        return callHandler(handler.callback, handler.context, args);
	      } else {
	        debugLog('An unhandled request was fired', name, channelName);
	      }
	    },
	  
	    // Set up a handler for a request
	    reply: function(name, callback, context) {
	      if (eventsApi(this, 'reply', name, [callback, context])) {
	        return this;
	      }
	  
	      this._requests || (this._requests = {});
	  
	      if (this._requests[name]) {
	        debugLog('A request was overwritten', name, this.channelName);
	      }
	  
	      this._requests[name] = {
	        callback: makeCallback(callback),
	        context: context || this
	      };
	  
	      return this;
	    },
	  
	    // Set up a handler that can only be requested once
	    replyOnce: function(name, callback, context) {
	      if (eventsApi(this, 'replyOnce', name, [callback, context])) {
	        return this;
	      }
	  
	      var self = this;
	  
	      var once = _.once(function() {
	        self.stopReplying(name);
	        return makeCallback(callback).apply(this, arguments);
	      });
	  
	      return this.reply(name, once, context);
	    },
	  
	    // Remove handler(s)
	    stopReplying: function(name, callback, context) {
	      if (eventsApi(this, 'stopReplying', name)) {
	        return this;
	      }
	  
	      // Remove everything if there are no arguments passed
	      if (!name && !callback && !context) {
	        delete this._requests;
	      } else if (!removeHandlers(this._requests, name, callback, context)) {
	        debugLog('Attempted to remove the unregistered request', name, this.channelName);
	      }
	  
	      return this;
	    }
	  };
	  
	  /*
	   * Backbone.Radio.channel
	   * ----------------------
	   * Get a reference to a channel by name.
	   *
	   */
	  
	  Radio._channels = {};
	  
	  Radio.channel = function(channelName) {
	    if (!channelName) {
	      throw new Error('You must provide a name for the channel.');
	    }
	  
	    if (Radio._channels[channelName]) {
	      return Radio._channels[channelName];
	    } else {
	      return (Radio._channels[channelName] = new Radio.Channel(channelName));
	    }
	  };
	  
	  /*
	   * Backbone.Radio.Channel
	   * ----------------------
	   * A Channel is an object that extends from Backbone.Events,
	   * Radio.Commands, and Radio.Requests.
	   *
	   */
	  
	  Radio.Channel = function(channelName) {
	    this.channelName = channelName;
	  };
	  
	  _.extend(Radio.Channel.prototype, Backbone.Events, Radio.Commands, Radio.Requests, {
	  
	    // Remove all handlers from the messaging systems of this channel
	    reset: function() {
	      this.off();
	      this.stopListening();
	      this.stopComplying();
	      this.stopReplying();
	      return this;
	    }
	  });
	  
	  /*
	   * Top-level API
	   * -------------
	   * Supplies the 'top-level API' for working with Channels directly
	   * from Backbone.Radio.
	   *
	   */
	  
	  var channel, args, systems = [Backbone.Events, Radio.Commands, Radio.Requests];
	  
	  _.each(systems, function(system) {
	    _.each(system, function(method, methodName) {
	      Radio[methodName] = function(channelName) {
	        args = _.rest(arguments);
	        channel = this.channel(channelName);
	        return channel[methodName].apply(channel, args);
	      };
	    });
	  });
	  
	
	  return Radio;
	}));


/***/ },
/* 6 */
/*!****************************************!*\
  !*** ./public/assets/libs/mustache.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */
	
	/*global define: false*/
	
	(function (root, factory) {
	  if (typeof exports === "object" && exports) {
	    factory(exports); // CommonJS
	  } else {
	    var mustache = {};
	    factory(mustache);
	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (mustache), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else {
	      root.Mustache = mustache; // <script>
	    }
	  }
	}(this, function (mustache) {
	
	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var nonSpaceRe = /\S/;
	  var eqRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;
	
	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var RegExp_test = RegExp.prototype.test;
	  function testRegExp(re, string) {
	    return RegExp_test.call(re, string);
	  }
	
	  function isWhitespace(string) {
	    return !testRegExp(nonSpaceRe, string);
	  }
	
	  var Object_toString = Object.prototype.toString;
	  var isArray = Array.isArray || function (obj) {
	    return Object_toString.call(obj) === '[object Array]';
	  };
	
	  function escapeRegExp(string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
	  }
	
	  var entityMap = {
	    "&": "&amp;",
	    "<": "&lt;",
	    ">": "&gt;",
	    '"': '&quot;',
	    "'": '&#39;',
	    "/": '&#x2F;'
	  };
	
	  function escapeHtml(string) {
	    return String(string).replace(/[&<>"'\/]/g, function (s) {
	      return entityMap[s];
	    });
	  }
	
	  function Scanner(string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }
	
	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function () {
	    return this.tail === "";
	  };
	
	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function (re) {
	    var match = this.tail.match(re);
	
	    if (match && match.index === 0) {
	      this.tail = this.tail.substring(match[0].length);
	      this.pos += match[0].length;
	      return match[0];
	    }
	
	    return "";
	  };
	
	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function (re) {
	    var match, pos = this.tail.search(re);
	
	    switch (pos) {
	    case -1:
	      match = this.tail;
	      this.pos += this.tail.length;
	      this.tail = "";
	      break;
	    case 0:
	      match = "";
	      break;
	    default:
	      match = this.tail.substring(0, pos);
	      this.tail = this.tail.substring(pos);
	      this.pos += pos;
	    }
	
	    return match;
	  };
	
	  function Context(view, parent) {
	    this.view = view || {};
	    this.parent = parent;
	    this._cache = {};
	  }
	
	  Context.make = function (view) {
	    return (view instanceof Context) ? view : new Context(view);
	  };
	
	  Context.prototype.push = function (view) {
	    return new Context(view, this);
	  };
	
	  Context.prototype.lookup = function (name) {
	    var value = this._cache[name];
	
	    if (!value) {
	      if (name == '.') {
	        value = this.view;
	      } else {
	        var context = this;
	
	        while (context) {
	          if (name.indexOf('.') > 0) {
	            value = context.view;
	            var names = name.split('.'), i = 0;
	            while (value && i < names.length) {
	              value = value[names[i++]];
	            }
	          } else {
	            value = context.view[name];
	          }
	
	          if (value != null) break;
	
	          context = context.parent;
	        }
	      }
	
	      this._cache[name] = value;
	    }
	
	    if (typeof value === 'function') value = value.call(this.view);
	
	    return value;
	  };
	
	  function Writer() {
	    this.clearCache();
	  }
	
	  Writer.prototype.clearCache = function () {
	    this._cache = {};
	    this._partialCache = {};
	  };
	
	  Writer.prototype.compile = function (template, tags) {
	    var fn = this._cache[template];
	
	    if (!fn) {
	      var tokens = mustache.parse(template, tags);
	      fn = this._cache[template] = this.compileTokens(tokens, template);
	    }
	
	    return fn;
	  };
	
	  Writer.prototype.compilePartial = function (name, template, tags) {
	    var fn = this.compile(template, tags);
	    this._partialCache[name] = fn;
	    return fn;
	  };
	
	  Writer.prototype.getPartial = function (name) {
	    if (!(name in this._partialCache) && this._loadPartial) {
	      this.compilePartial(name, this._loadPartial(name));
	    }
	
	    return this._partialCache[name];
	  };
	
	  Writer.prototype.compileTokens = function (tokens, template) {
	    var self = this;
	    return function (view, partials) {
	      if (partials) {
	        if (typeof partials === 'function') {
	          self._loadPartial = partials;
	        } else {
	          for (var name in partials) {
	            self.compilePartial(name, partials[name]);
	          }
	        }
	      }
	
	      return renderTokens(tokens, self, Context.make(view), template);
	    };
	  };
	
	  Writer.prototype.render = function (template, view, partials) {
	    return this.compile(template)(view, partials);
	  };
	
	  /**
	   * Low-level function that renders the given `tokens` using the given `writer`
	   * and `context`. The `template` string is only needed for templates that use
	   * higher-order sections to extract the portion of the original template that
	   * was contained in that section.
	   */
	  function renderTokens(tokens, writer, context, template) {
	    var buffer = '';
	
	    var token, tokenValue, value;
	    for (var i = 0, len = tokens.length; i < len; ++i) {
	      token = tokens[i];
	      tokenValue = token[1];
	
	      switch (token[0]) {
	      case '#':
	        value = context.lookup(tokenValue);
	
	        if (typeof value === 'object') {
	          if (isArray(value)) {
	            for (var j = 0, jlen = value.length; j < jlen; ++j) {
	              buffer += renderTokens(token[4], writer, context.push(value[j]), template);
	            }
	          } else if (value) {
	            buffer += renderTokens(token[4], writer, context.push(value), template);
	          }
	        } else if (typeof value === 'function') {
	          var text = template == null ? null : template.slice(token[3], token[5]);
	          value = value.call(context.view, text, function (template) {
	            return writer.render(template, context);
	          });
	          if (value != null) buffer += value;
	        } else if (value) {
	          buffer += renderTokens(token[4], writer, context, template);
	        }
	
	        break;
	      case '^':
	        value = context.lookup(tokenValue);
	
	        // Use JavaScript's definition of falsy. Include empty arrays.
	        // See https://github.com/janl/mustache.js/issues/186
	        if (!value || (isArray(value) && value.length === 0)) {
	          buffer += renderTokens(token[4], writer, context, template);
	        }
	
	        break;
	      case '>':
	        value = writer.getPartial(tokenValue);
	        if (typeof value === 'function') buffer += value(context);
	        break;
	      case '&':
	        value = context.lookup(tokenValue);
	        if (value != null) buffer += value;
	        break;
	      case 'name':
	        value = context.lookup(tokenValue);
	        if (value != null) buffer += mustache.escape(value);
	        break;
	      case 'text':
	        buffer += tokenValue;
	        break;
	      }
	    }
	
	    return buffer;
	  }
	
	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens(tokens) {
	    var tree = [];
	    var collector = tree;
	    var sections = [];
	
	    var token;
	    for (var i = 0, len = tokens.length; i < len; ++i) {
	      token = tokens[i];
	      switch (token[0]) {
	      case '#':
	      case '^':
	        sections.push(token);
	        collector.push(token);
	        collector = token[4] = [];
	        break;
	      case '/':
	        var section = sections.pop();
	        section[5] = token[2];
	        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
	        break;
	      default:
	        collector.push(token);
	      }
	    }
	
	    return tree;
	  }
	
	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens(tokens) {
	    var squashedTokens = [];
	
	    var token, lastToken;
	    for (var i = 0, len = tokens.length; i < len; ++i) {
	      token = tokens[i];
	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          lastToken = token;
	          squashedTokens.push(token);
	        }
	      }
	    }
	
	    return squashedTokens;
	  }
	
	  function escapeTags(tags) {
	    return [
	      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
	      new RegExp("\\s*" + escapeRegExp(tags[1]))
	    ];
	  }
	
	  /**
	   * Breaks up the given `template` string into a tree of token objects. If
	   * `tags` is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
	   * course, the default is to use mustaches (i.e. Mustache.tags).
	   */
	  function parseTemplate(template, tags) {
	    template = template || '';
	    tags = tags || mustache.tags;
	
	    if (typeof tags === 'string') tags = tags.split(spaceRe);
	    if (tags.length !== 2) throw new Error('Invalid tags: ' + tags.join(', '));
	
	    var tagRes = escapeTags(tags);
	    var scanner = new Scanner(template);
	
	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?
	
	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace() {
	      if (hasTag && !nonSpace) {
	        while (spaces.length) {
	          delete tokens[spaces.pop()];
	        }
	      } else {
	        spaces = [];
	      }
	
	      hasTag = false;
	      nonSpace = false;
	    }
	
	    var start, type, value, chr, token;
	    while (!scanner.eos()) {
	      start = scanner.pos;
	
	      // Match any text between tags.
	      value = scanner.scanUntil(tagRes[0]);
	      if (value) {
	        for (var i = 0, len = value.length; i < len; ++i) {
	          chr = value.charAt(i);
	
	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }
	
	          tokens.push(['text', chr, start, start + 1]);
	          start += 1;
	
	          // Check for whitespace on the current line.
	          if (chr == '\n') stripSpace();
	        }
	      }
	
	      // Match the opening tag.
	      if (!scanner.scan(tagRes[0])) break;
	      hasTag = true;
	
	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);
	
	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(eqRe);
	        scanner.scan(eqRe);
	        scanner.scanUntil(tagRes[1]);
	      } else if (type === '{') {
	        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
	        scanner.scan(curlyRe);
	        scanner.scanUntil(tagRes[1]);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(tagRes[1]);
	      }
	
	      // Match the closing tag.
	      if (!scanner.scan(tagRes[1])) throw new Error('Unclosed tag at ' + scanner.pos);
	
	      token = [type, value, start, scanner.pos];
	      tokens.push(token);
	
	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        if (sections.length === 0) throw new Error('Unopened section "' + value + '" at ' + start);
	        var openSection = sections.pop();
	        if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        tags = value.split(spaceRe);
	        if (tags.length !== 2) throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
	        tagRes = escapeTags(tags);
	      }
	    }
	
	    // Make sure there are no open sections when we're done.
	    var openSection = sections.pop();
	    if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
	
	    tokens = squashTokens(tokens);
	
	    return nestTokens(tokens);
	  }
	
	  mustache.name = "mustache.js";
	  mustache.version = "0.7.2";
	  mustache.tags = ["{{", "}}"];
	
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;
	
	  mustache.parse = parseTemplate;
	
	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;
	
	  // All Mustache.* functions use this writer.
	  var defaultWriter = new Writer();
	
	  /**
	   * Clears all cached templates and partials in the default writer.
	   */
	  mustache.clearCache = function () {
	    return defaultWriter.clearCache();
	  };
	
	  /**
	   * Compiles the given `template` to a reusable function using the default
	   * writer.
	   */
	  mustache.compile = function (template, tags) {
	    return defaultWriter.compile(template, tags);
	  };
	
	  /**
	   * Compiles the partial with the given `name` and `template` to a reusable
	   * function using the default writer.
	   */
	  mustache.compilePartial = function (name, template, tags) {
	    return defaultWriter.compilePartial(name, template, tags);
	  };
	
	  /**
	   * Compiles the given array of tokens (the output of a parse) to a reusable
	   * function using the default writer.
	   */
	  mustache.compileTokens = function (tokens, template) {
	    return defaultWriter.compileTokens(tokens, template);
	  };
	
	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function (template, view, partials) {
	    return defaultWriter.render(template, view, partials);
	  };
	
	  // This is here for backwards compatibility with 0.4.x.
	  mustache.to_html = function (template, view, partials, send) {
	    var result = mustache.render(template, view, partials);
	
	    if (typeof send === "function") {
	      send(result);
	    } else {
	      return result;
	    }
	  };
	
	}));


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
//# sourceMappingURL=vendor.map