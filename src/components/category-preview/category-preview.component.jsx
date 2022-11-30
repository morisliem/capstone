import {
  CategoryPreviewStyle,
  CategoryPreviewTitleStyle,
  CategoryPreviewContainerStyle,
} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainerStyle>
      <h2>
        <CategoryPreviewTitleStyle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewTitleStyle>
      </h2>
      <CategoryPreviewStyle>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewStyle>
    </CategoryPreviewContainerStyle>
  );
};

export default CategoryPreview;
