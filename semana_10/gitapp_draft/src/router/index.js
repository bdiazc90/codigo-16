import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SearchPage />} />
				<Route path="/search/:username" element={<SearchPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
