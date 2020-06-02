# toutf8

Convert any input to UTF-8 by detecting its encoding.

This uses Google's [Compact Encoding Detection](https://github.com/google/compact_enc_det)
to guess the encoding, before converting from that encoding to UTF-8.

## Installation

Install with [npm](https://www.npmjs.com/) globally:

```bash
npm install --global @cmbuckley/toutf8
```

## Usage

The `toutf8` program detects the most likely character encoding of text and
converts it to UTF-8. All the _inputfile_ arguments will be read and converted.
If no input files are provides, standard input is used. The converted text is
printed to standard output.

```bash
toutf8 < random-encoding.txt > utf8.txt
```
