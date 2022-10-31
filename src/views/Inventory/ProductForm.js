// import Card from '../../components/UI/Card'
// import LoadingSpinner from '../../components/UI/LoadingSpinner'
// import Modal from '../../components/UI/Modal'

const ProductForm = (props) => {

    const {
        onInputHandler,
        onSubmitHandler,
        values,
        categories,
        suppliers,
        onFileChange,
        // isLoading,
        // error,

    } = props;

    return (
        <form onSubmit={onSubmitHandler} className="reg-form">
          {/* {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}

          <div className="reg-control">
            <label htmlFor='productName'>Product Name</label>
            <input 
             value={values.productName}
             onChange={onInputHandler}
             name="productName"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='description'>Description</label>
            <input 
             value={values.description}
             onChange={onInputHandler}
             name="description"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='quantity'>Quantity_on_Hand</label>
            <input 
             value={values.quantity}
             onChange={onInputHandler}
             name="quantity"
             type="number" 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='quantity'>Price</label>
            <input 
             value={values.price}
             onChange={onInputHandler}
             name="price"
             type="number" 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='image'>Upload Image</label>
            <input 
            //  value={values.image}
             onChange={onFileChange}
             name="image"
             type="file" 
             accept="image/*"  
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='date_stock_in'>Date Stock in</label>
            <input 
             value={values.date_stock_in}
             onChange={onInputHandler}
             name="date_stock_in"
             type="date"   
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='category'>Category</label>
            
            <select  name='category' value={values.category} onChange={onInputHandler}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
              ))}
          </select>
     
          </div>
          <div className="reg-control">
            <label htmlFor='supplier'>Supplier</label>
           
            <select name='supplier' value={values.supplier} onChange={onInputHandler}>
            {suppliers.map(supplier => (
              <option key={supplier.id} value={supplier.id}>{supplier.company_name}</option>
              ))}
          </select>
          
          </div>
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={props.onClose}>Cancel</button> {" "}
            <button className='btn-submit'>Submit</button>
          </div>
        </form>
    )
}

export default ProductForm;