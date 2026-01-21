# TODO: Separate English and Swahili PDFs by Switching Links

## Steps to Complete
- [x] Update the `pdfs` array in Books.tsx to include `englishFilename` and `swahiliFilename` for each book
- [x] Fix the second book's id to 'cover-letter' and update its titles/descriptions appropriately
- [x] Add logic in the Books component to compute `currentFilename` based on the selected language
- [x] Update the `handleDownload` function to use `currentFilename` instead of the fixed filename
- [x] Update the map function to pass `currentFilename` to `handleDownload`
- [x] Test the changes and ensure PDF files are renamed/added in public/pdfs/ as needed (Note: Swahili PDFs need to be added: sample_sw.pdf, cover letter_sw.pdf)
