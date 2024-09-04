import deleteIcon from '../../assets/images/icons/delete_outline-24px.svg';
import editIcon from '../../assets/images/icons/edit-24px.svg';
import chevRight from '../../assets/images/icons/chevron_right-24px.svg';
import './WarehouseList.scss';
function WarehouseList(){

  return (
<div className="warehouses__item">
<div className="warehouses__text-box">
    <div className="warehouses__column">
        <div className="warehouses__content warehouses__content--short">
            <h3 className="warehouses__mobile-header">Warehouse</h3>
            <p>Warehouse</p>
        </div>
        <div className="warehouses__content warehouses__content--long">
            <h3 className="warehouses__mobile-header">Address</h3>
            <p>Toronto</p>
        </div>
    </div>
    <div className="warehouses__column">
        <div className="warehouses__content warehouses__content--short">
            <h3 className="warehouses__mobile-header">Contact Name</h3>
            <p>Katarina</p>
        </div>
        <div className="warehouses__content warehouses__content--long">
            <h3 className="warehouses__mobile-header">Contact Information</h3>
            <p>+1 234 567</p>
            <p>katarina@mail.com</p>
        </div>
        
    </div>
</div>
<div className="warehouses__action">
<h3 className="warehouses__mobile-header active">ACTIONS</h3>
    <img src={deleteIcon} alt='delete icon' className="warehouses__icon" />
    <img src={editIcon} alt='edit icon' className="warehouses__icon" />
</div>
</div>
  );
}

export default WarehouseList;