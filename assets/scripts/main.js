if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        var to = Object(target);
  
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
(function(window){
    
    function tagNameFn() {
        return ( this.last ) ? this.name : this.name + '<br/>';
    }

    var APP_FRAMES = [
        {
            id: 'hello',
            headline: '<small>See the goods</small>',
            template: 'intro'
        },
        { 
            id: 'hester-street',
            headline: 'Hester Street Collaborative',
            text: 'Hester Street is an urban planning, design and development nonprofit based in the Lower East Side of Manhattan. After a rebranding process, we built a website which allows them to showcase their impact on the communities they serve.',
            url: 'http://hesterstreet.org/',
            urlText: 'hesterstreet.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/hester-project-scroll.webm',
                mp4: 'assets/video/hester-project-scroll.mp4',
                width: '1584',
                height: '898'
            },
            tags: [
                { name: 'Wordpress' },
                { name: 'Mapbox' },
                { name: 'vue.js', last: true  }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',
            color: '#3266CC',
            fill: '#3266CC'
        },
        { 
            id: 'gibney',
            headline: 'Gibney',
            text: 'Gibney, formerly Gibney Dance, is an organization whose mission is to bring the possibility of movement where it otherwise would not exist. Their new site seeks to emphasize the full scope of Gibney, acting as a portal connecting users to the myriads of performances, workshops, and weekly events.',
            url: 'http://gibneydance.org/',
            urlText: 'gibneydance.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/gibney-flow.webm',
                mp4: 'assets/video/gibney-flow.mp4',
                width: '1422',
                height: '958'
            },
            tags: [
                { name: 'Wordpress' },
                { name: 'Events Calendar' },
                { name: 'slick.js', last: true }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',
            color: '#000000',
            fill: '#111'
        },
        { 
            id: 'transit-center',
            headline: 'TransitCenter',
            text: 'TransitCenter is a foundation dedicated to urban mobility. They needed a website which would help them communicate with communities and policy makers in urban areas to affect change. We developed a modular system of content with which they can publish online reports about transit use. In addition, the site is also a place to search grant recipients, see upcoming events, and read their blog.',
            url: 'http://transitcenter.org/',
            urlText: 'transitcenter.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/transit-center-flow.webm',
                mp4: 'assets/video/transit-center-flow.mp4',
                width: '1422',
                height: '810'
            },
            tags: [
                { name: 'Wordpress' },
                { name: 'AJAX' },
                { name: 'Modular Content', last: true }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',         
            color: '#5E28B2',
            fill: '#5E28B2'
        },
        { 
            id: 'orpheus',
            headline: 'Orpheus Chamber Orchestra',
            text: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
            url: 'http://orpheusnyc.org/',
            urlText: 'orpheusnyc.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/orpheus-flow-1.webm',
                mp4: 'assets/video/orpheus-flow-1.mp4',
                width: '1678',
                height: '942'
            },
            tags: [
                // { name: '', last: true }
            ],
            tagName: tagNameFn,
            role: 'Primary Developer',         
            color: '#C48014',
            fill: '#C48014'
        },
        { 
            id: 'cgu',
            headline: 'Claremont Graduate University',
            text: 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.',
            url: 'http://cgu.edu/',
            urlText: 'cgu.edu',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/cgu-flow.webm',
                mp4: 'assets/video/cgu-flow.mp4',
                width: '1424',
                height: '956'
            },
            tags: [
                // { name: '', last: true }
            ],
            tagName: tagNameFn,
            role: 'Lead Front-End Developer',           
            color: '#AF1E27',
            fill: '#AF1E27'
        },
        {
            id: 'lets-chat',
            headline: 'Let\'s Chat',
            template: 'outro'
        },
    ];

    window.APP_FRAMES = APP_FRAMES;

})(this);
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template + ':' + (tags || mustache.tags).join(':')] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));

