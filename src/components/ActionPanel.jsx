import { Button, ButtonGroup, Tooltip } from '@mui/material';
import {
  FormatClear,
  ContentCopy,
  TextFormat,
  TextFields,
  SpaceBar,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function ActionPanel({
  uppercase,
  lowercase,
  capitalize,
  clearText,
  copyToClipboard,
  removeExtraSpaces,
}) {
  const actions = [
    { icon: <TextFormat />, label: 'Uppercase', action: uppercase },
    { icon: <TextFields />, label: 'Lowercase', action: lowercase },
    { icon: <TextFormat />, label: 'Capitalize', action: capitalize },
    { icon: <SpaceBar />, label: 'Remove Extra Spaces', action: removeExtraSpaces },
    { icon: <ContentCopy />, label: 'Copy to Clipboard', action: copyToClipboard },
    { icon: <FormatClear />, label: 'Clear Text', action: clearText },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <ButtonGroup
        variant="contained"
        fullWidth
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '8px',
          mb: 3,
        }}
      >
        {actions.map((action, index) => (
          <Tooltip key={index} title={action.label} arrow>
            <Button
              onClick={action.action}
              startIcon={action.icon}
              sx={{
                textTransform: 'none',
                whiteSpace: 'nowrap',
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              {action.label}
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </motion.div>
  );
}