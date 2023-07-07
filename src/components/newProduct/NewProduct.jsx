import React, { useState } from 'react';

function NewProduct({ handleNewProduct, hideNewProduct, categories, products }) {
    const [newProductName, setNewProductName] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newProductCode, setNewProductCode] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductCategory, setNewProductCategory] = useState('');
    const [newProductStock, setNewProductStock] = useState('');
    const [newProductImage, setNewProductImage] = useState(null);
    const [newProductFile, setNewProductFile] = useState('');
  
    const maxId = products.reduce((max, product) => (product.idProduct > max ? product.idProduct : max), 0);
  
    const handleNewProductSave = () => {
      if (newProductName) {
        const newProduct = {
          id: maxId + 1,
          name: newProductName,
          description: newProductDescription,
          code: newProductCode,
          price: parseInt(newProductPrice),
          category: parseInt(newProductCategory),
          stock: parseInt(newProductStock),
        };
  
        if (newProductImage) {
          const reader = new FileReader();
  
          reader.onload = function () {
            const blob = new Blob([reader.result], { type: newProductImage.type });
            newProduct.image = URL.createObjectURL(blob);
  
            handleNewProduct(newProduct);
            //hideNewProduct();
            setNewProductName('');
            setNewProductDescription('');
            setNewProductCode('');
            setNewProductPrice('');
            setNewProductCategory('');
            setNewProductStock('');
            setNewProductImage(null);
            setNewProductFile('');
          };
  
          reader.readAsArrayBuffer(newProductImage);
        } else {
          handleNewProduct(newProduct);
          //hideNewProduct();
          setNewProductName('');
          setNewProductDescription('');
          setNewProductCode('');
          setNewProductPrice('');
          setNewProductCategory('');
          setNewProductStock('');
          setNewProductImage(null);
          setNewProductFile('');
        }
      }
    };

    return (
        <div className="modal fade" id="new-product-modal" tabIndex="-1" role="dialog" aria-labelledby="new-product-modal-label" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="new-product-modal-label" style={{ color: 'black' }}>New Product</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Add form fields for other product details */}
                        <div className="form-group">
                            <label htmlFor="new-product-name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="new-product-name"
                                placeholder="Enter product name"
                                value={newProductName}
                                onChange={(e) => setNewProductName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-product-description">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                id="new-product-image"
                                placeholder="Enter product image"
                                value={newProductFile}
                                onChange={(e) => {
                                    setNewProductImage(e.target.files[0]);
                                    setNewProductFile(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-product-description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="new-product-description"
                                placeholder="Enter product description"
                                value={newProductDescription}
                                onChange={(e) => setNewProductDescription(e.target.value)}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="new-product-description">Product Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="new-product-code"
                                placeholder="Enter product code"
                                value={newProductCode}
                                onChange={(e) => setNewProductCode(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-product-description">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="new-product-price"
                                placeholder="Enter product price"
                                value={newProductPrice}
                                onChange={(e) => setNewProductPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-product-category">Category</label>
                            <select
                                className="form-control"
                                id="new-product-category"
                                value={newProductCategory}
                                onChange={(e) => setNewProductCategory(e.target.value)}
                            >
                                <option value="">Select category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-product-description">Stock</label>
                            <input
                                type="number"
                                className="form-control"
                                id="new-product-stock"
                                placeholder="Enter product stock"
                                value={newProductStock}
                                onChange={(e) => setNewProductStock(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" id="new-product-save" data-dismiss="modal" onClick={handleNewProductSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
