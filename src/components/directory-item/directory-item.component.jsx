import {
  DirectoryBodyStyle,
  DirectoryItemContainerStyle,
  DirectoryBackgroundImageStyle,
} from "./directory-item.styles.jsx";
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({category}) => {
  const {imageUrl, title, route} = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainerStyle onClick={onNavigateHandler}>
      <DirectoryBackgroundImageStyle
        imageUrl={imageUrl}
      ></DirectoryBackgroundImageStyle>
      <DirectoryBodyStyle>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyStyle>
    </DirectoryItemContainerStyle>
  );
};

export default DirectoryItem;
