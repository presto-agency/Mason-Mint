import dynamic from 'next/dynamic'
const AdminProducts = dynamic(() => import('@/modules/Admin/ui/Products'))
const ProductEdit = dynamic(
  () => import('@/modules/Admin/ui/ProductEdit/ProductEdit')
)

export { AdminProducts, ProductEdit }
