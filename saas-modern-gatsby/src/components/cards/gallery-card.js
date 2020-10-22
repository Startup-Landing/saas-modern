/** @jsx jsx */
import { jsx, Box, Flex, Image } from 'theme-ui';

const GalleryCard = ({ item }) => {
  return (
    <Flex as="figure" sx={styles.figure}>
      <Image loading="lazy" src={item?.image} alt={item?.title} />
      <Box as="figcaption">{item?.title}</Box>
    </Flex>
  );
};

export default GalleryCard;

const styles = {
  figure: {
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'flex-start',
    mb: 30,
    mx: 15,
    width: [
      'calc(100% - 30px)',
      'calc(100% - 30px)',
      'calc(50% - 30px)',
      'calc(50% - 30px)',
      'calc(33.3333% - 30px)',
    ],
    ':before': {
      background: `linear-gradient(1.15deg, #020718 0.72%, rgba(255, 255, 255, 0) 41.15%)`,
      borderRadius: 5,
      opacity: 0.7,
      content: `''`,
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      zIndex: 1,
    },
    img: {
      borderRadius: 5,
      transform: 'scale(1)',
      transition: 'all 0.3s ease-in-out 0s',
    },
    ':hover': {
      img: {
        transform: 'scale(1.2)',
      },
    },
    figcaption: {
      color: '#fff',
      position: 'absolute',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.68,
      letterSpacing: 'heading',
      left: 30,
      bottom: 20,
      zIndex: 1,
    },
  },
};
