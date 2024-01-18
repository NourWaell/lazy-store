import { SectionTitle, ProductsGrid } from "../components";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid look="grid" />
    </div>
  );
};
export default FeaturedProducts;
