const { Document } = require("../models");

// Get all documents
const getAllDocuments = async () => {
  try {
    const documents = await Document.find();
    return documents;
  } catch (error) {
    throw new Error(`Error while getting documents: ${error.message}`);
  }
};

// Create operation
const createDocument = async () => {
  try {
    const document = new Document(documentData);
    const savedDocument = await document.save();
    return savedDocument;
  } catch (error) {
    throw new Error(`Error while creating document: ${error.message}`);
  }
};

// Read operation
const getDocumentById = async () => {
  try {
    const document = await Document.findById(documentId);
    if (!document) {
      throw new Error("Document not found");
    }
    return document;
  } catch (error) {
    throw new Error(`Error while getting document: ${error.message}`);
  }
};

// Update operation
const updateDocument = async (documentId, updateData) => {
  try {
    const updatedDocument = await Document.findByIdAndUpdate(
      documentId,
      updateData,
      { new: true }
    );
    if (!updatedDocument) {
      throw new Error("Document not found");
    }
    return updatedDocument;
  } catch (error) {
    throw new Error(`Error while updating document: ${error.message}`);
  }
};

// Delete operation
const deleteDocument = async (documentId) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(documentId);
    if (!deletedDocument) {
      throw new Error("Document not found");
    }
    return deletedDocument;
  } catch (error) {
    throw new Error(`Error while deleting document: ${error.message}`);
  }
};

module.exports = {
  getAllDocuments,
  createDocument,
  getDocumentById,
  updateDocument,
  deleteDocument,
};
