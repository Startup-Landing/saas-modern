/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import { rgba } from 'polished';

const navItems = [
  {
    id: 1,
    link: '#!',
    title: 'Home',
  },
  {
    id: 2,
    link: '#!',
    title: 'Advertise',
  },
  {
    id: 3,
    link: '#!',
    title: 'Supports',
  },
  {
    id: 4,
    link: '#!',
    title: 'Marketing',
  },
  {
    id: 5,
    link: '#!',
    title: 'FAQ',
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>
            <Logo white />
            <Text as="span">
              All right reserved - Design &amp; Developed by RedQ, Inc
            </Text>
          </Flex>

          <Flex as="ul" sx={styles.nav}>
            {navItems?.map((item) => (
              <li key={item.id}>
                <Link path={item.link}>{item.title}</Link>
              </li>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#020718',
  },
  content: {
    alignItems: 'center',
    borderTop: `1px solid ${rgba('#fff', 0.15)}`,
    display: ['block', null, null, null, 'flex'],
    justifyContent: 'space-between',
    paddingTop: '20px',
    paddingBottom: '60px',
    textAlign: ['center', null, null, null],
    '@media only screen and (max-width: 400px)': {
      pb: 50,
    },
  },
  copyright: {
    display: ['block', 'flex'],
    alignItems: 'center',
    justifyContent: ['center', null, null, null],
    span: {
      fontSize: '14px',
      lineHeight: [1.8, null, null, 1.29],
      color: rgba('#FFFFFF', 0.7),
      marginTop: 1,
      display: 'inline-flex',
    },
  },
  nav: {
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    // display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      '+ li': {
        marginLeft: [4],
      },
      '@media only screen and (max-width: 400px)': {
        mb: 4,
      },
      a: {
        color: 'white',
        display: 'inline-flex',
        textAlign: 'right',
        textDecoration: 'none',
      },
    },
  },
};
