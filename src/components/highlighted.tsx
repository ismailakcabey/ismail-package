import { useMemo } from 'react';

interface Props {
  text: string;
  highlightedWord: string;
}

const HighlightedText = ({ text, highlightedWord }: Props) => {
  const highlightText = useMemo(() => {
    if (!highlightedWord) {
      return <>{text}</>;
    }

    const sanitizedHighlightedWord = highlightedWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const textWithHighlight = text.replace(
      new RegExp(sanitizedHighlightedWord, 'gi'),
      `<span style="background-color: #FFA500">${highlightedWord}</span>`
    );

    return <div dangerouslySetInnerHTML={{ __html: textWithHighlight }} />;
  }, [text, highlightedWord]);

  return highlightText;
};

export default HighlightedText;
