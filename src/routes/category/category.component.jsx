import {
  CategoryContainerStyle,
  CategoryTitleStyle,
} from "./category.styles.jsx";
import {useParams} from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitleStyle>{category.toUpperCase()}</CategoryTitleStyle>
      <CategoryContainerStyle>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainerStyle>
    </>
  );
};

export default Category;
