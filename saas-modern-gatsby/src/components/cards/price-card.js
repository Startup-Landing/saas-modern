/** @jsx jsx */
import { jsx, Box, Heading, Image, Text } from 'theme-ui';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { rgba } from 'polished';

const PriceCard = ({ price }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`priceCard ${price?.isRecommended ? ' recommended' : ''}`}
    >
      <Box sx={styles.priceDetails}>
        {price?.isRecommended && (
          <Text as="span" sx={styles.recommended}>
            Recommended
          </Text>
        )}
        <Box as="header" className="priceHeader" sx={styles.header}>
          <Image loading="lazy" src={price?.icon} alt="icon" />
          <Heading as="h3">{price.title}</Heading>
        </Box>
        <Box as="ul" sx={styles.list}>
          {price?.features?.map((feat, index) => (
            <Box
              as="li"
              className={`${feat.isAvailable ? '' : 'unavailable'}`}
              key={index}
            >
              {feat.isAvailable ? (
                <IoMdCheckmarkCircle color="#3FDBB1" size="30px" />
              ) : (
                <IoIosCloseCircle color={rgba('white', 0.5)} size="30px" />
              )}
              <span>{feat.title}</span>
            </Box>
          ))}
        </Box>
      </Box>
      <Box as="footer" className="priceAmount" sx={styles.footer}>
        <Box>
          <Text as="span" className="price-label">
            Starting from
          </Text>
          <Text as="span" className="price-value">
            {price?.amount?.toFixed(2)}
            /mo
          </Text>
        </Box>
        <BsArrowRightShort
          size="38px"
          color={price?.isRecommended ? '#636879' : ''}
        />
      </Box>
    </Box>
  );
};

export default PriceCard;

const styles = {
  priceTable: {
    backgroundColor: '#020718',
    border: `1px solid ${rgba('#F3F4F5', 0.15)}`,
    color: '#fff',
    borderRadius: 10,
    position: 'relative',
    '&.recommended': {
      backgroundColor: '#fff',
      borderColor: '#F0F0F5',
      color: 'text',
      footer: {
        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text',
        },
        '.price-value': {
          color: 'primary',
        },
        '> div, svg': {
          cursor: 'pointer',
        },
      },
    },
  },
  recommended: {
    backgroundColor: 'primary',
    position: 'absolute',
    top: '-16px',
    minHeight: '31px',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '0 8px',
    letterSpacing: '-0.14px',
    borderRadius: '3px',
  },
  header: {
    img: {
      maxWidth: [45, null, null, '100%'],
    },
    h3: {
      fontWeight: 700,
      fontSize: [16, null, null, 22],
      lineHeight: 1.31,
      letterSpacing: '-0.55px',
      mt: [20, null, null, 35],
    },
  },
  priceDetails: {
    p: ['35px 25px 40px', null, null, '55px 30px 45px', '55px 40px'],
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [20, 20, 20, 50],
    maxWidth: 340,
    li: {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: [13, 15, null, 16],
      lineHeight: 1.62,
      '+ li ': {
        mt: [15, null, null, 30],
      },
      svg: {
        mr: '13px',
        mt: '5px',
      },
    },
    '.unavailable': {
      'span, svg': {
        color: rgba('white', 0.5),
      },
    },
  },
  footer: {
    borderTop: `1px solid ${rgba('#F3F4F5', 0.15)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ['20px 30px 20px', null, null, '25px 30px 30px', '35px 50px 40px'],
    span: {
      display: 'block',
    },
    '.price-label': {
      fontSize: [13, 14, null, 16],
      lineHeight: 1.76,
      color: rgba('#fff', 0.6),
    },
    '.price-value': {
      fontSize: [18, null, null, 26],
      fontWeight: 700,
      lineHeight: 1.31,
      letterSpacing: '-0.55px',
      color: '#FFFFFF',
    },
  },
};
