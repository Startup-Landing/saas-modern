/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo-dark.svg';
import logoWhite from 'assets/logo.svg';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image
        src={white ? logoWhite : logo}
        alt="startup landing logo"
        width="182"
        height="37"
      />
    </Link>
  );
}
