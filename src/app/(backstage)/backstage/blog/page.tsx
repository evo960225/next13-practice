
import * as React from 'react';
import BlogListTable from './blog-list-table';


export default async function Page() {
  const response = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`)).json()
  const { files } = response
  const tableData: any[] = []
  files.forEach((x) => {
    const obj:{id: (string | undefined) , date: (string | undefined), title: (string | undefined)} = {
      id: x, date: '1', title: x
    }
    tableData.push(obj)
  })
  return (
    <div style={{ height: 400, width: '100%' }}>
      <BlogListTable rows={tableData}/>
    </div>
  );
}