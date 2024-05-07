import React, { useRef, useEffect } from "react";
import FlatPercentRadio from "../radio-buttons/FlatPercentRadio";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";
import CrossComparisonRadio from "../radio-buttons/CrossComparisonRadio";
import PositionRadio from "../radio-buttons/PositionRadio";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const TotalSelect = ({ data, selectedValue, onChange }) => {
	return (
		<Select defaultValue={selectedValue} onValueChange={onChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select value type to compare" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{data.map((item, idx) => {
						return (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

const DataSelect = ({
	dataLane,
	dataGame,
	selectedValue,
	onChange,
	...props
}) => {
	return (
		<Select defaultValue={selectedValue} onValueChange={onChange} {...props}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select value type to compare" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Early game</SelectLabel>
					{dataLane.map((item, idx) => {
						return (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						);
					})}
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Full game</SelectLabel>
					{dataGame.map((item, idx) => {
						return (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

const DataSelectorCross = ({ menuData, ...props }) => {
	const dispatch = useDispatch();

	const { totalFields, windowLaneFields, windowGameFields } = useSelector(
		(state) => state.menu,
	);

	const { ccompTotalField, ccompWindowField } = useSelector(
		(state) => state.settings,
	);

	const onChangeTotal = (value) => {
		dispatch(updateSettings("ccomp_field_total", value));
	};

	const onChangeWindow = (value) => {
		dispatch(updateSettings("ccomp_field_window", value));
	};

	return (
		<div {...props}>
			{menuData.category === 0
				? totalFields && (
						<TotalSelect
							data={totalFields}
							selectedValue={ccompTotalField}
							onChange={onChangeTotal}
							className="order-first justify-self-start"
						/>
				  )
				: windowLaneFields &&
				  windowGameFields && (
						<DataSelect
							dataLane={windowLaneFields}
							dataGame={windowGameFields}
							selectedValue={ccompWindowField}
							onChange={onChangeWindow}
							className="order-first justify-self-start"
						/>
				  )}
			<FlatPercentRadio />
			<CrossComparisonRadio />
			<PositionRadio />
		</div>
	);
};

export default DataSelectorCross;
