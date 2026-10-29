type dropdownProps = {
    lable: string;
    obtion:any
}

function Dropdown({ lable,obtion }: dropdownProps) {
    return (
        <div className="flex flex-col gap-2  border p-2 m-10 w-100 rounded-lg shadow-lg ">
            <label>{lable}</label>
            <select className="bg-green-100 p-2 rounded-md text-black font-semibold" >
                {obtion.map((option:any, index:any) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown