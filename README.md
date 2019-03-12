# node-scrcpy-client

Node.js client for scrcpy server (https://github.com/Genymobile/scrcpy).
scrcpy allows you to record your android device / emulator screen. It does not need root access.


## Installation

This module is installed via npm:

```
npm install --save scrcpy-client
```

## Usage

### Obtain raw frames

It will connect to adb server, push the jar to the device and emit events with the h264 frames.

``` js
const Scrcpy = require('scrcpy-client');

const scrcpy = new Scrcpy();

scrcpy.on('data', (pts, data) => console.log(`[${pts}] Data: ${data.length}b`));

scrcpy.start()
  .then(info => console.log(`Started -> ${info.name} at ${info.width}x${info.height}`))
  .catch(e => console.error('Impossible to start', e));

```

### Configuration options

```js
  {
    adbHost: 'localhost',
    adbPort: 5037,
    deviceId: null,
    port: 8099,
    maxSize: 600,
    bitrate: 999999999,
    tunnelForward: true,
    crop: '9999:9999:0:0',
    sendFrameMeta: true
  }
```

* If ```deviceId``` is not defined (or null) it will try to use the first device available.
* If ```sendFrameMeta``` is true ```data``` events will contain 2 parameters ```pts``` and ```data```.

### More examples

You can find them in the ```examples``` folder.

## Enable debug of module

This module uses [debug](https://www.npmjs.com/package/debug) for debugging, you can enable debug messages with:

```
DEBUG=scrcpy
```

## Run tests

```
npm test
```

## License (MIT)

In case you never heard about the [MIT license](http://en.wikipedia.org/wiki/MIT_license).

See the [LICENSE file](LICENSE) for details.

All credits for scrcpy server goes to [Genymobile](https://github.com/Genymobile). The compiled version distributed with this library is a mirror of their built, not compiled by me, to ensure SHA1 signature remains the same and comes from a trust source.