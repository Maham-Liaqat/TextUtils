import { TextField } from '@mui/material';
import { motion } from 'framer-motion';

export default function TextArea({ text, setText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TextField
        label="Enter your text here"
        multiline
        minRows={8}
        maxRows={12}
        fullWidth
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.main',
            },
            '&:hover fieldset': {
              borderColor: 'primary.dark',
            },
          },
        }}
      />
    </motion.div>
  );
}