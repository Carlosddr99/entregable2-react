
export function SelectItem(props){
    
    const items= props.items;
    let value = props.value;
    const onChange= props.onChange;

    return(
        <div>
            <select onChange={onChange}>
                {items.map((item, index)=>
                <option value = {value[index]}>{item}</option>
                )}
            </select>
        </div>
    )

}