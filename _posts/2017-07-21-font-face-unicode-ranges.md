---
layout: post
title: "Decreasing font load times with unicode ranges"
status: publish
tags: [tips-tricks, css, fonts]
---

Font files can add up and really put a dent in page load times. I recently came across [an article](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization) from Google about font optimization. It names a number of strategies to optimize the process of loading fonts on your webpages. The one that stood out to me, though, was the `unicode-range` property. With it, you can specify a range of characters to be loaded from your font, thereby decreasing the size of the resource.

```css
@font-face {
    font-family: "FoundersGrotesk";
    src: url("#{$font-path}/FoundersGroteskWeb-Regular.woff2") format("woff2"),
         url("#{$font-path}/FoundersGroteskWeb-Regular.woff") format("woff"),
         url("#{$font-path}/FoundersGroteskWeb-Regular.eot") format("embedded-opentype");
    unicode-range: U+000-5FF; /* Latin glyphs */
    font-weight: 400;
    font-style: normal;
}
```

Initially, I was loading three fonts which amounted to 152kb. After implementing the `unicode-range` property the total size of all my fonts came down to 117kb; a 23% decrease!

See the rest of the article for more tips on web font optimization:
[Web Font Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)