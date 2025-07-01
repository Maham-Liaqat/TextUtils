import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet'; // Updated import

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4, bgcolor: 'primary.main' }}>
      <Toolbar>
        <TextSnippetIcon sx={{ mr: 2, fontSize: '2rem' }} />
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          TextUtils Enhanced
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="body2">v2.0</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}