import './globals.css'
import PageHeader from './component/page-header'
import PageFooter from './component/page-footer'
import PageContent from './component/page-content'
import { CssBaseline } from '../lib/mui';

export const metadata = {
  title: 'hoshiko他家',
  description: '就是hoshiko他家',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-tw">
      <body className="h-full bg-transparent">
        <>
          <CssBaseline />
          <PageHeader class="h-12" />
          <PageContent class="h-[calc(100vh-48px-48px)]">
            {children}
          </PageContent>
          <PageFooter class="h-12"/>
        </>
      </body>
    </html>
  )
}
