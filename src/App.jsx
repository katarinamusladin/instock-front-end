import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/warehouses" element={<Navigate to="/" />} />
					<Route
						path="/warehouses/:warehouseId"
						element={<WarehouseDetailsPage />}
					/>
					{/* <Route
						path="/warehouses/:warehouseId/edit"
						element={<WarehouseEditPage />}
					/>
					<Route
						path="/warehouses/:warehouseId/add"
						element={<WarehouseAddPage />}
					/>
					<Route path="/inventory" element={<InventoryPage />} />
					<Route
						path="/inventory/:inventoryId"
						element={<InventoryItemPage />}
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
