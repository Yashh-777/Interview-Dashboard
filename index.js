var gmail = require("./frontend/src/GmailApi")

// console.log(gmail.getAcceToken());
gmail.readInboxContent("from:grp14.project@gmail.com");
gmail.getGmail();
// gmail.searchGmail("from:grp14.project@gmail.com")
// gmail.getGmail();


// gmail.getMails();
// const message = JSON.stringify(x); // data type string
// console.log(message.length);
// console.log(gmail.search_word(message, 'sincerely'));
// console.log(gmail.search_word('The quick fox fox', 'fox'));
// console.log(x);
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

