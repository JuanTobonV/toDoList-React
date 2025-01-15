import { useStorageListener } from "./useStorageListener";
import './changeAlert.css'

export function ChangeAlert({sincronize}){

    const {show, toggleShow} = useStorageListener(sincronize);
    
    if(show){
        return (
            <div className="background">
                <div className="alert-bg">
                    <p>¡Hiciste nuevos cambios en una pestaña diferente! ¿Quieres sincronizarlos?</p>
                    <button onClick={toggleShow}>
                        Cargar
                    </button>
                </div>
            </div>

        )
    }
    else{
        return null;
    }
        
}   

