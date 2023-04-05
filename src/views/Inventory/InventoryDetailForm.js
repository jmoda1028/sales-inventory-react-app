import moment from 'moment';


const InventoryDetailForm = (props) => {
    const {
        values,
        onHideModal,
    } = props;

    return(
      <form className="detail--form">
        <div className="container">
          <div className='inventory-details'>
            <div className="field__control">
              <label htmlFor='productCode'>Product Code</label>
              <input 
                  value={values.productCode}
                  name="productCode" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='ProductName'>Name</label>
              <input 
                  value={values.ProductName}
                  name="ProductName" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='description'>Description</label>
              <input 
                  value={values.description}
                  name="description" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='quantity'>Quantity</label>
              <input 
                  value={values.quantity}
                  name="quantity" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='price'>Price</label>
              <input 
                  value={values.price}
                  name="price" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='dateStock'>Date Stocked</label>
              <input 
                  value={values.dateStock}
                  name="dateStock" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='category'>Category</label>
              <input 
                  value={values.category}
                  name="category" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='supplier'>Supplier</label>
              <input 
                  value={values.supplier}
                  name="supplier" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='createdby'>Created By</label>
              <input 
                  value={values.firstName + " " + values.lastName}
                  name="createdby" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='createdAt'>Date Created</label>
              <input 
                  value={moment(values.createdAt).format('LLL')}
                  name="createdAt" 
                  disabled 
              /> 
            </div>
            <div className="field__control">
              <label htmlFor='updatedAt'>Date Updated</label>
              <input 
                  value={moment(values.updatedAt).format('LLL')}
                  name="updatedAt" 
                  disabled 
              /> 
            </div>
          </div>
          <img src={`http://localhost:8000/media/${values.productImage}`} alt="image" style={{ width: '120px', height: '120px'}} />
          {/* <img src={`https://sales-and-inventory-api.herokuapp.com/media/${values.productImage}`} alt="product" style={{ width: '120px', height: '120px'}} /> */}
          <div className="field__actions">
            <button className='btn-cancel' onClick={onHideModal}>Close</button> {" "}
          </div>
        </div>
      </form>
    )
  }
  
  export default InventoryDetailForm;