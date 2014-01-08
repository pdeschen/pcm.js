
## Overview

Wraps raw PCM byte array into playable wav container.

## Usage

    var sine = [];
    for (var i=0; i<10000; i++) {
      sine[i] = 128+Math.round(127*Math.sin(i/5));
    }
    new pcm({channels: 1, rate: 8000, depth: 8}).toWav(sine).play();
    var dataURI = new pcm({channels: 1, rate: 8000, depth: 8}).toWav(sine).encode();

### Notes

* pcm data is assumed to be a byte array.
* encode() may be used to get the data URI.
* `play()` throws if browser do not support audio element. 

## Options

|name     | defaults |
|---------|----------|
|channels | 1        |
|rate     | 8000     |
|depth    | 8        |

## Credits

http://www.codebase.es/riffwave/

RIFFWAVE.js v0.03 - Audio encoder for HTML5 <audio> elements.
Copyleft 2011 by Pedro Ladaria <pedro.ladaria at Gmail dot com>
