import { Component } from 'react';
import axios from 'axios';
import { fetchImage } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { AppStyled } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { GlobalStyle } from 'components/GlobalStyle';
import Modal from 'react-modal';
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // maxWidth: calc('100vw' - '48px'),
    // maxHeight: calc('100vh ' - '24px'),
  },
};
Modal.setAppElement('#root');

axios.defaults.baseURL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    photos: [],
    selectedImage: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { page, query } = this.state;
      if (prevState.page !== page || prevState.query !== query) {
        this.setState({ isLoading: true });
        const images = await fetchImage(query, page)
        this.setState({ photos: images, isLoading: false });
      }
    } catch (error) {
      toast.error('Oops! Something went wrong! Please try again.');
    }
  }

  loadMore = () => {
    this.setState({ isLoading: true });
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: false,
    }));
  };

  searchPhoto = ({ query }) => {
    this.setState({
      query,
      page: 1,
    });
  };

  selectImage = (imgUrl) => {
    this.setState({
      selectedImage: imgUrl
    })
  }

  resetImage = () => {
        this.setState({
      selectedImage: null
    })
  }

  render() {
    const { photos, isLoading, selectedImage } = this.state;
    return (
      <>
        <AppStyled>
          <Searchbar onSubmit={this.searchPhoto} />
          {isLoading && <Loader />}
          {photos && !isLoading && <ImageGallery photos={photos} onSelect={this.selectImage} />}          
          {photos.length > 0 && !isLoading && <Button onClick={this.loadMore} />}
          
      <Modal
        isOpen={Boolean(selectedImage)}
        onRequestClose={this.resetImage}
        style={modalStyles}
      >
        <button onClick={this.resetImage}>close</button>
        <img src={selectedImage} alt="Large" />
      </Modal>
          <Toaster />
          <GlobalStyle />
        </AppStyled>
      </>
    );
  }
}
