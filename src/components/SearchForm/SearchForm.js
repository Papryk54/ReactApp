import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { searchValue } from "../../redux/store";

const SearchForm = () => {
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: "SEARCH_VALUE",
			payload: "",
		});
	}, [dispatch]);

	const handleInputChange = (e) => {
		e.preventDefault();
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchValue({ searchValue }));
		dispatch({
			type: "SEARCH_VALUE",
			payload: inputValue,
		});
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput value={inputValue} onChange={handleInputChange} />
			<Button type="submit">
				<span className="fa fa-search" />
			</Button>
		</form>
	);
};

export default SearchForm;
