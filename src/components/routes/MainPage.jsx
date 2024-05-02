import MainPageData from "./MainPageData";
import MainPageList from "./MainPageList";
import { useSelector } from "react-redux";

const MainPage = ({ listPage }) => {
	const { isLoaded } = useSelector((state) => state.menu);

	if (listPage) {
		return isLoaded && <MainPageList />;
	}

	return isLoaded && <MainPageData />;
};

export default MainPage;
