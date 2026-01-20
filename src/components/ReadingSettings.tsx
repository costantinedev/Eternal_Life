import React from 'react';
import { Settings, Type, Palette, Highlighter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useReadingSettings, FontSize, FontStyle } from '@/contexts/ReadingSettingsContext';
import { useLanguage } from '@/contexts/LanguageContext';

const ReadingSettings: React.FC = () => {
  const { language } = useLanguage();
  const {
    settings,
    setFontSize,
    setFontStyle,
    setHighlightKeywords,
  } = useReadingSettings();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-charcoal-light hover:text-charcoal">
          <Settings className="w-4 h-4" />
          <span className="sr-only">
            {language === 'en' ? 'Reading Settings' : 'Mipangilio ya Kusoma'}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            {language === 'en' ? 'Reading Settings' : 'Mipangilio ya Kusoma'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Font Size */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Type className="w-4 h-4" />
              {language === 'en' ? 'Font Size' : 'Ukubwa wa Herufi'}
            </Label>
            <Select
              value={settings.fontSize}
              onValueChange={(value: FontSize) => setFontSize(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">
                  {language === 'en' ? 'Small' : 'Ndogo'}
                </SelectItem>
                <SelectItem value="medium">
                  {language === 'en' ? 'Medium' : 'Kati'}
                </SelectItem>
                <SelectItem value="large">
                  {language === 'en' ? 'Large' : 'Kubwa'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Font Style */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Palette className="w-4 h-4" />
              {language === 'en' ? 'Font Style' : 'Mtindo wa Herufi'}
            </Label>
            <Select
              value={settings.fontStyle}
              onValueChange={(value: FontStyle) => setFontStyle(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="serif">
                  {language === 'en' ? 'Serif' : 'Serif'}
                </SelectItem>
                <SelectItem value="sans-serif">
                  {language === 'en' ? 'Sans Serif' : 'Sans Serif'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Highlight Keywords */}
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Highlighter className="w-4 h-4" />
              {language === 'en' ? 'Highlight Keywords' : 'Angazia Maneno Muhimu'}
            </Label>
            <Switch
              checked={settings.highlightKeywords}
              onCheckedChange={setHighlightKeywords}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadingSettings;
