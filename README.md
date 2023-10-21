# Based

> ASCII-only bigint serialization.

## Base51

Base51 is designed to encode integers into ASCII-only strings, suitable for
usage as C-like identifiers, CSS classnames, UNIX filenames, URL fragments,
$\TeX$ commands, etc. The encoding uses ASCII alphabetic characters except `l`.

In addition, the decoder recognizes confusable characters as similar-looking
characters from the main character set, which allows the encoding to be used to
create user-visible identifiers.

> **NB:** When Base51 strings are used to create identifiers in generated code,
> they should be prefixed to avoid conflicts with the target language keywords.

## Base93

Base93 is designed to encode integers into ASCII-only strings, suitable for JSON
serialization. The encoding uses all printable ASCII characters except `"` and
`\`. Unlike Base51, the decoder doesn’t care about confusable characters.

## Efficiency

| Encoding |         Compared to binary         |        Compared to Base64         |
| :------: | :--------------------------------: | :-------------------------------: |
|  Base51  | $\frac{\ln{51}}{\ln{256}}≈70.91\%$ | $\frac{\ln{51}}{\ln{64}}≈94.54\%$ |
|  Base93  | $\frac{\ln{93}}{\ln{256}}≈81.74\%$ | $\frac{\ln{93}}{\ln{64}}≈109.0\%$ |

## Performance

The algorithm has quadratic time complexity, and therefore should not be used to
process large numbers (more than approx. 100 bytes).

## Support

If you have any issues, feel free to fork this plugin, or contact me on Telegram
https://t.me/miyaokamarina.

## License

MIT © 2023 Yuri Zemskov
