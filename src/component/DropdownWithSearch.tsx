import {useEffect, useRef, useState} from "react"
import styles from './inputStyle.module.css'


export const DropdownWithSearch = ({options}: any) => {

    let [value, setValue] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const handleClickOutside = (event: any) => {
        // @ts-ignore
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionSelect = (option: any) => {
        setSelectedOption(option);
        setOpen(false);
    };
    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
    }
    const onCLickhandler = () => {
        setOpen(true)
    }
    const filteredOptions = options
        .filter((option: any) => option.toLowerCase().includes(value.toLowerCase()));
      /*  .slice(options можно указать какое колличесво показать 0.5);*/

    return (
        <div>
            <div ref={wrapperRef}>
                <input className={styles.gg} value={value}
                       onChange={onChangeHandler}
                       onClick={onCLickhandler}
                       placeholder={selectedOption ? selectedOption : options[0]}

                />
           <div className={styles.gg1} >   {isOpen && filteredOptions.map((option: any, index: any) => {
                    return (
                        <div  key={index}
                             onClick={() => handleOptionSelect(option)}>{option}</div>
                    )
                })}</div>
            </div>
        </div>
    );
};
