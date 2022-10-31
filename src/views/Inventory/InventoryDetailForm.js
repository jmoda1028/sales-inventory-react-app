const InventoryDetailForm = (props) => {

    const {
         values,
         onHideModal,
        //  onInputChange,
        //  onSubmit,
        //  product
        } = props;
  
  
      return(
        // <Modal>
        <div className="inventory-content">
          <form className="reg-form">
          {/* {isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )} */}
          {/* <div className="inventory-container"> */}
            {/* <div> */}
            <div className='inventory-details'>
          <div className="reg-control">
            <label htmlFor='productCode'>Product Code</label>
            <input 
             value={values.productCode}
            //  onChange={onInputChange}
             name="productCode" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='ProductName'>Name</label>
            <input 
             value={values.ProductName}
            //  onChange={onInputChange}
             name="ProductName" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='description'>Description</label>
            <input 
             value={values.description}
            //  onChange={onInputChange}
             name="description" 
             disabled 
           /> 
          </div>
         
          <div className="reg-control">
            <label htmlFor='quantity'>Quantity</label>
            <input 
             value={values.quantity}
            //  onChange={onInputChange}
             name="quantity" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='price'>Price</label>
            <input 
             value={values.price}
            //  onChange={onInputChange}
             name="price" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='dateStock'>Date Stocked</label>
            <input 
             value={values.dateStock}
            //  onChange={onInputChange}
             name="dateStock" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='category'>Category</label>
            <input 
             value={values.category}
            //  onChange={onInputChange}
             name="category" 
             disabled 
           /> 
          </div>

         
          {/* </div> */}
          {/* <div> */}
          <div className="reg-control">
            <label htmlFor='supplier'>Supplier</label>
            <input 
             value={values.supplier}
            //  onChange={onInputChange}
             name="supplier" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='createdby'>Created By</label>
            <input 
             value={values.firstName + " " + values.lastName}
            //  onChange={onInputChange}
             name="createdby" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='createdAt'>Date Created</label>
            <input 
             value={values.createdAt}
            //  onChange={onInputChange}
             name="createdAt" 
             disabled 
           /> 
          </div>
          <div className="reg-control">
            <label htmlFor='updatedAt'>Date Updated</label>
            <input 
             value={values.updatedAt}
            //  onChange={onInputChange}
             name="updatedAt" 
             disabled 
           /> 
          </div>
          </div>
          {/* <div > */}
            {/* <label htmlFor='updatedAt'>Image</label> */}
            {/* <img 
                src={values.productImage}
                alt="Product image" 
                // style={{ width: '120px', height: '120px'}} 
              /> */}
            {/* <img src={`http://localhost:8000/${image}`} />  */}
            
          {/* </div> */}
          {/* </div>
          </div> */}

{/* <img src={`http://localhost:8000/media/${values.productImage}`} alt="image" style={{ width: '120px', height: '120px'}} /> */}
<img src={`https://sales-and-inventory-api.herokuapp.com/media/${values.productImage}`} alt="product" style={{ width: '120px', height: '120px'}} />
          <div className="reg-actions">
            <button type='button' className='cancel-btn' onClick={onHideModal}>Close</button> {" "}
            {/* <button className='btn-submit'>Submit</button> */}
          </div>
        </form>
        </div>
        // </Modal>
       
      )
  }
  
  export default InventoryDetailForm;