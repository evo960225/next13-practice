
import * as React from 'react';
import BlogListTable from './blog-list-table';


export default async function Page() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <BlogListTable/>
    </div>
  );
}