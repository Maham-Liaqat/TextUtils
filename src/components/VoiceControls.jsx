import { useState } from 'react';
import { Slider, Button, Stack, Typography, Paper } from '@mui/material';
import { VolumeUp, VolumeOff } from '@mui/icons-material';

export default function VoiceControls({ speak, stopSpeaking, isSpeaking }) {
  const [voiceSettings, setVoiceSettings] = useState({
    rate: 1,
    pitch: 1,
    volume: 1,
    lang: 'en-US'
  });

  const handleSpeak = () => {
    speak(voiceSettings);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Voice Controls
      </Typography>
      <Stack spacing={3}>
        <div>
          <Typography gutterBottom>Speech Rate: {voiceSettings.rate.toFixed(1)}</Typography>
          <Slider
            value={voiceSettings.rate}
            onChange={(e, newValue) => setVoiceSettings({...voiceSettings, rate: newValue})}
            min={0.5}
            max={2}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </div>
        
        <div>
          <Typography gutterBottom>Speech Pitch: {voiceSettings.pitch.toFixed(1)}</Typography>
          <Slider
            value={voiceSettings.pitch}
            onChange={(e, newValue) => setVoiceSettings({...voiceSettings, pitch: newValue})}
            min={0.5}
            max={2}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </div>

        <Button
          variant="contained"
          startIcon={isSpeaking ? <VolumeOff /> : <VolumeUp />}
          onClick={isSpeaking ? stopSpeaking : handleSpeak}
          sx={{
            bgcolor: isSpeaking ? 'error.main' : 'primary.main',
            '&:hover': {
              bgcolor: isSpeaking ? 'error.dark' : 'primary.dark'
            }
          }}
        >
          {isSpeaking ? 'Stop Speaking' : 'Speak Text'}
        </Button>
      </Stack>
    </Paper>
  );
}