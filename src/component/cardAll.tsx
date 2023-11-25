import React from 'react';
import {DropdownWithSearch} from "./DropdownWithSearch";

import styles from './inputStyle.module.css'
import {TextInput} from "./textInput";

export const CardAll = ({options,options1}:any) => {
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
                   <div><DropdownWithSearch options={options}/></div>
               </div>


               <div className={styles.containerName}>
                   <div>display:</div>
                   <div><DropdownWithSearch options={options}/></div>
               </div>

               <div className={styles.containerName}>
                   <div>bisness_block:</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>kind:</div>
                   <div><DropdownWithSearch options={options}/></div>
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
                   <div><DropdownWithSearch options={options}/></div>
               </div>

               <div className={styles.containerName}>
                   <div>last_opened:</div>
                   <div><TextInput/></div>
               </div>

           </div>
        </div>
    );
};

