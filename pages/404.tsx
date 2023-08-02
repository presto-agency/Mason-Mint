import PageNotFound from '@/modules/PageNotFound/PageNotFound'
import RouterTransitionLayout from '@/app/layouts/RouterTransitionLayout'

export default function Custom404() {
  return (
    <RouterTransitionLayout>
      <PageNotFound />
    </RouterTransitionLayout>
  )
}
