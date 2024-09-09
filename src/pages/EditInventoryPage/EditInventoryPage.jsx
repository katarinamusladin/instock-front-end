import "./EditInventoryPage.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
import EditInventoryDetails from "../../components/EditInventoryDetails/EditInventoryDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddInventoryButtons from "../../components/AddInventoryButtons/AddInventoryButtons";
import EditInventoryAvailability from "../../components/EditInventoryAvailability/EditInventoryAvailability";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function EditInventoryPage() {
  document.title = "Edit Inventory Details";
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [item_name, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("InStock");
  const [quantity, setQuantity] = useState(0);
  const [warehouse_id, setWarehouse] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [errors, setErrors] = useState({
    warehouse_id: false,
    item_name: false,
    description: false,
    category: false,
    quantity: false,
  });

  //Used for placeholder text!
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchWarehousesAndCategories = async () => {
      try {
        const warehouseResponse = await axios.get(
          `${BASE_URL}:${PORT}/api/warehouses`
        );
        setWarehouses(warehouseResponse.data);

        const inventoryResponse = await axios.get(
          `${BASE_URL}:${PORT}/api/inventories`
        );
        const inventoryData = inventoryResponse.data;

        const uniqueCategories = [
          ...new Set(inventoryData.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);

        const itemData = await axios.get(
          `${BASE_URL}:${PORT}/api/inventories/${inventoryId}`
        );
        setItemDetails(itemData.data);
      } catch (error) {
        console.error("Error fetching warehouse or inventory data:", error);
      }
    };

    fetchWarehousesAndCategories();
  }, []);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      warehouse_id: !warehouse_id,
      item_name: !item_name,
      description: !description,
      category: !category,
      quantity: quantity.length === 0,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return console.log("Missing input data");
    }

    const pckg = {
      warehouse_id,
      item_name,
      description,
      category,
      status,
      quantity,
    };
    console.log(pckg, "pckg");
    try {
      const response = await axios.put(
        `${BASE_URL}:${PORT}/api/inventories/${inventoryId}`,
        pckg
      );
      console.log("item updated", response.data);
      e.target.reset();
      navigate(`/inventories/${inventoryId}`, { replace: true });
    } catch (error) {
      console.log(error, "issue editing item");
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);

    if (newQuantity === "0") {
      setStatus("OutStock");
    } else {
      setStatus("InStock");
    }
  };

  return (
    <>
      <article className="edit-inventory">
        <section className="edit-inventory__page">
          <PageHeader
            path1={`/inventories/${inventoryId}`}
            icon={backIcon}
            text={"Edit Inventory Item"}
            altText="back key icon"
          />
          <form className="wrapper" onSubmit={handleEditSubmit}>
            <div className="wrapper__left">
              <EditInventoryDetails
                setCategory={setCategory}
                setItemName={setItemName}
                setDescription={setDescription}
                categories={categories}
                errors={errors}
                itemDetails={itemDetails}
              />
            </div>
            <div className="wrapper__right">
              <EditInventoryAvailability
                setQuantity={setQuantity}
                warehouses={warehouses}
                status={status}
                quantity={quantity}
                setWarehouse={setWarehouse}
                setStatus={setStatus}
                handleQuantityChange={handleQuantityChange}
                errors={errors}
                itemDetails={itemDetails}
              />
            </div>
          </form>
          <div className="click">
            <AddInventoryButtons onClick={handleEditSubmit} btnText={"Save"} />
          </div>
        </section>
      </article>
    </>
  );
}
