# toutf8

Convert any input to UTF-8 by detecting its encoding.

This uses Google's [Compact Encoding Detection](https://github.com/google/compact_enc_det)
to guess the encoding, before converting from that encoding to UTF-8.

## Installation

Install with [npm](https://www.npmjs.com/) globally:

```bash
npm install --global toutf8
```

## Usage

The command expects to receive a file on standard input, and the UTF-8–encoded text is
printed to standard output:

```bash
toutf8 < random-encoding.txt > utf8.txt
```