function document_ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
(function(window){

	var SCROLL_LOOP = [],
		scrollTop = -1,
		requestFrame =  window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        // IE Fallback, you can even fallback to onscroll
                        function (callback) {
                            window.setTimeout(callback, 1000 / 60);
                        };

	function loop() {

		// if scrollTop and window's scroll position are equal, return and try again.
		if (scrollTop == window.pageYOffset) {
			requestFrame(loop);
			return false;
		}

		// set scrollTop to window's scroll position.
		scrollTop = window.pageYOffset;

		// do your magic
		SCROLL_LOOP.forEach(function (fn) {
			if (typeof fn == "function") {
				fn(scrollTop);
			}
		});

		// run loop again
		requestFrame(loop);

	}

	// initialize loop()
	loop();
	
	window.SCROLL_LOOP = SCROLL_LOOP;
    
})(this);
(function (window) {


	var APP = function(FRAMES) {

		this.activeFrame = 0;
		this.headlineTrack = document.getElementById('headline-track');
		this.headlines = [];
		this.framesWrap = document.getElementById('frames');
		this.frames = FRAMES;
		this.canvas = document.getElementById('canvas');
		this.frameEls = [];
		this.next = document.getElementById('next');
		this.previous = document.getElementById('previous');

		this.init();
	};

	APP.prototype.init = function() {

		this.buildContent();
		this.addEventListeners();
		this.animateIntroText();
		this.monitorFrames();
		
		document.body.classList.add('initialized');

	};
	
	APP.prototype.animateIntroText = function() {

		var phrases = [
				'things',
				'frameworks',
				'widgets',
				'ui candy',
				'maps',
				'pattern libraries',
				'emails',
			],
			current = 0,
			textEl = document.getElementById('js-intro-text');

		function updatePhrase(){

			var currentPhrase = phrases[current],
				index = currentPhrase.length,
				currentPhraseDeleted = false;

			current += 1;

			var nextIndex = ( current === phrases.length ) ? 0 : current;
				nextPhrase = phrases[nextIndex],
				nextPhraseFinished = false;

			// console.log( 'updatePhrase()', currentPhrase, nextPhrase );

			function updateText() {

				setTimeout(function(){
					
					if ( index > -1 && ! currentPhraseDeleted ){
						textEl.innerText = currentPhrase.substring(0,index);
						// console.log(currentPhrase.substring(0,index));
						index--;
					} else {
						currentPhraseDeleted = true;
					}

					if ( currentPhraseDeleted && index <= nextPhrase.length ) {
						textEl.innerText = nextPhrase.substring(0,index);
						// console.log(nextPhrase.substring(0,index));
						index++;

						if ( index > nextPhrase.length ) {
							nextPhraseFinished = true;
						}
					}

					if ( currentPhraseDeleted && nextPhraseFinished ) {
						setTimeout(updatePhrase, 2000);
					} else {
						updateText();
					}
						
				}, 20);

			}

			current = nextIndex;

			updateText();

		}

		setTimeout( updatePhrase, 2000 );

	};

	APP.prototype.buildContent = function() {

		var THAT = this,
			templates = {
				project: document.getElementById('template-project').innerHTML,
				intro: document.getElementById('template-intro').innerHTML,
				outro: document.getElementById('template-outro').innerHTML
			};
		
		this.frames.forEach(function (frame, i) {

			// populate headlines
			var headline = document.createElement('div');
			headline.className = 'headline-item animate ' + ( i === 0 ? 'active' : '' );
			headline.innerHTML = '<div class="headline-text">' + frame.headline + '</div>';
			THAT.headlineTrack.appendChild(headline);
			THAT.headlines.push(headline);

			// populate frames
			var frameData = Object.assign( frame, { i: i } ),
				template = frame.template ? templates[frame.template] : templates.project,
				frameHTML = Mustache.render( template, frameData );

			THAT.framesWrap.innerHTML += frameHTML;

		});

		this.frameEls = document.querySelectorAll('.frame');
		
	};

	APP.prototype.addEventListeners = function() {

		var THAT = this;

		// clicking lets chat button automatically focuses first form field
		document.querySelectorAll('[href="#lets-chat"]').forEach(function(link,i){
			link.addEventListener('click', function(event){
				event.preventDefault();
				window.scrollTo( 0, document.getElementById('lets-chat').offsetTop );
				document.getElementById('name').focus();
			});
		});

		// arrow keys scroll between projects
		document.addEventListener("keydown",function(event){
			
			var DOWN = 40, UP = 38,
				frame;

			if ( event.keyCode !== DOWN && event.keyCode !== UP ) {
				return;
			}

			event.preventDefault();

			switch(event.keyCode) {
				case DOWN:
					frame = THAT.activeFrame + 1;
					break;
				case UP:
					frame = THAT.activeFrame - 1;
					break;
			}

			var id = THAT.frames[frame].id,
				el = document.getElementById(id);

			window.scrollTo(0,el.offsetTop);

		});

	};

	APP.prototype.monitorFrames = function() {

		var THAT = this;

		this.frameEls.forEach(function (frameEl, i) {

			var frame = THAT.frames[i],
				color = frame.color ? frame.color : '#222',
				fill = frame.fill ? frame.fill : '#e8e8e8',
				video = document.getElementById('video-' + i);

			updateFrame(window.pageYOffset);

			SCROLL_LOOP.push(updateFrame);
			
			function updateFrame(scrollTop) {
				var top = frameEl.offsetTop - window.innerHeight / 2,
					bottom = (frameEl.offsetHeight + frameEl.offsetTop) - window.innerHeight / 2;
	
				if (scrollTop >= top && scrollTop < bottom) {
	
					if ( ! frameEl.classList.contains('active')) {
					
						frameEl.classList.add('active');
	
						THAT.activeFrame = i;
						THAT.canvas.style.backgroundColor = fill;
						THAT.updateMask(frame, i);
						document.body.style.color = color;
						
						if ( i === 0 ) {
							document.body.classList.add('first-frame');
						} else {
							document.body.classList.remove('first-frame');
						}

						if ( i === THAT.frames.length - 1 ) {
							document.body.classList.add('last-frame');
						} else {
							document.body.classList.remove('last-frame');
						}
	
						if ( video ) {
							video.play();
						}
					
					}
	
				} else {
	
					frameEl.classList.remove('active');
					if ( video ) {
						video.pause();
					}
	
				}
			}
		});
	};

	APP.prototype.updateMask = function(frame, index) {

		var THAT = this,
			next = THAT.next,
			prev = THAT.previous;
			
		// Change headline
		THAT.headlines.forEach(function(headline, i){
			if ( i === index ) {
				headline.classList.add('active');
			} else {
				headline.classList.remove('active');
			}
		});
		THAT.headlineTrack.style.transform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.webkitTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.mozTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.msTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';
		THAT.headlineTrack.style.oTransform = 'translate3d(0,' + (index * -10) + 'vw,0)';

		// Change arrow links
		switch(index) {
			case 0:
				prev.classList.remove('active');
				next.classList.add('active');
				next.setAttribute('href', '#' + THAT.frames[index + 1].id);
				break;
			case (THAT.frames.length - 1):
				prev.classList.add('active');
				prev.setAttribute('href', '#' + THAT.frames[index - 1].id);
				next.classList.remove('active');
				break;
			default:
				prev.classList.add('active');
				prev.setAttribute('href', '#' + THAT.frames[index - 1].id);
				next.classList.add('active');
				next.setAttribute('href', '#' + THAT.frames[index + 1].id);
		}

	};

	document_ready( new APP(APP_FRAMES) );

})(this);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fcG9seWZpbGxzLmpzIiwiX2FwcF9kYXRhLmpzIiwiX211c3RhY2hlLmpzIiwiX3JlYWR5LmpzIiwiX3Njcm9sbExvb3AuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB0aGlzQXJnID0gdGhpc0FyZyB8fCB3aW5kb3c7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gTXVzdCBiZSB3cml0YWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QsIFwiYXNzaWduXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCB2YXJBcmdzKSB7IC8vIC5sZW5ndGggb2YgZnVuY3Rpb24gaXMgMlxuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkgeyAvLyBUeXBlRXJyb3IgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIFxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgXG4gICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkgeyAvLyBTa2lwIG92ZXIgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAvLyBBdm9pZCBidWdzIHdoZW4gaGFzT3duUHJvcGVydHkgaXMgc2hhZG93ZWRcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSIsIihmdW5jdGlvbih3aW5kb3cpe1xuICAgIFxuICAgIGZ1bmN0aW9uIHRhZ05hbWVGbigpIHtcbiAgICAgICAgcmV0dXJuICggdGhpcy5sYXN0ICkgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAnPGJyLz4nO1xuICAgIH1cblxuICAgIHZhciBBUFBfRlJBTUVTID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2hlbGxvJyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnPHNtYWxsPlNlZSB0aGUgZ29vZHM8L3NtYWxsPicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2ludHJvJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICdoZXN0ZXItc3RyZWV0JyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnSGVzdGVyIFN0cmVldCBDb2xsYWJvcmF0aXZlJyxcbiAgICAgICAgICAgIHRleHQ6ICdIZXN0ZXIgU3RyZWV0IGlzIGFuIHVyYmFuIHBsYW5uaW5nLCBkZXNpZ24gYW5kIGRldmVsb3BtZW50IG5vbnByb2ZpdCBiYXNlZCBpbiB0aGUgTG93ZXIgRWFzdCBTaWRlIG9mIE1hbmhhdHRhbi4gQWZ0ZXIgYSByZWJyYW5kaW5nIHByb2Nlc3MsIHdlIGJ1aWx0IGEgd2Vic2l0ZSB3aGljaCBhbGxvd3MgdGhlbSB0byBzaG93Y2FzZSB0aGVpciBpbXBhY3Qgb24gdGhlIGNvbW11bml0aWVzIHRoZXkgc2VydmUuJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9oZXN0ZXJzdHJlZXQub3JnLycsXG4gICAgICAgICAgICB1cmxUZXh0OiAnaGVzdGVyc3RyZWV0Lm9yZycsXG4gICAgICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgICAgIGF0dHM6ICdsb29wIG11dGVkIHByZWxvYWQ9XCJwcmVsb2FkXCInLFxuICAgICAgICAgICAgICAgIHdlYm06ICdhc3NldHMvdmlkZW8vaGVzdGVyLXByb2plY3Qtc2Nyb2xsLndlYm0nLFxuICAgICAgICAgICAgICAgIG1wNDogJ2Fzc2V0cy92aWRlby9oZXN0ZXItcHJvamVjdC1zY3JvbGwubXA0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE1ODQnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzg5OCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV29yZHByZXNzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01hcGJveCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICd2dWUuanMnLCBsYXN0OiB0cnVlICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZUZuLFxuICAgICAgICAgICAgcm9sZTogJ1ByaW1hcnkgRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzMyNjZDQycsXG4gICAgICAgICAgICBmaWxsOiAnIzMyNjZDQydcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAnZ2libmV5JyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnR2libmV5JyxcbiAgICAgICAgICAgIHRleHQ6ICdHaWJuZXksIGZvcm1lcmx5IEdpYm5leSBEYW5jZSwgaXMgYW4gb3JnYW5pemF0aW9uIHdob3NlIG1pc3Npb24gaXMgdG8gYnJpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1vdmVtZW50IHdoZXJlIGl0IG90aGVyd2lzZSB3b3VsZCBub3QgZXhpc3QuIFRoZWlyIG5ldyBzaXRlIHNlZWtzIHRvIGVtcGhhc2l6ZSB0aGUgZnVsbCBzY29wZSBvZiBHaWJuZXksIGFjdGluZyBhcyBhIHBvcnRhbCBjb25uZWN0aW5nIHVzZXJzIHRvIHRoZSBteXJpYWRzIG9mIHBlcmZvcm1hbmNlcywgd29ya3Nob3BzLCBhbmQgd2Vla2x5IGV2ZW50cy4nLFxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2dpYm5leWRhbmNlLm9yZy8nLFxuICAgICAgICAgICAgdXJsVGV4dDogJ2dpYm5leWRhbmNlLm9yZycsXG4gICAgICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgICAgIGF0dHM6ICdsb29wIG11dGVkIHByZWxvYWQ9XCJwcmVsb2FkXCInLFxuICAgICAgICAgICAgICAgIHdlYm06ICdhc3NldHMvdmlkZW8vZ2libmV5LWZsb3cud2VibScsXG4gICAgICAgICAgICAgICAgbXA0OiAnYXNzZXRzL3ZpZGVvL2dpYm5leS1mbG93Lm1wNCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNDIyJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5NTgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1dvcmRwcmVzcycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFdmVudHMgQ2FsZW5kYXInIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnc2xpY2suanMnLCBsYXN0OiB0cnVlIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnUHJpbWFyeSBEZXZlbG9wZXInLFxuICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgIGZpbGw6ICcjMTExJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICd0cmFuc2l0LWNlbnRlcicsXG4gICAgICAgICAgICBoZWFkbGluZTogJ1RyYW5zaXRDZW50ZXInLFxuICAgICAgICAgICAgdGV4dDogJ1RyYW5zaXRDZW50ZXIgaXMgYSBmb3VuZGF0aW9uIGRlZGljYXRlZCB0byB1cmJhbiBtb2JpbGl0eS4gVGhleSBuZWVkZWQgYSB3ZWJzaXRlIHdoaWNoIHdvdWxkIGhlbHAgdGhlbSBjb21tdW5pY2F0ZSB3aXRoIGNvbW11bml0aWVzIGFuZCBwb2xpY3kgbWFrZXJzIGluIHVyYmFuIGFyZWFzIHRvIGFmZmVjdCBjaGFuZ2UuIFdlIGRldmVsb3BlZCBhIG1vZHVsYXIgc3lzdGVtIG9mIGNvbnRlbnQgd2l0aCB3aGljaCB0aGV5IGNhbiBwdWJsaXNoIG9ubGluZSByZXBvcnRzIGFib3V0IHRyYW5zaXQgdXNlLiBJbiBhZGRpdGlvbiwgdGhlIHNpdGUgaXMgYWxzbyBhIHBsYWNlIHRvIHNlYXJjaCBncmFudCByZWNpcGllbnRzLCBzZWUgdXBjb21pbmcgZXZlbnRzLCBhbmQgcmVhZCB0aGVpciBibG9nLicsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vdHJhbnNpdGNlbnRlci5vcmcvJyxcbiAgICAgICAgICAgIHVybFRleHQ6ICd0cmFuc2l0Y2VudGVyLm9yZycsXG4gICAgICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgICAgIGF0dHM6ICdsb29wIG11dGVkIHByZWxvYWQ9XCJwcmVsb2FkXCInLFxuICAgICAgICAgICAgICAgIHdlYm06ICdhc3NldHMvdmlkZW8vdHJhbnNpdC1jZW50ZXItZmxvdy53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vdHJhbnNpdC1jZW50ZXItZmxvdy5tcDQnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTQyMicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODEwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ3M6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdXb3JkcHJlc3MnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQUpBWCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNb2R1bGFyIENvbnRlbnQnLCBsYXN0OiB0cnVlIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnUHJpbWFyeSBEZXZlbG9wZXInLCAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICcjNUUyOEIyJyxcbiAgICAgICAgICAgIGZpbGw6ICcjNUUyOEIyJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICdvcnBoZXVzJyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnT3JwaGV1cyBDaGFtYmVyIE9yY2hlc3RyYScsXG4gICAgICAgICAgICB0ZXh0OiAnUGVsbGVudGVzcXVlIGluIGlwc3VtIGlkIG9yY2kgcG9ydGEgZGFwaWJ1cy4gTnVsbGEgcXVpcyBsb3JlbSB1dCBsaWJlcm8gbWFsZXN1YWRhIGZldWdpYXQuIERvbmVjIHNvbGxpY2l0dWRpbiBtb2xlc3RpZSBtYWxlc3VhZGEuJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9vcnBoZXVzbnljLm9yZy8nLFxuICAgICAgICAgICAgdXJsVGV4dDogJ29ycGhldXNueWMub3JnJyxcbiAgICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICAgICAgYXR0czogJ2xvb3AgbXV0ZWQgcHJlbG9hZD1cInByZWxvYWRcIicsXG4gICAgICAgICAgICAgICAgd2VibTogJ2Fzc2V0cy92aWRlby9vcnBoZXVzLWZsb3ctMS53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vb3JwaGV1cy1mbG93LTEubXA0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE2NzgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzk0MidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgLy8geyBuYW1lOiAnJywgbGFzdDogdHJ1ZSB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZUZuLFxuICAgICAgICAgICAgcm9sZTogJ1ByaW1hcnkgRGV2ZWxvcGVyJywgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiAnI0M0ODAxNCcsXG4gICAgICAgICAgICBmaWxsOiAnI0M0ODAxNCdcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAnY2d1JyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnQ2xhcmVtb250IEdyYWR1YXRlIFVuaXZlcnNpdHknLFxuICAgICAgICAgICAgdGV4dDogJ1BlbGxlbnRlc3F1ZSBpbiBpcHN1bSBpZCBvcmNpIHBvcnRhIGRhcGlidXMuIE51bGxhIHF1aXMgbG9yZW0gdXQgbGliZXJvIG1hbGVzdWFkYSBmZXVnaWF0LiBEb25lYyBzb2xsaWNpdHVkaW4gbW9sZXN0aWUgbWFsZXN1YWRhLicsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vY2d1LmVkdS8nLFxuICAgICAgICAgICAgdXJsVGV4dDogJ2NndS5lZHUnLFxuICAgICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgICAgICBhdHRzOiAnbG9vcCBtdXRlZCBwcmVsb2FkPVwicHJlbG9hZFwiJyxcbiAgICAgICAgICAgICAgICB3ZWJtOiAnYXNzZXRzL3ZpZGVvL2NndS1mbG93LndlYm0nLFxuICAgICAgICAgICAgICAgIG1wNDogJ2Fzc2V0cy92aWRlby9jZ3UtZmxvdy5tcDQnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTQyNCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTU2J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ3M6IFtcbiAgICAgICAgICAgICAgICAvLyB7IG5hbWU6ICcnLCBsYXN0OiB0cnVlIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnTGVhZCBGcm9udC1FbmQgRGV2ZWxvcGVyJywgICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICcjQUYxRTI3JyxcbiAgICAgICAgICAgIGZpbGw6ICcjQUYxRTI3J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2xldHMtY2hhdCcsXG4gICAgICAgICAgICBoZWFkbGluZTogJ0xldFxcJ3MgQ2hhdCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ291dHJvJ1xuICAgICAgICB9LFxuICAgIF07XG5cbiAgICB3aW5kb3cuQVBQX0ZSQU1FUyA9IEFQUF9GUkFNRVM7XG5cbn0pKHRoaXMpOyIsIi8qIVxuICogbXVzdGFjaGUuanMgLSBMb2dpYy1sZXNzIHt7bXVzdGFjaGV9fSB0ZW1wbGF0ZXMgd2l0aCBKYXZhU2NyaXB0XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gKi9cblxuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSBNdXN0YWNoZTogdHJ1ZSovXG5cbihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZSAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpOyAvLyBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7IC8vIEFNRFxuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5NdXN0YWNoZSA9IHt9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKTsgLy8gc2NyaXB0LCB3c2gsIGFzcFxuICB9XG59KHRoaXMsIGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeSAobXVzdGFjaGUpIHtcblxuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vcmUgY29ycmVjdCB0eXBlb2Ygc3RyaW5nIGhhbmRsaW5nIGFycmF5XG4gICAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlU3RyIChvYmopIHtcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAgICogaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUsIGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01NzdcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODlcbiAgdmFyIHJlZ0V4cFRlc3QgPSBSZWdFeHAucHJvdG90eXBlLnRlc3Q7XG4gIGZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRlc3RSZWdFeHAobm9uU3BhY2VSZSwgc3RyaW5nKTtcbiAgfVxuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcvJzogJyYjeDJGOycsXG4gICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAnPSc6ICcmI3gzRDsnXG4gIH07XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB3aGl0ZVJlID0gL1xccyovO1xuICB2YXIgc3BhY2VSZSA9IC9cXHMrLztcbiAgdmFyIGVxdWFsc1JlID0gL1xccyo9LztcbiAgdmFyIGN1cmx5UmUgPSAvXFxzKlxcfS87XG4gIHZhciB0YWdSZSA9IC8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO1xuXG4gIC8qKlxuICAgKiBCcmVha3MgdXAgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgc3RyaW5nIGludG8gYSB0cmVlIG9mIHRva2Vucy4gSWYgdGhlIGB0YWdzYFxuICAgKiBhcmd1bWVudCBpcyBnaXZlbiBoZXJlIGl0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gc3RyaW5nIHZhbHVlczogdGhlXG4gICAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICAgKiBjb3Vyc2UsIHRoZSBkZWZhdWx0IGlzIHRvIHVzZSBtdXN0YWNoZXMgKGkuZS4gbXVzdGFjaGUudGFncykuXG4gICAqXG4gICAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAgICogbXVzdGFjaGUgc3ltYm9sIHRoYXQgd2FzIHVzZWQgaW5zaWRlIHRoZSB0YWcsIGUuZy4gXCIjXCIgb3IgXCImXCIuIElmIHRoZSB0YWdcbiAgICogZGlkIG5vdCBjb250YWluIGEgc3ltYm9sIChpLmUuIHt7bXlWYWx1ZX19KSB0aGlzIGVsZW1lbnQgaXMgXCJuYW1lXCIuIEZvclxuICAgKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHRva2VuIGlzIGl0cyBcInZhbHVlXCIuIEZvciBtdXN0YWNoZSB0YWdzIHRoaXMgaXNcbiAgICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICAgKiB0aGlzIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICAgKiByZXNwZWN0aXZlbHksIG9mIHRoZSB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICAgKiBhcnJheSBvZiB0b2tlbnMgaW4gdGhlIHN1YnRyZWUgYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgYXRcbiAgICogd2hpY2ggdGhlIGNsb3NpbmcgdGFnIGZvciB0aGF0IHNlY3Rpb24gYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICBpZiAoIXRlbXBsYXRlKVxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgdmFyIHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXG4gICAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gICAgdmFyIHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgICB2YXIgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuXG4gICAgLy8gU3RyaXBzIGFsbCB3aGl0ZXNwYWNlIHRva2VucyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgbGluZVxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cbiAgICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XG4gICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKVxuICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgIG5vblNwYWNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZTtcbiAgICBmdW5jdGlvbiBjb21waWxlVGFncyAodGFnc1RvQ29tcGlsZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGFnc1RvQ29tcGlsZSA9IHRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwgMik7XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRhZ3ModGFncyB8fCBtdXN0YWNoZS50YWdzKTtcblxuICAgIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgdmFyIHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXG4gICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpXG4gICAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGhhc1RhZyA9IHRydWU7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XG4gICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICAgIHR5cGUgPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zIF07XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnLycpIHtcbiAgICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgICAgIGlmICghb3BlblNlY3Rpb24pXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgICAgaWYgKG9wZW5TZWN0aW9uWzFdICE9PSB2YWx1ZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgICAgY29tcGlsZVRhZ3ModmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gb3BlbiBzZWN0aW9ucyB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgIGlmIChvcGVuU2VjdGlvbilcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc2Nhbm5lci5wb3MpO1xuXG4gICAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gICAqIHRvIGEgc2luZ2xlIHRva2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgc3F1YXNoZWRUb2tlbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgbGFzdFRva2VuO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xuICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gICAqIHRva2VucyB0aGF0IHJlcHJlc2VudCBhIHNlY3Rpb24gaGF2ZSB0d28gYWRkaXRpb25hbCBpdGVtczogMSkgYW4gYXJyYXkgb2ZcbiAgICogYWxsIHRva2VucyB0aGF0IGFwcGVhciBpbiB0aGF0IHNlY3Rpb24gYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWxcbiAgICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbmVzdFRva2VucyAodG9rZW5zKSB7XG4gICAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICAgIHZhciBjb2xsZWN0b3IgPSBuZXN0ZWRUb2tlbnM7XG4gICAgdmFyIHNlY3Rpb25zID0gW107XG5cbiAgICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBjb2xsZWN0b3IgPSB0b2tlbls0XSA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBzZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG4gICAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBzdHJpbmcgc2Nhbm5lciB0aGF0IGlzIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHBhcnNlciB0byBmaW5kXG4gICAqIHRva2VucyBpbiB0ZW1wbGF0ZSBzdHJpbmdzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nhbm5lciAoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50YWlsID0gc3RyaW5nO1xuICAgIHRoaXMucG9zID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGFpbCBpcyBlbXB0eSAoZW5kIG9mIHN0cmluZykuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGVkIHRleHQgaWYgaXQgY2FuIG1hdGNoLCB0aGUgZW1wdHkgc3RyaW5nIG90aGVyd2lzZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW4gPSBmdW5jdGlvbiBzY2FuIChyZSkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZSk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgdmFyIHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgICB0aGlzLnBvcyArPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgYWxsIHRleHQgdW50aWwgdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYmUgbWF0Y2hlZC4gUmV0dXJuc1xuICAgKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbCA9IGZ1bmN0aW9uIHNjYW5VbnRpbCAocmUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAwOlxuICAgICAgICBtYXRjaCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMucG9zICs9IG1hdGNoLmxlbmd0aDtcblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBjb250ZXh0IGJ5IHdyYXBwaW5nIGEgdmlldyBvYmplY3QgYW5kXG4gICAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAgICovXG4gIGZ1bmN0aW9uIENvbnRleHQgKHZpZXcsIHBhcmVudENvbnRleHQpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuY2FjaGUgPSB7ICcuJzogdGhpcy52aWV3IH07XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29udGV4dCB1c2luZyB0aGUgZ2l2ZW4gdmlldyB3aXRoIHRoaXMgY29udGV4dFxuICAgKiBhcyB0aGUgcGFyZW50LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKHZpZXcpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICAgKiB1cCB0aGUgY29udGV4dCBoaWVyYXJjaHkgaWYgdGhlIHZhbHVlIGlzIGFic2VudCBpbiB0aGlzIGNvbnRleHQncyB2aWV3LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHZhbHVlID0gY2FjaGVbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgbmFtZXMsIGluZGV4LCBsb29rdXBIaXQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3O1xuICAgICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzaW5nIHRoZSBkb3Qgbm90aW9uIHBhdGggaW4gYG5hbWVgLCB3ZSBkZXNjZW5kIHRocm91Z2ggdGhlXG4gICAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUbyBiZSBjZXJ0YWluIHRoYXQgdGhlIGxvb2t1cCBoYXMgYmVlbiBzdWNjZXNzZnVsLCB3ZSBoYXZlIHRvXG4gICAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICAgKiB3ZSBhcmUgbG9va2luZyBmb3IuIFdlIHN0b3JlIHRoZSByZXN1bHQgaW4gYGxvb2t1cEhpdGAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgICAqIGB1bmRlZmluZWRgIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGxvb2tpbmcgdXAgcGFyZW50IGNvbnRleHRzLlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB3aGlsZSAodmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuYW1lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eSh2YWx1ZSwgbmFtZXNbaW5kZXhdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtuYW1lc1tpbmRleCsrXV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3W25hbWVdO1xuICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9va3VwSGl0KVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpXG4gICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBXcml0ZXIga25vd3MgaG93IHRvIHRha2UgYSBzdHJlYW0gb2YgdG9rZW5zIGFuZCByZW5kZXIgdGhlbSB0byBhXG4gICAqIHN0cmluZywgZ2l2ZW4gYSBjb250ZXh0LiBJdCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIHRlbXBsYXRlcyB0b1xuICAgKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAgICovXG4gIGZ1bmN0aW9uIFdyaXRlciAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgYW5kIHJldHVybnMgdGhlIGFycmF5IG9mIHRva2Vuc1xuICAgKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgIHZhciB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV07XG5cbiAgICBpZiAodG9rZW5zID09IG51bGwpXG4gICAgICB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZSArICc6JyArICh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpLmpvaW4oJzonKV0gPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gYHZpZXdgLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gICAqIG5hbWVzIGFuZCB0ZW1wbGF0ZXMgb2YgcGFydGlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIEl0IG1heVxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGxvYWQgcGFydGlhbCB0ZW1wbGF0ZXMgb24gdGhlIGZseVxuICAgKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5wYXJzZSh0ZW1wbGF0ZSk7XG4gICAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvdy1sZXZlbCBtZXRob2QgdGhhdCByZW5kZXJzIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCB1c2luZ1xuICAgKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgYG9yaWdpbmFsVGVtcGxhdGVgIGlzIG9ubHkgZXZlciB1c2VkIHRvIGV4dHJhY3QgdGhlIHBvcnRpb25cbiAgICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgZG9lc24ndCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLCB0aGlzIGFyZ3VtZW50IG1heVxuICAgKiBiZSBvbWl0dGVkLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnMgPSBmdW5jdGlvbiByZW5kZXJUb2tlbnMgKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgYnVmZmVyID0gJyc7XG5cbiAgICB2YXIgdG9rZW4sIHN5bWJvbCwgdmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgICBpZiAoc3ltYm9sID09PSAnIycpIHZhbHVlID0gdGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICdeJykgdmFsdWUgPSB0aGlzLnJlbmRlckludmVydGVkKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICc+JykgdmFsdWUgPSB0aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJyYnKSB2YWx1ZSA9IHRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnbmFtZScpIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb24gPSBmdW5jdGlvbiByZW5kZXJTZWN0aW9uICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW5kZXIgYW4gYXJiaXRyYXJ5IHRlbXBsYXRlXG4gICAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gICAgZnVuY3Rpb24gc3ViUmVuZGVyICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscyk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKHZhciBqID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGogPCB2YWx1ZUxlbmd0aDsgKytqKSB7XG4gICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUnKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB0aGUgc2VjdGlvbiBjb250YWlucy5cbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZCA9IGZ1bmN0aW9uIHJlbmRlckludmVydGVkICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBVc2UgSmF2YVNjcmlwdCdzIGRlZmluaXRpb24gb2YgZmFsc3kuIEluY2x1ZGUgZW1wdHkgYXJyYXlzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSlcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscykge1xuICAgIGlmICghcGFydGlhbHMpIHJldHVybjtcblxuICAgIHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLCBjb250ZXh0LCBwYXJ0aWFscywgdmFsdWUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZSA9IGZ1bmN0aW9uIHJhd1ZhbHVlICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlblsxXTtcbiAgfTtcblxuICBtdXN0YWNoZS5uYW1lID0gJ211c3RhY2hlLmpzJztcbiAgbXVzdGFjaGUudmVyc2lvbiA9ICcyLjMuMCc7XG4gIG11c3RhY2hlLnRhZ3MgPSBbICd7eycsICd9fScgXTtcblxuICAvLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG4gIHZhciBkZWZhdWx0V3JpdGVyID0gbmV3IFdyaXRlcigpO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAgICogYXJyYXkgb2YgdG9rZW5zIGl0IGNvbnRhaW5zLiBEb2luZyB0aGlzIGFoZWFkIG9mIHRpbWUgYXZvaWRzIHRoZSBuZWVkIHRvXG4gICAqIHBhcnNlIHRlbXBsYXRlcyBvbiB0aGUgZmx5IGFzIHRoZXkgYXJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVzdGFjaGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSwgdGFncyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGB0ZW1wbGF0ZWAgd2l0aCB0aGUgZ2l2ZW4gYHZpZXdgIGFuZCBgcGFydGlhbHNgIHVzaW5nIHRoZVxuICAgKiBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAwLjQueC4sXG4gIC8qZXNsaW50LWRpc2FibGUgKi8gLy8gZXNsaW50IHdhbnRzIGNhbWVsIGNhc2VkIGZ1bmN0aW9uIG5hbWVcbiAgbXVzdGFjaGUudG9faHRtbCA9IGZ1bmN0aW9uIHRvX2h0bWwgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgc2VuZCkge1xuICAgIC8qZXNsaW50LWVuYWJsZSovXG5cbiAgICB2YXIgcmVzdWx0ID0gbXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZW5kKSkge1xuICAgICAgc2VuZChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzI0NFxuICBtdXN0YWNoZS5lc2NhcGUgPSBlc2NhcGVIdG1sO1xuXG4gIC8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbiAgbXVzdGFjaGUuU2Nhbm5lciA9IFNjYW5uZXI7XG4gIG11c3RhY2hlLkNvbnRleHQgPSBDb250ZXh0O1xuICBtdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbiAgcmV0dXJuIG11c3RhY2hlO1xufSkpO1xuIiwiZnVuY3Rpb24gZG9jdW1lbnRfcmVhZHkoZm4pIHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59IiwiKGZ1bmN0aW9uKHdpbmRvdyl7XG5cblx0dmFyIFNDUk9MTF9MT09QID0gW10sXG5cdFx0c2Nyb2xsVG9wID0gLTEsXG5cdFx0cmVxdWVzdEZyYW1lID0gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIEZhbGxiYWNrLCB5b3UgY2FuIGV2ZW4gZmFsbGJhY2sgdG8gb25zY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuXHRmdW5jdGlvbiBsb29wKCkge1xuXG5cdFx0Ly8gaWYgc2Nyb2xsVG9wIGFuZCB3aW5kb3cncyBzY3JvbGwgcG9zaXRpb24gYXJlIGVxdWFsLCByZXR1cm4gYW5kIHRyeSBhZ2Fpbi5cblx0XHRpZiAoc2Nyb2xsVG9wID09IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuXHRcdFx0cmVxdWVzdEZyYW1lKGxvb3ApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIHNldCBzY3JvbGxUb3AgdG8gd2luZG93J3Mgc2Nyb2xsIHBvc2l0aW9uLlxuXHRcdHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdC8vIGRvIHlvdXIgbWFnaWNcblx0XHRTQ1JPTExfTE9PUC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuXHRcdFx0aWYgKHR5cGVvZiBmbiA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0Zm4oc2Nyb2xsVG9wKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIHJ1biBsb29wIGFnYWluXG5cdFx0cmVxdWVzdEZyYW1lKGxvb3ApO1xuXG5cdH1cblxuXHQvLyBpbml0aWFsaXplIGxvb3AoKVxuXHRsb29wKCk7XG5cdFxuXHR3aW5kb3cuU0NST0xMX0xPT1AgPSBTQ1JPTExfTE9PUDtcbiAgICBcbn0pKHRoaXMpOyIsIihmdW5jdGlvbiAod2luZG93KSB7XG5cblxuXHR2YXIgQVBQID0gZnVuY3Rpb24oRlJBTUVTKSB7XG5cblx0XHR0aGlzLmFjdGl2ZUZyYW1lID0gMDtcblx0XHR0aGlzLmhlYWRsaW5lVHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGxpbmUtdHJhY2snKTtcblx0XHR0aGlzLmhlYWRsaW5lcyA9IFtdO1xuXHRcdHRoaXMuZnJhbWVzV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZXMnKTtcblx0XHR0aGlzLmZyYW1lcyA9IEZSQU1FUztcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblx0XHR0aGlzLmZyYW1lRWxzID0gW107XG5cdFx0dGhpcy5uZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcblx0XHR0aGlzLnByZXZpb3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJyk7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0fTtcblxuXHRBUFAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMuYnVpbGRDb250ZW50KCk7XG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXHRcdHRoaXMuYW5pbWF0ZUludHJvVGV4dCgpO1xuXHRcdHRoaXMubW9uaXRvckZyYW1lcygpO1xuXHRcdFxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcblxuXHR9O1xuXHRcblx0QVBQLnByb3RvdHlwZS5hbmltYXRlSW50cm9UZXh0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcGhyYXNlcyA9IFtcblx0XHRcdFx0J3RoaW5ncycsXG5cdFx0XHRcdCdmcmFtZXdvcmtzJyxcblx0XHRcdFx0J3dpZGdldHMnLFxuXHRcdFx0XHQndWkgY2FuZHknLFxuXHRcdFx0XHQnbWFwcycsXG5cdFx0XHRcdCdwYXR0ZXJuIGxpYnJhcmllcycsXG5cdFx0XHRcdCdlbWFpbHMnLFxuXHRcdFx0XSxcblx0XHRcdGN1cnJlbnQgPSAwLFxuXHRcdFx0dGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWludHJvLXRleHQnKTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZVBocmFzZSgpe1xuXG5cdFx0XHR2YXIgY3VycmVudFBocmFzZSA9IHBocmFzZXNbY3VycmVudF0sXG5cdFx0XHRcdGluZGV4ID0gY3VycmVudFBocmFzZS5sZW5ndGgsXG5cdFx0XHRcdGN1cnJlbnRQaHJhc2VEZWxldGVkID0gZmFsc2U7XG5cblx0XHRcdGN1cnJlbnQgKz0gMTtcblxuXHRcdFx0dmFyIG5leHRJbmRleCA9ICggY3VycmVudCA9PT0gcGhyYXNlcy5sZW5ndGggKSA/IDAgOiBjdXJyZW50O1xuXHRcdFx0XHRuZXh0UGhyYXNlID0gcGhyYXNlc1tuZXh0SW5kZXhdLFxuXHRcdFx0XHRuZXh0UGhyYXNlRmluaXNoZWQgPSBmYWxzZTtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coICd1cGRhdGVQaHJhc2UoKScsIGN1cnJlbnRQaHJhc2UsIG5leHRQaHJhc2UgKTtcblxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlVGV4dCgpIHtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCBpbmRleCA+IC0xICYmICEgY3VycmVudFBocmFzZURlbGV0ZWQgKXtcblx0XHRcdFx0XHRcdHRleHRFbC5pbm5lclRleHQgPSBjdXJyZW50UGhyYXNlLnN1YnN0cmluZygwLGluZGV4KTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQaHJhc2Uuc3Vic3RyaW5nKDAsaW5kZXgpKTtcblx0XHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRQaHJhc2VEZWxldGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIGN1cnJlbnRQaHJhc2VEZWxldGVkICYmIGluZGV4IDw9IG5leHRQaHJhc2UubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0dGV4dEVsLmlubmVyVGV4dCA9IG5leHRQaHJhc2Uuc3Vic3RyaW5nKDAsaW5kZXgpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cobmV4dFBocmFzZS5zdWJzdHJpbmcoMCxpbmRleCkpO1xuXHRcdFx0XHRcdFx0aW5kZXgrKztcblxuXHRcdFx0XHRcdFx0aWYgKCBpbmRleCA+IG5leHRQaHJhc2UubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0XHRuZXh0UGhyYXNlRmluaXNoZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggY3VycmVudFBocmFzZURlbGV0ZWQgJiYgbmV4dFBocmFzZUZpbmlzaGVkICkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCh1cGRhdGVQaHJhc2UsIDIwMDApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdH0sIDIwKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50ID0gbmV4dEluZGV4O1xuXG5cdFx0XHR1cGRhdGVUZXh0KCk7XG5cblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCB1cGRhdGVQaHJhc2UsIDIwMDAgKTtcblxuXHR9O1xuXG5cdEFQUC5wcm90b3R5cGUuYnVpbGRDb250ZW50ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgVEhBVCA9IHRoaXMsXG5cdFx0XHR0ZW1wbGF0ZXMgPSB7XG5cdFx0XHRcdHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZS1wcm9qZWN0JykuaW5uZXJIVE1MLFxuXHRcdFx0XHRpbnRybzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBsYXRlLWludHJvJykuaW5uZXJIVE1MLFxuXHRcdFx0XHRvdXRybzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBsYXRlLW91dHJvJykuaW5uZXJIVE1MXG5cdFx0XHR9O1xuXHRcdFxuXHRcdHRoaXMuZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lLCBpKSB7XG5cblx0XHRcdC8vIHBvcHVsYXRlIGhlYWRsaW5lc1xuXHRcdFx0dmFyIGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRoZWFkbGluZS5jbGFzc05hbWUgPSAnaGVhZGxpbmUtaXRlbSBhbmltYXRlICcgKyAoIGkgPT09IDAgPyAnYWN0aXZlJyA6ICcnICk7XG5cdFx0XHRoZWFkbGluZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImhlYWRsaW5lLXRleHRcIj4nICsgZnJhbWUuaGVhZGxpbmUgKyAnPC9kaXY+Jztcblx0XHRcdFRIQVQuaGVhZGxpbmVUcmFjay5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cdFx0XHRUSEFULmhlYWRsaW5lcy5wdXNoKGhlYWRsaW5lKTtcblxuXHRcdFx0Ly8gcG9wdWxhdGUgZnJhbWVzXG5cdFx0XHR2YXIgZnJhbWVEYXRhID0gT2JqZWN0LmFzc2lnbiggZnJhbWUsIHsgaTogaSB9ICksXG5cdFx0XHRcdHRlbXBsYXRlID0gZnJhbWUudGVtcGxhdGUgPyB0ZW1wbGF0ZXNbZnJhbWUudGVtcGxhdGVdIDogdGVtcGxhdGVzLnByb2plY3QsXG5cdFx0XHRcdGZyYW1lSFRNTCA9IE11c3RhY2hlLnJlbmRlciggdGVtcGxhdGUsIGZyYW1lRGF0YSApO1xuXG5cdFx0XHRUSEFULmZyYW1lc1dyYXAuaW5uZXJIVE1MICs9IGZyYW1lSFRNTDtcblxuXHRcdH0pO1xuXG5cdFx0dGhpcy5mcmFtZUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmFtZScpO1xuXHRcdFxuXHR9O1xuXG5cdEFQUC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBUSEFUID0gdGhpcztcblxuXHRcdC8vIGNsaWNraW5nIGxldHMgY2hhdCBidXR0b24gYXV0b21hdGljYWxseSBmb2N1c2VzIGZpcnN0IGZvcm0gZmllbGRcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZj1cIiNsZXRzLWNoYXRcIl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmssaSl7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oIDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXRzLWNoYXQnKS5vZmZzZXRUb3AgKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS5mb2N1cygpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHQvLyBhcnJvdyBrZXlzIHNjcm9sbCBiZXR3ZWVuIHByb2plY3RzXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcblx0XHRcdHZhciBET1dOID0gNDAsIFVQID0gMzgsXG5cdFx0XHRcdGZyYW1lO1xuXG5cdFx0XHRpZiAoIGV2ZW50LmtleUNvZGUgIT09IERPV04gJiYgZXZlbnQua2V5Q29kZSAhPT0gVVAgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRcdGZyYW1lID0gVEhBVC5hY3RpdmVGcmFtZSArIDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgVVA6XG5cdFx0XHRcdFx0ZnJhbWUgPSBUSEFULmFjdGl2ZUZyYW1lIC0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGlkID0gVEhBVC5mcmFtZXNbZnJhbWVdLmlkLFxuXHRcdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsZWwub2Zmc2V0VG9wKTtcblxuXHRcdH0pO1xuXG5cdH07XG5cblx0QVBQLnByb3RvdHlwZS5tb25pdG9yRnJhbWVzID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgVEhBVCA9IHRoaXM7XG5cblx0XHR0aGlzLmZyYW1lRWxzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lRWwsIGkpIHtcblxuXHRcdFx0dmFyIGZyYW1lID0gVEhBVC5mcmFtZXNbaV0sXG5cdFx0XHRcdGNvbG9yID0gZnJhbWUuY29sb3IgPyBmcmFtZS5jb2xvciA6ICcjMjIyJyxcblx0XHRcdFx0ZmlsbCA9IGZyYW1lLmZpbGwgPyBmcmFtZS5maWxsIDogJyNlOGU4ZTgnLFxuXHRcdFx0XHR2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby0nICsgaSk7XG5cblx0XHRcdHVwZGF0ZUZyYW1lKHdpbmRvdy5wYWdlWU9mZnNldCk7XG5cblx0XHRcdFNDUk9MTF9MT09QLnB1c2godXBkYXRlRnJhbWUpO1xuXHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVGcmFtZShzY3JvbGxUb3ApIHtcblx0XHRcdFx0dmFyIHRvcCA9IGZyYW1lRWwub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0IC8gMixcblx0XHRcdFx0XHRib3R0b20gPSAoZnJhbWVFbC5vZmZzZXRIZWlnaHQgKyBmcmFtZUVsLm9mZnNldFRvcCkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuXHRcblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+PSB0b3AgJiYgc2Nyb2xsVG9wIDwgYm90dG9tKSB7XG5cdFxuXHRcdFx0XHRcdGlmICggISBmcmFtZUVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGZyYW1lRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFxuXHRcdFx0XHRcdFx0VEhBVC5hY3RpdmVGcmFtZSA9IGk7XG5cdFx0XHRcdFx0XHRUSEFULmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmaWxsO1xuXHRcdFx0XHRcdFx0VEhBVC51cGRhdGVNYXNrKGZyYW1lLCBpKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKCBpID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpcnN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICggaSA9PT0gVEhBVC5mcmFtZXMubGVuZ3RoIC0gMSApIHtcblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsYXN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xhc3QtZnJhbWUnKTtcblx0XHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0XHRpZiAoIHZpZGVvICkge1xuXHRcdFx0XHRcdFx0XHR2aWRlby5wbGF5KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XG5cdFx0XHRcdFx0ZnJhbWVFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRpZiAoIHZpZGVvICkge1xuXHRcdFx0XHRcdFx0dmlkZW8ucGF1c2UoKTtcblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0QVBQLnByb3RvdHlwZS51cGRhdGVNYXNrID0gZnVuY3Rpb24oZnJhbWUsIGluZGV4KSB7XG5cblx0XHR2YXIgVEhBVCA9IHRoaXMsXG5cdFx0XHRuZXh0ID0gVEhBVC5uZXh0LFxuXHRcdFx0cHJldiA9IFRIQVQucHJldmlvdXM7XG5cdFx0XHRcblx0XHQvLyBDaGFuZ2UgaGVhZGxpbmVcblx0XHRUSEFULmhlYWRsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRsaW5lLCBpKXtcblx0XHRcdGlmICggaSA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGVhZGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0VEhBVC5oZWFkbGluZVRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyAoaW5kZXggKiAtMTApICsgJ3Z3LDApJztcblx0XHRUSEFULmhlYWRsaW5lVHJhY2suc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChpbmRleCAqIC0xMCkgKyAndncsMCknO1xuXHRcdFRIQVQuaGVhZGxpbmVUcmFjay5zdHlsZS5tb3pUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cdFx0VEhBVC5oZWFkbGluZVRyYWNrLnN0eWxlLm1zVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChpbmRleCAqIC0xMCkgKyAndncsMCknO1xuXHRcdFRIQVQuaGVhZGxpbmVUcmFjay5zdHlsZS5vVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChpbmRleCAqIC0xMCkgKyAndncsMCknO1xuXG5cdFx0Ly8gQ2hhbmdlIGFycm93IGxpbmtzXG5cdFx0c3dpdGNoKGluZGV4KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHByZXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHRcdG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRcdG5leHQuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgVEhBVC5mcmFtZXNbaW5kZXggKyAxXS5pZCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAoVEhBVC5mcmFtZXMubGVuZ3RoIC0gMSk6XG5cdFx0XHRcdHByZXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRcdHByZXYuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgVEhBVC5mcmFtZXNbaW5kZXggLSAxXS5pZCk7XG5cdFx0XHRcdG5leHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cHJldi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0cHJldi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBUSEFULmZyYW1lc1tpbmRleCAtIDFdLmlkKTtcblx0XHRcdFx0bmV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0bmV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBUSEFULmZyYW1lc1tpbmRleCArIDFdLmlkKTtcblx0XHR9XG5cblx0fTtcblxuXHRkb2N1bWVudF9yZWFkeSggbmV3IEFQUChBUFBfRlJBTUVTKSApO1xuXG59KSh0aGlzKTsiXX0=
