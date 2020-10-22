/** @jsx jsx */
import { jsx, Box, Image } from 'theme-ui';
import play from 'assets/images/icons/play.png';
import pause from 'assets/images/icons/pause.png';

const Progressbar = ({ currentWidth, togglePlay, handleClick, ...props }) => {
  let c = Math.PI * (35 * 2); // 35 is circle r's value
  let pct = ((100 - currentWidth) / 100) * c;

  return (
    <Box sx={styles.progressbar} {...props}>
      <svg viewBox="0 0 80 80" sx={styles.svg}>
        <circle
          fill="transparent"
          sx={styles.circle}
          stroke="rgba(255,255,255,0.2)"
        ></circle>
        <circle
          stroke="#fff"
          sx={styles.circle}
          strokeDashoffset={pct}
        ></circle>
      </svg>
      <button sx={styles.button} onClick={handleClick}>
        <Image
          style={{ marginLeft: togglePlay ? '3px' : 0 }}
          src={togglePlay ? play : pause}
          alt="play pause icon"
        />
      </button>
    </Box>
  );
};

export default Progressbar;

const styles = {
  progressbar: {
    backgroundColor: (theme) => theme.colors.primary,
    display: 'inline-flex',
    position: 'relative',
  },
  svg: {
    height: '50px',
    width: '50px',
    maxWidth: '50px',
    transform: 'rotate(-90deg)',
  },
  circle: {
    r: '35',
    cx: '40',
    cy: '40',
    fill: 'transparent',
    strokeWidth: '5px',
    strokeDasharray: '219.91',
  },
  button: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    left: '50%',
    padding: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    ':focus': {
      outline: 0,
    },
  },
};
