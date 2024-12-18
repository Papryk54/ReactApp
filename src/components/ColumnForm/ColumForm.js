import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Card from "../Card/Card";

const ColumnForm = (props) => {
	const [title, setTitle] = useState("");
	const [icon, setIcon] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.action({ title: title, icon: icon });
		setTitle("");
		setIcon("");
	};

	return (
		<form className={styles.columnForm} onSubmit={handleSubmit}>
			<span>Title:</span>
			<TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
			<span>Icon:</span>
			<TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
			<Button>Add Column</Button>
		</form>
	);
};

export default ColumnForm;
