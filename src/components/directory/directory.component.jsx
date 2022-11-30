import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainerStyle} from "./directory.styles.jsx";

const Directory = ({categories}) => {
  return (
    <DirectoryContainerStyle>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainerStyle>
  );
};

export default Directory;
