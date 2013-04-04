# jQuery optimusTime

Transforms a standard date timestamp into a more human readable string

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/twosevenzero/optimusTime/master/jquery.optimusTime.min.js
[max]: https://raw.github.com/twosevenzero/optimusTime/master/jquery.optimusTime.js 

In your web page:

```html
<span class="timestamp">04/01/2013 11:00:00</span>
<script src="jquery.js"></script>
<script src="jquery.optimusTime.min.js"></script>
<script>
  $('.timestamp').optimusTime();
</script>
```

This will transform the date into:

```html
<span class="timestamp">5 minutes ago.</span>
```

## Configuration
You can now pass a config object. The only configuration option currently is 'detail' which determines how coarse or fine the output is. The default is 'fine' and will be used if no configuration options are set. When 'fine' detail is used, the output will be broken down into minutes, and hours. If 'coarse' is used, anything less than 24 hours will be referred to as 'today'.

Example Configuration:

```html
$('.timestamp').optimusTime({ detail: 'coarse' });
```

## Changelog
- 0.1.7 - Changed Object.create to new Object to support ie6+
- 0.1.6 - Repository maintenance. No plugin changes.
- 0.1.5 - Repository maintenance. No plugin changes.
- 0.1.4 - Added config options for coarse or fine detail and added weeks and months.
- 0.1.3 - More appropriate variable names and general code cleanup.
- 0.1.2 - Fixed issue with "just now" and "1 minute ago".
- 0.1.1 - Added "just now" for time under 1 minute.
- 0.1.0 - Initial draft of plugin.


## License

This plugin is licensed under The MIT License (MIT)

The MIT License (MIT)
Copyright (c) 2013 Dave West (@twosevenzero)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
