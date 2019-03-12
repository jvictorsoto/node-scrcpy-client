const Scrcpy = require('../index');

const scrcpy = new Scrcpy();

scrcpy.on('data', (pts, data) => console.log(`[${pts}] Data: ${data.length}b`));

scrcpy.start()
  .then(info => console.log(`Started -> ${info.name} at ${info.width}x${info.height}`))
  .catch(e => console.error('Impossible to start', e));
