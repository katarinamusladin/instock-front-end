import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/notfound" element={<NotFoundPage />} />
					<Route path="*" element={<Navigate to="/notfound" />} />
					<Header />
					<Footer />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
