'use client'
import * as React from 'react';
import { Button as Button } from '@/lib/mui';
import DataTable from '@/components/data-table'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import Link from 'next/link';


const CellButton = ({params}: {params: GridRenderCellParams}) => {
  console.log(params);
  
  return (
    <Button variant="contained" size="small">
      <Link href={`/backstage/blog/edit/${params?.row.title.split('.')[0]}`}>編輯</Link>
    </Button>
  );
};

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', sortable: true, width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'botton', headerName: 'Botton', width: 130,
    renderCell: (params) => (
      <>
        <CellButton params={params} />
      </>
    ),
  },
];

export default function BlogListTable({rows} : {rows: any[]}) {
  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
      />
    </>
  );
}