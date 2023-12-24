import { useState } from "react";

export const MultiSelectInput = ({ data }:any) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isMouseOverList, setIsMouseOverList] = useState(false);

    const filteredData = data.filter((item:any) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleItemSelect = (item:any) => {
        setInputValue(item);
        setIsFocused(false);
    };

    const handleBlur = () => {
        if (!isMouseOverList) {
            setIsFocused(false);
        }
    };

    const handleInputChange = (e:any) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input
                value={inputValue}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onChange={handleInputChange}
            />
            {isFocused && (
                <ul
                    onMouseEnter={() => setIsMouseOverList(true)}
                    onMouseLeave={() => setIsMouseOverList(false)}
                >
                    {filteredData.map((El:any) => (
                        <li onClick={() => handleItemSelect(El)}>{El}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};