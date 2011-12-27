# jQuery glideTo
#### Create modern horizontal and vertical scrolling websites easily

jQuery glideTo is a plugin that will can help easily create scrolling navigation
websites.

Usage
-----

Just include this script after jQuery and optionally [jQuery Easing Plugin][jquery-easing].

``` html
<script src="jquery.js"></script>
<script src="jquery.easing.js"></script>
<script src="jquery.glideto.js"></script>
<script>
  $.glideTo({
      scrollHorizontal: '#main'
  });
  $('a[href*=#]').glide();
  
</script>
```

Options
----
You can pass a variety of options to configure the plugin's behavior.

**scrollHorizontal**: the html element that will contain all pages.

``` javascript
scrollHorizontal: '#main'
```

**duration**: the duration of the animation (in milliseconds)

``` javascript
duration: 1000
```

**easing**: the easing used on the animation

``` javascript
easing: 'easeInOutQuad'
```

Demo
---
You can see visit the plugin's [demo page to see it in action][demo] 

License
---

(The MIT License)

Copyright © 2011 Jeduan Cornejo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [jquery-easing]: http://gsgd.co.uk/sandbox/jquery/easing/
  [demo]: http://jeduan.github.com/jquery-glideto