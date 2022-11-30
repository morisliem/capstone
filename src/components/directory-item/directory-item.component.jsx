import {
  DirectoryBodyStyle,
  DirectoryItemContainerStyle,
  DirectoryBackgroundImageStyle,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <DirectoryItemContainerStyle>
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
