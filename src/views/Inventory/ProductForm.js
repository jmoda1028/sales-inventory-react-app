const ProductForm = (props) => {
    const {
        onInputHandler,
        onSubmitHandler,
        values,
        categories,
        suppliers,
        onFileChange,
    } = props;

    return (
      <form onSubmit={onSubmitHandler} className="add-product--form">
        <div className="container">
          <div className="field__control">
            <label htmlFor='productName'>Product Name</label>
            <input 
              value={values.productName}
              onChange={onInputHandler}
              name="productName"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='description'>Description</label>
            <input 
              value={values.description}
              onChange={onInputHandler}
              name="description"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='quantity'>Quantity_on_Hand</label>
            <input 
              value={values.quantity}
              onChange={onInputHandler}
              name="quantity"
              type="number" 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='price'>Price</label>
            <input 
              value={values.price}
              onChange={onInputHandler}
              name="price"
              type="number" 
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='image'>Upload Image</label>
            <input 
            //  value={values.image}
              onChange={onFileChange}
              name="image"
              type="file" 
              accept="image/*"  
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='date_stock_in'>Date Stock in</label>
            <input 
              value={values.date_stock_in}
              onChange={onInputHandler}
              name="date_stock_in"
              type="date"   
            /> 
          </div>
          <div className="field__control">
            <label htmlFor='category'>Category</label>
            <select className="category"  name='category' value={values.category} onChange={onInputHandler}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
              ))}
          </select>
          </div>
          <div className="field__control">
            <label htmlFor='supplier'>Supplier</label>
            <select name='supplier' value={values.supplier} onChange={onInputHandler}>
            {suppliers.map(supplier => (
              <option key={supplier.id} value={supplier.id}>{supplier.company_name}</option>
              ))}
          </select>
          </div>
          <div className="field__actions">
            <button className='btn-cancel' onClick={props.onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </div>
      </form>
    )
}

export default ProductForm;