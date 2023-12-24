import React from 'react';
import {DropdownWithSearch} from "./DropdownWithSearch";
import styles from './inputStyle.module.css'
import {TextInput} from "./textInput";
import {DropdownWithStatus} from "./DropdownWithStatus";
import {MultiSelectInput} from "./choiseSystemStart";



type dispalyType={
    id:number,
    name:string
}
type dispalyAllType ={
    display:Array<dispalyType>

}

export const CardAll = ( {data}:any) => {
    return (
        <div className={styles.containerInput}>
           <div >

               <div className={styles.containerName}>
                 <div >  Title:</div>
                  <div> <TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>short_name:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>link:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>owner: </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>creator:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>employee:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>descritption:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>functionality:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>document_url:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>status:</div>
                   <div><TextInput/></div>
               </div>


               <div className={styles.containerName}>
                   <div>display:</div>
                   <div><MultiSelectInput data={data}  /></div>
               </div>

               <div className={styles.containerName}>
                   <div>bisness_block:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>kind:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>wallpaper:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>logo:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>favorites:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>last_opened:</div>
                   <div><TextInput/></div>
               </div>

           </div>
        </div>
    );
};

