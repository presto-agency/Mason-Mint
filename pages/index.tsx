import { PageLayout } from '@/app/layouts/PageLayout'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <PageLayout headerTheme="dark">
      <HomeContent />
    </PageLayout>
  )
}
