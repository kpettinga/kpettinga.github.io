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
            id: 'wallcore',
            headline: 'Wallcore.com',
            text: 'Wallcore is an online picture framing startup that partners with local frame shops. I worked with the partners to design and implement a robust web app with which users were able to mat and frame their images, customize design options, and pickup the completed product from their local framer.',
            url: 'https://www.wallcore.com',
            urlText: 'wallcore.com',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/wallcore-design-tool.webm',
                mp4: 'assets/video/wallcore-design-tool.mp4',
                poster: 'assets/images/wallcore-design-tool.png',
                width: '1440',
                height: '810'
            },
            tags: [
                { name: 'E-Commerce' },
                { name: 'Custom Picture Framing' },
                { name: 'Craft CMS' },
                { name: 'ReactJS' },
                { name: 'Vue.js', last: true  }
            ],
            tagName: tagNameFn,
            role: 'Lead Developer',
            color: '#0085de',
            fill: '#0085de'
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
                poster: 'assets/images/hester-project-scroll.png',
                width: '1584',
                height: '898'
            },
            tags: [
                { name: 'Non-Profit' },
                { name: 'Community Engagement' },
                { name: 'Wordpress' },
                { name: 'Mapbox.js' },
                { name: 'Vue.js', last: true  }
            ],
            tagName: tagNameFn,
            role: 'Lead Developer',
            color: '#21b07a',
            fill: '#21b07a'
        },
        { 
            id: 'transit-center',
            headline: 'TransitCenter',
            text: 'TransitCenter is a foundation dedicated to urban mobility. They needed a website which would help them communicate with communities and policy makers in urban areas to affect change. We developed a modular system of content with which they can publish online reports about transit use. In addition, the site is also a place to search grant recipients, see upcoming events, and read their blog.',
            // url: 'http://transitcenter.org/',
            // urlText: 'transitcenter.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/transit-center-flow.webm',
                mp4: 'assets/video/transit-center-flow.mp4',
                poster: 'assets/images/transit-center-flow.png',
                width: '1422',
                height: '810'
            },
            tags: [
                { name: 'Non-Profit' },
                { name: 'Transit' },
                { name: 'Wordpress' },
                { name: 'AJAX' },
                { name: 'Modular Content', last: true }
            ],
            tagName: tagNameFn,
            role: 'Lead Developer',         
            color: '#5E28B2',
            fill: '#5E28B2'
        },
        { 
            id: 'gibney',
            headline: 'Gibney',
            text: 'Gibney, formerly Gibney Dance, is an organization whose mission is to bring the possibility of movement where it otherwise would not exist. Their new site seeks to emphasize the full scope of Gibney, acting as a portal connecting users to the myriads of performances, workshops, and weekly events.',
            // url: 'http://gibneydance.org/',
            // urlText: 'gibneydance.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/gibney-flow.webm',
                mp4: 'assets/video/gibney-flow.mp4',
                poster: 'assets/images/gibney-flow.png',
                width: '1422',
                height: '958'
            },
            tags: [
                { name: 'Performing Arts' },
                { name: 'Wordpress' },
                { name: 'Events Calendar' },
                { name: 'slick.js', last: true }
            ],
            tagName: tagNameFn,
            role: 'Lead Developer',
            color: '#000000',
            fill: '#111'
        },
        { 
            id: 'orpheus',
            headline: 'Orpheus Chamber Orchestra',
            text: "Orpheus is a a grammy-winning, conductorless orchestra based in New York City. They needed a website to keep patrons informed about their activities and performances around the world. We created a site which is built on a system of customizable tiles and colors the admins can use to create dynamic pages. It is also a source of information about the group's members, discography, and ticket outlets.",
            // url: 'http://orpheusnyc.org/',
            // urlText: 'orpheusnyc.org',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/orpheus-flow-1.webm',
                mp4: 'assets/video/orpheus-flow-1.mp4',
                poster: 'assets/images/orpheus-flow-1.png',
                width: '1678',
                height: '942'
            },
            tags: [
                { name: 'Performing Arts' },
                { name: 'Wordpress' },
                { name: 'Events Calendar' },
                { name: 'Modular Content', last: true },
            ],
            tagName: tagNameFn,
            role: 'Lead Developer',         
            color: '#C48014',
            fill: '#C48014'
        },
        { 
            id: 'cgu',
            headline: 'Claremont Graduate University',
            text: 'Claremont Graduate University (CGU) is a research-based graduate institution based in Claremont, CA. After a brand "refresh" and extension, we sought to build a site which could act as a portal for faculty, visitors, and potential and current students. A suite of Wordpress themes was ultimately delivered which CGU could use to build everything from small sub-domain sites to faculty blogs. In addition, we built a brand site which acts as a tool for maintaining visual consistency accross the varied digital and print material developed by CGU staff &rarr; <a href="https://brand.cgu.edu/" target="_blank"><em>brand.cgu.edu</em></a>.',
            url: 'http://cgu.edu/',
            urlText: 'cgu.edu',
            video: {
                atts: 'loop muted preload="preload"',
                webm: 'assets/video/cgu-flow.webm',
                mp4: 'assets/video/cgu-flow.mp4',
                poster: 'assets/images/cgu-flow.png',
                width: '1424',
                height: '956'
            },
            tags: [
                { name: 'Higher Education' },
                { name: 'Wordpress' },
                { name: 'Pattern Portfolio' },
                { name: 'AJAX', last: true }
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
				'sparkles',
				'eye candy',
				'zinggggg',
				'goosebumps',
				'zen',
				'rainbows',
			],
			colors = ['#0085de', '#21b07a', '#5E28B2', '#000000', '#C48014', '#AF1E27'],
			current = Math.floor(Math.random() * phrases.length),
			color = 0,
			textEl = document.getElementById('js-intro-text'),
			typingSpeed = 20,
			nextWordSpeed = 2000;

		textEl.innerText = phrases[current];

		function updatePhrase(){

			var currentPhrase = textEl.innerText,
				index = currentPhrase.length,
				currentPhraseDeleted = false;

			current += 1;
			color += 1;

			var nextIndex 		= ( current === phrases.length ) ? 0 : current,
				nextColorIndex 	= ( color === colors.length ) ? 0 : color,
				nextPhrase 		= phrases[nextIndex],
				nextColor 		= colors[nextColorIndex],
				nextPhraseFinished = false;

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
						textEl.style.color = nextColor;
						textEl.innerText = nextPhrase.substring(0,index);
						// console.log(nextPhrase.substring(0,index));
						index++;

						if ( index > nextPhrase.length ) {
							nextPhraseFinished = true;
						}
					}

					if ( currentPhraseDeleted && nextPhraseFinished ) {
						setTimeout(updatePhrase, nextWordSpeed);
					} else {
						updateText();
					}
						
				}, typingSpeed);

			}

			current = nextIndex;
			color = nextColorIndex;

			updateText();

		}

		setTimeout( updatePhrase, nextWordSpeed * 2 );

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
				video = document.getElementById('video-' + i),
				videoPromise;

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
						
						switch(i) {
							case 0:
								document.body.classList.add('first-frame');
								document.body.classList.remove('middle-frame');
								document.body.classList.remove('last-frame');
								break;
							case THAT.frames.length - 1:
								document.body.classList.add('last-frame');
								document.body.classList.remove('middle-frame');
								document.body.classList.remove('first-frame');
								break;
							default :
								document.body.classList.add('middle-frame');
								document.body.classList.remove('first-frame');
								document.body.classList.remove('last-frame');
						}
	
						if ( video ) {
							videoPromise = video.play();
							if ( videoPromise !== undefined ) {
								videoPromise.then(function(){
									// playback started!
								}).catch(function(){
									// render controls
									video.setAttribute('controls', 'controls');
								});
							}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fcG9seWZpbGxzLmpzIiwiX2FwcF9kYXRhLmpzIiwiX211c3RhY2hlLmpzIiwiX3JlYWR5LmpzIiwiX3Njcm9sbExvb3AuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmcgfHwgd2luZG93O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5pZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIE11c3QgYmUgd3JpdGFibGU6IHRydWUsIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCBcImFzc2lnblwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgdmFyQXJncykgeyAvLyAubGVuZ3RoIG9mIGZ1bmN0aW9uIGlzIDJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHsgLy8gVHlwZUVycm9yIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICBcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gIFxuICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHsgLy8gU2tpcCBvdmVyIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXG4gICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0iLCIoZnVuY3Rpb24od2luZG93KXtcbiAgICBcbiAgICBmdW5jdGlvbiB0YWdOYW1lRm4oKSB7XG4gICAgICAgIHJldHVybiAoIHRoaXMubGFzdCApID8gdGhpcy5uYW1lIDogdGhpcy5uYW1lICsgJzxici8+JztcbiAgICB9XG5cbiAgICB2YXIgQVBQX0ZSQU1FUyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdoZWxsbycsXG4gICAgICAgICAgICBoZWFkbGluZTogJzxzbWFsbD5TZWUgdGhlIGdvb2RzPC9zbWFsbD4nLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdpbnRybydcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAnd2FsbGNvcmUnLFxuICAgICAgICAgICAgaGVhZGxpbmU6ICdXYWxsY29yZS5jb20nLFxuICAgICAgICAgICAgdGV4dDogJ1dhbGxjb3JlIGlzIGFuIG9ubGluZSBwaWN0dXJlIGZyYW1pbmcgc3RhcnR1cCB0aGF0IHBhcnRuZXJzIHdpdGggbG9jYWwgZnJhbWUgc2hvcHMuIEkgd29ya2VkIHdpdGggdGhlIHBhcnRuZXJzIHRvIGRlc2lnbiBhbmQgaW1wbGVtZW50IGEgcm9idXN0IHdlYiBhcHAgd2l0aCB3aGljaCB1c2VycyB3ZXJlIGFibGUgdG8gbWF0IGFuZCBmcmFtZSB0aGVpciBpbWFnZXMsIGN1c3RvbWl6ZSBkZXNpZ24gb3B0aW9ucywgYW5kIHBpY2t1cCB0aGUgY29tcGxldGVkIHByb2R1Y3QgZnJvbSB0aGVpciBsb2NhbCBmcmFtZXIuJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LndhbGxjb3JlLmNvbScsXG4gICAgICAgICAgICB1cmxUZXh0OiAnd2FsbGNvcmUuY29tJyxcbiAgICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICAgICAgYXR0czogJ2xvb3AgbXV0ZWQgcHJlbG9hZD1cInByZWxvYWRcIicsXG4gICAgICAgICAgICAgICAgd2VibTogJ2Fzc2V0cy92aWRlby93YWxsY29yZS1kZXNpZ24tdG9vbC53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vd2FsbGNvcmUtZGVzaWduLXRvb2wubXA0JyxcbiAgICAgICAgICAgICAgICBwb3N0ZXI6ICdhc3NldHMvaW1hZ2VzL3dhbGxjb3JlLWRlc2lnbi10b29sLnBuZycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNDQwJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MTAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0UtQ29tbWVyY2UnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQ3VzdG9tIFBpY3R1cmUgRnJhbWluZycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdDcmFmdCBDTVMnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUmVhY3RKUycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdWdWUuanMnLCBsYXN0OiB0cnVlICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZUZuLFxuICAgICAgICAgICAgcm9sZTogJ0xlYWQgRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwODVkZScsXG4gICAgICAgICAgICBmaWxsOiAnIzAwODVkZSdcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAnaGVzdGVyLXN0cmVldCcsXG4gICAgICAgICAgICBoZWFkbGluZTogJ0hlc3RlciBTdHJlZXQgQ29sbGFib3JhdGl2ZScsXG4gICAgICAgICAgICB0ZXh0OiAnSGVzdGVyIFN0cmVldCBpcyBhbiB1cmJhbiBwbGFubmluZywgZGVzaWduIGFuZCBkZXZlbG9wbWVudCBub25wcm9maXQgYmFzZWQgaW4gdGhlIExvd2VyIEVhc3QgU2lkZSBvZiBNYW5oYXR0YW4uIEFmdGVyIGEgcmVicmFuZGluZyBwcm9jZXNzLCB3ZSBidWlsdCBhIHdlYnNpdGUgd2hpY2ggYWxsb3dzIHRoZW0gdG8gc2hvd2Nhc2UgdGhlaXIgaW1wYWN0IG9uIHRoZSBjb21tdW5pdGllcyB0aGV5IHNlcnZlLicsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vaGVzdGVyc3RyZWV0Lm9yZy8nLFxuICAgICAgICAgICAgdXJsVGV4dDogJ2hlc3RlcnN0cmVldC5vcmcnLFxuICAgICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgICAgICBhdHRzOiAnbG9vcCBtdXRlZCBwcmVsb2FkPVwicHJlbG9hZFwiJyxcbiAgICAgICAgICAgICAgICB3ZWJtOiAnYXNzZXRzL3ZpZGVvL2hlc3Rlci1wcm9qZWN0LXNjcm9sbC53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vaGVzdGVyLXByb2plY3Qtc2Nyb2xsLm1wNCcsXG4gICAgICAgICAgICAgICAgcG9zdGVyOiAnYXNzZXRzL2ltYWdlcy9oZXN0ZXItcHJvamVjdC1zY3JvbGwucG5nJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE1ODQnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzg5OCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9uLVByb2ZpdCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdDb21tdW5pdHkgRW5nYWdlbWVudCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdXb3JkcHJlc3MnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTWFwYm94LmpzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Z1ZS5qcycsIGxhc3Q6IHRydWUgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnTGVhZCBEZXZlbG9wZXInLFxuICAgICAgICAgICAgY29sb3I6ICcjMjFiMDdhJyxcbiAgICAgICAgICAgIGZpbGw6ICcjMjFiMDdhJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICd0cmFuc2l0LWNlbnRlcicsXG4gICAgICAgICAgICBoZWFkbGluZTogJ1RyYW5zaXRDZW50ZXInLFxuICAgICAgICAgICAgdGV4dDogJ1RyYW5zaXRDZW50ZXIgaXMgYSBmb3VuZGF0aW9uIGRlZGljYXRlZCB0byB1cmJhbiBtb2JpbGl0eS4gVGhleSBuZWVkZWQgYSB3ZWJzaXRlIHdoaWNoIHdvdWxkIGhlbHAgdGhlbSBjb21tdW5pY2F0ZSB3aXRoIGNvbW11bml0aWVzIGFuZCBwb2xpY3kgbWFrZXJzIGluIHVyYmFuIGFyZWFzIHRvIGFmZmVjdCBjaGFuZ2UuIFdlIGRldmVsb3BlZCBhIG1vZHVsYXIgc3lzdGVtIG9mIGNvbnRlbnQgd2l0aCB3aGljaCB0aGV5IGNhbiBwdWJsaXNoIG9ubGluZSByZXBvcnRzIGFib3V0IHRyYW5zaXQgdXNlLiBJbiBhZGRpdGlvbiwgdGhlIHNpdGUgaXMgYWxzbyBhIHBsYWNlIHRvIHNlYXJjaCBncmFudCByZWNpcGllbnRzLCBzZWUgdXBjb21pbmcgZXZlbnRzLCBhbmQgcmVhZCB0aGVpciBibG9nLicsXG4gICAgICAgICAgICAvLyB1cmw6ICdodHRwOi8vdHJhbnNpdGNlbnRlci5vcmcvJyxcbiAgICAgICAgICAgIC8vIHVybFRleHQ6ICd0cmFuc2l0Y2VudGVyLm9yZycsXG4gICAgICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgICAgIGF0dHM6ICdsb29wIG11dGVkIHByZWxvYWQ9XCJwcmVsb2FkXCInLFxuICAgICAgICAgICAgICAgIHdlYm06ICdhc3NldHMvdmlkZW8vdHJhbnNpdC1jZW50ZXItZmxvdy53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vdHJhbnNpdC1jZW50ZXItZmxvdy5tcDQnLFxuICAgICAgICAgICAgICAgIHBvc3RlcjogJ2Fzc2V0cy9pbWFnZXMvdHJhbnNpdC1jZW50ZXItZmxvdy5wbmcnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTQyMicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODEwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ3M6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb24tUHJvZml0JyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1RyYW5zaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV29yZHByZXNzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0FKQVgnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTW9kdWxhciBDb250ZW50JywgbGFzdDogdHJ1ZSB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZUZuLFxuICAgICAgICAgICAgcm9sZTogJ0xlYWQgRGV2ZWxvcGVyJywgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiAnIzVFMjhCMicsXG4gICAgICAgICAgICBmaWxsOiAnIzVFMjhCMidcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAnZ2libmV5JyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnR2libmV5JyxcbiAgICAgICAgICAgIHRleHQ6ICdHaWJuZXksIGZvcm1lcmx5IEdpYm5leSBEYW5jZSwgaXMgYW4gb3JnYW5pemF0aW9uIHdob3NlIG1pc3Npb24gaXMgdG8gYnJpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1vdmVtZW50IHdoZXJlIGl0IG90aGVyd2lzZSB3b3VsZCBub3QgZXhpc3QuIFRoZWlyIG5ldyBzaXRlIHNlZWtzIHRvIGVtcGhhc2l6ZSB0aGUgZnVsbCBzY29wZSBvZiBHaWJuZXksIGFjdGluZyBhcyBhIHBvcnRhbCBjb25uZWN0aW5nIHVzZXJzIHRvIHRoZSBteXJpYWRzIG9mIHBlcmZvcm1hbmNlcywgd29ya3Nob3BzLCBhbmQgd2Vla2x5IGV2ZW50cy4nLFxuICAgICAgICAgICAgLy8gdXJsOiAnaHR0cDovL2dpYm5leWRhbmNlLm9yZy8nLFxuICAgICAgICAgICAgLy8gdXJsVGV4dDogJ2dpYm5leWRhbmNlLm9yZycsXG4gICAgICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgICAgIGF0dHM6ICdsb29wIG11dGVkIHByZWxvYWQ9XCJwcmVsb2FkXCInLFxuICAgICAgICAgICAgICAgIHdlYm06ICdhc3NldHMvdmlkZW8vZ2libmV5LWZsb3cud2VibScsXG4gICAgICAgICAgICAgICAgbXA0OiAnYXNzZXRzL3ZpZGVvL2dpYm5leS1mbG93Lm1wNCcsXG4gICAgICAgICAgICAgICAgcG9zdGVyOiAnYXNzZXRzL2ltYWdlcy9naWJuZXktZmxvdy5wbmcnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTQyMicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTU4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ3M6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdQZXJmb3JtaW5nIEFydHMnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV29yZHByZXNzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0V2ZW50cyBDYWxlbmRhcicgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdzbGljay5qcycsIGxhc3Q6IHRydWUgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVGbixcbiAgICAgICAgICAgIHJvbGU6ICdMZWFkIERldmVsb3BlcicsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgICAgZmlsbDogJyMxMTEnXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZDogJ29ycGhldXMnLFxuICAgICAgICAgICAgaGVhZGxpbmU6ICdPcnBoZXVzIENoYW1iZXIgT3JjaGVzdHJhJyxcbiAgICAgICAgICAgIHRleHQ6IFwiT3JwaGV1cyBpcyBhIGEgZ3JhbW15LXdpbm5pbmcsIGNvbmR1Y3Rvcmxlc3Mgb3JjaGVzdHJhIGJhc2VkIGluIE5ldyBZb3JrIENpdHkuIFRoZXkgbmVlZGVkIGEgd2Vic2l0ZSB0byBrZWVwIHBhdHJvbnMgaW5mb3JtZWQgYWJvdXQgdGhlaXIgYWN0aXZpdGllcyBhbmQgcGVyZm9ybWFuY2VzIGFyb3VuZCB0aGUgd29ybGQuIFdlIGNyZWF0ZWQgYSBzaXRlIHdoaWNoIGlzIGJ1aWx0IG9uIGEgc3lzdGVtIG9mIGN1c3RvbWl6YWJsZSB0aWxlcyBhbmQgY29sb3JzIHRoZSBhZG1pbnMgY2FuIHVzZSB0byBjcmVhdGUgZHluYW1pYyBwYWdlcy4gSXQgaXMgYWxzbyBhIHNvdXJjZSBvZiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ3JvdXAncyBtZW1iZXJzLCBkaXNjb2dyYXBoeSwgYW5kIHRpY2tldCBvdXRsZXRzLlwiLFxuICAgICAgICAgICAgLy8gdXJsOiAnaHR0cDovL29ycGhldXNueWMub3JnLycsXG4gICAgICAgICAgICAvLyB1cmxUZXh0OiAnb3JwaGV1c255Yy5vcmcnLFxuICAgICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgICAgICBhdHRzOiAnbG9vcCBtdXRlZCBwcmVsb2FkPVwicHJlbG9hZFwiJyxcbiAgICAgICAgICAgICAgICB3ZWJtOiAnYXNzZXRzL3ZpZGVvL29ycGhldXMtZmxvdy0xLndlYm0nLFxuICAgICAgICAgICAgICAgIG1wNDogJ2Fzc2V0cy92aWRlby9vcnBoZXVzLWZsb3ctMS5tcDQnLFxuICAgICAgICAgICAgICAgIHBvc3RlcjogJ2Fzc2V0cy9pbWFnZXMvb3JwaGV1cy1mbG93LTEucG5nJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE2NzgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzk0MidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUGVyZm9ybWluZyBBcnRzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1dvcmRwcmVzcycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFdmVudHMgQ2FsZW5kYXInIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTW9kdWxhciBDb250ZW50JywgbGFzdDogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVGbixcbiAgICAgICAgICAgIHJvbGU6ICdMZWFkIERldmVsb3BlcicsICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjogJyNDNDgwMTQnLFxuICAgICAgICAgICAgZmlsbDogJyNDNDgwMTQnXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZDogJ2NndScsXG4gICAgICAgICAgICBoZWFkbGluZTogJ0NsYXJlbW9udCBHcmFkdWF0ZSBVbml2ZXJzaXR5JyxcbiAgICAgICAgICAgIHRleHQ6ICdDbGFyZW1vbnQgR3JhZHVhdGUgVW5pdmVyc2l0eSAoQ0dVKSBpcyBhIHJlc2VhcmNoLWJhc2VkIGdyYWR1YXRlIGluc3RpdHV0aW9uIGJhc2VkIGluIENsYXJlbW9udCwgQ0EuIEFmdGVyIGEgYnJhbmQgXCJyZWZyZXNoXCIgYW5kIGV4dGVuc2lvbiwgd2Ugc291Z2h0IHRvIGJ1aWxkIGEgc2l0ZSB3aGljaCBjb3VsZCBhY3QgYXMgYSBwb3J0YWwgZm9yIGZhY3VsdHksIHZpc2l0b3JzLCBhbmQgcG90ZW50aWFsIGFuZCBjdXJyZW50IHN0dWRlbnRzLiBBIHN1aXRlIG9mIFdvcmRwcmVzcyB0aGVtZXMgd2FzIHVsdGltYXRlbHkgZGVsaXZlcmVkIHdoaWNoIENHVSBjb3VsZCB1c2UgdG8gYnVpbGQgZXZlcnl0aGluZyBmcm9tIHNtYWxsIHN1Yi1kb21haW4gc2l0ZXMgdG8gZmFjdWx0eSBibG9ncy4gSW4gYWRkaXRpb24sIHdlIGJ1aWx0IGEgYnJhbmQgc2l0ZSB3aGljaCBhY3RzIGFzIGEgdG9vbCBmb3IgbWFpbnRhaW5pbmcgdmlzdWFsIGNvbnNpc3RlbmN5IGFjY3Jvc3MgdGhlIHZhcmllZCBkaWdpdGFsIGFuZCBwcmludCBtYXRlcmlhbCBkZXZlbG9wZWQgYnkgQ0dVIHN0YWZmICZyYXJyOyA8YSBocmVmPVwiaHR0cHM6Ly9icmFuZC5jZ3UuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPjxlbT5icmFuZC5jZ3UuZWR1PC9lbT48L2E+LicsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vY2d1LmVkdS8nLFxuICAgICAgICAgICAgdXJsVGV4dDogJ2NndS5lZHUnLFxuICAgICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgICAgICBhdHRzOiAnbG9vcCBtdXRlZCBwcmVsb2FkPVwicHJlbG9hZFwiJyxcbiAgICAgICAgICAgICAgICB3ZWJtOiAnYXNzZXRzL3ZpZGVvL2NndS1mbG93LndlYm0nLFxuICAgICAgICAgICAgICAgIG1wNDogJ2Fzc2V0cy92aWRlby9jZ3UtZmxvdy5tcDQnLFxuICAgICAgICAgICAgICAgIHBvc3RlcjogJ2Fzc2V0cy9pbWFnZXMvY2d1LWZsb3cucG5nJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0MjQnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzk1NidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSGlnaGVyIEVkdWNhdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdXb3JkcHJlc3MnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUGF0dGVybiBQb3J0Zm9saW8nIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQUpBWCcsIGxhc3Q6IHRydWUgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVGbixcbiAgICAgICAgICAgIHJvbGU6ICdMZWFkIEZyb250LUVuZCBEZXZlbG9wZXInLCAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjogJyNBRjFFMjcnLFxuICAgICAgICAgICAgZmlsbDogJyNBRjFFMjcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnbGV0cy1jaGF0JyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnTGV0XFwncyBDaGF0JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnb3V0cm8nXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIHdpbmRvdy5BUFBfRlJBTUVTID0gQVBQX0ZSQU1FUztcblxufSkodGhpcyk7IiwiLyohXG4gKiBtdXN0YWNoZS5qcyAtIExvZ2ljLWxlc3Mge3ttdXN0YWNoZX19IHRlbXBsYXRlcyB3aXRoIEphdmFTY3JpcHRcbiAqIGh0dHA6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanNcbiAqL1xuXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlIE11c3RhY2hlOiB0cnVlKi9cblxuKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmIHR5cGVvZiBleHBvcnRzLm5vZGVOYW1lICE9PSAnc3RyaW5nJykge1xuICAgIGZhY3RvcnkoZXhwb3J0cyk7IC8vIENvbW1vbkpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTsgLy8gQU1EXG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLk11c3RhY2hlID0ge307XG4gICAgZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpOyAvLyBzY3JpcHQsIHdzaCwgYXNwXG4gIH1cbn0odGhpcywgZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5IChtdXN0YWNoZSkge1xuXG4gIHZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwgKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogTW9yZSBjb3JyZWN0IHR5cGVvZiBzdHJpbmcgaGFuZGxpbmcgYXJyYXlcbiAgICogd2hpY2ggbm9ybWFsbHkgcmV0dXJucyB0eXBlb2YgJ29iamVjdCdcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGVTdHIgKG9iaikge1xuICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnYXJyYXknIDogdHlwZW9mIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE51bGwgc2FmZSB3YXkgb2YgY2hlY2tpbmcgd2hldGhlciBvciBub3QgYW4gb2JqZWN0LFxuICAgKiBpbmNsdWRpbmcgaXRzIHByb3RvdHlwZSwgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGhhc1Byb3BlcnR5IChvYmosIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIChwcm9wTmFtZSBpbiBvYmopO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9pc3N1ZXMuYXBhY2hlLm9yZy9qaXJhL2Jyb3dzZS9DT1VDSERCLTU3N1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzE4OVxuICB2YXIgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcbiAgZnVuY3Rpb24gdGVzdFJlZ0V4cCAocmUsIHN0cmluZykge1xuICAgIHJldHVybiByZWdFeHBUZXN0LmNhbGwocmUsIHN0cmluZyk7XG4gIH1cblxuICB2YXIgbm9uU3BhY2VSZSA9IC9cXFMvO1xuICBmdW5jdGlvbiBpc1doaXRlc3BhY2UgKHN0cmluZykge1xuICAgIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJy8nOiAnJiN4MkY7JyxcbiAgICAnYCc6ICcmI3g2MDsnLFxuICAgICc9JzogJyYjeDNEOydcbiAgfTtcblxuICBmdW5jdGlvbiBlc2NhcGVIdG1sIChzdHJpbmcpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLCBmdW5jdGlvbiBmcm9tRW50aXR5TWFwIChzKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHdoaXRlUmUgPSAvXFxzKi87XG4gIHZhciBzcGFjZVJlID0gL1xccysvO1xuICB2YXIgZXF1YWxzUmUgPSAvXFxzKj0vO1xuICB2YXIgY3VybHlSZSA9IC9cXHMqXFx9LztcbiAgdmFyIHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbiAgLyoqXG4gICAqIEJyZWFrcyB1cCB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBzdHJpbmcgaW50byBhIHRyZWUgb2YgdG9rZW5zLiBJZiB0aGUgYHRhZ3NgXG4gICAqIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUgaXQgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBzdHJpbmcgdmFsdWVzOiB0aGVcbiAgICogb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIHVzZWQgaW4gdGhlIHRlbXBsYXRlIChlLmcuIFsgXCI8JVwiLCBcIiU+XCIgXSkuIE9mXG4gICAqIGNvdXJzZSwgdGhlIGRlZmF1bHQgaXMgdG8gdXNlIG11c3RhY2hlcyAoaS5lLiBtdXN0YWNoZS50YWdzKS5cbiAgICpcbiAgICogQSB0b2tlbiBpcyBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IDQgZWxlbWVudHMuIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZVxuICAgKiBtdXN0YWNoZSBzeW1ib2wgdGhhdCB3YXMgdXNlZCBpbnNpZGUgdGhlIHRhZywgZS5nLiBcIiNcIiBvciBcIiZcIi4gSWYgdGhlIHRhZ1xuICAgKiBkaWQgbm90IGNvbnRhaW4gYSBzeW1ib2wgKGkuZS4ge3tteVZhbHVlfX0pIHRoaXMgZWxlbWVudCBpcyBcIm5hbWVcIi4gRm9yXG4gICAqIGFsbCB0ZXh0IHRoYXQgYXBwZWFycyBvdXRzaWRlIGEgc3ltYm9sIHRoaXMgZWxlbWVudCBpcyBcInRleHRcIi5cbiAgICpcbiAgICogVGhlIHNlY29uZCBlbGVtZW50IG9mIGEgdG9rZW4gaXMgaXRzIFwidmFsdWVcIi4gRm9yIG11c3RhY2hlIHRhZ3MgdGhpcyBpc1xuICAgKiB3aGF0ZXZlciBlbHNlIHdhcyBpbnNpZGUgdGhlIHRhZyBiZXNpZGVzIHRoZSBvcGVuaW5nIHN5bWJvbC4gRm9yIHRleHQgdG9rZW5zXG4gICAqIHRoaXMgaXMgdGhlIHRleHQgaXRzZWxmLlxuICAgKlxuICAgKiBUaGUgdGhpcmQgYW5kIGZvdXJ0aCBlbGVtZW50cyBvZiB0aGUgdG9rZW4gYXJlIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMsXG4gICAqIHJlc3BlY3RpdmVseSwgb2YgdGhlIHRva2VuIGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVG9rZW5zIHRoYXQgYXJlIHRoZSByb290IG5vZGUgb2YgYSBzdWJ0cmVlIGNvbnRhaW4gdHdvIG1vcmUgZWxlbWVudHM6IDEpIGFuXG4gICAqIGFycmF5IG9mIHRva2VucyBpbiB0aGUgc3VidHJlZSBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSBhdFxuICAgKiB3aGljaCB0aGUgY2xvc2luZyB0YWcgZm9yIHRoYXQgc2VjdGlvbiBiZWdpbnMuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZVRlbXBsYXRlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIGlmICghdGVtcGxhdGUpXG4gICAgICByZXR1cm4gW107XG5cbiAgICB2YXIgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcbiAgICB2YXIgdG9rZW5zID0gW107ICAgICAgIC8vIEJ1ZmZlciB0byBob2xkIHRoZSB0b2tlbnNcbiAgICB2YXIgc3BhY2VzID0gW107ICAgICAgIC8vIEluZGljZXMgb2Ygd2hpdGVzcGFjZSB0b2tlbnMgb24gdGhlIGN1cnJlbnQgbGluZVxuICAgIHZhciBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gICAgdmFyIG5vblNwYWNlID0gZmFsc2U7ICAvLyBJcyB0aGVyZSBhIG5vbi1zcGFjZSBjaGFyIG9uIHRoZSBjdXJyZW50IGxpbmU/XG5cbiAgICAvLyBTdHJpcHMgYWxsIHdoaXRlc3BhY2UgdG9rZW5zIGFycmF5IGZvciB0aGUgY3VycmVudCBsaW5lXG4gICAgLy8gaWYgdGhlcmUgd2FzIGEge3sjdGFnfX0gb24gaXQgYW5kIG90aGVyd2lzZSBvbmx5IHNwYWNlLlxuICAgIGZ1bmN0aW9uIHN0cmlwU3BhY2UgKCkge1xuICAgICAgaWYgKGhhc1RhZyAmJiAhbm9uU3BhY2UpIHtcbiAgICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpXG4gICAgICAgICAgZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BhY2VzID0gW107XG4gICAgICB9XG5cbiAgICAgIGhhc1RhZyA9IGZhbHNlO1xuICAgICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgb3BlbmluZ1RhZ1JlLCBjbG9zaW5nVGFnUmUsIGNsb3NpbmdDdXJseVJlO1xuICAgIGZ1bmN0aW9uIGNvbXBpbGVUYWdzICh0YWdzVG9Db21waWxlKSB7XG4gICAgICBpZiAodHlwZW9mIHRhZ3NUb0NvbXBpbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICB0YWdzVG9Db21waWxlID0gdGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLCAyKTtcblxuICAgICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFnczogJyArIHRhZ3NUb0NvbXBpbGUpO1xuXG4gICAgICBvcGVuaW5nVGFnUmUgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKSArICdcXFxccyonKTtcbiAgICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgICAgY2xvc2luZ0N1cmx5UmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKCd9JyArIHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGFncyh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpO1xuXG4gICAgdmFyIHNjYW5uZXIgPSBuZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7XG5cbiAgICB2YXIgc3RhcnQsIHR5cGUsIHZhbHVlLCBjaHIsIHRva2VuLCBvcGVuU2VjdGlvbjtcbiAgICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcbiAgICAgIHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG5cbiAgICAgIC8vIE1hdGNoIGFueSB0ZXh0IGJldHdlZW4gdGFncy5cbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaSA8IHZhbHVlTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGNocikpIHtcbiAgICAgICAgICAgIHNwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9rZW5zLnB1c2goWyAndGV4dCcsIGNociwgc3RhcnQsIHN0YXJ0ICsgMSBdKTtcbiAgICAgICAgICBzdGFydCArPSAxO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlc3BhY2Ugb24gdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgICAgICBpZiAoY2hyID09PSAnXFxuJylcbiAgICAgICAgICAgIHN0cmlwU3BhY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNYXRjaCB0aGUgb3BlbmluZyB0YWcuXG4gICAgICBpZiAoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKVxuICAgICAgICBicmVhaztcblxuICAgICAgaGFzVGFnID0gdHJ1ZTtcblxuICAgICAgLy8gR2V0IHRoZSB0YWcgdHlwZS5cbiAgICAgIHR5cGUgPSBzY2FubmVyLnNjYW4odGFnUmUpIHx8ICduYW1lJztcbiAgICAgIHNjYW5uZXIuc2Nhbih3aGl0ZVJlKTtcblxuICAgICAgLy8gR2V0IHRoZSB0YWcgdmFsdWUuXG4gICAgICBpZiAodHlwZSA9PT0gJz0nKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oZXF1YWxzUmUpO1xuICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhbihjdXJseVJlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgICAgdHlwZSA9ICcmJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIGNsb3NpbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCB0YWcgYXQgJyArIHNjYW5uZXIucG9zKTtcblxuICAgICAgdG9rZW4gPSBbIHR5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3MgXTtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICcjJyB8fCB0eXBlID09PSAnXicpIHtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xuICAgICAgICAvLyBDaGVjayBzZWN0aW9uIG5lc3RpbmcuXG4gICAgICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKCFvcGVuU2VjdGlvbilcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInICsgdmFsdWUgKyAnXCIgYXQgJyArIHN0YXJ0KTtcblxuICAgICAgICBpZiAob3BlblNlY3Rpb25bMV0gIT09IHZhbHVlKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZScgfHwgdHlwZSA9PT0gJ3snIHx8IHR5cGUgPT09ICcmJykge1xuICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICAvLyBTZXQgdGhlIHRhZ3MgZm9yIHRoZSBuZXh0IHRpbWUgYXJvdW5kLlxuICAgICAgICBjb21waWxlVGFncyh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cbiAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgaWYgKG9wZW5TZWN0aW9uKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICByZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZXMgdGhlIHZhbHVlcyBvZiBjb25zZWN1dGl2ZSB0ZXh0IHRva2VucyBpbiB0aGUgZ2l2ZW4gYHRva2Vuc2AgYXJyYXlcbiAgICogdG8gYSBzaW5nbGUgdG9rZW4uXG4gICAqL1xuICBmdW5jdGlvbiBzcXVhc2hUb2tlbnMgKHRva2Vucykge1xuICAgIHZhciBzcXVhc2hlZFRva2VucyA9IFtdO1xuXG4gICAgdmFyIHRva2VuLCBsYXN0VG9rZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBpZiAodG9rZW5bMF0gPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4gJiYgbGFzdFRva2VuWzBdID09PSAndGV4dCcpIHtcbiAgICAgICAgICBsYXN0VG9rZW5bMV0gKz0gdG9rZW5bMV07XG4gICAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3F1YXNoZWRUb2tlbnM7XG4gIH1cblxuICAvKipcbiAgICogRm9ybXMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIGludG8gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUgd2hlcmVcbiAgICogdG9rZW5zIHRoYXQgcmVwcmVzZW50IGEgc2VjdGlvbiBoYXZlIHR3byBhZGRpdGlvbmFsIGl0ZW1zOiAxKSBhbiBhcnJheSBvZlxuICAgKiBhbGwgdG9rZW5zIHRoYXQgYXBwZWFyIGluIHRoYXQgc2VjdGlvbiBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbFxuICAgKiB0ZW1wbGF0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGVuZCBvZiB0aGF0IHNlY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBuZXN0VG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgbmVzdGVkVG9rZW5zID0gW107XG4gICAgdmFyIGNvbGxlY3RvciA9IG5lc3RlZFRva2VucztcbiAgICB2YXIgc2VjdGlvbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgc2VjdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgY2FzZSAnXic6XG4gICAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHRva2VuWzRdID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIHNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcbiAgICAgICAgICBzZWN0aW9uWzVdID0gdG9rZW5bMl07XG4gICAgICAgICAgY29sbGVjdG9yID0gc2VjdGlvbnMubGVuZ3RoID4gMCA/IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdWzRdIDogbmVzdGVkVG9rZW5zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmVzdGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgc2ltcGxlIHN0cmluZyBzY2FubmVyIHRoYXQgaXMgdXNlZCBieSB0aGUgdGVtcGxhdGUgcGFyc2VyIHRvIGZpbmRcbiAgICogdG9rZW5zIGluIHRlbXBsYXRlIHN0cmluZ3MuXG4gICAqL1xuICBmdW5jdGlvbiBTY2FubmVyIChzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRhaWwgPSBzdHJpbmc7XG4gICAgdGhpcy5wb3MgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB0YWlsIGlzIGVtcHR5IChlbmQgb2Ygc3RyaW5nKS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLmVvcyA9IGZ1bmN0aW9uIGVvcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFpbCA9PT0gJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIG1hdGNoIHRoZSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24gYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqIFJldHVybnMgdGhlIG1hdGNoZWQgdGV4dCBpZiBpdCBjYW4gbWF0Y2gsIHRoZSBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uIHNjYW4gKHJlKSB7XG4gICAgdmFyIG1hdGNoID0gdGhpcy50YWlsLm1hdGNoKHJlKTtcblxuICAgIGlmICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggIT09IDApXG4gICAgICByZXR1cm4gJyc7XG5cbiAgICB2YXIgc3RyaW5nID0gbWF0Y2hbMF07XG5cbiAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO1xuICAgIHRoaXMucG9zICs9IHN0cmluZy5sZW5ndGg7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTa2lwcyBhbGwgdGV4dCB1bnRpbCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGNhbiBiZSBtYXRjaGVkLiBSZXR1cm5zXG4gICAqIHRoZSBza2lwcGVkIHN0cmluZywgd2hpY2ggaXMgdGhlIGVudGlyZSB0YWlsIGlmIG5vIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsID0gZnVuY3Rpb24gc2NhblVudGlsIChyZSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMudGFpbC5zZWFyY2gocmUpLCBtYXRjaDtcblxuICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIG1hdGNoID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWF0Y2ggPSB0aGlzLnRhaWwuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3MgKz0gbWF0Y2gubGVuZ3RoO1xuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGNvbnRleHQgYnkgd3JhcHBpbmcgYSB2aWV3IG9iamVjdCBhbmRcbiAgICogbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb250ZXh0LlxuICAgKi9cbiAgZnVuY3Rpb24gQ29udGV4dCAodmlldywgcGFyZW50Q29udGV4dCkge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgdGhpcy5jYWNoZSA9IHsgJy4nOiB0aGlzLnZpZXcgfTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudENvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjb250ZXh0IHVzaW5nIHRoZSBnaXZlbiB2aWV3IHdpdGggdGhpcyBjb250ZXh0XG4gICAqIGFzIHRoZSBwYXJlbnQuXG4gICAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAodmlldykge1xuICAgIHJldHVybiBuZXcgQ29udGV4dCh2aWV3LCB0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIG5hbWUgaW4gdGhpcyBjb250ZXh0LCB0cmF2ZXJzaW5nXG4gICAqIHVwIHRoZSBjb250ZXh0IGhpZXJhcmNoeSBpZiB0aGUgdmFsdWUgaXMgYWJzZW50IGluIHRoaXMgY29udGV4dCdzIHZpZXcuXG4gICAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiBsb29rdXAgKG5hbWUpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuXG4gICAgdmFyIHZhbHVlO1xuICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdmFsdWUgPSBjYWNoZVtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBuYW1lcywgaW5kZXgsIGxvb2t1cEhpdCA9IGZhbHNlO1xuXG4gICAgICB3aGlsZSAoY29udGV4dCkge1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAwKSB7XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0LnZpZXc7XG4gICAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVXNpbmcgdGhlIGRvdCBub3Rpb24gcGF0aCBpbiBgbmFtZWAsIHdlIGRlc2NlbmQgdGhyb3VnaCB0aGVcbiAgICAgICAgICAgKiBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRvIGJlIGNlcnRhaW4gdGhhdCB0aGUgbG9va3VwIGhhcyBiZWVuIHN1Y2Nlc3NmdWwsIHdlIGhhdmUgdG9cbiAgICAgICAgICAgKiBjaGVjayBpZiB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIHBhdGggYWN0dWFsbHkgaGFzIHRoZSBwcm9wZXJ0eVxuICAgICAgICAgICAqIHdlIGFyZSBsb29raW5nIGZvci4gV2Ugc3RvcmUgdGhlIHJlc3VsdCBpbiBgbG9va3VwSGl0YC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRoaXMgaXMgc3BlY2lhbGx5IG5lY2Vzc2FyeSBmb3Igd2hlbiB0aGUgdmFsdWUgaGFzIGJlZW4gc2V0IHRvXG4gICAgICAgICAgICogYHVuZGVmaW5lZGAgYW5kIHdlIHdhbnQgdG8gYXZvaWQgbG9va2luZyB1cCBwYXJlbnQgY29udGV4dHMuXG4gICAgICAgICAgICoqL1xuICAgICAgICAgIHdoaWxlICh2YWx1ZSAhPSBudWxsICYmIGluZGV4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IG5hbWVzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KHZhbHVlLCBuYW1lc1tpbmRleF0pO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW25hbWVzW2luZGV4KytdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0LnZpZXdbbmFtZV07XG4gICAgICAgICAgbG9va3VwSGl0ID0gaGFzUHJvcGVydHkoY29udGV4dC52aWV3LCBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb29rdXBIaXQpXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBjYWNoZVtuYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSlcbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCh0aGlzLnZpZXcpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIFdyaXRlciBrbm93cyBob3cgdG8gdGFrZSBhIHN0cmVhbSBvZiB0b2tlbnMgYW5kIHJlbmRlciB0aGVtIHRvIGFcbiAgICogc3RyaW5nLCBnaXZlbiBhIGNvbnRleHQuIEl0IGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2YgdGVtcGxhdGVzIHRvXG4gICAqIGF2b2lkIHRoZSBuZWVkIHRvIHBhcnNlIHRoZSBzYW1lIHRlbXBsYXRlIHR3aWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gV3JpdGVyICgpIHtcbiAgICB0aGlzLmNhY2hlID0ge307XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBjYWNoZWQgdGVtcGxhdGVzIGluIHRoaXMgd3JpdGVyLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW5kIGNhY2hlcyB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBhbmQgcmV0dXJucyB0aGUgYXJyYXkgb2YgdG9rZW5zXG4gICAqIHRoYXQgaXMgZ2VuZXJhdGVkIGZyb20gdGhlIHBhcnNlLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgdmFyIHRva2VucyA9IGNhY2hlW3RlbXBsYXRlXTtcblxuICAgIGlmICh0b2tlbnMgPT0gbnVsbClcbiAgICAgIHRva2VucyA9IGNhY2hlW3RlbXBsYXRlICsgJzonICsgKHRhZ3MgfHwgbXVzdGFjaGUudGFncykuam9pbignOicpXSA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHRhZ3MpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfTtcblxuICAvKipcbiAgICogSGlnaC1sZXZlbCBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCB3aXRoXG4gICAqIHRoZSBnaXZlbiBgdmlld2AuXG4gICAqXG4gICAqIFRoZSBvcHRpb25hbCBgcGFydGlhbHNgIGFyZ3VtZW50IG1heSBiZSBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcbiAgICogbmFtZXMgYW5kIHRlbXBsYXRlcyBvZiBwYXJ0aWFscyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS4gSXQgbWF5XG4gICAqIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gbG9hZCBwYXJ0aWFsIHRlbXBsYXRlcyBvbiB0aGUgZmx5XG4gICAqIHRoYXQgdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQ6IHRoZSBuYW1lIG9mIHRoZSBwYXJ0aWFsLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscykge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKHRlbXBsYXRlKTtcbiAgICB2YXIgY29udGV4dCA9ICh2aWV3IGluc3RhbmNlb2YgQ29udGV4dCkgPyB2aWV3IDogbmV3IENvbnRleHQodmlldyk7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIHRlbXBsYXRlKTtcbiAgfTtcblxuICAvKipcbiAgICogTG93LWxldmVsIG1ldGhvZCB0aGF0IHJlbmRlcnMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIHVzaW5nXG4gICAqIHRoZSBnaXZlbiBgY29udGV4dGAgYW5kIGBwYXJ0aWFsc2AuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBgb3JpZ2luYWxUZW1wbGF0ZWAgaXMgb25seSBldmVyIHVzZWQgdG8gZXh0cmFjdCB0aGUgcG9ydGlvblxuICAgKiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB3YXMgY29udGFpbmVkIGluIGEgaGlnaGVyLW9yZGVyIHNlY3Rpb24uXG4gICAqIElmIHRoZSB0ZW1wbGF0ZSBkb2Vzbid0IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMsIHRoaXMgYXJndW1lbnQgbWF5XG4gICAqIGJlIG9taXR0ZWQuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2VucyA9IGZ1bmN0aW9uIHJlbmRlclRva2VucyAodG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSkge1xuICAgIHZhciBidWZmZXIgPSAnJztcblxuICAgIHZhciB0b2tlbiwgc3ltYm9sLCB2YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgc3ltYm9sID0gdG9rZW5bMF07XG5cbiAgICAgIGlmIChzeW1ib2wgPT09ICcjJykgdmFsdWUgPSB0aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ14nKSB2YWx1ZSA9IHRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJz4nKSB2YWx1ZSA9IHRoaXMucmVuZGVyUGFydGlhbCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnJicpIHZhbHVlID0gdGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykgdmFsdWUgPSB0aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICd0ZXh0JykgdmFsdWUgPSB0aGlzLnJhd1ZhbHVlKHRva2VuKTtcblxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbiA9IGZ1bmN0aW9uIHJlbmRlclNlY3Rpb24gKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnVmZmVyID0gJyc7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbmRlciBhbiBhcmJpdHJhcnkgdGVtcGxhdGVcbiAgICAvLyBpbiB0aGUgY3VycmVudCBjb250ZXh0IGJ5IGhpZ2hlci1vcmRlciBzZWN0aW9ucy5cbiAgICBmdW5jdGlvbiBzdWJSZW5kZXIgKHRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQsIHBhcnRpYWxzKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcbiAgICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWVbal0pLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWUpLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlICE9PSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZScpO1xuXG4gICAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxuICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKGNvbnRleHQudmlldywgb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSwgdG9rZW5bNV0pLCBzdWJSZW5kZXIpO1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkID0gZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSkge1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFVzZSBKYXZhU2NyaXB0J3MgZGVmaW5pdGlvbiBvZiBmYWxzeS4gSW5jbHVkZSBlbXB0eSBhcnJheXMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODZcbiAgICBpZiAoIXZhbHVlIHx8IChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsID0gZnVuY3Rpb24gcmVuZGVyUGFydGlhbCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzKSB7XG4gICAgaWYgKCFwYXJ0aWFscykgcmV0dXJuO1xuXG4gICAgdmFyIHZhbHVlID0gaXNGdW5jdGlvbihwYXJ0aWFscykgPyBwYXJ0aWFscyh0b2tlblsxXSkgOiBwYXJ0aWFsc1t0b2tlblsxXV07XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksIGNvbnRleHQsIHBhcnRpYWxzLCB2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZSA9IGZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlICh0b2tlbiwgY29udGV4dCkge1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZSA9IGZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlID0gZnVuY3Rpb24gcmF3VmFsdWUgKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuWzFdO1xuICB9O1xuXG4gIG11c3RhY2hlLm5hbWUgPSAnbXVzdGFjaGUuanMnO1xuICBtdXN0YWNoZS52ZXJzaW9uID0gJzIuMy4wJztcbiAgbXVzdGFjaGUudGFncyA9IFsgJ3t7JywgJ319JyBdO1xuXG4gIC8vIEFsbCBoaWdoLWxldmVsIG11c3RhY2hlLiogZnVuY3Rpb25zIHVzZSB0aGlzIHdyaXRlci5cbiAgdmFyIGRlZmF1bHRXcml0ZXIgPSBuZXcgV3JpdGVyKCk7XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGUgZGVmYXVsdCB3cml0ZXIuXG4gICAqL1xuICBtdXN0YWNoZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW5kIGNhY2hlcyB0aGUgZ2l2ZW4gdGVtcGxhdGUgaW4gdGhlIGRlZmF1bHQgd3JpdGVyIGFuZCByZXR1cm5zIHRoZVxuICAgKiBhcnJheSBvZiB0b2tlbnMgaXQgY29udGFpbnMuIERvaW5nIHRoaXMgYWhlYWQgb2YgdGltZSBhdm9pZHMgdGhlIG5lZWQgdG9cbiAgICogcGFyc2UgdGVtcGxhdGVzIG9uIHRoZSBmbHkgYXMgdGhleSBhcmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdXN0YWNoZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYHRlbXBsYXRlYCB3aXRoIHRoZSBnaXZlbiBgdmlld2AgYW5kIGBwYXJ0aWFsc2AgdXNpbmcgdGhlXG4gICAqIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dCBcIicgKyB0eXBlU3RyKHRlbXBsYXRlKSArICdcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIDAuNC54LixcbiAgLyplc2xpbnQtZGlzYWJsZSAqLyAvLyBlc2xpbnQgd2FudHMgY2FtZWwgY2FzZWQgZnVuY3Rpb24gbmFtZVxuICBtdXN0YWNoZS50b19odG1sID0gZnVuY3Rpb24gdG9faHRtbCAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzLCBzZW5kKSB7XG4gICAgLyplc2xpbnQtZW5hYmxlKi9cblxuICAgIHZhciByZXN1bHQgPSBtdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHNlbmQpKSB7XG4gICAgICBzZW5kKHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgZXNjYXBpbmcgZnVuY3Rpb24gc28gdGhhdCB0aGUgdXNlciBtYXkgb3ZlcnJpZGUgaXQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMjQ0XG4gIG11c3RhY2hlLmVzY2FwZSA9IGVzY2FwZUh0bWw7XG5cbiAgLy8gRXhwb3J0IHRoZXNlIG1haW5seSBmb3IgdGVzdGluZywgYnV0IGFsc28gZm9yIGFkdmFuY2VkIHVzYWdlLlxuICBtdXN0YWNoZS5TY2FubmVyID0gU2Nhbm5lcjtcbiAgbXVzdGFjaGUuQ29udGV4dCA9IENvbnRleHQ7XG4gIG11c3RhY2hlLldyaXRlciA9IFdyaXRlcjtcblxuICByZXR1cm4gbXVzdGFjaGU7XG59KSk7XG4iLCJmdW5jdGlvbiBkb2N1bWVudF9yZWFkeShmbikge1xuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcbiAgICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbn0iLCIoZnVuY3Rpb24od2luZG93KXtcblxuXHR2YXIgU0NST0xMX0xPT1AgPSBbXSxcblx0XHRzY3JvbGxUb3AgPSAtMSxcblx0XHRyZXF1ZXN0RnJhbWUgPSAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUgRmFsbGJhY2ssIHlvdSBjYW4gZXZlbiBmYWxsYmFjayB0byBvbnNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG5cdGZ1bmN0aW9uIGxvb3AoKSB7XG5cblx0XHQvLyBpZiBzY3JvbGxUb3AgYW5kIHdpbmRvdydzIHNjcm9sbCBwb3NpdGlvbiBhcmUgZXF1YWwsIHJldHVybiBhbmQgdHJ5IGFnYWluLlxuXHRcdGlmIChzY3JvbGxUb3AgPT0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG5cdFx0XHRyZXF1ZXN0RnJhbWUobG9vcCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gc2V0IHNjcm9sbFRvcCB0byB3aW5kb3cncyBzY3JvbGwgcG9zaXRpb24uXG5cdFx0c2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG5cdFx0Ly8gZG8geW91ciBtYWdpY1xuXHRcdFNDUk9MTF9MT09QLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRpZiAodHlwZW9mIGZuID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRmbihzY3JvbGxUb3ApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gcnVuIGxvb3AgYWdhaW5cblx0XHRyZXF1ZXN0RnJhbWUobG9vcCk7XG5cblx0fVxuXG5cdC8vIGluaXRpYWxpemUgbG9vcCgpXG5cdGxvb3AoKTtcblx0XG5cdHdpbmRvdy5TQ1JPTExfTE9PUCA9IFNDUk9MTF9MT09QO1xuICAgIFxufSkodGhpcyk7IiwiKGZ1bmN0aW9uICh3aW5kb3cpIHtcblxuXHR2YXIgQVBQID0gZnVuY3Rpb24oRlJBTUVTKSB7XG5cblx0XHR0aGlzLmFjdGl2ZUZyYW1lID0gMDtcblx0XHR0aGlzLmhlYWRsaW5lVHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGxpbmUtdHJhY2snKTtcblx0XHR0aGlzLmhlYWRsaW5lcyA9IFtdO1xuXHRcdHRoaXMuZnJhbWVzV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZXMnKTtcblx0XHR0aGlzLmZyYW1lcyA9IEZSQU1FUztcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblx0XHR0aGlzLmZyYW1lRWxzID0gW107XG5cdFx0dGhpcy5uZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcblx0XHR0aGlzLnByZXZpb3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJyk7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0fTtcblxuXHRBUFAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMuYnVpbGRDb250ZW50KCk7XG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXHRcdHRoaXMuYW5pbWF0ZUludHJvVGV4dCgpO1xuXHRcdHRoaXMubW9uaXRvckZyYW1lcygpO1xuXHRcdFxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbGl6ZWQnKTtcblxuXHR9O1xuXHRcblx0QVBQLnByb3RvdHlwZS5hbmltYXRlSW50cm9UZXh0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBocmFzZXMgPSBbXG5cdFx0XHRcdCdzcGFya2xlcycsXG5cdFx0XHRcdCdleWUgY2FuZHknLFxuXHRcdFx0XHQnemluZ2dnZ2cnLFxuXHRcdFx0XHQnZ29vc2VidW1wcycsXG5cdFx0XHRcdCd6ZW4nLFxuXHRcdFx0XHQncmFpbmJvd3MnLFxuXHRcdFx0XSxcblx0XHRcdGNvbG9ycyA9IFsnIzAwODVkZScsICcjMjFiMDdhJywgJyM1RTI4QjInLCAnIzAwMDAwMCcsICcjQzQ4MDE0JywgJyNBRjFFMjcnXSxcblx0XHRcdGN1cnJlbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwaHJhc2VzLmxlbmd0aCksXG5cdFx0XHRjb2xvciA9IDAsXG5cdFx0XHR0ZXh0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtaW50cm8tdGV4dCcpLFxuXHRcdFx0dHlwaW5nU3BlZWQgPSAyMCxcblx0XHRcdG5leHRXb3JkU3BlZWQgPSAyMDAwO1xuXG5cdFx0dGV4dEVsLmlubmVyVGV4dCA9IHBocmFzZXNbY3VycmVudF07XG5cblx0XHRmdW5jdGlvbiB1cGRhdGVQaHJhc2UoKXtcblxuXHRcdFx0dmFyIGN1cnJlbnRQaHJhc2UgPSB0ZXh0RWwuaW5uZXJUZXh0LFxuXHRcdFx0XHRpbmRleCA9IGN1cnJlbnRQaHJhc2UubGVuZ3RoLFxuXHRcdFx0XHRjdXJyZW50UGhyYXNlRGVsZXRlZCA9IGZhbHNlO1xuXG5cdFx0XHRjdXJyZW50ICs9IDE7XG5cdFx0XHRjb2xvciArPSAxO1xuXG5cdFx0XHR2YXIgbmV4dEluZGV4IFx0XHQ9ICggY3VycmVudCA9PT0gcGhyYXNlcy5sZW5ndGggKSA/IDAgOiBjdXJyZW50LFxuXHRcdFx0XHRuZXh0Q29sb3JJbmRleCBcdD0gKCBjb2xvciA9PT0gY29sb3JzLmxlbmd0aCApID8gMCA6IGNvbG9yLFxuXHRcdFx0XHRuZXh0UGhyYXNlIFx0XHQ9IHBocmFzZXNbbmV4dEluZGV4XSxcblx0XHRcdFx0bmV4dENvbG9yIFx0XHQ9IGNvbG9yc1tuZXh0Q29sb3JJbmRleF0sXG5cdFx0XHRcdG5leHRQaHJhc2VGaW5pc2hlZCA9IGZhbHNlO1xuXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVUZXh0KCkge1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGluZGV4ID4gLTEgJiYgISBjdXJyZW50UGhyYXNlRGVsZXRlZCApe1xuXHRcdFx0XHRcdFx0dGV4dEVsLmlubmVyVGV4dCA9IGN1cnJlbnRQaHJhc2Uuc3Vic3RyaW5nKDAsaW5kZXgpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudFBocmFzZS5zdWJzdHJpbmcoMCxpbmRleCkpO1xuXHRcdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudFBocmFzZURlbGV0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggY3VycmVudFBocmFzZURlbGV0ZWQgJiYgaW5kZXggPD0gbmV4dFBocmFzZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHR0ZXh0RWwuc3R5bGUuY29sb3IgPSBuZXh0Q29sb3I7XG5cdFx0XHRcdFx0XHR0ZXh0RWwuaW5uZXJUZXh0ID0gbmV4dFBocmFzZS5zdWJzdHJpbmcoMCxpbmRleCk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhuZXh0UGhyYXNlLnN1YnN0cmluZygwLGluZGV4KSk7XG5cdFx0XHRcdFx0XHRpbmRleCsrO1xuXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4ID4gbmV4dFBocmFzZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRcdG5leHRQaHJhc2VGaW5pc2hlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBjdXJyZW50UGhyYXNlRGVsZXRlZCAmJiBuZXh0UGhyYXNlRmluaXNoZWQgKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHVwZGF0ZVBocmFzZSwgbmV4dFdvcmRTcGVlZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHVwZGF0ZVRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0fSwgdHlwaW5nU3BlZWQpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnQgPSBuZXh0SW5kZXg7XG5cdFx0XHRjb2xvciA9IG5leHRDb2xvckluZGV4O1xuXG5cdFx0XHR1cGRhdGVUZXh0KCk7XG5cblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCB1cGRhdGVQaHJhc2UsIG5leHRXb3JkU3BlZWQgKiAyICk7XG5cblx0fTtcblxuXHRBUFAucHJvdG90eXBlLmJ1aWxkQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIFRIQVQgPSB0aGlzLFxuXHRcdFx0dGVtcGxhdGVzID0ge1xuXHRcdFx0XHRwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGxhdGUtcHJvamVjdCcpLmlubmVySFRNTCxcblx0XHRcdFx0aW50cm86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZS1pbnRybycpLmlubmVySFRNTCxcblx0XHRcdFx0b3V0cm86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZS1vdXRybycpLmlubmVySFRNTFxuXHRcdFx0fTtcblx0XHRcblx0XHR0aGlzLmZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSwgaSkge1xuXG5cdFx0XHQvLyBwb3B1bGF0ZSBoZWFkbGluZXNcblx0XHRcdHZhciBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0aGVhZGxpbmUuY2xhc3NOYW1lID0gJ2hlYWRsaW5lLWl0ZW0gYW5pbWF0ZSAnICsgKCBpID09PSAwID8gJ2FjdGl2ZScgOiAnJyApO1xuXHRcdFx0aGVhZGxpbmUuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJoZWFkbGluZS10ZXh0XCI+JyArIGZyYW1lLmhlYWRsaW5lICsgJzwvZGl2Pic7XG5cdFx0XHRUSEFULmhlYWRsaW5lVHJhY2suYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXHRcdFx0VEhBVC5oZWFkbGluZXMucHVzaChoZWFkbGluZSk7XG5cblx0XHRcdC8vIHBvcHVsYXRlIGZyYW1lc1xuXHRcdFx0dmFyIGZyYW1lRGF0YSA9IE9iamVjdC5hc3NpZ24oIGZyYW1lLCB7IGk6IGkgfSApLFxuXHRcdFx0XHR0ZW1wbGF0ZSA9IGZyYW1lLnRlbXBsYXRlID8gdGVtcGxhdGVzW2ZyYW1lLnRlbXBsYXRlXSA6IHRlbXBsYXRlcy5wcm9qZWN0LFxuXHRcdFx0XHRmcmFtZUhUTUwgPSBNdXN0YWNoZS5yZW5kZXIoIHRlbXBsYXRlLCBmcmFtZURhdGEgKTtcblxuXHRcdFx0VEhBVC5mcmFtZXNXcmFwLmlubmVySFRNTCArPSBmcmFtZUhUTUw7XG5cblx0XHR9KTtcblxuXHRcdHRoaXMuZnJhbWVFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJhbWUnKTtcblx0XHRcblx0fTtcblxuXHRBUFAucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgVEhBVCA9IHRoaXM7XG5cblx0XHQvLyBjbGlja2luZyBsZXRzIGNoYXQgYnV0dG9uIGF1dG9tYXRpY2FsbHkgZm9jdXNlcyBmaXJzdCBmb3JtIGZpZWxkXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWY9XCIjbGV0cy1jaGF0XCJdJykuZm9yRWFjaChmdW5jdGlvbihsaW5rLGkpe1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV0cy1jaGF0Jykub2Zmc2V0VG9wICk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuZm9jdXMoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gYXJyb3cga2V5cyBzY3JvbGwgYmV0d2VlbiBwcm9qZWN0c1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XG5cdFx0XHR2YXIgRE9XTiA9IDQwLCBVUCA9IDM4LFxuXHRcdFx0XHRmcmFtZTtcblxuXHRcdFx0aWYgKCBldmVudC5rZXlDb2RlICE9PSBET1dOICYmIGV2ZW50LmtleUNvZGUgIT09IFVQICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRmcmFtZSA9IFRIQVQuYWN0aXZlRnJhbWUgKyAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGZyYW1lID0gVEhBVC5hY3RpdmVGcmFtZSAtIDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpZCA9IFRIQVQuZnJhbWVzW2ZyYW1lXS5pZCxcblx0XHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLGVsLm9mZnNldFRvcCk7XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdEFQUC5wcm90b3R5cGUubW9uaXRvckZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIFRIQVQgPSB0aGlzO1xuXG5cdFx0dGhpcy5mcmFtZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZUVsLCBpKSB7XG5cblx0XHRcdHZhciBmcmFtZSA9IFRIQVQuZnJhbWVzW2ldLFxuXHRcdFx0XHRjb2xvciA9IGZyYW1lLmNvbG9yID8gZnJhbWUuY29sb3IgOiAnIzIyMicsXG5cdFx0XHRcdGZpbGwgPSBmcmFtZS5maWxsID8gZnJhbWUuZmlsbCA6ICcjZThlOGU4Jyxcblx0XHRcdFx0dmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tJyArIGkpLFxuXHRcdFx0XHR2aWRlb1Byb21pc2U7XG5cblx0XHRcdHVwZGF0ZUZyYW1lKHdpbmRvdy5wYWdlWU9mZnNldCk7XG5cblx0XHRcdFNDUk9MTF9MT09QLnB1c2godXBkYXRlRnJhbWUpO1xuXHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVGcmFtZShzY3JvbGxUb3ApIHtcblx0XHRcdFx0dmFyIHRvcCA9IGZyYW1lRWwub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0IC8gMixcblx0XHRcdFx0XHRib3R0b20gPSAoZnJhbWVFbC5vZmZzZXRIZWlnaHQgKyBmcmFtZUVsLm9mZnNldFRvcCkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuXHRcblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+PSB0b3AgJiYgc2Nyb2xsVG9wIDwgYm90dG9tKSB7XG5cdFxuXHRcdFx0XHRcdGlmICggISBmcmFtZUVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGZyYW1lRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFxuXHRcdFx0XHRcdFx0VEhBVC5hY3RpdmVGcmFtZSA9IGk7XG5cdFx0XHRcdFx0XHRUSEFULmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmaWxsO1xuXHRcdFx0XHRcdFx0VEhBVC51cGRhdGVNYXNrKGZyYW1lLCBpKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0c3dpdGNoKGkpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlyc3QtZnJhbWUnKTtcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21pZGRsZS1mcmFtZScpO1xuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGFzdC1mcmFtZScpO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlIFRIQVQuZnJhbWVzLmxlbmd0aCAtIDE6XG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsYXN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtaWRkbGUtZnJhbWUnKTtcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpcnN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWlkZGxlLWZyYW1lJyk7XG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaXJzdC1mcmFtZScpO1xuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGFzdC1mcmFtZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdGlmICggdmlkZW8gKSB7XG5cdFx0XHRcdFx0XHRcdHZpZGVvUHJvbWlzZSA9IHZpZGVvLnBsYXkoKTtcblx0XHRcdFx0XHRcdFx0aWYgKCB2aWRlb1Byb21pc2UgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0XHR2aWRlb1Byb21pc2UudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcGxheWJhY2sgc3RhcnRlZCFcblx0XHRcdFx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmVuZGVyIGNvbnRyb2xzXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWRlby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcblx0XHRcdFx0XHRmcmFtZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdGlmICggdmlkZW8gKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5wYXVzZSgpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRBUFAucHJvdG90eXBlLnVwZGF0ZU1hc2sgPSBmdW5jdGlvbihmcmFtZSwgaW5kZXgpIHtcblxuXHRcdHZhciBUSEFUID0gdGhpcyxcblx0XHRcdG5leHQgPSBUSEFULm5leHQsXG5cdFx0XHRwcmV2ID0gVEhBVC5wcmV2aW91cztcblx0XHRcdFxuXHRcdC8vIENoYW5nZSBoZWFkbGluZVxuXHRcdFRIQVQuaGVhZGxpbmVzLmZvckVhY2goZnVuY3Rpb24oaGVhZGxpbmUsIGkpe1xuXHRcdFx0aWYgKCBpID09PSBpbmRleCApIHtcblx0XHRcdFx0aGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRUSEFULmhlYWRsaW5lVHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChpbmRleCAqIC0xMCkgKyAndncsMCknO1xuXHRcdFRIQVQuaGVhZGxpbmVUcmFjay5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cdFx0VEhBVC5oZWFkbGluZVRyYWNrLnN0eWxlLm1velRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyAoaW5kZXggKiAtMTApICsgJ3Z3LDApJztcblx0XHRUSEFULmhlYWRsaW5lVHJhY2suc3R5bGUubXNUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cdFx0VEhBVC5oZWFkbGluZVRyYWNrLnN0eWxlLm9UcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cblx0XHQvLyBDaGFuZ2UgYXJyb3cgbGlua3Ncblx0XHRzd2l0Y2goaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHJldi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0bmV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0bmV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBUSEFULmZyYW1lc1tpbmRleCArIDFdLmlkKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIChUSEFULmZyYW1lcy5sZW5ndGggLSAxKTpcblx0XHRcdFx0cHJldi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0cHJldi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBUSEFULmZyYW1lc1tpbmRleCAtIDFdLmlkKTtcblx0XHRcdFx0bmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRwcmV2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRwcmV2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIFRIQVQuZnJhbWVzW2luZGV4IC0gMV0uaWQpO1xuXHRcdFx0XHRuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRuZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIFRIQVQuZnJhbWVzW2luZGV4ICsgMV0uaWQpO1xuXHRcdH1cblxuXHR9O1xuXG5cdGRvY3VtZW50X3JlYWR5KCBuZXcgQVBQKEFQUF9GUkFNRVMpICk7XG5cbn0pKHRoaXMpOyJdfQ==
