import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type FontSize = 'small' | 'medium' | 'large';
export type FontStyle = 'serif' | 'sans-serif';

interface ReadingSettings {
  fontSize: FontSize;
  fontStyle: FontStyle;
  highlightKeywords: boolean;
}

interface ReadingSettingsContextType {
  settings: ReadingSettings;
  setFontSize: (size: FontSize) => void;
  setFontStyle: (style: FontStyle) => void;
  setHighlightKeywords: (highlight: boolean) => void;
  getFontSizeClass: () => string;
  getFontStyleClass: () => string;
}

const defaultSettings: ReadingSettings = {
  fontSize: 'medium',
  fontStyle: 'serif',
  highlightKeywords: true,
};

const ReadingSettingsContext = createContext<ReadingSettingsContextType | undefined>(undefined);

export const ReadingSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<ReadingSettings>(() => {
    const saved = localStorage.getItem('readingSettings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('readingSettings', JSON.stringify(settings));
  }, [settings]);

  const setFontSize = (fontSize: FontSize) => {
    setSettings(prev => ({ ...prev, fontSize }));
  };

  const setFontStyle = (fontStyle: FontStyle) => {
    setSettings(prev => ({ ...prev, fontStyle }));
  };

  const setHighlightKeywords = (highlightKeywords: boolean) => {
    setSettings(prev => ({ ...prev, highlightKeywords }));
  };

  const getFontSizeClass = (): string => {
    switch (settings.fontSize) {
      case 'small':
        return 'text-base';
      case 'medium':
        return 'text-lg';
      case 'large':
        return 'text-xl';
      default:
        return 'text-lg';
    }
  };

  const getFontStyleClass = (): string => {
    return settings.fontStyle === 'serif' ? 'font-serif' : 'font-sans';
  };

  return (
    <ReadingSettingsContext.Provider
      value={{
        settings,
        setFontSize,
        setFontStyle,
        setHighlightKeywords,
        getFontSizeClass,
        getFontStyleClass,
      }}
    >
      {children}
    </ReadingSettingsContext.Provider>
  );
};

export const useReadingSettings = (): ReadingSettingsContextType => {
  const context = useContext(ReadingSettingsContext);
  if (!context) {
    throw new Error('useReadingSettings must be used within a ReadingSettingsProvider');
  }
  return context;
};
