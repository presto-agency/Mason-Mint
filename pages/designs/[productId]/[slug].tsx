// import { FC } from 'react'
// import { GetStaticPaths, GetStaticProps } from 'next'
// import { ProductProps } from '@/utils/types'
// import db from '@/utils/db'
// import ProductModel from '../../../models/Product'
import { PageLayout } from '@/app/layouts/PageLayout'
import { DesignsDetailContent } from '@/modules/DesignsDetail'
// import { transformObjectsToJson } from '@/utils/json/transformObjectsToJson'

// type ProductDetailProps = {
//   product: ProductProps
//   sameProducts: ProductProps[]
// }

// const Index: FC<ProductDetailProps> = ({ product, sameProducts }) => {
const Index = () => {
  return (
    <PageLayout>
      {/*<DesignsDetailContent product={product} sameProducts={sameProducts} />*/}
      {/* <DesignsDetailContent /> */}
      <DesignsDetailContent />
    </PageLayout>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   await db.connect()
//
//   const products = await ProductModel.find().lean()
//   const idsAndSlugs = await products.map((product) => [
//     product.id,
//     product.slug,
//   ])
//   const paths = idsAndSlugs.map(([id, slug]) => ({
//     params: { productId: id, slug },
//   }))
//
//   return {
//     paths,
//     fallback: false,
//   }
// }
//
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const productId = params?.productId as string
//
//   const product: ProductProps | null = await ProductModel.findOne({
//     id: productId,
//   }).lean()
//
//   let sameProducts: ProductProps[] = []
//
//   if (product && product.category && product.category.id) {
//     sameProducts = (await ProductModel.find({
//       ['category.id']: product.category.id,
//     })
//       .lean()
//       .then((products) =>
//         products.filter((p) => p.id !== productId)
//       )) as ProductProps[]
//   }
//
//   await db.disconnect()
//
//   return {
//     props: {
//       product: transformObjectsToJson(product),
//       sameProducts: transformObjectsToJson(sameProducts),
//     },
//   }
// }

// export const getServerSideProps = async (req: NextApiRequest) => {
//   const { query } = req
//
//   await db.connect()
//
//   const product: ProductProps | null = await ProductModel.findOne({
//     id: query.productId,
//   }).lean()
//
//   let sameProducts: ProductProps[] = []
//
//   if (product && product.category && product.category.id) {
//     sameProducts = (await ProductModel.find({
//       ['category.id']: product.category.id,
//     })
//       .lean()
//       .then((products) =>
//         products.filter((p) => p.id !== query.productId)
//       )) as ProductProps[]
//   }
//
//   await db.disconnect()
//
//   return {
//     props: {
//       product: transformObjectsToJson(product),
//       sameProducts: transformObjectsToJson(sameProducts),
//     },
//   }
// }

export default Index
