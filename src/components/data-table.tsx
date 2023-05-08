'use client'

import { DataGrid, GridColDef } from '@/lib/mui-grid';

interface DataTableDef {
  rows: any[];
  columns: GridColDef[];
}

export default function DataTable(props: DataTableDef) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
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
}