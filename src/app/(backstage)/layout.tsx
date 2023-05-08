import '@/app/globals.css'
import PageHeader from '@/components/backstage/page-header'
import PageFooter from '@/components/backstage/page-footer'
import PageContent from '@/components/backstage/page-content'
import { ScopedCssBaseline } from '@/lib/mui';

export const metadata = {
  title: 'hoshiko後院',
  description: '就是hoshiko後院',
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
          <ScopedCssBaseline>
            <PageHeader class="h-12" />
            <PageContent class="h-[calc(100vh-48px-48px)]">
              {children}
            </PageContent>
            <PageFooter class="h-12"/>
          </ScopedCssBaseline>
        </>
      </body>
    </html>

  )
}
