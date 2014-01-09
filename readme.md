
## pcm.js [![Build Status](https://travis-ci.org/pdeschen/pcm.js.png?branch=master)](https://travis-ci.org/pdeschen/pcm.js) 

Wraps raw PCM byte array into playable wav container for both the browser and node.js

## Usage

    var sine = [];
    for (var i=0; i<10000; i++) {
      sine[i] = 128+Math.round(127*Math.sin(i/5));
    }
    new pcm({channels: 1, rate: 8000, depth: 8}).toWav(sine).play();
    var dataURI = new pcm({channels: 1, rate: 8000, depth: 8}).toWav(sine).encode();

### Notes

* PCM data (`toWave`) is assumed to be a byte array.
* encode() may be used to get the data URI.
* The dataURI conforms to [Data URI Scheme](http://en.wikipedia.org/wiki/Data_URI_scheme) with audio/wav MIME type.
* A `window.btoa` browser shim is provided for browsers not supporting it (i.e. `< IE10`)
* `play()` throws if browser do not support audio element (i.e. `< IE9`). 

## Options

|name         | values   | defaults |
|-------------|----------|----------|
|channels     | 1,2      | 1        |
|rate (Hz)    | n        | 8000     |
|depth (bits) | 8,16     | 8        |

## Todo

* more test cases

## Credits

http://www.codebase.es/riffwave/

RIFFWAVE.js v0.03 - Audio encoder for HTML5 <audio> elements.
Copyleft 2011 by Pedro Ladaria <pedro.ladaria at Gmail dot com>


## License

(MIT license)

Copyright © 2013-2014 Pascal Deschenes pdeschen@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
cense

(MIT license)

Copyright © 2011-2012 Pascal Deschenes pdeschen@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
