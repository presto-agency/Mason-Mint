import { PageLayout } from '@/app/layouts/PageLayout'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <PageLayout headerTheme="dark">
      <HomeContent />
      {/*<div*/}
      {/*  style={{*/}
      {/*    height: '100vh',*/}
      {/*    display: 'flex',*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'center',*/}
      {/*    backgroundColor: 'var(--black)',*/}
      {/*    color: 'var(--white)',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <h1>Coming soon</h1>*/}
      {/*</div>*/}
    </PageLayout>
  )
}
