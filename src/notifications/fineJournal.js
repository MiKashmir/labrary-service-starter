const events = require("./events");
const journal = [];
events.on("loan:returned", ({ loan, fine }) => {
  if (fine > 0) journal.push({ loanId: loan.id, fine });
});
module.exports = { getJournal: () => journal, clearJournal: () => { journal.length = 0; } };