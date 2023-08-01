import { PageLayout } from '@/app/layouts/PageLayout'
import { AboutContent } from '@/modules/About'

export default function About() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
