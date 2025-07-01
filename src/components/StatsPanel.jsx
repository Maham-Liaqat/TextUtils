import { Paper, Grid, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Article, Timer, Functions } from '@mui/icons-material';

export default function StatsPanel({ wordCount, charCount, readingTime }) {
  const stats = [
    { icon: <Article />, label: 'Words', value: wordCount },
    { icon: <Functions />, label: 'Characters', value: charCount },
    { icon: <Timer />, label: 'Reading Time', value: `${readingTime} min` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Paper elevation={3} sx={{ p: 2, mb: 3, bgcolor: 'background.paper' }}>
        <Grid container spacing={2}>
          {stats.map((stat, index) => (
            <Grid item xs={4} key={index}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'primary.main' }}>{stat.icon}</span>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </div>
              </div>
              {index < stats.length - 1 && (
                <Divider orientation="vertical" flexItem sx={{ ml: 'auto' }} />
              )}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
}