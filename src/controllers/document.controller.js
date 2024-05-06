const { documentService } = require("../services");

// Controller for creating a document
async function createDocument(req, res) {
  try {
    const documentData = req.body;
    const newDocument = await documentService.createDocument(documentData);
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Controller for getting a document by ID
async function getDocumentById(req, res) {
  try {
    const documentId = req.params.id;
    const document = await documentService.getDocumentById(documentId);
    res.json(document);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Controller for updating a document
async function updateDocument(req, res) {
  try {
    const documentId = req.params.id;
    const updateData = req.body;
    const updatedDocument = await documentService.updateDocument(
      documentId,
      updateData
    );
    res.json(updatedDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Controller for deleting a document
async function deleteDocument(req, res) {
  try {
    const documentId = req.params.id;
    const deletedDocument = await documentService.deleteDocument(documentId);
    res.json(deletedDocument);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Controller for getting all documents
async function getAllDocuments(req, res) {
  try {
    const documents = await documentService.getAllDocuments();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createDocument,
  getDocumentById,
  updateDocument,
  deleteDocument,
  getAllDocuments,
};
