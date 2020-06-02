# toutf8(1) -- Convert any input to UTF-8 by detecting its encoding

## SYNOPSIS

`toutf8` [ _inputfile_ ]...

## DESCRIPTION

The `toutf8` program detects the most likely character encoding of text and
converts it to UTF-8. All the _inputfile_ arguments will be read and converted.
If no input files are provides, standard input is used. The converted text is
printed to standard output.

## EXAMPLES

`toutf8 < random-encoding.txt > utf8.txt`
