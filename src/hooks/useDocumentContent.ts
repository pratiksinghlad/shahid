import { useState, useEffect, useMemo } from 'react';

/** Shape of the parsed document content returned by the hook. */
export interface DocumentContent {
  /** HTML string with bold/italic preserved from the markdown source. */
  readonly richHtml: string;
  /** Plain text version with all markdown formatting stripped. */
  readonly plainText: string;
  /** Whether the document is currently being fetched. */
  readonly isLoading: boolean;
  /** Error message if fetching failed. */
  readonly error: string | null;
}

/**
 * Converts basic markdown to HTML.
 * Handles: **bold**, *italic*, paragraphs (double newlines), and line breaks.
 */
const markdownToHtml = (md: string): string =>
  md
    .split(/\n{2,}/)
    .map((paragraph) => {
      const html = paragraph
        .trim()
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br />');
      return `<p>${html}</p>`;
    })
    .join('');

/**
 * Strips markdown formatting characters to produce plain text.
 */
const stripMarkdown = (md: string): string =>
  md
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/#+\s/g, '')
    .replace(/\n{2,}/g, '\n')
    .trim();

/**
 * Custom hook that fetches a `.md` file and converts it to HTML + plain text.
 *
 * @param documentUrl – Absolute or relative URL to the `.md` file.
 * @returns `DocumentContent` with rich HTML, plain text, loading state, and error.
 */
export const useDocumentContent = (documentUrl: string): DocumentContent => {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDocument = async (): Promise<void> => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(documentUrl, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch document: ${response.status} ${response.statusText}`,
          );
        }

        const text = await response.text();
        setMarkdown(text);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }
        const message =
          err instanceof Error ? err.message : 'Unknown error occurred';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchDocument();

    return () => {
      controller.abort();
    };
  }, [documentUrl]);

  const richHtml = useMemo(() => markdownToHtml(markdown), [markdown]);
  const plainText = useMemo(() => stripMarkdown(markdown), [markdown]);

  return { richHtml, plainText, isLoading, error };
};
