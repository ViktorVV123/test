import React, {useEffect, FocusEvent, useRef, useState} from "react"
import styles from './inputStyle.module.css'


export const DropdownWithStatus = ({status}: any) => {

    let [value1, setValue1] = useState('')
    let [list, setList] = useState(false)


    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
    }
    const onClickHandler = () => {
        setList(true)
    }

    console.log(onClickHandler)
    const onblurHandler = (event: FocusEvent<HTMLInputElement>) => {
        setList(false)
    }
    const filteredOptions1 = status
        .filter((statu: any) => statu.toLowerCase().includes(value.toLowerCase()));
    return (
        <div>
            <div>
                <input className={styles.containerList} value={value} onChange={onChangeHandler}
                       onClick={onClickHandler}
                       placeholder={status[0]} onBlur={onblurHandler}/>
                <div
                    className={styles.containerCollapse}>  {list && filteredOptions1.map((statu: any, index: string) => {
                    return (
                        <div className={index}>{statu}</div>
                    )
                })}</div>
            </div>
        </div>
    );
};
