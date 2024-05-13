import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
	changeTableVerticalAction,
	changeDefaultThemeBoolAction,
} from "../../store/menuReducer";

const SettingsLine = ({
	id,
	dispatchFunc,
	isChecked,
	labelText,
	isDisabled = false,
}) => {
	return (
		<div className="items-center flex flex-row space-x-2 py-1 place-content-between">
			<label htmlFor={id} className="text-sm font-medium leading-none">
				{labelText}
			</label>
			<Checkbox
				id={id}
				className="rounded-none"
				onCheckedChange={() => dispatchFunc()}
				checked={isChecked}
				disabled={isDisabled}
			/>
		</div>
	);
};

const SettingsContent = ({ tableView }) => {
	const dispatch = useDispatch();

	const { darkTheme, tableVertical } = useSelector((state) => state.menu);

	const changeTheme = () => {
		dispatch(changeDefaultThemeBoolAction());
	};

	const changeTableVertical = () => {
		dispatch(changeTableVerticalAction());
	};

	return (
		<div>
			<div className="flex flex-col pb-2">
				<SettingsLine
					id={"theme"}
					dispatchFunc={changeTheme}
					isChecked={darkTheme}
					labelText={"Dark theme:"}
				/>
				<SettingsLine
					id={"vertical-data"}
					dispatchFunc={changeTableVertical}
					isChecked={tableVertical}
					labelText={"Mobile friendly tables:"}
					isDisabled={tableView ? false : true}
				/>
			</div>
			<div className="border-t-2  pt-2 text-right">
				<p>
					Made by{" "}
					<a href="https://github.com/g13n4" target="_blank" rel="noreferrer">
						g13n4
					</a>
				</p>
			</div>
		</div>
	);
};

export default SettingsContent;
