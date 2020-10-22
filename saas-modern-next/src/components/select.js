/** @jsx jsx */
import { jsx, Box, Label, Image, Select as SelectBox } from 'theme-ui';
import { rgba } from 'polished';

const Select = ({ id, label, icon, children, ...props }) => {
  return (
    <Box sx={styles.selectWrapper} {...props}>
      {icon && <Image src={icon} sx={styles.icon} alt="icon" />}
      {label && (
        <Label htmlFor={id} sx={styles.label}>
          {label}
        </Label>
      )}
      <SelectBox id={id} className="select" sx={styles.select}>
        {children}
      </SelectBox>
    </Box>
  );
};

export default Select;

const styles = {
  selectWrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    border: (theme) => `2px solid ${theme.colors.primary}`,
    padding: [
      '4px 25px 0px 50px',
      null,
      null,
      null,
      null,
      null,
      '4px 25px 0px 55px',
    ],
    position: 'relative',
    '.select + svg': {
      right: '-10px',
      position: 'relative',
    },
  },
  label: {
    display: 'flex',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1,
    position: 'relative',
    bottom: '-3px',
    color: rgba('#02073E', 0.4),
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  select: {
    minHeight: 40,
    minWidth: 205,
    padding: 0,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.5,
    fontFamily: 'body',
    color: '#0F2137',
    border: 0,
    ':focus': {
      outline: '0 none',
    },
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};
