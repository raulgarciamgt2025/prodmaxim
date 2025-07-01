'use client'
import DashboardPage from '@/app/(admin)/menu/dashboard/page'
import VerticalLayout from '@/components/layout/VerticalLayout'
import { useLayoutContext } from '@/context/useLayoutContext'
import { useEffect } from 'react'


const FullView = () => {
  const { changeMenu } = useLayoutContext()
  useEffect(() => {
    changeMenu.size('full')
  }, [])
  return (
    <>
      <VerticalLayout>
        <DashboardPage />
      </VerticalLayout>
    </>
  )
}

export default FullView
