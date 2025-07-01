import FallbackLoading from '@/components/FallbackLoading'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/Preloader'
import { ChildrenType } from '@/types/component-props'
import { lazy, Suspense } from 'react'

const TopNavigationBarPage = lazy(() => import('@/components/layout/TopNavigationBar/page'))
const VerticalNavigationBar = lazy(() => import('@/components/layout/VerticalNavigationBar/page'))

const AdminLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <div className="wrapper">
        <Suspense>
          <TopNavigationBarPage />
        </Suspense>

        <Suspense fallback={<FallbackLoading />}>
          <VerticalNavigationBar />
        </Suspense>

        <div className="page-content">
          <div className="container-fluid">
            <Suspense fallback={<Preloader />}>{children}</Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default AdminLayout
