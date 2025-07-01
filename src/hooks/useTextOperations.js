import { useState, useEffect } from 'react';
import { textOperations } from '../utils/textOperations';

export default function useTextOperations(initialText, setText) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      return () => {
        synth.cancel(); // Cleanup on unmount
      };
    }
  }, []);

  const updateStats = (text) => {
    const wordCount = text ? text.trim().split(/\s+/).length : 0;
    const charCount = text ? text.length : 0;
    const readingTime = Math.ceil(wordCount / 200);
    return { wordCount, charCount, readingTime };
  };

  const [stats, setStats] = useState(updateStats(initialText));

  useEffect(() => {
    setStats(updateStats(initialText));
  }, [initialText]);

  // Text manipulation functions
  const uppercase = () => setText(textOperations.toUppercase(initialText));
  const lowercase = () => setText(textOperations.toLowercase(initialText));
  const capitalize = () => setText(textOperations.capitalize(initialText));
  const clearText = () => setText('');
  const removeExtraSpaces = () => setText(textOperations.removeExtraSpaces(initialText));

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(initialText);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  // Speech functions
  const speak = (options = {}) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    const synth = window.speechSynthesis;
    synth.cancel(); // Stop any current speech

    const utterance = new SpeechSynthesisUtterance(initialText);
    
    // Configurable options
    utterance.rate = options.rate || 1;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;
    utterance.lang = options.lang || 'en-US';

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synth.speak(utterance);
    setUtterance(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return {
    uppercase,
    lowercase,
    capitalize,
    clearText,
    copyToClipboard,
    removeExtraSpaces,
    wordCount: stats.wordCount,
    charCount: stats.charCount,
    readingTime: stats.readingTime,
    speak,
    stopSpeaking,
    isSpeaking,
    utterance
  };
}