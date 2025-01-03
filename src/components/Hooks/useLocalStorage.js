import React, { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue){ //Usamos la palabra useNombreCustomHook para indicar que es un customhook, no una funcion cualquiera. Usamos como parametros: itemName para guardar en el localStorage lo que le pasemos como parametro e initialValue para pasarle por parametro el valor inicial.
  
const [item, setItem] = React.useState(initialValue); //Lo nombramos items porqué eso es como lo define el contenido el local Storage internamente

const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

  useEffect(() => {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

    if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = item;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

  })


  const saveItem = (newItem) => { 

    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem)
  }

  return [item,saveItem];

}