// Require'ing both so .defaults will fill in the blanks
// DO NOT EDIT .defaults - add your specific settings to .env
// DO NOT CHECK .env into source control!
// Refer to INSTRUCTIONS.md

const config = require('./config');

app.listen(process.env.PORT || 3000);
