/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { keyframes } from '@emotion/core';

const Timer = ({ duration, paused }) => {
  return (
    <Box sx={styles.countdown}>
      <svg preserveAspectRatio="none" viewBox="0 0 110 110">
        <circle fill="transparent" stroke="rgba(255, 255, 255, 0.2)" />
        <circle
          className="last"
          fill="rgba(255, 255, 255, 0)"
          stroke="#fff"
          style={{
            // transitionDuration: `${duration}ms`,
            animationDuration: `${duration}ms`,
            animationPlayState: `${paused ? 'paused' : 'running'}`,
          }}
        />
      </svg>
    </Box>
  );
};

export default Timer;

const countdown = keyframes`
  from {
    stroke-dashoffset: 314px;
  }
  to {
    stroke-dashoffset: 628px;
  }
`;

const styles = {
  countdown: {
    backgroundColor: (theme) => theme.colors.primary,
    position: 'relative',
    height: 50,
    width: 50,
    textAlign: 'center',
    svg: {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'rotateY(-180deg) rotateZ(-90deg)',
      circle: {
        strokeWidth: 6,
        strokeLinecap: 'butt',
        r: 50,
        cx: 55,
        cy: 55,
      },
      '.last': {
        strokeDasharray: '314.159px',
        strokeDashoffset: '225.895px',
        animation: `${countdown}  linear infinite forwards`,
      },
    },
  },
};
