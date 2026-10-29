const express = require("express");

function readersRouter(service) {
  const router = express.Router();

  router.get("/:id/fines", (req, res) => {
    const readerId = Number(req.params.id);
    const { role, readerId: authenticatedReaderId } = req.user;

    if (role !== "librarian" && (role !== "reader" || authenticatedReaderId !== readerId)) {
      return res.status(403).json({ error: "Недостатньо прав" });
    }

    res.json(service.readerFines(readerId));
  });

  return router;
}

module.exports = { readersRouter };
