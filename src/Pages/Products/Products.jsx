import { ProductList } from '../../components/ProductList';
import { getProducts } from '../../faceAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
