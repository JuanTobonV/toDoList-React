import React from 'react';
import './TodoSearch.css';
import { TodosLoading } from '../TodosLoading';

export function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled = {loading}
    />
  );
}