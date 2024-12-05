import Product from "../../models/productsSchema.js";
import CustomError from "../../utils/customError.js";
import { joiProductSchema } from "../../models/joiValSchema.js";

const createProducts = async (req, res, next) => {
  const { value, error } = joiProductSchema.validate(req.body);
  const product = await Product.findOne({name:value.name})
  if(product){
    return next(new CustomError("Product already exists",400))
  }
  if (error) {
    return next(new CustomError(error.details[0].message, 400));
  }
  //req.file will have the meta data's
  if (!req.file || !req.file.path) {
    return next(new CustomError("Image is required", 400));
  }
  const newProduct = new Product({
    ...value,
    image: req.file.path,
  });
  if (!newProduct) {
    return next(new CustomError("Product not created", 400));
  }
  await newProduct.save();
  res.status(201).json({
    message: "Product created successfully",
  });
};

const updateProducts = async (req, res, next) => {
  //checking id format valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new CustomError("Invalid ID format", 400)); 
}
  const newProduct = await Product.findById(req.params.id);
  if (!newProduct) return next(new CustomError("Product not found", 404));
  //will update prod image if uploaded new
  let image = newProduct.image;
  if (req.file) image = req.file.path;
  // updating the product with img
  newProduct.set({ ...req.body, image });
  // save the updated product
  await newProduct.save();
  res.status(200).json({ message: "Product updated successfully" });
};

// will toggle isDeleted based on its current value
const deleteProducts = async (req, res, next) => {
  //checking id format valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(new CustomError("Invalid ID format", 400)); 
}
  //to access the deleted key
  const prod = await Product.findById(req.params.id);
  const deletedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: { isDeleted: !prod.isDeleted } },
    { new: true }
  );
  if (!deletedProduct) return next(new CustomError("Product not found", 404));
  res.status(200).json({
    message: deletedProduct.isDeleted
      ? `Product '${deletedProduct.name}' is deleted successfully`
      : `Product '${deletedProduct.name}' is restored successfully`,
  });
};

export { createProducts, updateProducts, deleteProducts };
