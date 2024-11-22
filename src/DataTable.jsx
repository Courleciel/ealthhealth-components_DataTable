// src/DataTable.jsx
import React from 'react';
import './DataTable.css';

const DataTable = ({ data, columns, pagination, onSort, onSearch }) => {
  return (
    <div className="datatable">
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => onSort && onSort(column.key)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <div className="pagination">
          <button disabled={pagination.currentPage === 1}>Précédent</button>
          <span>Page {pagination.currentPage}</span>
          <button disabled={pagination.currentPage === pagination.totalPages}>
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
