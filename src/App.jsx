import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage.jsx";
// import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage.jsx";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage.jsx";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import WarehouseList from "./components/WarehouseList/WarehouseList.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<Navigate to="/" />} />
					{/* <Route path="/warehouses" element={<Navigate to="/" />} /> */}
					<Route path="/warehouses" element={<WarehouseList />} />
					<Route
						path="/warehouses/:warehouseId"
						element={<WarehouseDetailsPage />}
					/>
					<Route
						path="/warehouses/:warehouseId/edit"
						element={<EditWarehousePage />}
					/>
					<Route
						path="/inventories/:inventoryId"
						element={<InventoryDetailsPage />}
					/>

					{/* need to figure out what route to use */}
					<Route path="/inventories/add" element={<AddInventoryPage />} />

					<Route path="/inventory" element={<InventoryPage />} />

					{/*<Route
						path="/warehouses/:warehouseId/add"
						element={<WarehouseAddPage />}
					/>
					<Route
						path="/inventory/:inventoryId/edit"
						element={<InventoryEditPage />}
					/>
					<Route
						path="/inventory/:inventoryId/add"
						element={<InventorAddPage />}
					/> */}
					<Route path="/notfound" element={<NotFoundPage />} />
					<Route path="*" element={<Navigate to="/notfound" />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
