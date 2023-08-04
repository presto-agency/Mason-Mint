import { DesignsDetailContent } from '@/modules/DesignsDetail'
import PageTransitionLayout from '@/app/layouts/PageTransitionLayout'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <PageTransitionLayout>
      <DesignsDetailContent key={pageKey} />
    </PageTransitionLayout>
  )
}

export default Index
