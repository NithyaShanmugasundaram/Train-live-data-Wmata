
const SelectComponent = ({ selectItems, label, onChange, value, name }) => {
    return (<><label htmlFor={label}>{label}:</label>

        <select id={label} onChange={onChange} value={value} name={name}>
            {selectItems.map((item, i) => {
                return (
                    <option key={i} value={item.value}>{item.name}</option>
                )
            })}

        </select></>);
}

export default SelectComponent;