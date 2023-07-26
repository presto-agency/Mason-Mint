import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema(
  {
    ImageUrl: { type: String },
  },
  { _id: false }
)

const specificationSchema = new mongoose.Schema(
  {
    ActualMetalWeight: String,
    CoinWeight: String,
    Diameter: String,
    Thickness: String,
    EdgeDesign: String,
    Series: String,
    Fineness: String,
    IraApproved: String,
  },
  { _id: false }
)

const productTestSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  ProductName: String,
  Metal: String,
  mainImages: {
    obverse: String,
    reverse: String,
  },
  additionalImages: [imageSchema],
  specification: [specificationSchema],
  slug: { type: String, required: true, unique: true },
  category: { id: String, name: String },
  description: String,
})

const ProductTest =
  mongoose.models.ProductTest ||
  mongoose.model('ProductTest', productTestSchema)

export default ProductTest
