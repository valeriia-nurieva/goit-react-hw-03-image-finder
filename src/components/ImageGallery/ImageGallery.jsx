import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ photos, onSelect }) => {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem photos={photos} onSelect={onSelect} />
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}