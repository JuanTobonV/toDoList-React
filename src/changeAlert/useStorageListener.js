import { useState } from "react"

export function useStorageListener(sincronize){        
        const [storageChange, setStorageChange] = useState(false);
        
        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1'){
                console.log('Cambios en local storage');
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            sincronize();
            setStorageChange(false)
        }


        return {
            show: storageChange,
            toggleShow,
        }
             
    }
