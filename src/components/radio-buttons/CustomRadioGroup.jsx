import RadioItem from "./RadioItem";

const CustomRadioGroup = ({ data, stateCheckedName, onChange, className }) => {
	return (
		<div
			className={`grid grid-flow-col items-center justify-center ${
				className ? className : ""
			}`}
		>
			{data.map((item, idx) => {
				return (
					<RadioItem
						labelText={item.label}
						isChecked={stateCheckedName === item.id}
						tooltipText={item.tooltip}
						onChange={onChange}
						checkboxId={`${item.label}-checkbox`}
						value={item.id}
						key={item.label}
						index={idx}
					/>
				);
			})}
		</div>
	);
};

export default CustomRadioGroup;
