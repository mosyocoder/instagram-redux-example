import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { changeUserDetails } from "./redux/appSlice";
import { message } from "antd";

function App() {
	//stateimiz içerisindeki bileşenlere ulaşalım
	const { firstName, lastName, age, job } = useSelector((state) => state.appSlice);

	//dispatch'e state içerisindeki bileşenleri malipüle etmek için ihtiyacımız var
	const dispatch = useDispatch();

	let fName, lName, fAge, fJob;

	//antd kullanarak işlem tamamlandığında success mesajı için kodlar
	const [messageApi, contextHolder] = message.useMessage();

	const success = () => {
		messageApi.open({
			type: "success",
			content: "Change User Details",
		});
	};

	const changeUserDetail = () => {
		dispatch(changeUserDetails({ firstName: fName, lastName: lName, age: fAge, job: fJob }));
		success();
	};

	return (
		<div className="container">
			{contextHolder}
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control defaultValue={firstName} onChange={(e) => (fName = e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Last Name</Form.Label>
					<Form.Control rows={3} defaultValue={lastName} onChange={(e) => (lName = e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Age</Form.Label>
					<Form.Control type="number" id={fAge} rows={3} defaultValue={age} onChange={(e) => (fAge = e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Job</Form.Label>
					<Form.Control type="text" id={fJob} rows={3} value={job} onChange={(e) => (fJob = e.target.value)} />
				</Form.Group>
			</Form>
			<Button variant="outline-success" onClick={() => changeUserDetail()}>
				Change User Details
			</Button>
		</div>
	);
}

export default App;
