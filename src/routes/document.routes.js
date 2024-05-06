const express = require("express");
const { documentController } = require("../controllers");
const router = express.Router();

// Routes for CRUD operations
router.post("/documents", documentController.createDocument);
router.get("/documents/:id", documentController.getDocumentById);
router.put("/documents/:id", documentController.updateDocument);
router.delete("/documents/:id", documentController.deleteDocument);

// Route for getting all documents
router.get("/documents", documentController.getAllDocuments);

module.exports = router;
