import React, { useState } from "react";
import { snacks } from "../data/snacks";
import '../styles/style.css'
const SnackTable = () => {
    const [searchText, setSearchText] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const columns = ["id", "product_name", "product_weight", "price", "calories", "ingredients"];

    const filteredSnacks = snacks.filter((snack) => 
            snack.product_name.toLowerCase().includes(searchText.toLowerCase()) ||
            snack.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchText.toLowerCase()))
    )

    const sortedSnacks = [...filteredSnacks].sort((a, b) => {
        if (!sortColumn) return 0;
        return sortDirection === "asc"
            ? (typeof a[sortColumn] === "string" ? a[sortColumn].localeCompare(b[sortColumn]) : a[sortColumn] - b[sortColumn])
            : (typeof a[sortColumn] === "string" ? b[sortColumn].localeCompare(a[sortColumn]) : b[sortColumn] - a[sortColumn]);
    });
    
    const handleSort = (column) =>{
        setSortColumn(column);
        setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    }
  return (
    <div>
      <h1>Snacks Table</h1>
      <input className="search-input" type="text" placeholder="Search snacks..."  value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <table>
        <thead>
          <tr>
            {
                columns.map((col) => (
                    <th key={col} onClick={() => handleSort(col)}>{col.toUpperCase()} {sortColumn === col ? (sortDirection === "asc" ? "⬆️" : "⬇️") : ""}</th>
                ))
            }
          </tr>
        </thead>
        <tbody>
          {sortedSnacks.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.product_name}</td>
              <td>{snack.product_weight}</td>
              <td>₹{snack.price}</td>
              <td>{snack.calories} kcal</td>
              <td>{snack.ingredients.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SnackTable;
