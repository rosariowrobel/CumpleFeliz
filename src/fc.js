const art = require('ascii-art');


art.font('Sos todo lo que esta bien en esta galaxia!', 'Doom', (err, renderer) => {
    console.log(err || renderer);
})