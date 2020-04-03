---
layout: showcase
title: toutf8
---

Convert any input to UTF-8 by detecting its encoding.

This uses Google's [Compact Encoding Detection](https://github.com/google/compact_enc_det)
to guess the encoding, before converting from that encoding to UTF-8.

## Usage

```js
node index.js < random-encoding.txt > utf8.txt
```
