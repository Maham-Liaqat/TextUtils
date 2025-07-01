import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import Header from './components/Header';
import TextArea from './components/TextArea';
import StatsPanel from './components/StatsPanel';
import ActionPanel from './components/ActionPanel';
import VoiceControls from './components/VoiceControls';
import useTextOperations from './hooks/useTextOperations';

function App() {
  const [text, setText] = useState('');
  const {
    uppercase,
    lowercase,
    capitalize,
    clearText,
    copyToClipboard,
    removeExtraSpaces,
    wordCount,
    charCount,
    readingTime,
    speak,
    stopSpeaking,
    isSpeaking,
  } = useTextOperations(text, setText);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <div className="container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <TextArea text={text} setText={setText} />
          <StatsPanel wordCount={wordCount} charCount={charCount} readingTime={readingTime} />
          <ActionPanel
            uppercase={uppercase}
            lowercase={lowercase}
            capitalize={capitalize}
            clearText={clearText}
            copyToClipboard={copyToClipboard}
            removeExtraSpaces={removeExtraSpaces}
          />
          <VoiceControls speak={speak} stopSpeaking={stopSpeaking} isSpeaking={isSpeaking} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;