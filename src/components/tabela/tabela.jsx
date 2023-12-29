import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const DataTable = ({ rows, columns, handleEdit, handleDelete }) => {
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
