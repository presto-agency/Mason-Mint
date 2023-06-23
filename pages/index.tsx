import { PageLayout } from '@/app/layouts/PageLayout'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <PageLayout headerTheme="light">
      <HomeContent />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Coming soon</h1>
      </div>
      <div className="root"></div>
    </PageLayout>
  )
}
