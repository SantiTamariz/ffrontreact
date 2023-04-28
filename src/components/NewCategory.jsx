import React, { useState } from 'react';

function NewCategory({ addCategory }) {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleNewCategorySave = () => {
    if (newCategoryName) {
      // Create a new category object from the user input
      const newCategory = {
        id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
        name: newCategoryName,
      };

      // Call the addCategory function from the parent component (Header) to add the new category
      addCategory(newCategory);

      // Clear the input field
      setNewCategoryName('');
    }
  };

  return (
    <div className="modal fade" id="new-category-modal" tabIndex="-1" role="dialog" aria-labelledby="new-category-modal-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="new-category-modal-label" style={{ color: 'black' }}>New Category</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="new-category-name">Name</label>
              <input
                type="text"
                className="form-control"
                id="new-category-name"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-primary" id="new-category-save" onClick={handleNewCategorySave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
