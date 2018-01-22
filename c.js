const { hash, compare } = require('bcrypt');

// ma hoa
hash('abcd', 8)
.then(ecrypted => console.log(ecrypted))
.catch(err => console.log(err));
// so sanh
compare('abcd', '$2a$08$ePUSFSSxIrh2vGq4GeaCVO5jA0BJal6hyWIK.9sdHLadnM9ZVtmm6')
.then(same => console.log(same))
.catch(err => console.log(err));
