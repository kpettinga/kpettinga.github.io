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

		console.log(current);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fcG9seWZpbGxzLmpzIiwiX2FwcF9kYXRhLmpzIiwiX211c3RhY2hlLmpzIiwiX3JlYWR5LmpzIiwiX3Njcm9sbExvb3AuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAvLyBNdXN0IGJlIHdyaXRhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgXCJhc3NpZ25cIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHZhckFyZ3MpIHsgLy8gLmxlbmd0aCBvZiBmdW5jdGlvbiBpcyAyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7IC8vIFR5cGVFcnJvciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICB9XG4gIFxuICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICBcbiAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7IC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxuICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IiwiKGZ1bmN0aW9uKHdpbmRvdyl7XG4gICAgXG4gICAgZnVuY3Rpb24gdGFnTmFtZUZuKCkge1xuICAgICAgICByZXR1cm4gKCB0aGlzLmxhc3QgKSA/IHRoaXMubmFtZSA6IHRoaXMubmFtZSArICc8YnIvPic7XG4gICAgfVxuXG4gICAgdmFyIEFQUF9GUkFNRVMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnaGVsbG8nLFxuICAgICAgICAgICAgaGVhZGxpbmU6ICc8c21hbGw+U2VlIHRoZSBnb29kczwvc21hbGw+JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnaW50cm8nXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZDogJ3dhbGxjb3JlJyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnV2FsbGNvcmUuY29tJyxcbiAgICAgICAgICAgIHRleHQ6ICdXYWxsY29yZSBpcyBhbiBvbmxpbmUgcGljdHVyZSBmcmFtaW5nIHN0YXJ0dXAgdGhhdCBwYXJ0bmVycyB3aXRoIGxvY2FsIGZyYW1lIHNob3BzLiBJIHdvcmtlZCB3aXRoIHRoZSBwYXJ0bmVycyB0byBkZXNpZ24gYW5kIGltcGxlbWVudCBhIHJvYnVzdCB3ZWIgYXBwIHdpdGggd2hpY2ggdXNlcnMgd2VyZSBhYmxlIHRvIG1hdCBhbmQgZnJhbWUgdGhlaXIgaW1hZ2VzLCBjdXN0b21pemUgZGVzaWduIG9wdGlvbnMsIGFuZCBwaWNrdXAgdGhlIGNvbXBsZXRlZCBwcm9kdWN0IGZyb20gdGhlaXIgbG9jYWwgZnJhbWVyLicsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy53YWxsY29yZS5jb20nLFxuICAgICAgICAgICAgdXJsVGV4dDogJ3dhbGxjb3JlLmNvbScsXG4gICAgICAgICAgICB2aWRlbzoge1xuICAgICAgICAgICAgICAgIGF0dHM6ICdsb29wIG11dGVkIHByZWxvYWQ9XCJwcmVsb2FkXCInLFxuICAgICAgICAgICAgICAgIHdlYm06ICdhc3NldHMvdmlkZW8vd2FsbGNvcmUtZGVzaWduLXRvb2wud2VibScsXG4gICAgICAgICAgICAgICAgbXA0OiAnYXNzZXRzL3ZpZGVvL3dhbGxjb3JlLWRlc2lnbi10b29sLm1wNCcsXG4gICAgICAgICAgICAgICAgcG9zdGVyOiAnYXNzZXRzL2ltYWdlcy93YWxsY29yZS1kZXNpZ24tdG9vbC5wbmcnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTQ0MCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODEwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ3M6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFLUNvbW1lcmNlJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0N1c3RvbSBQaWN0dXJlIEZyYW1pbmcnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQ3JhZnQgQ01TJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlYWN0SlMnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVnVlLmpzJywgbGFzdDogdHJ1ZSAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVGbixcbiAgICAgICAgICAgIHJvbGU6ICdMZWFkIERldmVsb3BlcicsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDg1ZGUnLFxuICAgICAgICAgICAgZmlsbDogJyMwMDg1ZGUnXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZDogJ2hlc3Rlci1zdHJlZXQnLFxuICAgICAgICAgICAgaGVhZGxpbmU6ICdIZXN0ZXIgU3RyZWV0IENvbGxhYm9yYXRpdmUnLFxuICAgICAgICAgICAgdGV4dDogJ0hlc3RlciBTdHJlZXQgaXMgYW4gdXJiYW4gcGxhbm5pbmcsIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgbm9ucHJvZml0IGJhc2VkIGluIHRoZSBMb3dlciBFYXN0IFNpZGUgb2YgTWFuaGF0dGFuLiBBZnRlciBhIHJlYnJhbmRpbmcgcHJvY2Vzcywgd2UgYnVpbHQgYSB3ZWJzaXRlIHdoaWNoIGFsbG93cyB0aGVtIHRvIHNob3djYXNlIHRoZWlyIGltcGFjdCBvbiB0aGUgY29tbXVuaXRpZXMgdGhleSBzZXJ2ZS4nLFxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2hlc3RlcnN0cmVldC5vcmcvJyxcbiAgICAgICAgICAgIHVybFRleHQ6ICdoZXN0ZXJzdHJlZXQub3JnJyxcbiAgICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICAgICAgYXR0czogJ2xvb3AgbXV0ZWQgcHJlbG9hZD1cInByZWxvYWRcIicsXG4gICAgICAgICAgICAgICAgd2VibTogJ2Fzc2V0cy92aWRlby9oZXN0ZXItcHJvamVjdC1zY3JvbGwud2VibScsXG4gICAgICAgICAgICAgICAgbXA0OiAnYXNzZXRzL3ZpZGVvL2hlc3Rlci1wcm9qZWN0LXNjcm9sbC5tcDQnLFxuICAgICAgICAgICAgICAgIHBvc3RlcjogJ2Fzc2V0cy9pbWFnZXMvaGVzdGVyLXByb2plY3Qtc2Nyb2xsLnBuZycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNTg0JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4OTgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vbi1Qcm9maXQnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQ29tbXVuaXR5IEVuZ2FnZW1lbnQnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV29yZHByZXNzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01hcGJveC5qcycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdWdWUuanMnLCBsYXN0OiB0cnVlICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZUZuLFxuICAgICAgICAgICAgcm9sZTogJ0xlYWQgRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzIxYjA3YScsXG4gICAgICAgICAgICBmaWxsOiAnIzIxYjA3YSdcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlkOiAndHJhbnNpdC1jZW50ZXInLFxuICAgICAgICAgICAgaGVhZGxpbmU6ICdUcmFuc2l0Q2VudGVyJyxcbiAgICAgICAgICAgIHRleHQ6ICdUcmFuc2l0Q2VudGVyIGlzIGEgZm91bmRhdGlvbiBkZWRpY2F0ZWQgdG8gdXJiYW4gbW9iaWxpdHkuIFRoZXkgbmVlZGVkIGEgd2Vic2l0ZSB3aGljaCB3b3VsZCBoZWxwIHRoZW0gY29tbXVuaWNhdGUgd2l0aCBjb21tdW5pdGllcyBhbmQgcG9saWN5IG1ha2VycyBpbiB1cmJhbiBhcmVhcyB0byBhZmZlY3QgY2hhbmdlLiBXZSBkZXZlbG9wZWQgYSBtb2R1bGFyIHN5c3RlbSBvZiBjb250ZW50IHdpdGggd2hpY2ggdGhleSBjYW4gcHVibGlzaCBvbmxpbmUgcmVwb3J0cyBhYm91dCB0cmFuc2l0IHVzZS4gSW4gYWRkaXRpb24sIHRoZSBzaXRlIGlzIGFsc28gYSBwbGFjZSB0byBzZWFyY2ggZ3JhbnQgcmVjaXBpZW50cywgc2VlIHVwY29taW5nIGV2ZW50cywgYW5kIHJlYWQgdGhlaXIgYmxvZy4nLFxuICAgICAgICAgICAgLy8gdXJsOiAnaHR0cDovL3RyYW5zaXRjZW50ZXIub3JnLycsXG4gICAgICAgICAgICAvLyB1cmxUZXh0OiAndHJhbnNpdGNlbnRlci5vcmcnLFxuICAgICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgICAgICBhdHRzOiAnbG9vcCBtdXRlZCBwcmVsb2FkPVwicHJlbG9hZFwiJyxcbiAgICAgICAgICAgICAgICB3ZWJtOiAnYXNzZXRzL3ZpZGVvL3RyYW5zaXQtY2VudGVyLWZsb3cud2VibScsXG4gICAgICAgICAgICAgICAgbXA0OiAnYXNzZXRzL3ZpZGVvL3RyYW5zaXQtY2VudGVyLWZsb3cubXA0JyxcbiAgICAgICAgICAgICAgICBwb3N0ZXI6ICdhc3NldHMvaW1hZ2VzL3RyYW5zaXQtY2VudGVyLWZsb3cucG5nJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0MjInLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzgxMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9uLVByb2ZpdCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdUcmFuc2l0JyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1dvcmRwcmVzcycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBSkFYJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01vZHVsYXIgQ29udGVudCcsIGxhc3Q6IHRydWUgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWVGbixcbiAgICAgICAgICAgIHJvbGU6ICdMZWFkIERldmVsb3BlcicsICAgICAgICAgXG4gICAgICAgICAgICBjb2xvcjogJyM1RTI4QjInLFxuICAgICAgICAgICAgZmlsbDogJyM1RTI4QjInXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBpZDogJ2dpYm5leScsXG4gICAgICAgICAgICBoZWFkbGluZTogJ0dpYm5leScsXG4gICAgICAgICAgICB0ZXh0OiAnR2libmV5LCBmb3JtZXJseSBHaWJuZXkgRGFuY2UsIGlzIGFuIG9yZ2FuaXphdGlvbiB3aG9zZSBtaXNzaW9uIGlzIHRvIGJyaW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtb3ZlbWVudCB3aGVyZSBpdCBvdGhlcndpc2Ugd291bGQgbm90IGV4aXN0LiBUaGVpciBuZXcgc2l0ZSBzZWVrcyB0byBlbXBoYXNpemUgdGhlIGZ1bGwgc2NvcGUgb2YgR2libmV5LCBhY3RpbmcgYXMgYSBwb3J0YWwgY29ubmVjdGluZyB1c2VycyB0byB0aGUgbXlyaWFkcyBvZiBwZXJmb3JtYW5jZXMsIHdvcmtzaG9wcywgYW5kIHdlZWtseSBldmVudHMuJyxcbiAgICAgICAgICAgIC8vIHVybDogJ2h0dHA6Ly9naWJuZXlkYW5jZS5vcmcvJyxcbiAgICAgICAgICAgIC8vIHVybFRleHQ6ICdnaWJuZXlkYW5jZS5vcmcnLFxuICAgICAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICAgICAgICBhdHRzOiAnbG9vcCBtdXRlZCBwcmVsb2FkPVwicHJlbG9hZFwiJyxcbiAgICAgICAgICAgICAgICB3ZWJtOiAnYXNzZXRzL3ZpZGVvL2dpYm5leS1mbG93LndlYm0nLFxuICAgICAgICAgICAgICAgIG1wNDogJ2Fzc2V0cy92aWRlby9naWJuZXktZmxvdy5tcDQnLFxuICAgICAgICAgICAgICAgIHBvc3RlcjogJ2Fzc2V0cy9pbWFnZXMvZ2libmV5LWZsb3cucG5nJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0MjInLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzk1OCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUGVyZm9ybWluZyBBcnRzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1dvcmRwcmVzcycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFdmVudHMgQ2FsZW5kYXInIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnc2xpY2suanMnLCBsYXN0OiB0cnVlIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnTGVhZCBEZXZlbG9wZXInLFxuICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgIGZpbGw6ICcjMTExJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICdvcnBoZXVzJyxcbiAgICAgICAgICAgIGhlYWRsaW5lOiAnT3JwaGV1cyBDaGFtYmVyIE9yY2hlc3RyYScsXG4gICAgICAgICAgICB0ZXh0OiBcIk9ycGhldXMgaXMgYSBhIGdyYW1teS13aW5uaW5nLCBjb25kdWN0b3JsZXNzIG9yY2hlc3RyYSBiYXNlZCBpbiBOZXcgWW9yayBDaXR5LiBUaGV5IG5lZWRlZCBhIHdlYnNpdGUgdG8ga2VlcCBwYXRyb25zIGluZm9ybWVkIGFib3V0IHRoZWlyIGFjdGl2aXRpZXMgYW5kIHBlcmZvcm1hbmNlcyBhcm91bmQgdGhlIHdvcmxkLiBXZSBjcmVhdGVkIGEgc2l0ZSB3aGljaCBpcyBidWlsdCBvbiBhIHN5c3RlbSBvZiBjdXN0b21pemFibGUgdGlsZXMgYW5kIGNvbG9ycyB0aGUgYWRtaW5zIGNhbiB1c2UgdG8gY3JlYXRlIGR5bmFtaWMgcGFnZXMuIEl0IGlzIGFsc28gYSBzb3VyY2Ugb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdyb3VwJ3MgbWVtYmVycywgZGlzY29ncmFwaHksIGFuZCB0aWNrZXQgb3V0bGV0cy5cIixcbiAgICAgICAgICAgIC8vIHVybDogJ2h0dHA6Ly9vcnBoZXVzbnljLm9yZy8nLFxuICAgICAgICAgICAgLy8gdXJsVGV4dDogJ29ycGhldXNueWMub3JnJyxcbiAgICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICAgICAgYXR0czogJ2xvb3AgbXV0ZWQgcHJlbG9hZD1cInByZWxvYWRcIicsXG4gICAgICAgICAgICAgICAgd2VibTogJ2Fzc2V0cy92aWRlby9vcnBoZXVzLWZsb3ctMS53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vb3JwaGV1cy1mbG93LTEubXA0JyxcbiAgICAgICAgICAgICAgICBwb3N0ZXI6ICdhc3NldHMvaW1hZ2VzL29ycGhldXMtZmxvdy0xLnBuZycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNjc4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5NDInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1BlcmZvcm1pbmcgQXJ0cycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdXb3JkcHJlc3MnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRXZlbnRzIENhbGVuZGFyJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01vZHVsYXIgQ29udGVudCcsIGxhc3Q6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnTGVhZCBEZXZlbG9wZXInLCAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICcjQzQ4MDE0JyxcbiAgICAgICAgICAgIGZpbGw6ICcjQzQ4MDE0J1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgICAgaWQ6ICdjZ3UnLFxuICAgICAgICAgICAgaGVhZGxpbmU6ICdDbGFyZW1vbnQgR3JhZHVhdGUgVW5pdmVyc2l0eScsXG4gICAgICAgICAgICB0ZXh0OiAnQ2xhcmVtb250IEdyYWR1YXRlIFVuaXZlcnNpdHkgKENHVSkgaXMgYSByZXNlYXJjaC1iYXNlZCBncmFkdWF0ZSBpbnN0aXR1dGlvbiBiYXNlZCBpbiBDbGFyZW1vbnQsIENBLiBBZnRlciBhIGJyYW5kIFwicmVmcmVzaFwiIGFuZCBleHRlbnNpb24sIHdlIHNvdWdodCB0byBidWlsZCBhIHNpdGUgd2hpY2ggY291bGQgYWN0IGFzIGEgcG9ydGFsIGZvciBmYWN1bHR5LCB2aXNpdG9ycywgYW5kIHBvdGVudGlhbCBhbmQgY3VycmVudCBzdHVkZW50cy4gQSBzdWl0ZSBvZiBXb3JkcHJlc3MgdGhlbWVzIHdhcyB1bHRpbWF0ZWx5IGRlbGl2ZXJlZCB3aGljaCBDR1UgY291bGQgdXNlIHRvIGJ1aWxkIGV2ZXJ5dGhpbmcgZnJvbSBzbWFsbCBzdWItZG9tYWluIHNpdGVzIHRvIGZhY3VsdHkgYmxvZ3MuIEluIGFkZGl0aW9uLCB3ZSBidWlsdCBhIGJyYW5kIHNpdGUgd2hpY2ggYWN0cyBhcyBhIHRvb2wgZm9yIG1haW50YWluaW5nIHZpc3VhbCBjb25zaXN0ZW5jeSBhY2Nyb3NzIHRoZSB2YXJpZWQgZGlnaXRhbCBhbmQgcHJpbnQgbWF0ZXJpYWwgZGV2ZWxvcGVkIGJ5IENHVSBzdGFmZiAmcmFycjsgPGEgaHJlZj1cImh0dHBzOi8vYnJhbmQuY2d1LmVkdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48ZW0+YnJhbmQuY2d1LmVkdTwvZW0+PC9hPi4nLFxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2NndS5lZHUvJyxcbiAgICAgICAgICAgIHVybFRleHQ6ICdjZ3UuZWR1JyxcbiAgICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICAgICAgYXR0czogJ2xvb3AgbXV0ZWQgcHJlbG9hZD1cInByZWxvYWRcIicsXG4gICAgICAgICAgICAgICAgd2VibTogJ2Fzc2V0cy92aWRlby9jZ3UtZmxvdy53ZWJtJyxcbiAgICAgICAgICAgICAgICBtcDQ6ICdhc3NldHMvdmlkZW8vY2d1LWZsb3cubXA0JyxcbiAgICAgICAgICAgICAgICBwb3N0ZXI6ICdhc3NldHMvaW1hZ2VzL2NndS1mbG93LnBuZycsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNDI0JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5NTYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0hpZ2hlciBFZHVjYXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV29yZHByZXNzJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1BhdHRlcm4gUG9ydGZvbGlvJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0FKQVgnLCBsYXN0OiB0cnVlIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lRm4sXG4gICAgICAgICAgICByb2xlOiAnTGVhZCBGcm9udC1FbmQgRGV2ZWxvcGVyJywgICAgICAgICAgIFxuICAgICAgICAgICAgY29sb3I6ICcjQUYxRTI3JyxcbiAgICAgICAgICAgIGZpbGw6ICcjQUYxRTI3J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ2xldHMtY2hhdCcsXG4gICAgICAgICAgICBoZWFkbGluZTogJ0xldFxcJ3MgQ2hhdCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ291dHJvJ1xuICAgICAgICB9LFxuICAgIF07XG5cbiAgICB3aW5kb3cuQVBQX0ZSQU1FUyA9IEFQUF9GUkFNRVM7XG5cbn0pKHRoaXMpOyIsIi8qIVxuICogbXVzdGFjaGUuanMgLSBMb2dpYy1sZXNzIHt7bXVzdGFjaGV9fSB0ZW1wbGF0ZXMgd2l0aCBKYXZhU2NyaXB0XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gKi9cblxuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSBNdXN0YWNoZTogdHJ1ZSovXG5cbihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZSAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpOyAvLyBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7IC8vIEFNRFxuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5NdXN0YWNoZSA9IHt9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKTsgLy8gc2NyaXB0LCB3c2gsIGFzcFxuICB9XG59KHRoaXMsIGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeSAobXVzdGFjaGUpIHtcblxuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vcmUgY29ycmVjdCB0eXBlb2Ygc3RyaW5nIGhhbmRsaW5nIGFycmF5XG4gICAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlU3RyIChvYmopIHtcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAgICogaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUsIGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01NzdcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODlcbiAgdmFyIHJlZ0V4cFRlc3QgPSBSZWdFeHAucHJvdG90eXBlLnRlc3Q7XG4gIGZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRlc3RSZWdFeHAobm9uU3BhY2VSZSwgc3RyaW5nKTtcbiAgfVxuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcvJzogJyYjeDJGOycsXG4gICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAnPSc6ICcmI3gzRDsnXG4gIH07XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB3aGl0ZVJlID0gL1xccyovO1xuICB2YXIgc3BhY2VSZSA9IC9cXHMrLztcbiAgdmFyIGVxdWFsc1JlID0gL1xccyo9LztcbiAgdmFyIGN1cmx5UmUgPSAvXFxzKlxcfS87XG4gIHZhciB0YWdSZSA9IC8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO1xuXG4gIC8qKlxuICAgKiBCcmVha3MgdXAgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgc3RyaW5nIGludG8gYSB0cmVlIG9mIHRva2Vucy4gSWYgdGhlIGB0YWdzYFxuICAgKiBhcmd1bWVudCBpcyBnaXZlbiBoZXJlIGl0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gc3RyaW5nIHZhbHVlczogdGhlXG4gICAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICAgKiBjb3Vyc2UsIHRoZSBkZWZhdWx0IGlzIHRvIHVzZSBtdXN0YWNoZXMgKGkuZS4gbXVzdGFjaGUudGFncykuXG4gICAqXG4gICAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAgICogbXVzdGFjaGUgc3ltYm9sIHRoYXQgd2FzIHVzZWQgaW5zaWRlIHRoZSB0YWcsIGUuZy4gXCIjXCIgb3IgXCImXCIuIElmIHRoZSB0YWdcbiAgICogZGlkIG5vdCBjb250YWluIGEgc3ltYm9sIChpLmUuIHt7bXlWYWx1ZX19KSB0aGlzIGVsZW1lbnQgaXMgXCJuYW1lXCIuIEZvclxuICAgKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHRva2VuIGlzIGl0cyBcInZhbHVlXCIuIEZvciBtdXN0YWNoZSB0YWdzIHRoaXMgaXNcbiAgICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICAgKiB0aGlzIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICAgKiByZXNwZWN0aXZlbHksIG9mIHRoZSB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICAgKiBhcnJheSBvZiB0b2tlbnMgaW4gdGhlIHN1YnRyZWUgYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgYXRcbiAgICogd2hpY2ggdGhlIGNsb3NpbmcgdGFnIGZvciB0aGF0IHNlY3Rpb24gYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICBpZiAoIXRlbXBsYXRlKVxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgdmFyIHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXG4gICAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gICAgdmFyIHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgICB2YXIgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuXG4gICAgLy8gU3RyaXBzIGFsbCB3aGl0ZXNwYWNlIHRva2VucyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgbGluZVxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cbiAgICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XG4gICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKVxuICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgIG5vblNwYWNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZTtcbiAgICBmdW5jdGlvbiBjb21waWxlVGFncyAodGFnc1RvQ29tcGlsZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGFnc1RvQ29tcGlsZSA9IHRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwgMik7XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRhZ3ModGFncyB8fCBtdXN0YWNoZS50YWdzKTtcblxuICAgIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgdmFyIHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXG4gICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpXG4gICAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGhhc1RhZyA9IHRydWU7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XG4gICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICAgIHR5cGUgPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zIF07XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnLycpIHtcbiAgICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgICAgIGlmICghb3BlblNlY3Rpb24pXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgICAgaWYgKG9wZW5TZWN0aW9uWzFdICE9PSB2YWx1ZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgICAgY29tcGlsZVRhZ3ModmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gb3BlbiBzZWN0aW9ucyB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgIGlmIChvcGVuU2VjdGlvbilcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc2Nhbm5lci5wb3MpO1xuXG4gICAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gICAqIHRvIGEgc2luZ2xlIHRva2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgc3F1YXNoZWRUb2tlbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgbGFzdFRva2VuO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xuICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gICAqIHRva2VucyB0aGF0IHJlcHJlc2VudCBhIHNlY3Rpb24gaGF2ZSB0d28gYWRkaXRpb25hbCBpdGVtczogMSkgYW4gYXJyYXkgb2ZcbiAgICogYWxsIHRva2VucyB0aGF0IGFwcGVhciBpbiB0aGF0IHNlY3Rpb24gYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWxcbiAgICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbmVzdFRva2VucyAodG9rZW5zKSB7XG4gICAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICAgIHZhciBjb2xsZWN0b3IgPSBuZXN0ZWRUb2tlbnM7XG4gICAgdmFyIHNlY3Rpb25zID0gW107XG5cbiAgICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBjb2xsZWN0b3IgPSB0b2tlbls0XSA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBzZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG4gICAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBzdHJpbmcgc2Nhbm5lciB0aGF0IGlzIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHBhcnNlciB0byBmaW5kXG4gICAqIHRva2VucyBpbiB0ZW1wbGF0ZSBzdHJpbmdzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nhbm5lciAoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50YWlsID0gc3RyaW5nO1xuICAgIHRoaXMucG9zID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGFpbCBpcyBlbXB0eSAoZW5kIG9mIHN0cmluZykuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGVkIHRleHQgaWYgaXQgY2FuIG1hdGNoLCB0aGUgZW1wdHkgc3RyaW5nIG90aGVyd2lzZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW4gPSBmdW5jdGlvbiBzY2FuIChyZSkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZSk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgdmFyIHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgICB0aGlzLnBvcyArPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgYWxsIHRleHQgdW50aWwgdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYmUgbWF0Y2hlZC4gUmV0dXJuc1xuICAgKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbCA9IGZ1bmN0aW9uIHNjYW5VbnRpbCAocmUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAwOlxuICAgICAgICBtYXRjaCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMucG9zICs9IG1hdGNoLmxlbmd0aDtcblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBjb250ZXh0IGJ5IHdyYXBwaW5nIGEgdmlldyBvYmplY3QgYW5kXG4gICAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAgICovXG4gIGZ1bmN0aW9uIENvbnRleHQgKHZpZXcsIHBhcmVudENvbnRleHQpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuY2FjaGUgPSB7ICcuJzogdGhpcy52aWV3IH07XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29udGV4dCB1c2luZyB0aGUgZ2l2ZW4gdmlldyB3aXRoIHRoaXMgY29udGV4dFxuICAgKiBhcyB0aGUgcGFyZW50LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKHZpZXcpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICAgKiB1cCB0aGUgY29udGV4dCBoaWVyYXJjaHkgaWYgdGhlIHZhbHVlIGlzIGFic2VudCBpbiB0aGlzIGNvbnRleHQncyB2aWV3LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHZhbHVlID0gY2FjaGVbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgbmFtZXMsIGluZGV4LCBsb29rdXBIaXQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3O1xuICAgICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzaW5nIHRoZSBkb3Qgbm90aW9uIHBhdGggaW4gYG5hbWVgLCB3ZSBkZXNjZW5kIHRocm91Z2ggdGhlXG4gICAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUbyBiZSBjZXJ0YWluIHRoYXQgdGhlIGxvb2t1cCBoYXMgYmVlbiBzdWNjZXNzZnVsLCB3ZSBoYXZlIHRvXG4gICAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICAgKiB3ZSBhcmUgbG9va2luZyBmb3IuIFdlIHN0b3JlIHRoZSByZXN1bHQgaW4gYGxvb2t1cEhpdGAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgICAqIGB1bmRlZmluZWRgIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGxvb2tpbmcgdXAgcGFyZW50IGNvbnRleHRzLlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB3aGlsZSAodmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuYW1lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eSh2YWx1ZSwgbmFtZXNbaW5kZXhdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtuYW1lc1tpbmRleCsrXV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3W25hbWVdO1xuICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9va3VwSGl0KVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpXG4gICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBXcml0ZXIga25vd3MgaG93IHRvIHRha2UgYSBzdHJlYW0gb2YgdG9rZW5zIGFuZCByZW5kZXIgdGhlbSB0byBhXG4gICAqIHN0cmluZywgZ2l2ZW4gYSBjb250ZXh0LiBJdCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIHRlbXBsYXRlcyB0b1xuICAgKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAgICovXG4gIGZ1bmN0aW9uIFdyaXRlciAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgYW5kIHJldHVybnMgdGhlIGFycmF5IG9mIHRva2Vuc1xuICAgKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgIHZhciB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV07XG5cbiAgICBpZiAodG9rZW5zID09IG51bGwpXG4gICAgICB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZSArICc6JyArICh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpLmpvaW4oJzonKV0gPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gYHZpZXdgLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gICAqIG5hbWVzIGFuZCB0ZW1wbGF0ZXMgb2YgcGFydGlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIEl0IG1heVxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGxvYWQgcGFydGlhbCB0ZW1wbGF0ZXMgb24gdGhlIGZseVxuICAgKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5wYXJzZSh0ZW1wbGF0ZSk7XG4gICAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvdy1sZXZlbCBtZXRob2QgdGhhdCByZW5kZXJzIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCB1c2luZ1xuICAgKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgYG9yaWdpbmFsVGVtcGxhdGVgIGlzIG9ubHkgZXZlciB1c2VkIHRvIGV4dHJhY3QgdGhlIHBvcnRpb25cbiAgICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgZG9lc24ndCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLCB0aGlzIGFyZ3VtZW50IG1heVxuICAgKiBiZSBvbWl0dGVkLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnMgPSBmdW5jdGlvbiByZW5kZXJUb2tlbnMgKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgYnVmZmVyID0gJyc7XG5cbiAgICB2YXIgdG9rZW4sIHN5bWJvbCwgdmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgICBpZiAoc3ltYm9sID09PSAnIycpIHZhbHVlID0gdGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICdeJykgdmFsdWUgPSB0aGlzLnJlbmRlckludmVydGVkKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICc+JykgdmFsdWUgPSB0aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJyYnKSB2YWx1ZSA9IHRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnbmFtZScpIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb24gPSBmdW5jdGlvbiByZW5kZXJTZWN0aW9uICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW5kZXIgYW4gYXJiaXRyYXJ5IHRlbXBsYXRlXG4gICAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gICAgZnVuY3Rpb24gc3ViUmVuZGVyICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscyk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKHZhciBqID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGogPCB2YWx1ZUxlbmd0aDsgKytqKSB7XG4gICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUnKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB0aGUgc2VjdGlvbiBjb250YWlucy5cbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZCA9IGZ1bmN0aW9uIHJlbmRlckludmVydGVkICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBVc2UgSmF2YVNjcmlwdCdzIGRlZmluaXRpb24gb2YgZmFsc3kuIEluY2x1ZGUgZW1wdHkgYXJyYXlzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSlcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscykge1xuICAgIGlmICghcGFydGlhbHMpIHJldHVybjtcblxuICAgIHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLCBjb250ZXh0LCBwYXJ0aWFscywgdmFsdWUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZSA9IGZ1bmN0aW9uIHJhd1ZhbHVlICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlblsxXTtcbiAgfTtcblxuICBtdXN0YWNoZS5uYW1lID0gJ211c3RhY2hlLmpzJztcbiAgbXVzdGFjaGUudmVyc2lvbiA9ICcyLjMuMCc7XG4gIG11c3RhY2hlLnRhZ3MgPSBbICd7eycsICd9fScgXTtcblxuICAvLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG4gIHZhciBkZWZhdWx0V3JpdGVyID0gbmV3IFdyaXRlcigpO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAgICogYXJyYXkgb2YgdG9rZW5zIGl0IGNvbnRhaW5zLiBEb2luZyB0aGlzIGFoZWFkIG9mIHRpbWUgYXZvaWRzIHRoZSBuZWVkIHRvXG4gICAqIHBhcnNlIHRlbXBsYXRlcyBvbiB0aGUgZmx5IGFzIHRoZXkgYXJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVzdGFjaGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSwgdGFncyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGB0ZW1wbGF0ZWAgd2l0aCB0aGUgZ2l2ZW4gYHZpZXdgIGFuZCBgcGFydGlhbHNgIHVzaW5nIHRoZVxuICAgKiBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAwLjQueC4sXG4gIC8qZXNsaW50LWRpc2FibGUgKi8gLy8gZXNsaW50IHdhbnRzIGNhbWVsIGNhc2VkIGZ1bmN0aW9uIG5hbWVcbiAgbXVzdGFjaGUudG9faHRtbCA9IGZ1bmN0aW9uIHRvX2h0bWwgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgc2VuZCkge1xuICAgIC8qZXNsaW50LWVuYWJsZSovXG5cbiAgICB2YXIgcmVzdWx0ID0gbXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZW5kKSkge1xuICAgICAgc2VuZChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzI0NFxuICBtdXN0YWNoZS5lc2NhcGUgPSBlc2NhcGVIdG1sO1xuXG4gIC8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbiAgbXVzdGFjaGUuU2Nhbm5lciA9IFNjYW5uZXI7XG4gIG11c3RhY2hlLkNvbnRleHQgPSBDb250ZXh0O1xuICBtdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbiAgcmV0dXJuIG11c3RhY2hlO1xufSkpO1xuIiwiZnVuY3Rpb24gZG9jdW1lbnRfcmVhZHkoZm4pIHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59IiwiKGZ1bmN0aW9uKHdpbmRvdyl7XG5cblx0dmFyIFNDUk9MTF9MT09QID0gW10sXG5cdFx0c2Nyb2xsVG9wID0gLTEsXG5cdFx0cmVxdWVzdEZyYW1lID0gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIEZhbGxiYWNrLCB5b3UgY2FuIGV2ZW4gZmFsbGJhY2sgdG8gb25zY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuXHRmdW5jdGlvbiBsb29wKCkge1xuXG5cdFx0Ly8gaWYgc2Nyb2xsVG9wIGFuZCB3aW5kb3cncyBzY3JvbGwgcG9zaXRpb24gYXJlIGVxdWFsLCByZXR1cm4gYW5kIHRyeSBhZ2Fpbi5cblx0XHRpZiAoc2Nyb2xsVG9wID09IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuXHRcdFx0cmVxdWVzdEZyYW1lKGxvb3ApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIHNldCBzY3JvbGxUb3AgdG8gd2luZG93J3Mgc2Nyb2xsIHBvc2l0aW9uLlxuXHRcdHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHRcdC8vIGRvIHlvdXIgbWFnaWNcblx0XHRTQ1JPTExfTE9PUC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuXHRcdFx0aWYgKHR5cGVvZiBmbiA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0Zm4oc2Nyb2xsVG9wKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIHJ1biBsb29wIGFnYWluXG5cdFx0cmVxdWVzdEZyYW1lKGxvb3ApO1xuXG5cdH1cblxuXHQvLyBpbml0aWFsaXplIGxvb3AoKVxuXHRsb29wKCk7XG5cdFxuXHR3aW5kb3cuU0NST0xMX0xPT1AgPSBTQ1JPTExfTE9PUDtcbiAgICBcbn0pKHRoaXMpOyIsIihmdW5jdGlvbiAod2luZG93KSB7XG5cblx0dmFyIEFQUCA9IGZ1bmN0aW9uKEZSQU1FUykge1xuXG5cdFx0dGhpcy5hY3RpdmVGcmFtZSA9IDA7XG5cdFx0dGhpcy5oZWFkbGluZVRyYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRsaW5lLXRyYWNrJyk7XG5cdFx0dGhpcy5oZWFkbGluZXMgPSBbXTtcblx0XHR0aGlzLmZyYW1lc1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWVzJyk7XG5cdFx0dGhpcy5mcmFtZXMgPSBGUkFNRVM7XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5cdFx0dGhpcy5mcmFtZUVscyA9IFtdO1xuXHRcdHRoaXMubmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG5cdFx0dGhpcy5wcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cycpO1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdH07XG5cblx0QVBQLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR0aGlzLmJ1aWxkQ29udGVudCgpO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblx0XHR0aGlzLmFuaW1hdGVJbnRyb1RleHQoKTtcblx0XHR0aGlzLm1vbml0b3JGcmFtZXMoKTtcblx0XHRcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2luaXRpYWxpemVkJyk7XG5cblx0fTtcblx0XG5cdEFQUC5wcm90b3R5cGUuYW5pbWF0ZUludHJvVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwaHJhc2VzID0gW1xuXHRcdFx0XHQnc3BhcmtsZXMnLFxuXHRcdFx0XHQnZXllIGNhbmR5Jyxcblx0XHRcdFx0J3ppbmdnZ2dnJyxcblx0XHRcdFx0J2dvb3NlYnVtcHMnLFxuXHRcdFx0XHQnemVuJyxcblx0XHRcdFx0J3JhaW5ib3dzJyxcblx0XHRcdF0sXG5cdFx0XHRjb2xvcnMgPSBbJyMwMDg1ZGUnLCAnIzIxYjA3YScsICcjNUUyOEIyJywgJyMwMDAwMDAnLCAnI0M0ODAxNCcsICcjQUYxRTI3J10sXG5cdFx0XHRjdXJyZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGhyYXNlcy5sZW5ndGgpLFxuXHRcdFx0Y29sb3IgPSAwLFxuXHRcdFx0dGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWludHJvLXRleHQnKSxcblx0XHRcdHR5cGluZ1NwZWVkID0gMjAsXG5cdFx0XHRuZXh0V29yZFNwZWVkID0gMjAwMDtcblxuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuXG5cdFx0dGV4dEVsLmlubmVyVGV4dCA9IHBocmFzZXNbY3VycmVudF07XG5cblx0XHRmdW5jdGlvbiB1cGRhdGVQaHJhc2UoKXtcblxuXHRcdFx0dmFyIGN1cnJlbnRQaHJhc2UgPSB0ZXh0RWwuaW5uZXJUZXh0LFxuXHRcdFx0XHRpbmRleCA9IGN1cnJlbnRQaHJhc2UubGVuZ3RoLFxuXHRcdFx0XHRjdXJyZW50UGhyYXNlRGVsZXRlZCA9IGZhbHNlO1xuXG5cdFx0XHRjdXJyZW50ICs9IDE7XG5cdFx0XHRjb2xvciArPSAxO1xuXG5cdFx0XHR2YXIgbmV4dEluZGV4IFx0XHQ9ICggY3VycmVudCA9PT0gcGhyYXNlcy5sZW5ndGggKSA/IDAgOiBjdXJyZW50LFxuXHRcdFx0XHRuZXh0Q29sb3JJbmRleCBcdD0gKCBjb2xvciA9PT0gY29sb3JzLmxlbmd0aCApID8gMCA6IGNvbG9yLFxuXHRcdFx0XHRuZXh0UGhyYXNlIFx0XHQ9IHBocmFzZXNbbmV4dEluZGV4XSxcblx0XHRcdFx0bmV4dENvbG9yIFx0XHQ9IGNvbG9yc1tuZXh0Q29sb3JJbmRleF0sXG5cdFx0XHRcdG5leHRQaHJhc2VGaW5pc2hlZCA9IGZhbHNlO1xuXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVUZXh0KCkge1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoIGluZGV4ID4gLTEgJiYgISBjdXJyZW50UGhyYXNlRGVsZXRlZCApe1xuXHRcdFx0XHRcdFx0dGV4dEVsLmlubmVyVGV4dCA9IGN1cnJlbnRQaHJhc2Uuc3Vic3RyaW5nKDAsaW5kZXgpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudFBocmFzZS5zdWJzdHJpbmcoMCxpbmRleCkpO1xuXHRcdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudFBocmFzZURlbGV0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggY3VycmVudFBocmFzZURlbGV0ZWQgJiYgaW5kZXggPD0gbmV4dFBocmFzZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHR0ZXh0RWwuc3R5bGUuY29sb3IgPSBuZXh0Q29sb3I7XG5cdFx0XHRcdFx0XHR0ZXh0RWwuaW5uZXJUZXh0ID0gbmV4dFBocmFzZS5zdWJzdHJpbmcoMCxpbmRleCk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhuZXh0UGhyYXNlLnN1YnN0cmluZygwLGluZGV4KSk7XG5cdFx0XHRcdFx0XHRpbmRleCsrO1xuXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4ID4gbmV4dFBocmFzZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRcdG5leHRQaHJhc2VGaW5pc2hlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBjdXJyZW50UGhyYXNlRGVsZXRlZCAmJiBuZXh0UGhyYXNlRmluaXNoZWQgKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHVwZGF0ZVBocmFzZSwgbmV4dFdvcmRTcGVlZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHVwZGF0ZVRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0fSwgdHlwaW5nU3BlZWQpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnQgPSBuZXh0SW5kZXg7XG5cdFx0XHRjb2xvciA9IG5leHRDb2xvckluZGV4O1xuXG5cdFx0XHR1cGRhdGVUZXh0KCk7XG5cblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCB1cGRhdGVQaHJhc2UsIG5leHRXb3JkU3BlZWQgKiAyICk7XG5cblx0fTtcblxuXHRBUFAucHJvdG90eXBlLmJ1aWxkQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIFRIQVQgPSB0aGlzLFxuXHRcdFx0dGVtcGxhdGVzID0ge1xuXHRcdFx0XHRwcm9qZWN0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGxhdGUtcHJvamVjdCcpLmlubmVySFRNTCxcblx0XHRcdFx0aW50cm86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZS1pbnRybycpLmlubmVySFRNTCxcblx0XHRcdFx0b3V0cm86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZS1vdXRybycpLmlubmVySFRNTFxuXHRcdFx0fTtcblx0XHRcblx0XHR0aGlzLmZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSwgaSkge1xuXG5cdFx0XHQvLyBwb3B1bGF0ZSBoZWFkbGluZXNcblx0XHRcdHZhciBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0aGVhZGxpbmUuY2xhc3NOYW1lID0gJ2hlYWRsaW5lLWl0ZW0gYW5pbWF0ZSAnICsgKCBpID09PSAwID8gJ2FjdGl2ZScgOiAnJyApO1xuXHRcdFx0aGVhZGxpbmUuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJoZWFkbGluZS10ZXh0XCI+JyArIGZyYW1lLmhlYWRsaW5lICsgJzwvZGl2Pic7XG5cdFx0XHRUSEFULmhlYWRsaW5lVHJhY2suYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXHRcdFx0VEhBVC5oZWFkbGluZXMucHVzaChoZWFkbGluZSk7XG5cblx0XHRcdC8vIHBvcHVsYXRlIGZyYW1lc1xuXHRcdFx0dmFyIGZyYW1lRGF0YSA9IE9iamVjdC5hc3NpZ24oIGZyYW1lLCB7IGk6IGkgfSApLFxuXHRcdFx0XHR0ZW1wbGF0ZSA9IGZyYW1lLnRlbXBsYXRlID8gdGVtcGxhdGVzW2ZyYW1lLnRlbXBsYXRlXSA6IHRlbXBsYXRlcy5wcm9qZWN0LFxuXHRcdFx0XHRmcmFtZUhUTUwgPSBNdXN0YWNoZS5yZW5kZXIoIHRlbXBsYXRlLCBmcmFtZURhdGEgKTtcblxuXHRcdFx0VEhBVC5mcmFtZXNXcmFwLmlubmVySFRNTCArPSBmcmFtZUhUTUw7XG5cblx0XHR9KTtcblxuXHRcdHRoaXMuZnJhbWVFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJhbWUnKTtcblx0XHRcblx0fTtcblxuXHRBUFAucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgVEhBVCA9IHRoaXM7XG5cblx0XHQvLyBjbGlja2luZyBsZXRzIGNoYXQgYnV0dG9uIGF1dG9tYXRpY2FsbHkgZm9jdXNlcyBmaXJzdCBmb3JtIGZpZWxkXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWY9XCIjbGV0cy1jaGF0XCJdJykuZm9yRWFjaChmdW5jdGlvbihsaW5rLGkpe1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKCAwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV0cy1jaGF0Jykub2Zmc2V0VG9wICk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuZm9jdXMoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gYXJyb3cga2V5cyBzY3JvbGwgYmV0d2VlbiBwcm9qZWN0c1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XG5cdFx0XHR2YXIgRE9XTiA9IDQwLCBVUCA9IDM4LFxuXHRcdFx0XHRmcmFtZTtcblxuXHRcdFx0aWYgKCBldmVudC5rZXlDb2RlICE9PSBET1dOICYmIGV2ZW50LmtleUNvZGUgIT09IFVQICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRmcmFtZSA9IFRIQVQuYWN0aXZlRnJhbWUgKyAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGZyYW1lID0gVEhBVC5hY3RpdmVGcmFtZSAtIDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpZCA9IFRIQVQuZnJhbWVzW2ZyYW1lXS5pZCxcblx0XHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLGVsLm9mZnNldFRvcCk7XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdEFQUC5wcm90b3R5cGUubW9uaXRvckZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIFRIQVQgPSB0aGlzO1xuXG5cdFx0dGhpcy5mcmFtZUVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZUVsLCBpKSB7XG5cblx0XHRcdHZhciBmcmFtZSA9IFRIQVQuZnJhbWVzW2ldLFxuXHRcdFx0XHRjb2xvciA9IGZyYW1lLmNvbG9yID8gZnJhbWUuY29sb3IgOiAnIzIyMicsXG5cdFx0XHRcdGZpbGwgPSBmcmFtZS5maWxsID8gZnJhbWUuZmlsbCA6ICcjZThlOGU4Jyxcblx0XHRcdFx0dmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tJyArIGkpLFxuXHRcdFx0XHR2aWRlb1Byb21pc2U7XG5cblx0XHRcdHVwZGF0ZUZyYW1lKHdpbmRvdy5wYWdlWU9mZnNldCk7XG5cblx0XHRcdFNDUk9MTF9MT09QLnB1c2godXBkYXRlRnJhbWUpO1xuXHRcdFx0XG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVGcmFtZShzY3JvbGxUb3ApIHtcblx0XHRcdFx0dmFyIHRvcCA9IGZyYW1lRWwub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0IC8gMixcblx0XHRcdFx0XHRib3R0b20gPSAoZnJhbWVFbC5vZmZzZXRIZWlnaHQgKyBmcmFtZUVsLm9mZnNldFRvcCkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuXHRcblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+PSB0b3AgJiYgc2Nyb2xsVG9wIDwgYm90dG9tKSB7XG5cdFxuXHRcdFx0XHRcdGlmICggISBmcmFtZUVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGZyYW1lRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFxuXHRcdFx0XHRcdFx0VEhBVC5hY3RpdmVGcmFtZSA9IGk7XG5cdFx0XHRcdFx0XHRUSEFULmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmaWxsO1xuXHRcdFx0XHRcdFx0VEhBVC51cGRhdGVNYXNrKGZyYW1lLCBpKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0c3dpdGNoKGkpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlyc3QtZnJhbWUnKTtcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21pZGRsZS1mcmFtZScpO1xuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGFzdC1mcmFtZScpO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlIFRIQVQuZnJhbWVzLmxlbmd0aCAtIDE6XG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsYXN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtaWRkbGUtZnJhbWUnKTtcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpcnN0LWZyYW1lJyk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWlkZGxlLWZyYW1lJyk7XG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaXJzdC1mcmFtZScpO1xuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGFzdC1mcmFtZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdGlmICggdmlkZW8gKSB7XG5cdFx0XHRcdFx0XHRcdHZpZGVvUHJvbWlzZSA9IHZpZGVvLnBsYXkoKTtcblx0XHRcdFx0XHRcdFx0aWYgKCB2aWRlb1Byb21pc2UgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0XHR2aWRlb1Byb21pc2UudGhlbihmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcGxheWJhY2sgc3RhcnRlZCFcblx0XHRcdFx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmVuZGVyIGNvbnRyb2xzXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWRlby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcblx0XHRcdFx0XHRmcmFtZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdGlmICggdmlkZW8gKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5wYXVzZSgpO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRBUFAucHJvdG90eXBlLnVwZGF0ZU1hc2sgPSBmdW5jdGlvbihmcmFtZSwgaW5kZXgpIHtcblxuXHRcdHZhciBUSEFUID0gdGhpcyxcblx0XHRcdG5leHQgPSBUSEFULm5leHQsXG5cdFx0XHRwcmV2ID0gVEhBVC5wcmV2aW91cztcblx0XHRcdFxuXHRcdC8vIENoYW5nZSBoZWFkbGluZVxuXHRcdFRIQVQuaGVhZGxpbmVzLmZvckVhY2goZnVuY3Rpb24oaGVhZGxpbmUsIGkpe1xuXHRcdFx0aWYgKCBpID09PSBpbmRleCApIHtcblx0XHRcdFx0aGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRUSEFULmhlYWRsaW5lVHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsJyArIChpbmRleCAqIC0xMCkgKyAndncsMCknO1xuXHRcdFRIQVQuaGVhZGxpbmVUcmFjay5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cdFx0VEhBVC5oZWFkbGluZVRyYWNrLnN0eWxlLm1velRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCcgKyAoaW5kZXggKiAtMTApICsgJ3Z3LDApJztcblx0XHRUSEFULmhlYWRsaW5lVHJhY2suc3R5bGUubXNUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cdFx0VEhBVC5oZWFkbGluZVRyYWNrLnN0eWxlLm9UcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwnICsgKGluZGV4ICogLTEwKSArICd2dywwKSc7XG5cblx0XHQvLyBDaGFuZ2UgYXJyb3cgbGlua3Ncblx0XHRzd2l0Y2goaW5kZXgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHJldi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0bmV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0bmV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBUSEFULmZyYW1lc1tpbmRleCArIDFdLmlkKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIChUSEFULmZyYW1lcy5sZW5ndGggLSAxKTpcblx0XHRcdFx0cHJldi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0cHJldi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBUSEFULmZyYW1lc1tpbmRleCAtIDFdLmlkKTtcblx0XHRcdFx0bmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRwcmV2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRwcmV2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIFRIQVQuZnJhbWVzW2luZGV4IC0gMV0uaWQpO1xuXHRcdFx0XHRuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRuZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIFRIQVQuZnJhbWVzW2luZGV4ICsgMV0uaWQpO1xuXHRcdH1cblxuXHR9O1xuXG5cdGRvY3VtZW50X3JlYWR5KCBuZXcgQVBQKEFQUF9GUkFNRVMpICk7XG5cbn0pKHRoaXMpOyJdfQ==
