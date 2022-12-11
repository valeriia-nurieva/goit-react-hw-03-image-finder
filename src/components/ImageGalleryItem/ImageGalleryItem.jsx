import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photos, onSelect }) => {
  return photos.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ImageGalleryItemStyled key={id}>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={() => {
            onSelect(largeImageURL);
          }}
        />
      </ImageGalleryItemStyled>
    );
  });
};

ImageGalleryItem.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};
