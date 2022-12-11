import { ColorRing } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="20"
      width="20"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        backgroundColor: 'rgb(96 125 139 / 69%)',
        width: '100%',
        height: '100%',
        position: 'absolute',

      }}
      wrapperClass="blocks-wrapper"
      colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
    />
  );
};
