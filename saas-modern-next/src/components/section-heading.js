/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

const SectionHeading = ({ slogan, title, description, ...props }) => {
  return (
    <Box sx={styles.headingWrapper} {...props}>
      {slogan && (
        <Text sx={styles.slogan} as="p">
          {slogan}
        </Text>
      )}
      <Heading sx={styles.title}>{title}</Heading>
      {description && (
        <Text sx={styles.description} as="p">
          {description}
        </Text>
      )}
    </Box>
  );
};

export default SectionHeading;

const styles = {
  headingWrapper: {
    maxWidth: 584,
    margin: '0 auto 60px',
    textAlign: 'center',
  },
  slogan: {
    color: (theme) => theme.colors.primary,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 2.22,
    mb: ['12px'],
  },
  title: {
    fontSize: [21, , , 30],
    fontWeight: [500, 400],
    lineHeight: 1.68,
    letterSpacing: 'heading',
  },
  description: {
    fontSize: 17,
    lineHeight: 2.07,
    color: (theme) => theme.colors.text,
  },
};
