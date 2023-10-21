import { Decoder, Encoder, Inverse } from './gen.mjs';

/** Base51 charset. */
const CS51 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

/** Invert Base51 charset, and then assign alias mappings. */
const i51 = (charset: string) => {
    let rec = Inverse(charset);

    return {
        ...rec,

        // #region A
        '\u{0391}': rec['A'], // Α GREEK CAPITAL LETTER ALPHA
        '\u{0410}': rec['A'], // А CYRILLIC CAPITAL LETTER A
        '\u{13AA}': rec['A'], // Ꭺ CHEROKEE LETTER GO
        '\u{15C5}': rec['A'], // ᗅ CANADIAN SYLLABICS CARRIER GHO
        '\u{A4EE}': rec['A'], // ꓮ LISU LETTER A
        '\u{FF21}': rec['A'], // Ａ FULLWIDTH LATIN CAPITAL LETTER A
        '\u{102A0}': rec['A'], // 𐊠 CARIAN LETTER A
        '\u{16F40}': rec['A'], // 𖽀 MIAO LETTER ZZYA
        '\u{1D400}': rec['A'], // 𝐀 MATHEMATICAL BOLD CAPITAL A
        '\u{1D434}': rec['A'], // 𝐴 MATHEMATICAL ITALIC CAPITAL A
        '\u{1D468}': rec['A'], // 𝑨 MATHEMATICAL BOLD ITALIC CAPITAL A
        '\u{1D49C}': rec['A'], // 𝒜 MATHEMATICAL SCRIPT CAPITAL A
        '\u{1D4D0}': rec['A'], // 𝓐 MATHEMATICAL BOLD SCRIPT CAPITAL A
        '\u{1D504}': rec['A'], // 𝔄 MATHEMATICAL FRAKTUR CAPITAL A
        '\u{1D538}': rec['A'], // 𝔸 MATHEMATICAL DOUBLE-STRUCK CAPITAL A
        '\u{1D56C}': rec['A'], // 𝕬 MATHEMATICAL BOLD FRAKTUR CAPITAL A
        '\u{1D5A0}': rec['A'], // 𝖠 MATHEMATICAL SANS-SERIF CAPITAL A
        '\u{1D5D4}': rec['A'], // 𝗔 MATHEMATICAL SANS-SERIF BOLD CAPITAL A
        '\u{1D608}': rec['A'], // 𝘈 MATHEMATICAL SANS-SERIF ITALIC CAPITAL A
        '\u{1D63C}': rec['A'], // 𝘼 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL A
        '\u{1D670}': rec['A'], // 𝙰 MATHEMATICAL MONOSPACE CAPITAL A
        '\u{1D6A8}': rec['A'], // 𝚨 MATHEMATICAL BOLD CAPITAL ALPHA
        '\u{1D6E2}': rec['A'], // 𝛢 MATHEMATICAL ITALIC CAPITAL ALPHA
        '\u{1D71C}': rec['A'], // 𝜜 MATHEMATICAL BOLD ITALIC CAPITAL ALPHA
        '\u{1D756}': rec['A'], // 𝝖 MATHEMATICAL SANS-SERIF BOLD CAPITAL ALPHA
        '\u{1D790}': rec['A'], // 𝞐 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL ALPHA
        // #endregion A

        // #region B
        '\u{0392}': rec['B'], // Β GREEK CAPITAL LETTER BETA
        '\u{0412}': rec['B'], // В CYRILLIC CAPITAL LETTER VE
        '\u{13F4}': rec['B'], // Ᏼ CHEROKEE LETTER YV
        '\u{15F7}': rec['B'], // ᗷ CANADIAN SYLLABICS CARRIER KHE
        '\u{212C}': rec['B'], // ℬ SCRIPT CAPITAL B
        '\u{A4D0}': rec['B'], // ꓐ LISU LETTER BA
        '\u{A7B4}': rec['B'], // Ꞵ LATIN CAPITAL LETTER BETA
        '\u{FF22}': rec['B'], // Ｂ FULLWIDTH LATIN CAPITAL LETTER B
        '\u{10282}': rec['B'], // 𐊂 LYCIAN LETTER B
        '\u{102A1}': rec['B'], // 𐊡 CARIAN LETTER P2
        '\u{10301}': rec['B'], // 𐌁 OLD ITALIC LETTER BE
        '\u{1D401}': rec['B'], // 𝐁 MATHEMATICAL BOLD CAPITAL B
        '\u{1D435}': rec['B'], // 𝐵 MATHEMATICAL ITALIC CAPITAL B
        '\u{1D469}': rec['B'], // 𝑩 MATHEMATICAL BOLD ITALIC CAPITAL B
        '\u{1D4D1}': rec['B'], // 𝓑 MATHEMATICAL BOLD SCRIPT CAPITAL B
        '\u{1D505}': rec['B'], // 𝔅 MATHEMATICAL FRAKTUR CAPITAL B
        '\u{1D539}': rec['B'], // 𝔹 MATHEMATICAL DOUBLE-STRUCK CAPITAL B
        '\u{1D56D}': rec['B'], // 𝕭 MATHEMATICAL BOLD FRAKTUR CAPITAL B
        '\u{1D5A1}': rec['B'], // 𝖡 MATHEMATICAL SANS-SERIF CAPITAL B
        '\u{1D5D5}': rec['B'], // 𝗕 MATHEMATICAL SANS-SERIF BOLD CAPITAL B
        '\u{1D609}': rec['B'], // 𝘉 MATHEMATICAL SANS-SERIF ITALIC CAPITAL B
        '\u{1D63D}': rec['B'], // 𝘽 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL B
        '\u{1D671}': rec['B'], // 𝙱 MATHEMATICAL MONOSPACE CAPITAL B
        '\u{1D6A9}': rec['B'], // 𝚩 MATHEMATICAL BOLD CAPITAL BETA
        '\u{1D6E3}': rec['B'], // 𝛣 MATHEMATICAL ITALIC CAPITAL BETA
        '\u{1D71D}': rec['B'], // 𝜝 MATHEMATICAL BOLD ITALIC CAPITAL BETA
        '\u{1D757}': rec['B'], // 𝝗 MATHEMATICAL SANS-SERIF BOLD CAPITAL BETA
        '\u{1D791}': rec['B'], // 𝞑 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL BETA
        // #endregion B

        // #region C
        '\u{03F9}': rec['C'], // Ϲ GREEK CAPITAL LUNATE SIGMA SYMBOL
        '\u{0421}': rec['C'], // С CYRILLIC CAPITAL LETTER ES
        '\u{13DF}': rec['C'], // Ꮯ CHEROKEE LETTER TLI
        '\u{2102}': rec['C'], // ℂ DOUBLE-STRUCK CAPITAL C
        '\u{212D}': rec['C'], // ℭ BLACK-LETTER CAPITAL C
        '\u{216D}': rec['C'], // Ⅽ ROMAN NUMERAL ONE HUNDRED
        '\u{2CA4}': rec['C'], // Ⲥ COPTIC CAPITAL LETTER SIMA
        '\u{A4DA}': rec['C'], // ꓚ LISU LETTER CA
        '\u{FF23}': rec['C'], // Ｃ FULLWIDTH LATIN CAPITAL LETTER C
        '\u{102A2}': rec['C'], // 𐊢 CARIAN LETTER D
        '\u{10302}': rec['C'], // 𐌂 OLD ITALIC LETTER KE
        '\u{10415}': rec['C'], // 𐐕 DESERET CAPITAL LETTER CHEE
        '\u{1051C}': rec['C'], // 𐔜 ELBASAN LETTER SHE
        '\u{118E9}': rec['C'], // 𑣩 WARANG CITI DIGIT NINE
        '\u{118F2}': rec['C'], // 𑣲 WARANG CITI NUMBER NINETY
        '\u{1D402}': rec['C'], // 𝐂 MATHEMATICAL BOLD CAPITAL C
        '\u{1D436}': rec['C'], // 𝐶 MATHEMATICAL ITALIC CAPITAL C
        '\u{1D46A}': rec['C'], // 𝑪 MATHEMATICAL BOLD ITALIC CAPITAL C
        '\u{1D49E}': rec['C'], // 𝒞 MATHEMATICAL SCRIPT CAPITAL C
        '\u{1D4D2}': rec['C'], // 𝓒 MATHEMATICAL BOLD SCRIPT CAPITAL C
        '\u{1D56E}': rec['C'], // 𝕮 MATHEMATICAL BOLD FRAKTUR CAPITAL C
        '\u{1D5A2}': rec['C'], // 𝖢 MATHEMATICAL SANS-SERIF CAPITAL C
        '\u{1D5D6}': rec['C'], // 𝗖 MATHEMATICAL SANS-SERIF BOLD CAPITAL C
        '\u{1D60A}': rec['C'], // 𝘊 MATHEMATICAL SANS-SERIF ITALIC CAPITAL C
        '\u{1D63E}': rec['C'], // 𝘾 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL C
        '\u{1D672}': rec['C'], // 𝙲 MATHEMATICAL MONOSPACE CAPITAL C
        '\u{1F74C}': rec['C'], // 🝌 ALCHEMICAL SYMBOL FOR CALX
        // #endregion C

        // #region D
        '\u{13A0}': rec['D'], // Ꭰ CHEROKEE LETTER A
        '\u{15DE}': rec['D'], // ᗞ CANADIAN SYLLABICS CARRIER THE
        '\u{15EA}': rec['D'], // ᗪ CANADIAN SYLLABICS CARRIER PE
        '\u{2145}': rec['D'], // ⅅ DOUBLE-STRUCK ITALIC CAPITAL D
        '\u{216E}': rec['D'], // Ⅾ ROMAN NUMERAL FIVE HUNDRED
        '\u{A4D3}': rec['D'], // ꓓ LISU LETTER DA
        '\u{1D403}': rec['D'], // 𝐃 MATHEMATICAL BOLD CAPITAL D
        '\u{1D437}': rec['D'], // 𝐷 MATHEMATICAL ITALIC CAPITAL D
        '\u{1D46B}': rec['D'], // 𝑫 MATHEMATICAL BOLD ITALIC CAPITAL D
        '\u{1D49F}': rec['D'], // 𝒟 MATHEMATICAL SCRIPT CAPITAL D
        '\u{1D4D3}': rec['D'], // 𝓓 MATHEMATICAL BOLD SCRIPT CAPITAL D
        '\u{1D507}': rec['D'], // 𝔇 MATHEMATICAL FRAKTUR CAPITAL D
        '\u{1D53B}': rec['D'], // 𝔻 MATHEMATICAL DOUBLE-STRUCK CAPITAL D
        '\u{1D56F}': rec['D'], // 𝕯 MATHEMATICAL BOLD FRAKTUR CAPITAL D
        '\u{1D5A3}': rec['D'], // 𝖣 MATHEMATICAL SANS-SERIF CAPITAL D
        '\u{1D5D7}': rec['D'], // 𝗗 MATHEMATICAL SANS-SERIF BOLD CAPITAL D
        '\u{1D60B}': rec['D'], // 𝘋 MATHEMATICAL SANS-SERIF ITALIC CAPITAL D
        '\u{1D63F}': rec['D'], // 𝘿 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL D
        '\u{1D673}': rec['D'], // 𝙳 MATHEMATICAL MONOSPACE CAPITAL D
        // #endregion D

        // #region E
        '\u{0395}': rec['E'], // Ε GREEK CAPITAL LETTER EPSILON
        '\u{0415}': rec['E'], // Е CYRILLIC CAPITAL LETTER IE
        '\u{13AC}': rec['E'], // Ꭼ CHEROKEE LETTER GV
        '\u{2130}': rec['E'], // ℰ SCRIPT CAPITAL E
        '\u{22FF}': rec['E'], // ⋿ Z NOTATION BAG MEMBERSHIP
        '\u{2D39}': rec['E'], // ⴹ TIFINAGH LETTER YADD
        '\u{A4F0}': rec['E'], // ꓰ LISU LETTER E
        '\u{FF25}': rec['E'], // Ｅ FULLWIDTH LATIN CAPITAL LETTER E
        '\u{10286}': rec['E'], // 𐊆 LYCIAN LETTER I
        '\u{118A6}': rec['E'], // 𑢦 WARANG CITI CAPITAL LETTER II
        '\u{118AE}': rec['E'], // 𑢮 WARANG CITI CAPITAL LETTER YUJ
        '\u{1D404}': rec['E'], // 𝐄 MATHEMATICAL BOLD CAPITAL E
        '\u{1D438}': rec['E'], // 𝐸 MATHEMATICAL ITALIC CAPITAL E
        '\u{1D46C}': rec['E'], // 𝑬 MATHEMATICAL BOLD ITALIC CAPITAL E
        '\u{1D4D4}': rec['E'], // 𝓔 MATHEMATICAL BOLD SCRIPT CAPITAL E
        '\u{1D508}': rec['E'], // 𝔈 MATHEMATICAL FRAKTUR CAPITAL E
        '\u{1D53C}': rec['E'], // 𝔼 MATHEMATICAL DOUBLE-STRUCK CAPITAL E
        '\u{1D570}': rec['E'], // 𝕰 MATHEMATICAL BOLD FRAKTUR CAPITAL E
        '\u{1D5A4}': rec['E'], // 𝖤 MATHEMATICAL SANS-SERIF CAPITAL E
        '\u{1D5D8}': rec['E'], // 𝗘 MATHEMATICAL SANS-SERIF BOLD CAPITAL E
        '\u{1D60C}': rec['E'], // 𝘌 MATHEMATICAL SANS-SERIF ITALIC CAPITAL E
        '\u{1D640}': rec['E'], // 𝙀 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL E
        '\u{1D674}': rec['E'], // 𝙴 MATHEMATICAL MONOSPACE CAPITAL E
        '\u{1D6AC}': rec['E'], // 𝚬 MATHEMATICAL BOLD CAPITAL EPSILON
        '\u{1D6E6}': rec['E'], // 𝛦 MATHEMATICAL ITALIC CAPITAL EPSILON
        '\u{1D720}': rec['E'], // 𝜠 MATHEMATICAL BOLD ITALIC CAPITAL EPSILON
        '\u{1D75A}': rec['E'], // 𝝚 MATHEMATICAL SANS-SERIF BOLD CAPITAL EPSILON
        '\u{1D794}': rec['E'], // 𝞔 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL EPSILON
        // #endregion E

        // #region F
        '\u{03DC}': rec['F'], // Ϝ GREEK LETTER DIGAMMA
        '\u{15B4}': rec['F'], // ᖴ CANADIAN SYLLABICS BLACKFOOT WE
        '\u{2131}': rec['F'], // ℱ SCRIPT CAPITAL F
        '\u{A4DD}': rec['F'], // ꓝ LISU LETTER TSA
        '\u{A798}': rec['F'], // Ꞙ LATIN CAPITAL LETTER F WITH STROKE
        '\u{10287}': rec['F'], // 𐊇 LYCIAN LETTER W
        '\u{102A5}': rec['F'], // 𐊥 CARIAN LETTER R
        '\u{10525}': rec['F'], // 𐔥 ELBASAN LETTER GHE
        '\u{118A2}': rec['F'], // 𑢢 WARANG CITI CAPITAL LETTER WI
        '\u{118C2}': rec['F'], // 𑣂 WARANG CITI SMALL LETTER WI
        '\u{1D213}': rec['F'], // 𝈓 GREEK VOCAL NOTATION SYMBOL-20
        '\u{1D405}': rec['F'], // 𝐅 MATHEMATICAL BOLD CAPITAL F
        '\u{1D439}': rec['F'], // 𝐹 MATHEMATICAL ITALIC CAPITAL F
        '\u{1D46D}': rec['F'], // 𝑭 MATHEMATICAL BOLD ITALIC CAPITAL F
        '\u{1D4D5}': rec['F'], // 𝓕 MATHEMATICAL BOLD SCRIPT CAPITAL F
        '\u{1D509}': rec['F'], // 𝔉 MATHEMATICAL FRAKTUR CAPITAL F
        '\u{1D53D}': rec['F'], // 𝔽 MATHEMATICAL DOUBLE-STRUCK CAPITAL F
        '\u{1D571}': rec['F'], // 𝕱 MATHEMATICAL BOLD FRAKTUR CAPITAL F
        '\u{1D5A5}': rec['F'], // 𝖥 MATHEMATICAL SANS-SERIF CAPITAL F
        '\u{1D5D9}': rec['F'], // 𝗙 MATHEMATICAL SANS-SERIF BOLD CAPITAL F
        '\u{1D60D}': rec['F'], // 𝘍 MATHEMATICAL SANS-SERIF ITALIC CAPITAL F
        '\u{1D641}': rec['F'], // 𝙁 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL F
        '\u{1D675}': rec['F'], // 𝙵 MATHEMATICAL MONOSPACE CAPITAL F
        '\u{1D7CA}': rec['F'], // 𝟊 MATHEMATICAL BOLD CAPITAL DIGAMMA
        // #endregion F

        // #region G
        '\u{050C}': rec['G'], // Ԍ CYRILLIC CAPITAL LETTER KOMI SJE
        '\u{13C0}': rec['G'], // Ꮐ CHEROKEE LETTER NAH
        '\u{13F3}': rec['G'], // Ᏻ CHEROKEE LETTER YU
        '\u{A4D6}': rec['G'], // ꓖ LISU LETTER GA
        '\u{1D406}': rec['G'], // 𝐆 MATHEMATICAL BOLD CAPITAL G
        '\u{1D43A}': rec['G'], // 𝐺 MATHEMATICAL ITALIC CAPITAL G
        '\u{1D46E}': rec['G'], // 𝑮 MATHEMATICAL BOLD ITALIC CAPITAL G
        '\u{1D4A2}': rec['G'], // 𝒢 MATHEMATICAL SCRIPT CAPITAL G
        '\u{1D4D6}': rec['G'], // 𝓖 MATHEMATICAL BOLD SCRIPT CAPITAL G
        '\u{1D50A}': rec['G'], // 𝔊 MATHEMATICAL FRAKTUR CAPITAL G
        '\u{1D53E}': rec['G'], // 𝔾 MATHEMATICAL DOUBLE-STRUCK CAPITAL G
        '\u{1D572}': rec['G'], // 𝕲 MATHEMATICAL BOLD FRAKTUR CAPITAL G
        '\u{1D5A6}': rec['G'], // 𝖦 MATHEMATICAL SANS-SERIF CAPITAL G
        '\u{1D5DA}': rec['G'], // 𝗚 MATHEMATICAL SANS-SERIF BOLD CAPITAL G
        '\u{1D60E}': rec['G'], // 𝘎 MATHEMATICAL SANS-SERIF ITALIC CAPITAL G
        '\u{1D642}': rec['G'], // 𝙂 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL G
        '\u{1D676}': rec['G'], // 𝙶 MATHEMATICAL MONOSPACE CAPITAL G
        // #endregion G

        // #region H
        '\u{0397}': rec['H'], // Η GREEK CAPITAL LETTER ETA
        '\u{041D}': rec['H'], // Н CYRILLIC CAPITAL LETTER EN
        '\u{13BB}': rec['H'], // Ꮋ CHEROKEE LETTER MI
        '\u{157C}': rec['H'], // ᕼ CANADIAN SYLLABICS NUNAVUT H
        '\u{210B}': rec['H'], // ℋ SCRIPT CAPITAL H
        '\u{210C}': rec['H'], // ℌ BLACK-LETTER CAPITAL H
        '\u{210D}': rec['H'], // ℍ DOUBLE-STRUCK CAPITAL H
        '\u{2C8E}': rec['H'], // Ⲏ COPTIC CAPITAL LETTER HATE
        '\u{A4E7}': rec['H'], // ꓧ LISU LETTER XA
        '\u{FF28}': rec['H'], // Ｈ FULLWIDTH LATIN CAPITAL LETTER H
        '\u{102CF}': rec['H'], // 𐋏 CARIAN LETTER E2
        '\u{1D407}': rec['H'], // 𝐇 MATHEMATICAL BOLD CAPITAL H
        '\u{1D43B}': rec['H'], // 𝐻 MATHEMATICAL ITALIC CAPITAL H
        '\u{1D46F}': rec['H'], // 𝑯 MATHEMATICAL BOLD ITALIC CAPITAL H
        '\u{1D4D7}': rec['H'], // 𝓗 MATHEMATICAL BOLD SCRIPT CAPITAL H
        '\u{1D573}': rec['H'], // 𝕳 MATHEMATICAL BOLD FRAKTUR CAPITAL H
        '\u{1D5A7}': rec['H'], // 𝖧 MATHEMATICAL SANS-SERIF CAPITAL H
        '\u{1D5DB}': rec['H'], // 𝗛 MATHEMATICAL SANS-SERIF BOLD CAPITAL H
        '\u{1D60F}': rec['H'], // 𝘏 MATHEMATICAL SANS-SERIF ITALIC CAPITAL H
        '\u{1D643}': rec['H'], // 𝙃 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL H
        '\u{1D677}': rec['H'], // 𝙷 MATHEMATICAL MONOSPACE CAPITAL H
        '\u{1D6AE}': rec['H'], // 𝚮 MATHEMATICAL BOLD CAPITAL ETA
        '\u{1D6E8}': rec['H'], // 𝛨 MATHEMATICAL ITALIC CAPITAL ETA
        '\u{1D722}': rec['H'], // 𝜢 MATHEMATICAL BOLD ITALIC CAPITAL ETA
        '\u{1D75C}': rec['H'], // 𝝜 MATHEMATICAL SANS-SERIF BOLD CAPITAL ETA
        '\u{1D796}': rec['H'], // 𝞖 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL ETA
        // #endregion H

        // #region I
        '\u{0031}': rec['I'], // 1 DIGIT ONE
        '\u{006C}': rec['I'], // l LATIN SMALL LETTER L
        '\u{007C}': rec['I'], // | VERTICAL LINE
        '\u{0196}': rec['I'], // Ɩ LATIN CAPITAL LETTER IOTA
        '\u{01C0}': rec['I'], // ǀ LATIN LETTER DENTAL CLICK
        '\u{0399}': rec['I'], // Ι GREEK CAPITAL LETTER IOTA
        '\u{0406}': rec['I'], // І CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I
        '\u{04C0}': rec['I'], // Ӏ CYRILLIC LETTER PALOCHKA
        '\u{05C0}': rec['I'], // ׀ HEBREW PUNCTUATION PASEQ
        '\u{05D5}': rec['I'], // ו HEBREW LETTER VAV
        '\u{05DF}': rec['I'], // ן HEBREW LETTER FINAL NUN
        '\u{0627}': rec['I'], // ا ARABIC LETTER ALEF
        '\u{0661}': rec['I'], // ١ ARABIC-INDIC DIGIT ONE
        '\u{06F1}': rec['I'], // ۱ EXTENDED ARABIC-INDIC DIGIT ONE
        '\u{07CA}': rec['I'], // ߊ NKO LETTER A
        '\u{16C1}': rec['I'], // ᛁ RUNIC LETTER ISAZ IS ISS I
        '\u{2110}': rec['I'], // ℐ SCRIPT CAPITAL I
        '\u{2111}': rec['I'], // ℑ BLACK-LETTER CAPITAL I
        '\u{2113}': rec['I'], // ℓ SCRIPT SMALL L
        '\u{2160}': rec['I'], // Ⅰ ROMAN NUMERAL ONE
        '\u{217C}': rec['I'], // ⅼ SMALL ROMAN NUMERAL FIFTY
        '\u{2223}': rec['I'], // ∣ DIVIDES
        '\u{23FD}': rec['I'], // ⏽ POWER ON SYMBOL
        '\u{2C92}': rec['I'], // Ⲓ COPTIC CAPITAL LETTER IAUDA
        '\u{2D4F}': rec['I'], // ⵏ TIFINAGH LETTER YAN
        '\u{A4F2}': rec['I'], // ꓲ LISU LETTER I
        '\u{FE8D}': rec['I'], // ﺍ ARABIC LETTER ALEF ISOLATED FORM
        '\u{FE8E}': rec['I'], // ﺎ ARABIC LETTER ALEF FINAL FORM
        '\u{FF29}': rec['I'], // Ｉ FULLWIDTH LATIN CAPITAL LETTER I
        '\u{FF4C}': rec['I'], // ｌ FULLWIDTH LATIN SMALL LETTER L
        '\u{FFE8}': rec['I'], // ￨ HALFWIDTH FORMS LIGHT VERTICAL
        '\u{1028A}': rec['I'], // 𐊊 LYCIAN LETTER J
        '\u{10309}': rec['I'], // 𐌉 OLD ITALIC LETTER I
        '\u{10320}': rec['I'], // 𐌠 OLD ITALIC NUMERAL ONE
        '\u{16F28}': rec['I'], // 𖼨 MIAO LETTER GHA
        '\u{1D408}': rec['I'], // 𝐈 MATHEMATICAL BOLD CAPITAL I
        '\u{1D425}': rec['I'], // 𝐥 MATHEMATICAL BOLD SMALL L
        '\u{1D43C}': rec['I'], // 𝐼 MATHEMATICAL ITALIC CAPITAL I
        '\u{1D459}': rec['I'], // 𝑙 MATHEMATICAL ITALIC SMALL L
        '\u{1D470}': rec['I'], // 𝑰 MATHEMATICAL BOLD ITALIC CAPITAL I
        '\u{1D48D}': rec['I'], // 𝒍 MATHEMATICAL BOLD ITALIC SMALL L
        '\u{1D4C1}': rec['I'], // 𝓁 MATHEMATICAL SCRIPT SMALL L
        '\u{1D4D8}': rec['I'], // 𝓘 MATHEMATICAL BOLD SCRIPT CAPITAL I
        '\u{1D4F5}': rec['I'], // 𝓵 MATHEMATICAL BOLD SCRIPT SMALL L
        '\u{1D529}': rec['I'], // 𝔩 MATHEMATICAL FRAKTUR SMALL L
        '\u{1D540}': rec['I'], // 𝕀 MATHEMATICAL DOUBLE-STRUCK CAPITAL I
        '\u{1D55D}': rec['I'], // 𝕝 MATHEMATICAL DOUBLE-STRUCK SMALL L
        '\u{1D574}': rec['I'], // 𝕴 MATHEMATICAL BOLD FRAKTUR CAPITAL I
        '\u{1D591}': rec['I'], // 𝖑 MATHEMATICAL BOLD FRAKTUR SMALL L
        '\u{1D5A8}': rec['I'], // 𝖨 MATHEMATICAL SANS-SERIF CAPITAL I
        '\u{1D5C5}': rec['I'], // 𝗅 MATHEMATICAL SANS-SERIF SMALL L
        '\u{1D5DC}': rec['I'], // 𝗜 MATHEMATICAL SANS-SERIF BOLD CAPITAL I
        '\u{1D5F9}': rec['I'], // 𝗹 MATHEMATICAL SANS-SERIF BOLD SMALL L
        '\u{1D610}': rec['I'], // 𝘐 MATHEMATICAL SANS-SERIF ITALIC CAPITAL I
        '\u{1D62D}': rec['I'], // 𝘭 MATHEMATICAL SANS-SERIF ITALIC SMALL L
        '\u{1D644}': rec['I'], // 𝙄 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL I
        '\u{1D661}': rec['I'], // 𝙡 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL L
        '\u{1D678}': rec['I'], // 𝙸 MATHEMATICAL MONOSPACE CAPITAL I
        '\u{1D695}': rec['I'], // 𝚕 MATHEMATICAL MONOSPACE SMALL L
        '\u{1D6B0}': rec['I'], // 𝚰 MATHEMATICAL BOLD CAPITAL IOTA
        '\u{1D6EA}': rec['I'], // 𝛪 MATHEMATICAL ITALIC CAPITAL IOTA
        '\u{1D724}': rec['I'], // 𝜤 MATHEMATICAL BOLD ITALIC CAPITAL IOTA
        '\u{1D75E}': rec['I'], // 𝝞 MATHEMATICAL SANS-SERIF BOLD CAPITAL IOTA
        '\u{1D798}': rec['I'], // 𝞘 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL IOTA
        '\u{1D7CF}': rec['I'], // 𝟏 MATHEMATICAL BOLD DIGIT ONE
        '\u{1D7D9}': rec['I'], // 𝟙 MATHEMATICAL DOUBLE-STRUCK DIGIT ONE
        '\u{1D7E3}': rec['I'], // 𝟣 MATHEMATICAL SANS-SERIF DIGIT ONE
        '\u{1D7ED}': rec['I'], // 𝟭 MATHEMATICAL SANS-SERIF BOLD DIGIT ONE
        '\u{1D7F7}': rec['I'], // 𝟷 MATHEMATICAL MONOSPACE DIGIT ONE
        '\u{1E8C7}': rec['I'], // 𞣇 MENDE KIKAKUI DIGIT ONE
        '\u{1EE00}': rec['I'], // 𞸀 ARABIC MATHEMATICAL ALEF
        '\u{1EE80}': rec['I'], // 𞺀 ARABIC MATHEMATICAL LOOPED ALEF
        '\u{1FBF1}': rec['I'], // 🯱 SEGMENTED DIGIT ONE
        // #endregion I

        // #region J
        '\u{037F}': rec['J'], // Ϳ GREEK CAPITAL LETTER YOT
        '\u{0408}': rec['J'], // Ј CYRILLIC CAPITAL LETTER JE
        '\u{13AB}': rec['J'], // Ꭻ CHEROKEE LETTER GU
        '\u{148D}': rec['J'], // ᒍ CANADIAN SYLLABICS CO
        '\u{A4D9}': rec['J'], // ꓙ LISU LETTER JA
        '\u{A7B2}': rec['J'], // Ʝ LATIN CAPITAL LETTER J WITH CROSSED-TAIL
        '\u{FF2A}': rec['J'], // Ｊ FULLWIDTH LATIN CAPITAL LETTER J
        '\u{1D409}': rec['J'], // 𝐉 MATHEMATICAL BOLD CAPITAL J
        '\u{1D43D}': rec['J'], // 𝐽 MATHEMATICAL ITALIC CAPITAL J
        '\u{1D471}': rec['J'], // 𝑱 MATHEMATICAL BOLD ITALIC CAPITAL J
        '\u{1D4A5}': rec['J'], // 𝒥 MATHEMATICAL SCRIPT CAPITAL J
        '\u{1D4D9}': rec['J'], // 𝓙 MATHEMATICAL BOLD SCRIPT CAPITAL J
        '\u{1D50D}': rec['J'], // 𝔍 MATHEMATICAL FRAKTUR CAPITAL J
        '\u{1D541}': rec['J'], // 𝕁 MATHEMATICAL DOUBLE-STRUCK CAPITAL J
        '\u{1D575}': rec['J'], // 𝕵 MATHEMATICAL BOLD FRAKTUR CAPITAL J
        '\u{1D5A9}': rec['J'], // 𝖩 MATHEMATICAL SANS-SERIF CAPITAL J
        '\u{1D5DD}': rec['J'], // 𝗝 MATHEMATICAL SANS-SERIF BOLD CAPITAL J
        '\u{1D611}': rec['J'], // 𝘑 MATHEMATICAL SANS-SERIF ITALIC CAPITAL J
        '\u{1D645}': rec['J'], // 𝙅 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL J
        '\u{1D679}': rec['J'], // 𝙹 MATHEMATICAL MONOSPACE CAPITAL J
        // #endregion J

        // #region K
        '\u{039A}': rec['K'], // Κ GREEK CAPITAL LETTER KAPPA
        '\u{041A}': rec['K'], // К CYRILLIC CAPITAL LETTER KA
        '\u{13E6}': rec['K'], // Ꮶ CHEROKEE LETTER TSO
        '\u{16D5}': rec['K'], // ᛕ RUNIC LETTER OPEN-P
        '\u{212A}': rec['K'], // K KELVIN SIGN
        '\u{2C94}': rec['K'], // Ⲕ COPTIC CAPITAL LETTER KAPA
        '\u{A4D7}': rec['K'], // ꓗ LISU LETTER KA
        '\u{FF2B}': rec['K'], // Ｋ FULLWIDTH LATIN CAPITAL LETTER K
        '\u{10518}': rec['K'], // 𐔘 ELBASAN LETTER QE
        '\u{1D40A}': rec['K'], // 𝐊 MATHEMATICAL BOLD CAPITAL K
        '\u{1D43E}': rec['K'], // 𝐾 MATHEMATICAL ITALIC CAPITAL K
        '\u{1D472}': rec['K'], // 𝑲 MATHEMATICAL BOLD ITALIC CAPITAL K
        '\u{1D4A6}': rec['K'], // 𝒦 MATHEMATICAL SCRIPT CAPITAL K
        '\u{1D4DA}': rec['K'], // 𝓚 MATHEMATICAL BOLD SCRIPT CAPITAL K
        '\u{1D50E}': rec['K'], // 𝔎 MATHEMATICAL FRAKTUR CAPITAL K
        '\u{1D542}': rec['K'], // 𝕂 MATHEMATICAL DOUBLE-STRUCK CAPITAL K
        '\u{1D576}': rec['K'], // 𝕶 MATHEMATICAL BOLD FRAKTUR CAPITAL K
        '\u{1D5AA}': rec['K'], // 𝖪 MATHEMATICAL SANS-SERIF CAPITAL K
        '\u{1D5DE}': rec['K'], // 𝗞 MATHEMATICAL SANS-SERIF BOLD CAPITAL K
        '\u{1D612}': rec['K'], // 𝘒 MATHEMATICAL SANS-SERIF ITALIC CAPITAL K
        '\u{1D646}': rec['K'], // 𝙆 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL K
        '\u{1D67A}': rec['K'], // 𝙺 MATHEMATICAL MONOSPACE CAPITAL K
        '\u{1D6B1}': rec['K'], // 𝚱 MATHEMATICAL BOLD CAPITAL KAPPA
        '\u{1D6EB}': rec['K'], // 𝛫 MATHEMATICAL ITALIC CAPITAL KAPPA
        '\u{1D725}': rec['K'], // 𝜥 MATHEMATICAL BOLD ITALIC CAPITAL KAPPA
        '\u{1D75F}': rec['K'], // 𝝟 MATHEMATICAL SANS-SERIF BOLD CAPITAL KAPPA
        '\u{1D799}': rec['K'], // 𝞙 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL KAPPA
        // #endregion K

        // #region L
        '\u{13DE}': rec['L'], // Ꮮ CHEROKEE LETTER TLE
        '\u{14AA}': rec['L'], // ᒪ CANADIAN SYLLABICS MA
        '\u{2112}': rec['L'], // ℒ SCRIPT CAPITAL L
        '\u{216C}': rec['L'], // Ⅼ ROMAN NUMERAL FIFTY
        '\u{2CD0}': rec['L'], // Ⳑ COPTIC CAPITAL LETTER L-SHAPED HA
        '\u{A4E1}': rec['L'], // ꓡ LISU LETTER LA
        '\u{1041B}': rec['L'], // 𐐛 DESERET CAPITAL LETTER ETH
        '\u{10526}': rec['L'], // 𐔦 ELBASAN LETTER GHAMMA
        '\u{118A3}': rec['L'], // 𑢣 WARANG CITI CAPITAL LETTER YU
        '\u{118B2}': rec['L'], // 𑢲 WARANG CITI CAPITAL LETTER TTE
        '\u{16F16}': rec['L'], // 𖼖 MIAO LETTER LA
        '\u{1D22A}': rec['L'], // 𝈪 GREEK INSTRUMENTAL NOTATION SYMBOL-23
        '\u{1D40B}': rec['L'], // 𝐋 MATHEMATICAL BOLD CAPITAL L
        '\u{1D43F}': rec['L'], // 𝐿 MATHEMATICAL ITALIC CAPITAL L
        '\u{1D473}': rec['L'], // 𝑳 MATHEMATICAL BOLD ITALIC CAPITAL L
        '\u{1D4DB}': rec['L'], // 𝓛 MATHEMATICAL BOLD SCRIPT CAPITAL L
        '\u{1D50F}': rec['L'], // 𝔏 MATHEMATICAL FRAKTUR CAPITAL L
        '\u{1D543}': rec['L'], // 𝕃 MATHEMATICAL DOUBLE-STRUCK CAPITAL L
        '\u{1D577}': rec['L'], // 𝕷 MATHEMATICAL BOLD FRAKTUR CAPITAL L
        '\u{1D5AB}': rec['L'], // 𝖫 MATHEMATICAL SANS-SERIF CAPITAL L
        '\u{1D5DF}': rec['L'], // 𝗟 MATHEMATICAL SANS-SERIF BOLD CAPITAL L
        '\u{1D613}': rec['L'], // 𝘓 MATHEMATICAL SANS-SERIF ITALIC CAPITAL L
        '\u{1D647}': rec['L'], // 𝙇 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL L
        '\u{1D67B}': rec['L'], // 𝙻 MATHEMATICAL MONOSPACE CAPITAL L
        // #endregion L

        // #region M
        '\u{039C}': rec['M'], // Μ GREEK CAPITAL LETTER MU
        '\u{03FA}': rec['M'], // Ϻ GREEK CAPITAL LETTER SAN
        '\u{041C}': rec['M'], // М CYRILLIC CAPITAL LETTER EM
        '\u{13B7}': rec['M'], // Ꮇ CHEROKEE LETTER LU
        '\u{15F0}': rec['M'], // ᗰ CANADIAN SYLLABICS CARRIER GO
        '\u{16D6}': rec['M'], // ᛖ RUNIC LETTER EHWAZ EH E
        '\u{2133}': rec['M'], // ℳ SCRIPT CAPITAL M
        '\u{216F}': rec['M'], // Ⅿ ROMAN NUMERAL ONE THOUSAND
        '\u{2C98}': rec['M'], // Ⲙ COPTIC CAPITAL LETTER MI
        '\u{A4DF}': rec['M'], // ꓟ LISU LETTER MA
        '\u{FF2D}': rec['M'], // Ｍ FULLWIDTH LATIN CAPITAL LETTER M
        '\u{102B0}': rec['M'], // 𐊰 CARIAN LETTER S
        '\u{10311}': rec['M'], // 𐌑 OLD ITALIC LETTER SHE
        '\u{1D40C}': rec['M'], // 𝐌 MATHEMATICAL BOLD CAPITAL M
        '\u{1D440}': rec['M'], // 𝑀 MATHEMATICAL ITALIC CAPITAL M
        '\u{1D474}': rec['M'], // 𝑴 MATHEMATICAL BOLD ITALIC CAPITAL M
        '\u{1D4DC}': rec['M'], // 𝓜 MATHEMATICAL BOLD SCRIPT CAPITAL M
        '\u{1D510}': rec['M'], // 𝔐 MATHEMATICAL FRAKTUR CAPITAL M
        '\u{1D544}': rec['M'], // 𝕄 MATHEMATICAL DOUBLE-STRUCK CAPITAL M
        '\u{1D578}': rec['M'], // 𝕸 MATHEMATICAL BOLD FRAKTUR CAPITAL M
        '\u{1D5AC}': rec['M'], // 𝖬 MATHEMATICAL SANS-SERIF CAPITAL M
        '\u{1D5E0}': rec['M'], // 𝗠 MATHEMATICAL SANS-SERIF BOLD CAPITAL M
        '\u{1D614}': rec['M'], // 𝘔 MATHEMATICAL SANS-SERIF ITALIC CAPITAL M
        '\u{1D648}': rec['M'], // 𝙈 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL M
        '\u{1D67C}': rec['M'], // 𝙼 MATHEMATICAL MONOSPACE CAPITAL M
        '\u{1D6B3}': rec['M'], // 𝚳 MATHEMATICAL BOLD CAPITAL MU
        '\u{1D6ED}': rec['M'], // 𝛭 MATHEMATICAL ITALIC CAPITAL MU
        '\u{1D727}': rec['M'], // 𝜧 MATHEMATICAL BOLD ITALIC CAPITAL MU
        '\u{1D761}': rec['M'], // 𝝡 MATHEMATICAL SANS-SERIF BOLD CAPITAL MU
        '\u{1D79B}': rec['M'], // 𝞛 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL MU
        // #endregion M

        // #region N
        '\u{039D}': rec['N'], // Ν GREEK CAPITAL LETTER NU
        '\u{2115}': rec['N'], // ℕ DOUBLE-STRUCK CAPITAL N
        '\u{2C9A}': rec['N'], // Ⲛ COPTIC CAPITAL LETTER NI
        '\u{A4E0}': rec['N'], // ꓠ LISU LETTER NA
        '\u{FF2E}': rec['N'], // Ｎ FULLWIDTH LATIN CAPITAL LETTER N
        '\u{10513}': rec['N'], // 𐔓 ELBASAN LETTER NE
        '\u{1D40D}': rec['N'], // 𝐍 MATHEMATICAL BOLD CAPITAL N
        '\u{1D441}': rec['N'], // 𝑁 MATHEMATICAL ITALIC CAPITAL N
        '\u{1D475}': rec['N'], // 𝑵 MATHEMATICAL BOLD ITALIC CAPITAL N
        '\u{1D4A9}': rec['N'], // 𝒩 MATHEMATICAL SCRIPT CAPITAL N
        '\u{1D4DD}': rec['N'], // 𝓝 MATHEMATICAL BOLD SCRIPT CAPITAL N
        '\u{1D511}': rec['N'], // 𝔑 MATHEMATICAL FRAKTUR CAPITAL N
        '\u{1D579}': rec['N'], // 𝕹 MATHEMATICAL BOLD FRAKTUR CAPITAL N
        '\u{1D5AD}': rec['N'], // 𝖭 MATHEMATICAL SANS-SERIF CAPITAL N
        '\u{1D5E1}': rec['N'], // 𝗡 MATHEMATICAL SANS-SERIF BOLD CAPITAL N
        '\u{1D615}': rec['N'], // 𝘕 MATHEMATICAL SANS-SERIF ITALIC CAPITAL N
        '\u{1D649}': rec['N'], // 𝙉 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL N
        '\u{1D67D}': rec['N'], // 𝙽 MATHEMATICAL MONOSPACE CAPITAL N
        '\u{1D6B4}': rec['N'], // 𝚴 MATHEMATICAL BOLD CAPITAL NU
        '\u{1D6EE}': rec['N'], // 𝛮 MATHEMATICAL ITALIC CAPITAL NU
        '\u{1D728}': rec['N'], // 𝜨 MATHEMATICAL BOLD ITALIC CAPITAL NU
        '\u{1D762}': rec['N'], // 𝝢 MATHEMATICAL SANS-SERIF BOLD CAPITAL NU
        '\u{1D79C}': rec['N'], // 𝞜 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL NU
        // #endregion N

        // #region O
        '\u{0030}': rec['O'], // 0 DIGIT ZERO
        '\u{039F}': rec['O'], // Ο GREEK CAPITAL LETTER OMICRON
        '\u{041E}': rec['O'], // О CYRILLIC CAPITAL LETTER O
        '\u{0555}': rec['O'], // Օ ARMENIAN CAPITAL LETTER OH
        '\u{07C0}': rec['O'], // ߀ NKO DIGIT ZERO
        '\u{09E6}': rec['O'], // ০ BENGALI DIGIT ZERO
        '\u{0B20}': rec['O'], // ଠ ORIYA LETTER TTHA
        '\u{0B66}': rec['O'], // ୦ ORIYA DIGIT ZERO
        '\u{12D0}': rec['O'], // ዐ ETHIOPIC SYLLABLE PHARYNGEAL A
        '\u{2C9E}': rec['O'], // Ⲟ COPTIC CAPITAL LETTER O
        '\u{2D54}': rec['O'], // ⵔ TIFINAGH LETTER YAR
        '\u{3007}': rec['O'], // 〇 IDEOGRAPHIC NUMBER ZERO
        '\u{A4F3}': rec['O'], // ꓳ LISU LETTER O
        '\u{FF2F}': rec['O'], // Ｏ FULLWIDTH LATIN CAPITAL LETTER O
        '\u{10292}': rec['O'], // 𐊒 LYCIAN LETTER U
        '\u{102AB}': rec['O'], // 𐊫 CARIAN LETTER O
        '\u{10404}': rec['O'], // 𐐄 DESERET CAPITAL LETTER LONG O
        '\u{104C2}': rec['O'], // 𐓂 OSAGE CAPITAL LETTER O
        '\u{10516}': rec['O'], // 𐔖 ELBASAN LETTER O
        '\u{114D0}': rec['O'], // 𑓐 TIRHUTA DIGIT ZERO
        '\u{118B5}': rec['O'], // 𑢵 WARANG CITI CAPITAL LETTER AT
        '\u{118E0}': rec['O'], // 𑣠 WARANG CITI DIGIT ZERO
        '\u{1D40E}': rec['O'], // 𝐎 MATHEMATICAL BOLD CAPITAL O
        '\u{1D442}': rec['O'], // 𝑂 MATHEMATICAL ITALIC CAPITAL O
        '\u{1D476}': rec['O'], // 𝑶 MATHEMATICAL BOLD ITALIC CAPITAL O
        '\u{1D4AA}': rec['O'], // 𝒪 MATHEMATICAL SCRIPT CAPITAL O
        '\u{1D4DE}': rec['O'], // 𝓞 MATHEMATICAL BOLD SCRIPT CAPITAL O
        '\u{1D512}': rec['O'], // 𝔒 MATHEMATICAL FRAKTUR CAPITAL O
        '\u{1D546}': rec['O'], // 𝕆 MATHEMATICAL DOUBLE-STRUCK CAPITAL O
        '\u{1D57A}': rec['O'], // 𝕺 MATHEMATICAL BOLD FRAKTUR CAPITAL O
        '\u{1D5AE}': rec['O'], // 𝖮 MATHEMATICAL SANS-SERIF CAPITAL O
        '\u{1D5E2}': rec['O'], // 𝗢 MATHEMATICAL SANS-SERIF BOLD CAPITAL O
        '\u{1D616}': rec['O'], // 𝘖 MATHEMATICAL SANS-SERIF ITALIC CAPITAL O
        '\u{1D64A}': rec['O'], // 𝙊 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL O
        '\u{1D67E}': rec['O'], // 𝙾 MATHEMATICAL MONOSPACE CAPITAL O
        '\u{1D6B6}': rec['O'], // 𝚶 MATHEMATICAL BOLD CAPITAL OMICRON
        '\u{1D6F0}': rec['O'], // 𝛰 MATHEMATICAL ITALIC CAPITAL OMICRON
        '\u{1D72A}': rec['O'], // 𝜪 MATHEMATICAL BOLD ITALIC CAPITAL OMICRON
        '\u{1D764}': rec['O'], // 𝝤 MATHEMATICAL SANS-SERIF BOLD CAPITAL OMICRON
        '\u{1D79E}': rec['O'], // 𝞞 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL OMICRON
        '\u{1D7CE}': rec['O'], // 𝟎 MATHEMATICAL BOLD DIGIT ZERO
        '\u{1D7D8}': rec['O'], // 𝟘 MATHEMATICAL DOUBLE-STRUCK DIGIT ZERO
        '\u{1D7E2}': rec['O'], // 𝟢 MATHEMATICAL SANS-SERIF DIGIT ZERO
        '\u{1D7EC}': rec['O'], // 𝟬 MATHEMATICAL SANS-SERIF BOLD DIGIT ZERO
        '\u{1D7F6}': rec['O'], // 𝟶 MATHEMATICAL MONOSPACE DIGIT ZERO
        '\u{1FBF0}': rec['O'], // 🯰 SEGMENTED DIGIT ZERO
        // #endregion O

        // #region P
        '\u{03A1}': rec['P'], // Ρ GREEK CAPITAL LETTER RHO
        '\u{0420}': rec['P'], // Р CYRILLIC CAPITAL LETTER ER
        '\u{13E2}': rec['P'], // Ꮲ CHEROKEE LETTER TLV
        '\u{146D}': rec['P'], // ᑭ CANADIAN SYLLABICS KI
        '\u{2119}': rec['P'], // ℙ DOUBLE-STRUCK CAPITAL P
        '\u{2CA2}': rec['P'], // Ⲣ COPTIC CAPITAL LETTER RO
        '\u{A4D1}': rec['P'], // ꓑ LISU LETTER PA
        '\u{FF30}': rec['P'], // Ｐ FULLWIDTH LATIN CAPITAL LETTER P
        '\u{10295}': rec['P'], // 𐊕 LYCIAN LETTER R
        '\u{1D40F}': rec['P'], // 𝐏 MATHEMATICAL BOLD CAPITAL P
        '\u{1D443}': rec['P'], // 𝑃 MATHEMATICAL ITALIC CAPITAL P
        '\u{1D477}': rec['P'], // 𝑷 MATHEMATICAL BOLD ITALIC CAPITAL P
        '\u{1D4AB}': rec['P'], // 𝒫 MATHEMATICAL SCRIPT CAPITAL P
        '\u{1D4DF}': rec['P'], // 𝓟 MATHEMATICAL BOLD SCRIPT CAPITAL P
        '\u{1D513}': rec['P'], // 𝔓 MATHEMATICAL FRAKTUR CAPITAL P
        '\u{1D57B}': rec['P'], // 𝕻 MATHEMATICAL BOLD FRAKTUR CAPITAL P
        '\u{1D5AF}': rec['P'], // 𝖯 MATHEMATICAL SANS-SERIF CAPITAL P
        '\u{1D5E3}': rec['P'], // 𝗣 MATHEMATICAL SANS-SERIF BOLD CAPITAL P
        '\u{1D617}': rec['P'], // 𝘗 MATHEMATICAL SANS-SERIF ITALIC CAPITAL P
        '\u{1D64B}': rec['P'], // 𝙋 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL P
        '\u{1D67F}': rec['P'], // 𝙿 MATHEMATICAL MONOSPACE CAPITAL P
        '\u{1D6B8}': rec['P'], // 𝚸 MATHEMATICAL BOLD CAPITAL RHO
        '\u{1D6F2}': rec['P'], // 𝛲 MATHEMATICAL ITALIC CAPITAL RHO
        '\u{1D72C}': rec['P'], // 𝜬 MATHEMATICAL BOLD ITALIC CAPITAL RHO
        '\u{1D766}': rec['P'], // 𝝦 MATHEMATICAL SANS-SERIF BOLD CAPITAL RHO
        '\u{1D7A0}': rec['P'], // 𝞠 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL RHO
        // #endregion P

        // #region Q
        '\u{211A}': rec['Q'], // ℚ DOUBLE-STRUCK CAPITAL Q
        '\u{2D55}': rec['Q'], // ⵕ TIFINAGH LETTER YARR
        '\u{1D410}': rec['Q'], // 𝐐 MATHEMATICAL BOLD CAPITAL Q
        '\u{1D444}': rec['Q'], // 𝑄 MATHEMATICAL ITALIC CAPITAL Q
        '\u{1D478}': rec['Q'], // 𝑸 MATHEMATICAL BOLD ITALIC CAPITAL Q
        '\u{1D4AC}': rec['Q'], // 𝒬 MATHEMATICAL SCRIPT CAPITAL Q
        '\u{1D4E0}': rec['Q'], // 𝓠 MATHEMATICAL BOLD SCRIPT CAPITAL Q
        '\u{1D514}': rec['Q'], // 𝔔 MATHEMATICAL FRAKTUR CAPITAL Q
        '\u{1D57C}': rec['Q'], // 𝕼 MATHEMATICAL BOLD FRAKTUR CAPITAL Q
        '\u{1D5B0}': rec['Q'], // 𝖰 MATHEMATICAL SANS-SERIF CAPITAL Q
        '\u{1D5E4}': rec['Q'], // 𝗤 MATHEMATICAL SANS-SERIF BOLD CAPITAL Q
        '\u{1D618}': rec['Q'], // 𝘘 MATHEMATICAL SANS-SERIF ITALIC CAPITAL Q
        '\u{1D64C}': rec['Q'], // 𝙌 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL Q
        '\u{1D680}': rec['Q'], // 𝚀 MATHEMATICAL MONOSPACE CAPITAL Q
        // #endregion Q

        // #region R
        '\u{01A6}': rec['R'], // Ʀ LATIN LETTER YR
        '\u{13A1}': rec['R'], // Ꭱ CHEROKEE LETTER E
        '\u{13D2}': rec['R'], // Ꮢ CHEROKEE LETTER SV
        '\u{1587}': rec['R'], // ᖇ CANADIAN SYLLABICS TLHI
        '\u{211B}': rec['R'], // ℛ SCRIPT CAPITAL R
        '\u{211C}': rec['R'], // ℜ BLACK-LETTER CAPITAL R
        '\u{211D}': rec['R'], // ℝ DOUBLE-STRUCK CAPITAL R
        '\u{A4E3}': rec['R'], // ꓣ LISU LETTER ZHA
        '\u{104B4}': rec['R'], // 𐒴 OSAGE CAPITAL LETTER BRA
        '\u{16F35}': rec['R'], // 𖼵 MIAO LETTER ZHA
        '\u{1D216}': rec['R'], // 𝈖 GREEK VOCAL NOTATION SYMBOL-23
        '\u{1D411}': rec['R'], // 𝐑 MATHEMATICAL BOLD CAPITAL R
        '\u{1D445}': rec['R'], // 𝑅 MATHEMATICAL ITALIC CAPITAL R
        '\u{1D479}': rec['R'], // 𝑹 MATHEMATICAL BOLD ITALIC CAPITAL R
        '\u{1D4E1}': rec['R'], // 𝓡 MATHEMATICAL BOLD SCRIPT CAPITAL R
        '\u{1D57D}': rec['R'], // 𝕽 MATHEMATICAL BOLD FRAKTUR CAPITAL R
        '\u{1D5B1}': rec['R'], // 𝖱 MATHEMATICAL SANS-SERIF CAPITAL R
        '\u{1D5E5}': rec['R'], // 𝗥 MATHEMATICAL SANS-SERIF BOLD CAPITAL R
        '\u{1D619}': rec['R'], // 𝘙 MATHEMATICAL SANS-SERIF ITALIC CAPITAL R
        '\u{1D64D}': rec['R'], // 𝙍 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL R
        '\u{1D681}': rec['R'], // 𝚁 MATHEMATICAL MONOSPACE CAPITAL R
        // #endregion R

        // #region S
        '\u{0405}': rec['S'], // Ѕ CYRILLIC CAPITAL LETTER DZE
        '\u{054F}': rec['S'], // Տ ARMENIAN CAPITAL LETTER TIWN
        '\u{13D5}': rec['S'], // Ꮥ CHEROKEE LETTER DE
        '\u{13DA}': rec['S'], // Ꮪ CHEROKEE LETTER DU
        '\u{A4E2}': rec['S'], // ꓢ LISU LETTER SA
        '\u{FF33}': rec['S'], // Ｓ FULLWIDTH LATIN CAPITAL LETTER S
        '\u{10296}': rec['S'], // 𐊖 LYCIAN LETTER S
        '\u{10420}': rec['S'], // 𐐠 DESERET CAPITAL LETTER ZHEE
        '\u{16F3A}': rec['S'], // 𖼺 MIAO LETTER SA
        '\u{1D412}': rec['S'], // 𝐒 MATHEMATICAL BOLD CAPITAL S
        '\u{1D446}': rec['S'], // 𝑆 MATHEMATICAL ITALIC CAPITAL S
        '\u{1D47A}': rec['S'], // 𝑺 MATHEMATICAL BOLD ITALIC CAPITAL S
        '\u{1D4AE}': rec['S'], // 𝒮 MATHEMATICAL SCRIPT CAPITAL S
        '\u{1D4E2}': rec['S'], // 𝓢 MATHEMATICAL BOLD SCRIPT CAPITAL S
        '\u{1D516}': rec['S'], // 𝔖 MATHEMATICAL FRAKTUR CAPITAL S
        '\u{1D54A}': rec['S'], // 𝕊 MATHEMATICAL DOUBLE-STRUCK CAPITAL S
        '\u{1D57E}': rec['S'], // 𝕾 MATHEMATICAL BOLD FRAKTUR CAPITAL S
        '\u{1D5B2}': rec['S'], // 𝖲 MATHEMATICAL SANS-SERIF CAPITAL S
        '\u{1D5E6}': rec['S'], // 𝗦 MATHEMATICAL SANS-SERIF BOLD CAPITAL S
        '\u{1D61A}': rec['S'], // 𝘚 MATHEMATICAL SANS-SERIF ITALIC CAPITAL S
        '\u{1D64E}': rec['S'], // 𝙎 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL S
        '\u{1D682}': rec['S'], // 𝚂 MATHEMATICAL MONOSPACE CAPITAL S
        '\u{0035}': rec['S'], // 5 DIGIT FIVE
        '\u{01BC}': rec['S'], // Ƽ LATIN CAPITAL LETTER TONE FIVE
        '\u{118BB}': rec['S'], // 𑢻 WARANG CITI CAPITAL LETTER HORR
        '\u{1D7D3}': rec['S'], // 𝟓 MATHEMATICAL BOLD DIGIT FIVE
        '\u{1D7DD}': rec['S'], // 𝟝 MATHEMATICAL DOUBLE-STRUCK DIGIT FIVE
        '\u{1D7E7}': rec['S'], // 𝟧 MATHEMATICAL SANS-SERIF DIGIT FIVE
        '\u{1D7F1}': rec['S'], // 𝟱 MATHEMATICAL SANS-SERIF BOLD DIGIT FIVE
        '\u{1D7FB}': rec['S'], // 𝟻 MATHEMATICAL MONOSPACE DIGIT FIVE
        '\u{1FBF5}': rec['S'], // 🯵 SEGMENTED DIGIT FIVE
        // #endregion S

        // #region T
        '\u{03A4}': rec['T'], // Τ GREEK CAPITAL LETTER TAU
        '\u{0422}': rec['T'], // Т CYRILLIC CAPITAL LETTER TE
        '\u{13A2}': rec['T'], // Ꭲ CHEROKEE LETTER I
        '\u{22A4}': rec['T'], // ⊤ DOWN TACK
        '\u{27D9}': rec['T'], // ⟙ LARGE DOWN TACK
        '\u{2CA6}': rec['T'], // Ⲧ COPTIC CAPITAL LETTER TAU
        '\u{A4D4}': rec['T'], // ꓔ LISU LETTER TA
        '\u{FF34}': rec['T'], // Ｔ FULLWIDTH LATIN CAPITAL LETTER T
        '\u{10297}': rec['T'], // 𐊗 LYCIAN LETTER T
        '\u{102B1}': rec['T'], // 𐊱 CARIAN LETTER C-18
        '\u{10315}': rec['T'], // 𐌕 OLD ITALIC LETTER TE
        '\u{118BC}': rec['T'], // 𑢼 WARANG CITI CAPITAL LETTER HAR
        '\u{16F0A}': rec['T'], // 𖼊 MIAO LETTER TA
        '\u{1D413}': rec['T'], // 𝐓 MATHEMATICAL BOLD CAPITAL T
        '\u{1D447}': rec['T'], // 𝑇 MATHEMATICAL ITALIC CAPITAL T
        '\u{1D47B}': rec['T'], // 𝑻 MATHEMATICAL BOLD ITALIC CAPITAL T
        '\u{1D4AF}': rec['T'], // 𝒯 MATHEMATICAL SCRIPT CAPITAL T
        '\u{1D4E3}': rec['T'], // 𝓣 MATHEMATICAL BOLD SCRIPT CAPITAL T
        '\u{1D517}': rec['T'], // 𝔗 MATHEMATICAL FRAKTUR CAPITAL T
        '\u{1D54B}': rec['T'], // 𝕋 MATHEMATICAL DOUBLE-STRUCK CAPITAL T
        '\u{1D57F}': rec['T'], // 𝕿 MATHEMATICAL BOLD FRAKTUR CAPITAL T
        '\u{1D5B3}': rec['T'], // 𝖳 MATHEMATICAL SANS-SERIF CAPITAL T
        '\u{1D5E7}': rec['T'], // 𝗧 MATHEMATICAL SANS-SERIF BOLD CAPITAL T
        '\u{1D61B}': rec['T'], // 𝘛 MATHEMATICAL SANS-SERIF ITALIC CAPITAL T
        '\u{1D64F}': rec['T'], // 𝙏 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL T
        '\u{1D683}': rec['T'], // 𝚃 MATHEMATICAL MONOSPACE CAPITAL T
        '\u{1D6BB}': rec['T'], // 𝚻 MATHEMATICAL BOLD CAPITAL TAU
        '\u{1D6F5}': rec['T'], // 𝛵 MATHEMATICAL ITALIC CAPITAL TAU
        '\u{1D72F}': rec['T'], // 𝜯 MATHEMATICAL BOLD ITALIC CAPITAL TAU
        '\u{1D769}': rec['T'], // 𝝩 MATHEMATICAL SANS-SERIF BOLD CAPITAL TAU
        '\u{1D7A3}': rec['T'], // 𝞣 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL TAU
        '\u{1F768}': rec['T'], // 🝨 ALCHEMICAL SYMBOL FOR CRUCIBLE-4
        // #endregion T

        // #region U
        '\u{054D}': rec['U'], // Ս ARMENIAN CAPITAL LETTER SEH
        '\u{1200}': rec['U'], // ሀ ETHIOPIC SYLLABLE HA
        '\u{144C}': rec['U'], // ᑌ CANADIAN SYLLABICS TE
        '\u{222A}': rec['U'], // ∪ UNION
        '\u{22C3}': rec['U'], // ⋃ N-ARY UNION
        '\u{A4F4}': rec['U'], // ꓴ LISU LETTER U
        '\u{104CE}': rec['U'], // 𐓎 OSAGE CAPITAL LETTER U
        '\u{118B8}': rec['U'], // 𑢸 WARANG CITI CAPITAL LETTER PU
        '\u{16F42}': rec['U'], // 𖽂 MIAO LETTER WA
        '\u{1D414}': rec['U'], // 𝐔 MATHEMATICAL BOLD CAPITAL U
        '\u{1D448}': rec['U'], // 𝑈 MATHEMATICAL ITALIC CAPITAL U
        '\u{1D47C}': rec['U'], // 𝑼 MATHEMATICAL BOLD ITALIC CAPITAL U
        '\u{1D4B0}': rec['U'], // 𝒰 MATHEMATICAL SCRIPT CAPITAL U
        '\u{1D4E4}': rec['U'], // 𝓤 MATHEMATICAL BOLD SCRIPT CAPITAL U
        '\u{1D518}': rec['U'], // 𝔘 MATHEMATICAL FRAKTUR CAPITAL U
        '\u{1D54C}': rec['U'], // 𝕌 MATHEMATICAL DOUBLE-STRUCK CAPITAL U
        '\u{1D580}': rec['U'], // 𝖀 MATHEMATICAL BOLD FRAKTUR CAPITAL U
        '\u{1D5B4}': rec['U'], // 𝖴 MATHEMATICAL SANS-SERIF CAPITAL U
        '\u{1D5E8}': rec['U'], // 𝗨 MATHEMATICAL SANS-SERIF BOLD CAPITAL U
        '\u{1D61C}': rec['U'], // 𝘜 MATHEMATICAL SANS-SERIF ITALIC CAPITAL U
        '\u{1D650}': rec['U'], // 𝙐 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL U
        '\u{1D684}': rec['U'], // 𝚄 MATHEMATICAL MONOSPACE CAPITAL U
        // #endregion U

        // #region V
        '\u{0474}': rec['V'], // Ѵ CYRILLIC CAPITAL LETTER IZHITSA
        '\u{0667}': rec['V'], // ٧ ARABIC-INDIC DIGIT SEVEN
        '\u{06F7}': rec['V'], // ۷ EXTENDED ARABIC-INDIC DIGIT SEVEN
        '\u{13D9}': rec['V'], // Ꮩ CHEROKEE LETTER DO
        '\u{142F}': rec['V'], // ᐯ CANADIAN SYLLABICS PE
        '\u{2164}': rec['V'], // Ⅴ ROMAN NUMERAL FIVE
        '\u{2D38}': rec['V'], // ⴸ TIFINAGH LETTER YADH
        '\u{A4E6}': rec['V'], // ꓦ LISU LETTER HA
        '\u{A6DF}': rec['V'], // ꛟ BAMUM LETTER KO
        '\u{1051D}': rec['V'], // 𐔝 ELBASAN LETTER TE
        '\u{118A0}': rec['V'], // 𑢠 WARANG CITI CAPITAL LETTER NGAA
        '\u{16F08}': rec['V'], // 𖼈 MIAO LETTER VA
        '\u{1D20D}': rec['V'], // 𝈍 GREEK VOCAL NOTATION SYMBOL-14
        '\u{1D415}': rec['V'], // 𝐕 MATHEMATICAL BOLD CAPITAL V
        '\u{1D449}': rec['V'], // 𝑉 MATHEMATICAL ITALIC CAPITAL V
        '\u{1D47D}': rec['V'], // 𝑽 MATHEMATICAL BOLD ITALIC CAPITAL V
        '\u{1D4B1}': rec['V'], // 𝒱 MATHEMATICAL SCRIPT CAPITAL V
        '\u{1D4E5}': rec['V'], // 𝓥 MATHEMATICAL BOLD SCRIPT CAPITAL V
        '\u{1D519}': rec['V'], // 𝔙 MATHEMATICAL FRAKTUR CAPITAL V
        '\u{1D54D}': rec['V'], // 𝕍 MATHEMATICAL DOUBLE-STRUCK CAPITAL V
        '\u{1D581}': rec['V'], // 𝖁 MATHEMATICAL BOLD FRAKTUR CAPITAL V
        '\u{1D5B5}': rec['V'], // 𝖵 MATHEMATICAL SANS-SERIF CAPITAL V
        '\u{1D5E9}': rec['V'], // 𝗩 MATHEMATICAL SANS-SERIF BOLD CAPITAL V
        '\u{1D61D}': rec['V'], // 𝘝 MATHEMATICAL SANS-SERIF ITALIC CAPITAL V
        '\u{1D651}': rec['V'], // 𝙑 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL V
        '\u{1D685}': rec['V'], // 𝚅 MATHEMATICAL MONOSPACE CAPITAL V
        // #endregion V

        // #region W
        '\u{051C}': rec['W'], // Ԝ CYRILLIC CAPITAL LETTER WE
        '\u{13B3}': rec['W'], // Ꮃ CHEROKEE LETTER LA
        '\u{13D4}': rec['W'], // Ꮤ CHEROKEE LETTER TA
        '\u{A4EA}': rec['W'], // ꓪ LISU LETTER WA
        '\u{118E6}': rec['W'], // 𑣦 WARANG CITI DIGIT SIX
        '\u{118EF}': rec['W'], // 𑣯 WARANG CITI NUMBER SIXTY
        '\u{1D416}': rec['W'], // 𝐖 MATHEMATICAL BOLD CAPITAL W
        '\u{1D44A}': rec['W'], // 𝑊 MATHEMATICAL ITALIC CAPITAL W
        '\u{1D47E}': rec['W'], // 𝑾 MATHEMATICAL BOLD ITALIC CAPITAL W
        '\u{1D4B2}': rec['W'], // 𝒲 MATHEMATICAL SCRIPT CAPITAL W
        '\u{1D4E6}': rec['W'], // 𝓦 MATHEMATICAL BOLD SCRIPT CAPITAL W
        '\u{1D51A}': rec['W'], // 𝔚 MATHEMATICAL FRAKTUR CAPITAL W
        '\u{1D54E}': rec['W'], // 𝕎 MATHEMATICAL DOUBLE-STRUCK CAPITAL W
        '\u{1D582}': rec['W'], // 𝖂 MATHEMATICAL BOLD FRAKTUR CAPITAL W
        '\u{1D5B6}': rec['W'], // 𝖶 MATHEMATICAL SANS-SERIF CAPITAL W
        '\u{1D5EA}': rec['W'], // 𝗪 MATHEMATICAL SANS-SERIF BOLD CAPITAL W
        '\u{1D61E}': rec['W'], // 𝘞 MATHEMATICAL SANS-SERIF ITALIC CAPITAL W
        '\u{1D652}': rec['W'], // 𝙒 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL W
        '\u{1D686}': rec['W'], // 𝚆 MATHEMATICAL MONOSPACE CAPITAL W
        // #endregion W

        // #region X
        '\u{03A7}': rec['X'], // Χ GREEK CAPITAL LETTER CHI
        '\u{0425}': rec['X'], // Х CYRILLIC CAPITAL LETTER HA
        '\u{166D}': rec['X'], // ᙭ CANADIAN SYLLABICS CHI SIGN
        '\u{16B7}': rec['X'], // ᚷ RUNIC LETTER GEBO GYFU G
        '\u{2169}': rec['X'], // Ⅹ ROMAN NUMERAL TEN
        '\u{2573}': rec['X'], // ╳ BOX DRAWINGS LIGHT DIAGONAL CROSS
        '\u{2CAC}': rec['X'], // Ⲭ COPTIC CAPITAL LETTER KHI
        '\u{2D5D}': rec['X'], // ⵝ TIFINAGH LETTER YATH
        '\u{A4EB}': rec['X'], // ꓫ LISU LETTER SHA
        '\u{A7B3}': rec['X'], // Ꭓ LATIN CAPITAL LETTER CHI
        '\u{FF38}': rec['X'], // Ｘ FULLWIDTH LATIN CAPITAL LETTER X
        '\u{10290}': rec['X'], // 𐊐 LYCIAN LETTER MM
        '\u{102B4}': rec['X'], // 𐊴 CARIAN LETTER X
        '\u{10317}': rec['X'], // 𐌗 OLD ITALIC LETTER EKS
        '\u{10322}': rec['X'], // 𐌢 OLD ITALIC NUMERAL TEN
        '\u{10527}': rec['X'], // 𐔧 ELBASAN LETTER KHE
        '\u{118EC}': rec['X'], // 𑣬 WARANG CITI NUMBER THIRTY
        '\u{1D417}': rec['X'], // 𝐗 MATHEMATICAL BOLD CAPITAL X
        '\u{1D44B}': rec['X'], // 𝑋 MATHEMATICAL ITALIC CAPITAL X
        '\u{1D47F}': rec['X'], // 𝑿 MATHEMATICAL BOLD ITALIC CAPITAL X
        '\u{1D4B3}': rec['X'], // 𝒳 MATHEMATICAL SCRIPT CAPITAL X
        '\u{1D4E7}': rec['X'], // 𝓧 MATHEMATICAL BOLD SCRIPT CAPITAL X
        '\u{1D51B}': rec['X'], // 𝔛 MATHEMATICAL FRAKTUR CAPITAL X
        '\u{1D54F}': rec['X'], // 𝕏 MATHEMATICAL DOUBLE-STRUCK CAPITAL X
        '\u{1D583}': rec['X'], // 𝖃 MATHEMATICAL BOLD FRAKTUR CAPITAL X
        '\u{1D5B7}': rec['X'], // 𝖷 MATHEMATICAL SANS-SERIF CAPITAL X
        '\u{1D5EB}': rec['X'], // 𝗫 MATHEMATICAL SANS-SERIF BOLD CAPITAL X
        '\u{1D61F}': rec['X'], // 𝘟 MATHEMATICAL SANS-SERIF ITALIC CAPITAL X
        '\u{1D653}': rec['X'], // 𝙓 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL X
        '\u{1D687}': rec['X'], // 𝚇 MATHEMATICAL MONOSPACE CAPITAL X
        '\u{1D6BE}': rec['X'], // 𝚾 MATHEMATICAL BOLD CAPITAL CHI
        '\u{1D6F8}': rec['X'], // 𝛸 MATHEMATICAL ITALIC CAPITAL CHI
        '\u{1D732}': rec['X'], // 𝜲 MATHEMATICAL BOLD ITALIC CAPITAL CHI
        '\u{1D76C}': rec['X'], // 𝝬 MATHEMATICAL SANS-SERIF BOLD CAPITAL CHI
        '\u{1D7A6}': rec['X'], // 𝞦 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL CHI
        // #endregion X

        // #region Y
        '\u{03A5}': rec['Y'], // Υ GREEK CAPITAL LETTER UPSILON
        '\u{03D2}': rec['Y'], // ϒ GREEK UPSILON WITH HOOK SYMBOL
        '\u{0423}': rec['Y'], // У CYRILLIC CAPITAL LETTER U
        '\u{04AE}': rec['Y'], // Ү CYRILLIC CAPITAL LETTER STRAIGHT U
        '\u{13A9}': rec['Y'], // Ꭹ CHEROKEE LETTER GI
        '\u{13BD}': rec['Y'], // Ꮍ CHEROKEE LETTER MU
        '\u{2CA8}': rec['Y'], // Ⲩ COPTIC CAPITAL LETTER UA
        '\u{A4EC}': rec['Y'], // ꓬ LISU LETTER YA
        '\u{FF39}': rec['Y'], // Ｙ FULLWIDTH LATIN CAPITAL LETTER Y
        '\u{102B2}': rec['Y'], // 𐊲 CARIAN LETTER U
        '\u{118A4}': rec['Y'], // 𑢤 WARANG CITI CAPITAL LETTER YA
        '\u{16F43}': rec['Y'], // 𖽃 MIAO LETTER AH
        '\u{1D418}': rec['Y'], // 𝐘 MATHEMATICAL BOLD CAPITAL Y
        '\u{1D44C}': rec['Y'], // 𝑌 MATHEMATICAL ITALIC CAPITAL Y
        '\u{1D480}': rec['Y'], // 𝒀 MATHEMATICAL BOLD ITALIC CAPITAL Y
        '\u{1D4B4}': rec['Y'], // 𝒴 MATHEMATICAL SCRIPT CAPITAL Y
        '\u{1D4E8}': rec['Y'], // 𝓨 MATHEMATICAL BOLD SCRIPT CAPITAL Y
        '\u{1D51C}': rec['Y'], // 𝔜 MATHEMATICAL FRAKTUR CAPITAL Y
        '\u{1D550}': rec['Y'], // 𝕐 MATHEMATICAL DOUBLE-STRUCK CAPITAL Y
        '\u{1D584}': rec['Y'], // 𝖄 MATHEMATICAL BOLD FRAKTUR CAPITAL Y
        '\u{1D5B8}': rec['Y'], // 𝖸 MATHEMATICAL SANS-SERIF CAPITAL Y
        '\u{1D5EC}': rec['Y'], // 𝗬 MATHEMATICAL SANS-SERIF BOLD CAPITAL Y
        '\u{1D620}': rec['Y'], // 𝘠 MATHEMATICAL SANS-SERIF ITALIC CAPITAL Y
        '\u{1D654}': rec['Y'], // 𝙔 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL Y
        '\u{1D688}': rec['Y'], // 𝚈 MATHEMATICAL MONOSPACE CAPITAL Y
        '\u{1D6BC}': rec['Y'], // 𝚼 MATHEMATICAL BOLD CAPITAL UPSILON
        '\u{1D6F6}': rec['Y'], // 𝛶 MATHEMATICAL ITALIC CAPITAL UPSILON
        '\u{1D730}': rec['Y'], // 𝜰 MATHEMATICAL BOLD ITALIC CAPITAL UPSILON
        '\u{1D76A}': rec['Y'], // 𝝪 MATHEMATICAL SANS-SERIF BOLD CAPITAL UPSILON
        '\u{1D7A4}': rec['Y'], // 𝞤 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL UPSILON
        // #endregion Y

        // #region Z
        '\u{0396}': rec['Z'], // Ζ GREEK CAPITAL LETTER ZETA
        '\u{13C3}': rec['Z'], // Ꮓ CHEROKEE LETTER NO
        '\u{2124}': rec['Z'], // ℤ DOUBLE-STRUCK CAPITAL Z
        '\u{2128}': rec['Z'], // ℨ BLACK-LETTER CAPITAL Z
        '\u{A4DC}': rec['Z'], // ꓜ LISU LETTER DZA
        '\u{FF3A}': rec['Z'], // Ｚ FULLWIDTH LATIN CAPITAL LETTER Z
        '\u{102F5}': rec['Z'], // 𐋵 COPTIC EPACT NUMBER THREE HUNDRED
        '\u{118A9}': rec['Z'], // 𑢩 WARANG CITI CAPITAL LETTER O
        '\u{118E5}': rec['Z'], // 𑣥 WARANG CITI DIGIT FIVE
        '\u{1D419}': rec['Z'], // 𝐙 MATHEMATICAL BOLD CAPITAL Z
        '\u{1D44D}': rec['Z'], // 𝑍 MATHEMATICAL ITALIC CAPITAL Z
        '\u{1D481}': rec['Z'], // 𝒁 MATHEMATICAL BOLD ITALIC CAPITAL Z
        '\u{1D4B5}': rec['Z'], // 𝒵 MATHEMATICAL SCRIPT CAPITAL Z
        '\u{1D4E9}': rec['Z'], // 𝓩 MATHEMATICAL BOLD SCRIPT CAPITAL Z
        '\u{1D585}': rec['Z'], // 𝖅 MATHEMATICAL BOLD FRAKTUR CAPITAL Z
        '\u{1D5B9}': rec['Z'], // 𝖹 MATHEMATICAL SANS-SERIF CAPITAL Z
        '\u{1D5ED}': rec['Z'], // 𝗭 MATHEMATICAL SANS-SERIF BOLD CAPITAL Z
        '\u{1D621}': rec['Z'], // 𝘡 MATHEMATICAL SANS-SERIF ITALIC CAPITAL Z
        '\u{1D655}': rec['Z'], // 𝙕 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL Z
        '\u{1D689}': rec['Z'], // 𝚉 MATHEMATICAL MONOSPACE CAPITAL Z
        '\u{1D6AD}': rec['Z'], // 𝚭 MATHEMATICAL BOLD CAPITAL ZETA
        '\u{1D6E7}': rec['Z'], // 𝛧 MATHEMATICAL ITALIC CAPITAL ZETA
        '\u{1D721}': rec['Z'], // 𝜡 MATHEMATICAL BOLD ITALIC CAPITAL ZETA
        '\u{1D75B}': rec['Z'], // 𝝛 MATHEMATICAL SANS-SERIF BOLD CAPITAL ZETA
        '\u{1D795}': rec['Z'], // 𝞕 MATHEMATICAL SANS-SERIF BOLD ITALIC CAPITAL ZETA
        '\u{0032}': rec['Z'], // 2 DIGIT TWO
        '\u{01A7}': rec['Z'], // Ƨ LATIN CAPITAL LETTER TONE TWO
        '\u{03E8}': rec['Z'], // Ϩ COPTIC CAPITAL LETTER HORI
        '\u{14BF}': rec['Z'], // ᒿ CANADIAN SYLLABICS SAYISI M
        '\u{A644}': rec['Z'], // Ꙅ CYRILLIC CAPITAL LETTER REVERSED DZE
        '\u{A6EF}': rec['Z'], // ꛯ BAMUM LETTER KOGHOM
        '\u{A75A}': rec['Z'], // Ꝛ LATIN CAPITAL LETTER R ROTUNDA
        '\u{1D7D0}': rec['Z'], // 𝟐 MATHEMATICAL BOLD DIGIT TWO
        '\u{1D7DA}': rec['Z'], // 𝟚 MATHEMATICAL DOUBLE-STRUCK DIGIT TWO
        '\u{1D7E4}': rec['Z'], // 𝟤 MATHEMATICAL SANS-SERIF DIGIT TWO
        '\u{1D7EE}': rec['Z'], // 𝟮 MATHEMATICAL SANS-SERIF BOLD DIGIT TWO
        '\u{1D7F8}': rec['Z'], // 𝟸 MATHEMATICAL MONOSPACE DIGIT TWO
        '\u{1FBF2}': rec['Z'], // 🯲 SEGMENTED DIGIT TWO
        // #endregion Z

        // #region a
        '\u{0251}': rec['a'], // ɑ LATIN SMALL LETTER ALPHA
        '\u{03B1}': rec['a'], // α GREEK SMALL LETTER ALPHA
        '\u{0430}': rec['a'], // а CYRILLIC SMALL LETTER A
        '\u{237A}': rec['a'], // ⍺ APL FUNCTIONAL SYMBOL ALPHA
        '\u{FF41}': rec['a'], // ａ FULLWIDTH LATIN SMALL LETTER A
        '\u{1D41A}': rec['a'], // 𝐚 MATHEMATICAL BOLD SMALL A
        '\u{1D44E}': rec['a'], // 𝑎 MATHEMATICAL ITALIC SMALL A
        '\u{1D482}': rec['a'], // 𝒂 MATHEMATICAL BOLD ITALIC SMALL A
        '\u{1D4B6}': rec['a'], // 𝒶 MATHEMATICAL SCRIPT SMALL A
        '\u{1D4EA}': rec['a'], // 𝓪 MATHEMATICAL BOLD SCRIPT SMALL A
        '\u{1D51E}': rec['a'], // 𝔞 MATHEMATICAL FRAKTUR SMALL A
        '\u{1D552}': rec['a'], // 𝕒 MATHEMATICAL DOUBLE-STRUCK SMALL A
        '\u{1D586}': rec['a'], // 𝖆 MATHEMATICAL BOLD FRAKTUR SMALL A
        '\u{1D5BA}': rec['a'], // 𝖺 MATHEMATICAL SANS-SERIF SMALL A
        '\u{1D5EE}': rec['a'], // 𝗮 MATHEMATICAL SANS-SERIF BOLD SMALL A
        '\u{1D622}': rec['a'], // 𝘢 MATHEMATICAL SANS-SERIF ITALIC SMALL A
        '\u{1D656}': rec['a'], // 𝙖 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL A
        '\u{1D68A}': rec['a'], // 𝚊 MATHEMATICAL MONOSPACE SMALL A
        '\u{1D6C2}': rec['a'], // 𝛂 MATHEMATICAL BOLD SMALL ALPHA
        '\u{1D6FC}': rec['a'], // 𝛼 MATHEMATICAL ITALIC SMALL ALPHA
        '\u{1D736}': rec['a'], // 𝜶 MATHEMATICAL BOLD ITALIC SMALL ALPHA
        '\u{1D770}': rec['a'], // 𝝰 MATHEMATICAL SANS-SERIF BOLD SMALL ALPHA
        '\u{1D7AA}': rec['a'], // 𝞪 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL ALPHA
        // #endregion a

        // #region b
        '\u{0184}': rec['b'], // Ƅ LATIN CAPITAL LETTER TONE SIX
        '\u{042C}': rec['b'], // Ь CYRILLIC CAPITAL LETTER SOFT SIGN
        '\u{13CF}': rec['b'], // Ꮟ CHEROKEE LETTER SI
        '\u{1472}': rec['b'], // ᑲ CANADIAN SYLLABICS KA
        '\u{15AF}': rec['b'], // ᖯ CANADIAN SYLLABICS AIVILIK B
        '\u{1D41B}': rec['b'], // 𝐛 MATHEMATICAL BOLD SMALL B
        '\u{1D44F}': rec['b'], // 𝑏 MATHEMATICAL ITALIC SMALL B
        '\u{1D483}': rec['b'], // 𝒃 MATHEMATICAL BOLD ITALIC SMALL B
        '\u{1D4B7}': rec['b'], // 𝒷 MATHEMATICAL SCRIPT SMALL B
        '\u{1D4EB}': rec['b'], // 𝓫 MATHEMATICAL BOLD SCRIPT SMALL B
        '\u{1D51F}': rec['b'], // 𝔟 MATHEMATICAL FRAKTUR SMALL B
        '\u{1D553}': rec['b'], // 𝕓 MATHEMATICAL DOUBLE-STRUCK SMALL B
        '\u{1D587}': rec['b'], // 𝖇 MATHEMATICAL BOLD FRAKTUR SMALL B
        '\u{1D5BB}': rec['b'], // 𝖻 MATHEMATICAL SANS-SERIF SMALL B
        '\u{1D5EF}': rec['b'], // 𝗯 MATHEMATICAL SANS-SERIF BOLD SMALL B
        '\u{1D623}': rec['b'], // 𝘣 MATHEMATICAL SANS-SERIF ITALIC SMALL B
        '\u{1D657}': rec['b'], // 𝙗 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL B
        '\u{1D68B}': rec['b'], // 𝚋 MATHEMATICAL MONOSPACE SMALL B
        // #endregion b

        // #region c
        '\u{03F2}': rec['c'], // ϲ GREEK LUNATE SIGMA SYMBOL
        '\u{0441}': rec['c'], // с CYRILLIC SMALL LETTER ES
        '\u{1D04}': rec['c'], // ᴄ LATIN LETTER SMALL CAPITAL C
        '\u{217D}': rec['c'], // ⅽ SMALL ROMAN NUMERAL ONE HUNDRED
        '\u{2CA5}': rec['c'], // ⲥ COPTIC SMALL LETTER SIMA
        '\u{ABAF}': rec['c'], // ꮯ CHEROKEE SMALL LETTER TLI
        '\u{FF43}': rec['c'], // ｃ FULLWIDTH LATIN SMALL LETTER C
        '\u{1043D}': rec['c'], // 𐐽 DESERET SMALL LETTER CHEE
        '\u{1D41C}': rec['c'], // 𝐜 MATHEMATICAL BOLD SMALL C
        '\u{1D450}': rec['c'], // 𝑐 MATHEMATICAL ITALIC SMALL C
        '\u{1D484}': rec['c'], // 𝒄 MATHEMATICAL BOLD ITALIC SMALL C
        '\u{1D4B8}': rec['c'], // 𝒸 MATHEMATICAL SCRIPT SMALL C
        '\u{1D4EC}': rec['c'], // 𝓬 MATHEMATICAL BOLD SCRIPT SMALL C
        '\u{1D520}': rec['c'], // 𝔠 MATHEMATICAL FRAKTUR SMALL C
        '\u{1D554}': rec['c'], // 𝕔 MATHEMATICAL DOUBLE-STRUCK SMALL C
        '\u{1D588}': rec['c'], // 𝖈 MATHEMATICAL BOLD FRAKTUR SMALL C
        '\u{1D5BC}': rec['c'], // 𝖼 MATHEMATICAL SANS-SERIF SMALL C
        '\u{1D5F0}': rec['c'], // 𝗰 MATHEMATICAL SANS-SERIF BOLD SMALL C
        '\u{1D624}': rec['c'], // 𝘤 MATHEMATICAL SANS-SERIF ITALIC SMALL C
        '\u{1D658}': rec['c'], // 𝙘 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL C
        '\u{1D68C}': rec['c'], // 𝚌 MATHEMATICAL MONOSPACE SMALL C
        // #endregion c

        // #region d
        '\u{0501}': rec['d'], // ԁ CYRILLIC SMALL LETTER KOMI DE
        '\u{13E7}': rec['d'], // Ꮷ CHEROKEE LETTER TSU
        '\u{146F}': rec['d'], // ᑯ CANADIAN SYLLABICS KO
        '\u{2146}': rec['d'], // ⅆ DOUBLE-STRUCK ITALIC SMALL D
        '\u{217E}': rec['d'], // ⅾ SMALL ROMAN NUMERAL FIVE HUNDRED
        '\u{A4D2}': rec['d'], // ꓒ LISU LETTER PHA
        '\u{1D41D}': rec['d'], // 𝐝 MATHEMATICAL BOLD SMALL D
        '\u{1D451}': rec['d'], // 𝑑 MATHEMATICAL ITALIC SMALL D
        '\u{1D485}': rec['d'], // 𝒅 MATHEMATICAL BOLD ITALIC SMALL D
        '\u{1D4B9}': rec['d'], // 𝒹 MATHEMATICAL SCRIPT SMALL D
        '\u{1D4ED}': rec['d'], // 𝓭 MATHEMATICAL BOLD SCRIPT SMALL D
        '\u{1D521}': rec['d'], // 𝔡 MATHEMATICAL FRAKTUR SMALL D
        '\u{1D555}': rec['d'], // 𝕕 MATHEMATICAL DOUBLE-STRUCK SMALL D
        '\u{1D589}': rec['d'], // 𝖉 MATHEMATICAL BOLD FRAKTUR SMALL D
        '\u{1D5BD}': rec['d'], // 𝖽 MATHEMATICAL SANS-SERIF SMALL D
        '\u{1D5F1}': rec['d'], // 𝗱 MATHEMATICAL SANS-SERIF BOLD SMALL D
        '\u{1D625}': rec['d'], // 𝘥 MATHEMATICAL SANS-SERIF ITALIC SMALL D
        '\u{1D659}': rec['d'], // 𝙙 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL D
        '\u{1D68D}': rec['d'], // 𝚍 MATHEMATICAL MONOSPACE SMALL D
        // #endregion d

        // #region e
        '\u{0435}': rec['e'], // е CYRILLIC SMALL LETTER IE
        '\u{04BD}': rec['e'], // ҽ CYRILLIC SMALL LETTER ABKHASIAN CHE
        '\u{212E}': rec['e'], // ℮ ESTIMATED SYMBOL
        '\u{212F}': rec['e'], // ℯ SCRIPT SMALL E
        '\u{2147}': rec['e'], // ⅇ DOUBLE-STRUCK ITALIC SMALL E
        '\u{AB32}': rec['e'], // ꬲ LATIN SMALL LETTER BLACKLETTER E
        '\u{FF45}': rec['e'], // ｅ FULLWIDTH LATIN SMALL LETTER E
        '\u{1D41E}': rec['e'], // 𝐞 MATHEMATICAL BOLD SMALL E
        '\u{1D452}': rec['e'], // 𝑒 MATHEMATICAL ITALIC SMALL E
        '\u{1D486}': rec['e'], // 𝒆 MATHEMATICAL BOLD ITALIC SMALL E
        '\u{1D4EE}': rec['e'], // 𝓮 MATHEMATICAL BOLD SCRIPT SMALL E
        '\u{1D522}': rec['e'], // 𝔢 MATHEMATICAL FRAKTUR SMALL E
        '\u{1D556}': rec['e'], // 𝕖 MATHEMATICAL DOUBLE-STRUCK SMALL E
        '\u{1D58A}': rec['e'], // 𝖊 MATHEMATICAL BOLD FRAKTUR SMALL E
        '\u{1D5BE}': rec['e'], // 𝖾 MATHEMATICAL SANS-SERIF SMALL E
        '\u{1D5F2}': rec['e'], // 𝗲 MATHEMATICAL SANS-SERIF BOLD SMALL E
        '\u{1D626}': rec['e'], // 𝘦 MATHEMATICAL SANS-SERIF ITALIC SMALL E
        '\u{1D65A}': rec['e'], // 𝙚 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL E
        '\u{1D68E}': rec['e'], // 𝚎 MATHEMATICAL MONOSPACE SMALL E
        // #endregion e

        // #region f
        '\u{017F}': rec['f'], // ſ LATIN SMALL LETTER LONG S
        '\u{0584}': rec['f'], // ք ARMENIAN SMALL LETTER KEH
        '\u{1E9D}': rec['f'], // ẝ LATIN SMALL LETTER LONG S WITH HIGH STROKE
        '\u{A799}': rec['f'], // ꞙ LATIN SMALL LETTER F WITH STROKE
        '\u{AB35}': rec['f'], // ꬵ LATIN SMALL LETTER LENIS F
        '\u{1D41F}': rec['f'], // 𝐟 MATHEMATICAL BOLD SMALL F
        '\u{1D453}': rec['f'], // 𝑓 MATHEMATICAL ITALIC SMALL F
        '\u{1D487}': rec['f'], // 𝒇 MATHEMATICAL BOLD ITALIC SMALL F
        '\u{1D4BB}': rec['f'], // 𝒻 MATHEMATICAL SCRIPT SMALL F
        '\u{1D4EF}': rec['f'], // 𝓯 MATHEMATICAL BOLD SCRIPT SMALL F
        '\u{1D523}': rec['f'], // 𝔣 MATHEMATICAL FRAKTUR SMALL F
        '\u{1D557}': rec['f'], // 𝕗 MATHEMATICAL DOUBLE-STRUCK SMALL F
        '\u{1D58B}': rec['f'], // 𝖋 MATHEMATICAL BOLD FRAKTUR SMALL F
        '\u{1D5BF}': rec['f'], // 𝖿 MATHEMATICAL SANS-SERIF SMALL F
        '\u{1D5F3}': rec['f'], // 𝗳 MATHEMATICAL SANS-SERIF BOLD SMALL F
        '\u{1D627}': rec['f'], // 𝘧 MATHEMATICAL SANS-SERIF ITALIC SMALL F
        '\u{1D65B}': rec['f'], // 𝙛 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL F
        '\u{1D68F}': rec['f'], // 𝚏 MATHEMATICAL MONOSPACE SMALL F
        // #endregion f

        // #region g
        '\u{018D}': rec['g'], // ƍ LATIN SMALL LETTER TURNED DELTA
        '\u{0261}': rec['g'], // ɡ LATIN SMALL LETTER SCRIPT G
        '\u{0581}': rec['g'], // ց ARMENIAN SMALL LETTER CO
        '\u{1D83}': rec['g'], // ᶃ LATIN SMALL LETTER G WITH PALATAL HOOK
        '\u{210A}': rec['g'], // ℊ SCRIPT SMALL G
        '\u{FF47}': rec['g'], // ｇ FULLWIDTH LATIN SMALL LETTER G
        '\u{1D420}': rec['g'], // 𝐠 MATHEMATICAL BOLD SMALL G
        '\u{1D454}': rec['g'], // 𝑔 MATHEMATICAL ITALIC SMALL G
        '\u{1D488}': rec['g'], // 𝒈 MATHEMATICAL BOLD ITALIC SMALL G
        '\u{1D4F0}': rec['g'], // 𝓰 MATHEMATICAL BOLD SCRIPT SMALL G
        '\u{1D524}': rec['g'], // 𝔤 MATHEMATICAL FRAKTUR SMALL G
        '\u{1D558}': rec['g'], // 𝕘 MATHEMATICAL DOUBLE-STRUCK SMALL G
        '\u{1D58C}': rec['g'], // 𝖌 MATHEMATICAL BOLD FRAKTUR SMALL G
        '\u{1D5C0}': rec['g'], // 𝗀 MATHEMATICAL SANS-SERIF SMALL G
        '\u{1D5F4}': rec['g'], // 𝗴 MATHEMATICAL SANS-SERIF BOLD SMALL G
        '\u{1D628}': rec['g'], // 𝘨 MATHEMATICAL SANS-SERIF ITALIC SMALL G
        '\u{1D65C}': rec['g'], // 𝙜 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL G
        '\u{1D690}': rec['g'], // 𝚐 MATHEMATICAL MONOSPACE SMALL G
        // #endregion g

        // #region h
        '\u{04BB}': rec['h'], // һ CYRILLIC SMALL LETTER SHHA
        '\u{0570}': rec['h'], // հ ARMENIAN SMALL LETTER HO
        '\u{13C2}': rec['h'], // Ꮒ CHEROKEE LETTER NI
        '\u{210E}': rec['h'], // ℎ PLANCK CONSTANT
        '\u{FF48}': rec['h'], // ｈ FULLWIDTH LATIN SMALL LETTER H
        '\u{1D421}': rec['h'], // 𝐡 MATHEMATICAL BOLD SMALL H
        '\u{1D489}': rec['h'], // 𝒉 MATHEMATICAL BOLD ITALIC SMALL H
        '\u{1D4BD}': rec['h'], // 𝒽 MATHEMATICAL SCRIPT SMALL H
        '\u{1D4F1}': rec['h'], // 𝓱 MATHEMATICAL BOLD SCRIPT SMALL H
        '\u{1D525}': rec['h'], // 𝔥 MATHEMATICAL FRAKTUR SMALL H
        '\u{1D559}': rec['h'], // 𝕙 MATHEMATICAL DOUBLE-STRUCK SMALL H
        '\u{1D58D}': rec['h'], // 𝖍 MATHEMATICAL BOLD FRAKTUR SMALL H
        '\u{1D5C1}': rec['h'], // 𝗁 MATHEMATICAL SANS-SERIF SMALL H
        '\u{1D5F5}': rec['h'], // 𝗵 MATHEMATICAL SANS-SERIF BOLD SMALL H
        '\u{1D629}': rec['h'], // 𝘩 MATHEMATICAL SANS-SERIF ITALIC SMALL H
        '\u{1D65D}': rec['h'], // 𝙝 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL H
        '\u{1D691}': rec['h'], // 𝚑 MATHEMATICAL MONOSPACE SMALL H
        // #endregion h

        // #region i
        '\u{0131}': rec['i'], // ı LATIN SMALL LETTER DOTLESS I
        '\u{0269}': rec['i'], // ɩ LATIN SMALL LETTER IOTA
        '\u{026A}': rec['i'], // ɪ LATIN LETTER SMALL CAPITAL I
        '\u{02DB}': rec['i'], // ˛ OGONEK
        '\u{037A}': rec['i'], // ͺ GREEK YPOGEGRAMMENI
        '\u{03B9}': rec['i'], // ι GREEK SMALL LETTER IOTA
        '\u{0456}': rec['i'], // і CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I
        '\u{04CF}': rec['i'], // ӏ CYRILLIC SMALL LETTER PALOCHKA
        '\u{13A5}': rec['i'], // Ꭵ CHEROKEE LETTER V
        '\u{1FBE}': rec['i'], // ι GREEK PROSGEGRAMMENI
        '\u{2139}': rec['i'], // ℹ INFORMATION SOURCE
        '\u{2148}': rec['i'], // ⅈ DOUBLE-STRUCK ITALIC SMALL I
        '\u{2170}': rec['i'], // ⅰ SMALL ROMAN NUMERAL ONE
        '\u{2373}': rec['i'], // ⍳ APL FUNCTIONAL SYMBOL IOTA
        '\u{A647}': rec['i'], // ꙇ CYRILLIC SMALL LETTER IOTA
        '\u{AB75}': rec['i'], // ꭵ CHEROKEE SMALL LETTER V
        '\u{FF49}': rec['i'], // ｉ FULLWIDTH LATIN SMALL LETTER I
        '\u{118C3}': rec['i'], // 𑣃 WARANG CITI SMALL LETTER YU
        '\u{1D422}': rec['i'], // 𝐢 MATHEMATICAL BOLD SMALL I
        '\u{1D456}': rec['i'], // 𝑖 MATHEMATICAL ITALIC SMALL I
        '\u{1D48A}': rec['i'], // 𝒊 MATHEMATICAL BOLD ITALIC SMALL I
        '\u{1D4BE}': rec['i'], // 𝒾 MATHEMATICAL SCRIPT SMALL I
        '\u{1D4F2}': rec['i'], // 𝓲 MATHEMATICAL BOLD SCRIPT SMALL I
        '\u{1D526}': rec['i'], // 𝔦 MATHEMATICAL FRAKTUR SMALL I
        '\u{1D55A}': rec['i'], // 𝕚 MATHEMATICAL DOUBLE-STRUCK SMALL I
        '\u{1D58E}': rec['i'], // 𝖎 MATHEMATICAL BOLD FRAKTUR SMALL I
        '\u{1D5C2}': rec['i'], // 𝗂 MATHEMATICAL SANS-SERIF SMALL I
        '\u{1D5F6}': rec['i'], // 𝗶 MATHEMATICAL SANS-SERIF BOLD SMALL I
        '\u{1D62A}': rec['i'], // 𝘪 MATHEMATICAL SANS-SERIF ITALIC SMALL I
        '\u{1D65E}': rec['i'], // 𝙞 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL I
        '\u{1D692}': rec['i'], // 𝚒 MATHEMATICAL MONOSPACE SMALL I
        '\u{1D6A4}': rec['i'], // 𝚤 MATHEMATICAL ITALIC SMALL DOTLESS I
        '\u{1D6CA}': rec['i'], // 𝛊 MATHEMATICAL BOLD SMALL IOTA
        '\u{1D704}': rec['i'], // 𝜄 MATHEMATICAL ITALIC SMALL IOTA
        '\u{1D73E}': rec['i'], // 𝜾 MATHEMATICAL BOLD ITALIC SMALL IOTA
        '\u{1D778}': rec['i'], // 𝝸 MATHEMATICAL SANS-SERIF BOLD SMALL IOTA
        '\u{1D7B2}': rec['i'], // 𝞲 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL IOTA
        // #endregion i

        // #region j
        '\u{03F3}': rec['j'], // ϳ GREEK LETTER YOT
        '\u{0458}': rec['j'], // ј CYRILLIC SMALL LETTER JE
        '\u{2149}': rec['j'], // ⅉ DOUBLE-STRUCK ITALIC SMALL J
        '\u{FF4A}': rec['j'], // ｊ FULLWIDTH LATIN SMALL LETTER J
        '\u{1D423}': rec['j'], // 𝐣 MATHEMATICAL BOLD SMALL J
        '\u{1D457}': rec['j'], // 𝑗 MATHEMATICAL ITALIC SMALL J
        '\u{1D48B}': rec['j'], // 𝒋 MATHEMATICAL BOLD ITALIC SMALL J
        '\u{1D4BF}': rec['j'], // 𝒿 MATHEMATICAL SCRIPT SMALL J
        '\u{1D4F3}': rec['j'], // 𝓳 MATHEMATICAL BOLD SCRIPT SMALL J
        '\u{1D527}': rec['j'], // 𝔧 MATHEMATICAL FRAKTUR SMALL J
        '\u{1D55B}': rec['j'], // 𝕛 MATHEMATICAL DOUBLE-STRUCK SMALL J
        '\u{1D58F}': rec['j'], // 𝖏 MATHEMATICAL BOLD FRAKTUR SMALL J
        '\u{1D5C3}': rec['j'], // 𝗃 MATHEMATICAL SANS-SERIF SMALL J
        '\u{1D5F7}': rec['j'], // 𝗷 MATHEMATICAL SANS-SERIF BOLD SMALL J
        '\u{1D62B}': rec['j'], // 𝘫 MATHEMATICAL SANS-SERIF ITALIC SMALL J
        '\u{1D65F}': rec['j'], // 𝙟 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL J
        '\u{1D693}': rec['j'], // 𝚓 MATHEMATICAL MONOSPACE SMALL J
        // #endregion j

        // #region k
        '\u{1D424}': rec['k'], // 𝐤 MATHEMATICAL BOLD SMALL K
        '\u{1D458}': rec['k'], // 𝑘 MATHEMATICAL ITALIC SMALL K
        '\u{1D48C}': rec['k'], // 𝒌 MATHEMATICAL BOLD ITALIC SMALL K
        '\u{1D4C0}': rec['k'], // 𝓀 MATHEMATICAL SCRIPT SMALL K
        '\u{1D4F4}': rec['k'], // 𝓴 MATHEMATICAL BOLD SCRIPT SMALL K
        '\u{1D528}': rec['k'], // 𝔨 MATHEMATICAL FRAKTUR SMALL K
        '\u{1D55C}': rec['k'], // 𝕜 MATHEMATICAL DOUBLE-STRUCK SMALL K
        '\u{1D590}': rec['k'], // 𝖐 MATHEMATICAL BOLD FRAKTUR SMALL K
        '\u{1D5C4}': rec['k'], // 𝗄 MATHEMATICAL SANS-SERIF SMALL K
        '\u{1D5F8}': rec['k'], // 𝗸 MATHEMATICAL SANS-SERIF BOLD SMALL K
        '\u{1D62C}': rec['k'], // 𝘬 MATHEMATICAL SANS-SERIF ITALIC SMALL K
        '\u{1D660}': rec['k'], // 𝙠 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL K
        '\u{1D694}': rec['k'], // 𝚔 MATHEMATICAL MONOSPACE SMALL K
        // #endregion k

        // #region m
        '\u{217F}': rec['m'], // ⅿ SMALL ROMAN NUMERAL ONE THOUSAND
        '\u{11700}': rec['m'], // 𑜀 AHOM LETTER KA
        '\u{118E3}': rec['m'], // 𑣣 WARANG CITI DIGIT THREE
        '\u{1D426}': rec['m'], // 𝐦 MATHEMATICAL BOLD SMALL M
        '\u{1D45A}': rec['m'], // 𝑚 MATHEMATICAL ITALIC SMALL M
        '\u{1D48E}': rec['m'], // 𝒎 MATHEMATICAL BOLD ITALIC SMALL M
        '\u{1D4C2}': rec['m'], // 𝓂 MATHEMATICAL SCRIPT SMALL M
        '\u{1D4F6}': rec['m'], // 𝓶 MATHEMATICAL BOLD SCRIPT SMALL M
        '\u{1D52A}': rec['m'], // 𝔪 MATHEMATICAL FRAKTUR SMALL M
        '\u{1D55E}': rec['m'], // 𝕞 MATHEMATICAL DOUBLE-STRUCK SMALL M
        '\u{1D592}': rec['m'], // 𝖒 MATHEMATICAL BOLD FRAKTUR SMALL M
        '\u{1D5C6}': rec['m'], // 𝗆 MATHEMATICAL SANS-SERIF SMALL M
        '\u{1D5FA}': rec['m'], // 𝗺 MATHEMATICAL SANS-SERIF BOLD SMALL M
        '\u{1D62E}': rec['m'], // 𝘮 MATHEMATICAL SANS-SERIF ITALIC SMALL M
        '\u{1D662}': rec['m'], // 𝙢 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL M
        '\u{1D696}': rec['m'], // 𝚖 MATHEMATICAL MONOSPACE SMALL M
        // #endregion m

        // #region n
        '\u{0578}': rec['n'], // ո ARMENIAN SMALL LETTER VO
        '\u{057C}': rec['n'], // ռ ARMENIAN SMALL LETTER RA
        '\u{1D427}': rec['n'], // 𝐧 MATHEMATICAL BOLD SMALL N
        '\u{1D45B}': rec['n'], // 𝑛 MATHEMATICAL ITALIC SMALL N
        '\u{1D48F}': rec['n'], // 𝒏 MATHEMATICAL BOLD ITALIC SMALL N
        '\u{1D4C3}': rec['n'], // 𝓃 MATHEMATICAL SCRIPT SMALL N
        '\u{1D4F7}': rec['n'], // 𝓷 MATHEMATICAL BOLD SCRIPT SMALL N
        '\u{1D52B}': rec['n'], // 𝔫 MATHEMATICAL FRAKTUR SMALL N
        '\u{1D55F}': rec['n'], // 𝕟 MATHEMATICAL DOUBLE-STRUCK SMALL N
        '\u{1D593}': rec['n'], // 𝖓 MATHEMATICAL BOLD FRAKTUR SMALL N
        '\u{1D5C7}': rec['n'], // 𝗇 MATHEMATICAL SANS-SERIF SMALL N
        '\u{1D5FB}': rec['n'], // 𝗻 MATHEMATICAL SANS-SERIF BOLD SMALL N
        '\u{1D62F}': rec['n'], // 𝘯 MATHEMATICAL SANS-SERIF ITALIC SMALL N
        '\u{1D663}': rec['n'], // 𝙣 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL N
        '\u{1D697}': rec['n'], // 𝚗 MATHEMATICAL MONOSPACE SMALL N
        // #endregion n

        // #region o
        '\u{03BF}': rec['o'], // ο GREEK SMALL LETTER OMICRON
        '\u{03C3}': rec['o'], // σ GREEK SMALL LETTER SIGMA
        '\u{043E}': rec['o'], // о CYRILLIC SMALL LETTER O
        '\u{0585}': rec['o'], // օ ARMENIAN SMALL LETTER OH
        '\u{05E1}': rec['o'], // ס HEBREW LETTER SAMEKH
        '\u{0647}': rec['o'], // ه ARABIC LETTER HEH
        '\u{0665}': rec['o'], // ٥ ARABIC-INDIC DIGIT FIVE
        '\u{06BE}': rec['o'], // ھ ARABIC LETTER HEH DOACHASHMEE
        '\u{06C1}': rec['o'], // ہ ARABIC LETTER HEH GOAL
        '\u{06D5}': rec['o'], // ە ARABIC LETTER AE
        '\u{06F5}': rec['o'], // ۵ EXTENDED ARABIC-INDIC DIGIT FIVE
        '\u{0966}': rec['o'], // ० DEVANAGARI DIGIT ZERO
        '\u{0A66}': rec['o'], // ੦ GURMUKHI DIGIT ZERO
        '\u{0AE6}': rec['o'], // ૦ GUJARATI DIGIT ZERO
        '\u{0BE6}': rec['o'], // ௦ TAMIL DIGIT ZERO
        '\u{0C02}': rec['o'], // ం TELUGU SIGN ANUSVARA
        '\u{0C66}': rec['o'], // ౦ TELUGU DIGIT ZERO
        '\u{0C82}': rec['o'], // ಂ KANNADA SIGN ANUSVARA
        '\u{0CE6}': rec['o'], // ೦ KANNADA DIGIT ZERO
        '\u{0D02}': rec['o'], // ം MALAYALAM SIGN ANUSVARA
        '\u{0D20}': rec['o'], // ഠ MALAYALAM LETTER TTHA
        '\u{0D66}': rec['o'], // ൦ MALAYALAM DIGIT ZERO
        '\u{0D82}': rec['o'], // ං SINHALA SIGN ANUSVARAYA
        '\u{0E50}': rec['o'], // ๐ THAI DIGIT ZERO
        '\u{0ED0}': rec['o'], // ໐ LAO DIGIT ZERO
        '\u{101D}': rec['o'], // ဝ MYANMAR LETTER WA
        '\u{1040}': rec['o'], // ၀ MYANMAR DIGIT ZERO
        '\u{10FF}': rec['o'], // ჿ GEORGIAN LETTER LABIAL SIGN
        '\u{1D0F}': rec['o'], // ᴏ LATIN LETTER SMALL CAPITAL O
        '\u{1D11}': rec['o'], // ᴑ LATIN SMALL LETTER SIDEWAYS O
        '\u{2134}': rec['o'], // ℴ SCRIPT SMALL O
        '\u{2C9F}': rec['o'], // ⲟ COPTIC SMALL LETTER O
        '\u{AB3D}': rec['o'], // ꬽ LATIN SMALL LETTER BLACKLETTER O
        '\u{FBA6}': rec['o'], // ﮦ ARABIC LETTER HEH GOAL ISOLATED FORM
        '\u{FBA7}': rec['o'], // ﮧ ARABIC LETTER HEH GOAL FINAL FORM
        '\u{FBA8}': rec['o'], // ﮨ ARABIC LETTER HEH GOAL INITIAL FORM
        '\u{FBA9}': rec['o'], // ﮩ ARABIC LETTER HEH GOAL MEDIAL FORM
        '\u{FBAA}': rec['o'], // ﮪ ARABIC LETTER HEH DOACHASHMEE ISOLATED FORM
        '\u{FBAB}': rec['o'], // ﮫ ARABIC LETTER HEH DOACHASHMEE FINAL FORM
        '\u{FBAC}': rec['o'], // ﮬ ARABIC LETTER HEH DOACHASHMEE INITIAL FORM
        '\u{FBAD}': rec['o'], // ﮭ ARABIC LETTER HEH DOACHASHMEE MEDIAL FORM
        '\u{FEE9}': rec['o'], // ﻩ ARABIC LETTER HEH ISOLATED FORM
        '\u{FEEA}': rec['o'], // ﻪ ARABIC LETTER HEH FINAL FORM
        '\u{FEEB}': rec['o'], // ﻫ ARABIC LETTER HEH INITIAL FORM
        '\u{FEEC}': rec['o'], // ﻬ ARABIC LETTER HEH MEDIAL FORM
        '\u{FF4F}': rec['o'], // ｏ FULLWIDTH LATIN SMALL LETTER O
        '\u{1042C}': rec['o'], // 𐐬 DESERET SMALL LETTER LONG O
        '\u{104EA}': rec['o'], // 𐓪 OSAGE SMALL LETTER O
        '\u{118C8}': rec['o'], // 𑣈 WARANG CITI SMALL LETTER E
        '\u{118D7}': rec['o'], // 𑣗 WARANG CITI SMALL LETTER BU
        '\u{1D428}': rec['o'], // 𝐨 MATHEMATICAL BOLD SMALL O
        '\u{1D45C}': rec['o'], // 𝑜 MATHEMATICAL ITALIC SMALL O
        '\u{1D490}': rec['o'], // 𝒐 MATHEMATICAL BOLD ITALIC SMALL O
        '\u{1D4F8}': rec['o'], // 𝓸 MATHEMATICAL BOLD SCRIPT SMALL O
        '\u{1D52C}': rec['o'], // 𝔬 MATHEMATICAL FRAKTUR SMALL O
        '\u{1D560}': rec['o'], // 𝕠 MATHEMATICAL DOUBLE-STRUCK SMALL O
        '\u{1D594}': rec['o'], // 𝖔 MATHEMATICAL BOLD FRAKTUR SMALL O
        '\u{1D5C8}': rec['o'], // 𝗈 MATHEMATICAL SANS-SERIF SMALL O
        '\u{1D5FC}': rec['o'], // 𝗼 MATHEMATICAL SANS-SERIF BOLD SMALL O
        '\u{1D630}': rec['o'], // 𝘰 MATHEMATICAL SANS-SERIF ITALIC SMALL O
        '\u{1D664}': rec['o'], // 𝙤 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL O
        '\u{1D698}': rec['o'], // 𝚘 MATHEMATICAL MONOSPACE SMALL O
        '\u{1D6D0}': rec['o'], // 𝛐 MATHEMATICAL BOLD SMALL OMICRON
        '\u{1D6D4}': rec['o'], // 𝛔 MATHEMATICAL BOLD SMALL SIGMA
        '\u{1D70A}': rec['o'], // 𝜊 MATHEMATICAL ITALIC SMALL OMICRON
        '\u{1D70E}': rec['o'], // 𝜎 MATHEMATICAL ITALIC SMALL SIGMA
        '\u{1D744}': rec['o'], // 𝝄 MATHEMATICAL BOLD ITALIC SMALL OMICRON
        '\u{1D748}': rec['o'], // 𝝈 MATHEMATICAL BOLD ITALIC SMALL SIGMA
        '\u{1D77E}': rec['o'], // 𝝾 MATHEMATICAL SANS-SERIF BOLD SMALL OMICRON
        '\u{1D782}': rec['o'], // 𝞂 MATHEMATICAL SANS-SERIF BOLD SMALL SIGMA
        '\u{1D7B8}': rec['o'], // 𝞸 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL OMICRON
        '\u{1D7BC}': rec['o'], // 𝞼 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL SIGMA
        '\u{1EE24}': rec['o'], // 𞸤 ARABIC MATHEMATICAL INITIAL HEH
        '\u{1EE64}': rec['o'], // 𞹤 ARABIC MATHEMATICAL STRETCHED HEH
        '\u{1EE84}': rec['o'], // 𞺄 ARABIC MATHEMATICAL LOOPED HEH
        // #endregion o

        // #region p
        '\u{03C1}': rec['p'], // ρ GREEK SMALL LETTER RHO
        '\u{03F1}': rec['p'], // ϱ GREEK RHO SYMBOL
        '\u{0440}': rec['p'], // р CYRILLIC SMALL LETTER ER
        '\u{2374}': rec['p'], // ⍴ APL FUNCTIONAL SYMBOL RHO
        '\u{2CA3}': rec['p'], // ⲣ COPTIC SMALL LETTER RO
        '\u{FF50}': rec['p'], // ｐ FULLWIDTH LATIN SMALL LETTER P
        '\u{1D429}': rec['p'], // 𝐩 MATHEMATICAL BOLD SMALL P
        '\u{1D45D}': rec['p'], // 𝑝 MATHEMATICAL ITALIC SMALL P
        '\u{1D491}': rec['p'], // 𝒑 MATHEMATICAL BOLD ITALIC SMALL P
        '\u{1D4C5}': rec['p'], // 𝓅 MATHEMATICAL SCRIPT SMALL P
        '\u{1D4F9}': rec['p'], // 𝓹 MATHEMATICAL BOLD SCRIPT SMALL P
        '\u{1D52D}': rec['p'], // 𝔭 MATHEMATICAL FRAKTUR SMALL P
        '\u{1D561}': rec['p'], // 𝕡 MATHEMATICAL DOUBLE-STRUCK SMALL P
        '\u{1D595}': rec['p'], // 𝖕 MATHEMATICAL BOLD FRAKTUR SMALL P
        '\u{1D5C9}': rec['p'], // 𝗉 MATHEMATICAL SANS-SERIF SMALL P
        '\u{1D5FD}': rec['p'], // 𝗽 MATHEMATICAL SANS-SERIF BOLD SMALL P
        '\u{1D631}': rec['p'], // 𝘱 MATHEMATICAL SANS-SERIF ITALIC SMALL P
        '\u{1D665}': rec['p'], // 𝙥 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL P
        '\u{1D699}': rec['p'], // 𝚙 MATHEMATICAL MONOSPACE SMALL P
        '\u{1D6D2}': rec['p'], // 𝛒 MATHEMATICAL BOLD SMALL RHO
        '\u{1D6E0}': rec['p'], // 𝛠 MATHEMATICAL BOLD RHO SYMBOL
        '\u{1D70C}': rec['p'], // 𝜌 MATHEMATICAL ITALIC SMALL RHO
        '\u{1D71A}': rec['p'], // 𝜚 MATHEMATICAL ITALIC RHO SYMBOL
        '\u{1D746}': rec['p'], // 𝝆 MATHEMATICAL BOLD ITALIC SMALL RHO
        '\u{1D754}': rec['p'], // 𝝔 MATHEMATICAL BOLD ITALIC RHO SYMBOL
        '\u{1D780}': rec['p'], // 𝞀 MATHEMATICAL SANS-SERIF BOLD SMALL RHO
        '\u{1D78E}': rec['p'], // 𝞎 MATHEMATICAL SANS-SERIF BOLD RHO SYMBOL
        '\u{1D7BA}': rec['p'], // 𝞺 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL RHO
        '\u{1D7C8}': rec['p'], // 𝟈 MATHEMATICAL SANS-SERIF BOLD ITALIC RHO SYMBOL
        // #endregion p

        // #region q
        '\u{051B}': rec['q'], // ԛ CYRILLIC SMALL LETTER QA
        '\u{0563}': rec['q'], // գ ARMENIAN SMALL LETTER GIM
        '\u{0566}': rec['q'], // զ ARMENIAN SMALL LETTER ZA
        '\u{1D42A}': rec['q'], // 𝐪 MATHEMATICAL BOLD SMALL Q
        '\u{1D45E}': rec['q'], // 𝑞 MATHEMATICAL ITALIC SMALL Q
        '\u{1D492}': rec['q'], // 𝒒 MATHEMATICAL BOLD ITALIC SMALL Q
        '\u{1D4C6}': rec['q'], // 𝓆 MATHEMATICAL SCRIPT SMALL Q
        '\u{1D4FA}': rec['q'], // 𝓺 MATHEMATICAL BOLD SCRIPT SMALL Q
        '\u{1D52E}': rec['q'], // 𝔮 MATHEMATICAL FRAKTUR SMALL Q
        '\u{1D562}': rec['q'], // 𝕢 MATHEMATICAL DOUBLE-STRUCK SMALL Q
        '\u{1D596}': rec['q'], // 𝖖 MATHEMATICAL BOLD FRAKTUR SMALL Q
        '\u{1D5CA}': rec['q'], // 𝗊 MATHEMATICAL SANS-SERIF SMALL Q
        '\u{1D5FE}': rec['q'], // 𝗾 MATHEMATICAL SANS-SERIF BOLD SMALL Q
        '\u{1D632}': rec['q'], // 𝘲 MATHEMATICAL SANS-SERIF ITALIC SMALL Q
        '\u{1D666}': rec['q'], // 𝙦 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL Q
        '\u{1D69A}': rec['q'], // 𝚚 MATHEMATICAL MONOSPACE SMALL Q
        // #endregion q

        // #region r
        '\u{0433}': rec['r'], // г CYRILLIC SMALL LETTER GHE
        '\u{1D26}': rec['r'], // ᴦ GREEK LETTER SMALL CAPITAL GAMMA
        '\u{2C85}': rec['r'], // ⲅ COPTIC SMALL LETTER GAMMA
        '\u{AB47}': rec['r'], // ꭇ LATIN SMALL LETTER R WITHOUT HANDLE
        '\u{AB48}': rec['r'], // ꭈ LATIN SMALL LETTER DOUBLE R
        '\u{AB81}': rec['r'], // ꮁ CHEROKEE SMALL LETTER HU
        '\u{1D42B}': rec['r'], // 𝐫 MATHEMATICAL BOLD SMALL R
        '\u{1D45F}': rec['r'], // 𝑟 MATHEMATICAL ITALIC SMALL R
        '\u{1D493}': rec['r'], // 𝒓 MATHEMATICAL BOLD ITALIC SMALL R
        '\u{1D4C7}': rec['r'], // 𝓇 MATHEMATICAL SCRIPT SMALL R
        '\u{1D4FB}': rec['r'], // 𝓻 MATHEMATICAL BOLD SCRIPT SMALL R
        '\u{1D52F}': rec['r'], // 𝔯 MATHEMATICAL FRAKTUR SMALL R
        '\u{1D563}': rec['r'], // 𝕣 MATHEMATICAL DOUBLE-STRUCK SMALL R
        '\u{1D597}': rec['r'], // 𝖗 MATHEMATICAL BOLD FRAKTUR SMALL R
        '\u{1D5CB}': rec['r'], // 𝗋 MATHEMATICAL SANS-SERIF SMALL R
        '\u{1D5FF}': rec['r'], // 𝗿 MATHEMATICAL SANS-SERIF BOLD SMALL R
        '\u{1D633}': rec['r'], // 𝘳 MATHEMATICAL SANS-SERIF ITALIC SMALL R
        '\u{1D667}': rec['r'], // 𝙧 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL R
        '\u{1D69B}': rec['r'], // 𝚛 MATHEMATICAL MONOSPACE SMALL R
        // #endregion r

        // #region s
        '\u{01BD}': rec['s'], // ƽ LATIN SMALL LETTER TONE FIVE
        '\u{0455}': rec['s'], // ѕ CYRILLIC SMALL LETTER DZE
        '\u{A731}': rec['s'], // ꜱ LATIN LETTER SMALL CAPITAL S
        '\u{ABAA}': rec['s'], // ꮪ CHEROKEE SMALL LETTER DU
        '\u{FF53}': rec['s'], // ｓ FULLWIDTH LATIN SMALL LETTER S
        '\u{10448}': rec['s'], // 𐑈 DESERET SMALL LETTER ZHEE
        '\u{118C1}': rec['s'], // 𑣁 WARANG CITI SMALL LETTER A
        '\u{1D42C}': rec['s'], // 𝐬 MATHEMATICAL BOLD SMALL S
        '\u{1D460}': rec['s'], // 𝑠 MATHEMATICAL ITALIC SMALL S
        '\u{1D494}': rec['s'], // 𝒔 MATHEMATICAL BOLD ITALIC SMALL S
        '\u{1D4C8}': rec['s'], // 𝓈 MATHEMATICAL SCRIPT SMALL S
        '\u{1D4FC}': rec['s'], // 𝓼 MATHEMATICAL BOLD SCRIPT SMALL S
        '\u{1D530}': rec['s'], // 𝔰 MATHEMATICAL FRAKTUR SMALL S
        '\u{1D564}': rec['s'], // 𝕤 MATHEMATICAL DOUBLE-STRUCK SMALL S
        '\u{1D598}': rec['s'], // 𝖘 MATHEMATICAL BOLD FRAKTUR SMALL S
        '\u{1D5CC}': rec['s'], // 𝗌 MATHEMATICAL SANS-SERIF SMALL S
        '\u{1D600}': rec['s'], // 𝘀 MATHEMATICAL SANS-SERIF BOLD SMALL S
        '\u{1D634}': rec['s'], // 𝘴 MATHEMATICAL SANS-SERIF ITALIC SMALL S
        '\u{1D668}': rec['s'], // 𝙨 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL S
        '\u{1D69C}': rec['s'], // 𝚜 MATHEMATICAL MONOSPACE SMALL S
        // #endregion s

        // #region t
        '\u{1D42D}': rec['t'], // 𝐭 MATHEMATICAL BOLD SMALL T
        '\u{1D461}': rec['t'], // 𝑡 MATHEMATICAL ITALIC SMALL T
        '\u{1D495}': rec['t'], // 𝒕 MATHEMATICAL BOLD ITALIC SMALL T
        '\u{1D4C9}': rec['t'], // 𝓉 MATHEMATICAL SCRIPT SMALL T
        '\u{1D4FD}': rec['t'], // 𝓽 MATHEMATICAL BOLD SCRIPT SMALL T
        '\u{1D531}': rec['t'], // 𝔱 MATHEMATICAL FRAKTUR SMALL T
        '\u{1D565}': rec['t'], // 𝕥 MATHEMATICAL DOUBLE-STRUCK SMALL T
        '\u{1D599}': rec['t'], // 𝖙 MATHEMATICAL BOLD FRAKTUR SMALL T
        '\u{1D5CD}': rec['t'], // 𝗍 MATHEMATICAL SANS-SERIF SMALL T
        '\u{1D601}': rec['t'], // 𝘁 MATHEMATICAL SANS-SERIF BOLD SMALL T
        '\u{1D635}': rec['t'], // 𝘵 MATHEMATICAL SANS-SERIF ITALIC SMALL T
        '\u{1D669}': rec['t'], // 𝙩 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL T
        '\u{1D69D}': rec['t'], // 𝚝 MATHEMATICAL MONOSPACE SMALL T
        // #endregion t

        // #region u
        '\u{028B}': rec['u'], // ʋ LATIN SMALL LETTER V WITH HOOK
        '\u{03C5}': rec['u'], // υ GREEK SMALL LETTER UPSILON
        '\u{057D}': rec['u'], // ս ARMENIAN SMALL LETTER SEH
        '\u{1D1C}': rec['u'], // ᴜ LATIN LETTER SMALL CAPITAL U
        '\u{A79F}': rec['u'], // ꞟ LATIN SMALL LETTER VOLAPUK UE
        '\u{AB4E}': rec['u'], // ꭎ LATIN SMALL LETTER U WITH SHORT RIGHT LEG
        '\u{AB52}': rec['u'], // ꭒ LATIN SMALL LETTER U WITH LEFT HOOK
        '\u{104F6}': rec['u'], // 𐓶 OSAGE SMALL LETTER U
        '\u{118D8}': rec['u'], // 𑣘 WARANG CITI SMALL LETTER PU
        '\u{1D42E}': rec['u'], // 𝐮 MATHEMATICAL BOLD SMALL U
        '\u{1D462}': rec['u'], // 𝑢 MATHEMATICAL ITALIC SMALL U
        '\u{1D496}': rec['u'], // 𝒖 MATHEMATICAL BOLD ITALIC SMALL U
        '\u{1D4CA}': rec['u'], // 𝓊 MATHEMATICAL SCRIPT SMALL U
        '\u{1D4FE}': rec['u'], // 𝓾 MATHEMATICAL BOLD SCRIPT SMALL U
        '\u{1D532}': rec['u'], // 𝔲 MATHEMATICAL FRAKTUR SMALL U
        '\u{1D566}': rec['u'], // 𝕦 MATHEMATICAL DOUBLE-STRUCK SMALL U
        '\u{1D59A}': rec['u'], // 𝖚 MATHEMATICAL BOLD FRAKTUR SMALL U
        '\u{1D5CE}': rec['u'], // 𝗎 MATHEMATICAL SANS-SERIF SMALL U
        '\u{1D602}': rec['u'], // 𝘂 MATHEMATICAL SANS-SERIF BOLD SMALL U
        '\u{1D636}': rec['u'], // 𝘶 MATHEMATICAL SANS-SERIF ITALIC SMALL U
        '\u{1D66A}': rec['u'], // 𝙪 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL U
        '\u{1D69E}': rec['u'], // 𝚞 MATHEMATICAL MONOSPACE SMALL U
        '\u{1D6D6}': rec['u'], // 𝛖 MATHEMATICAL BOLD SMALL UPSILON
        '\u{1D710}': rec['u'], // 𝜐 MATHEMATICAL ITALIC SMALL UPSILON
        '\u{1D74A}': rec['u'], // 𝝊 MATHEMATICAL BOLD ITALIC SMALL UPSILON
        '\u{1D784}': rec['u'], // 𝞄 MATHEMATICAL SANS-SERIF BOLD SMALL UPSILON
        '\u{1D7BE}': rec['u'], // 𝞾 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL UPSILON
        // #endregion u

        // #region v
        '\u{03BD}': rec['v'], // ν GREEK SMALL LETTER NU
        '\u{0475}': rec['v'], // ѵ CYRILLIC SMALL LETTER IZHITSA
        '\u{05D8}': rec['v'], // ט HEBREW LETTER TET
        '\u{1D20}': rec['v'], // ᴠ LATIN LETTER SMALL CAPITAL V
        '\u{2174}': rec['v'], // ⅴ SMALL ROMAN NUMERAL FIVE
        '\u{2228}': rec['v'], // ∨ LOGICAL OR
        '\u{22C1}': rec['v'], // ⋁ N-ARY LOGICAL OR
        '\u{ABA9}': rec['v'], // ꮩ CHEROKEE SMALL LETTER DO
        '\u{FF56}': rec['v'], // ｖ FULLWIDTH LATIN SMALL LETTER V
        '\u{11706}': rec['v'], // 𑜆 AHOM LETTER PA
        '\u{118C0}': rec['v'], // 𑣀 WARANG CITI SMALL LETTER NGAA
        '\u{1D42F}': rec['v'], // 𝐯 MATHEMATICAL BOLD SMALL V
        '\u{1D463}': rec['v'], // 𝑣 MATHEMATICAL ITALIC SMALL V
        '\u{1D497}': rec['v'], // 𝒗 MATHEMATICAL BOLD ITALIC SMALL V
        '\u{1D4CB}': rec['v'], // 𝓋 MATHEMATICAL SCRIPT SMALL V
        '\u{1D4FF}': rec['v'], // 𝓿 MATHEMATICAL BOLD SCRIPT SMALL V
        '\u{1D533}': rec['v'], // 𝔳 MATHEMATICAL FRAKTUR SMALL V
        '\u{1D567}': rec['v'], // 𝕧 MATHEMATICAL DOUBLE-STRUCK SMALL V
        '\u{1D59B}': rec['v'], // 𝖛 MATHEMATICAL BOLD FRAKTUR SMALL V
        '\u{1D5CF}': rec['v'], // 𝗏 MATHEMATICAL SANS-SERIF SMALL V
        '\u{1D603}': rec['v'], // 𝘃 MATHEMATICAL SANS-SERIF BOLD SMALL V
        '\u{1D637}': rec['v'], // 𝘷 MATHEMATICAL SANS-SERIF ITALIC SMALL V
        '\u{1D66B}': rec['v'], // 𝙫 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL V
        '\u{1D69F}': rec['v'], // 𝚟 MATHEMATICAL MONOSPACE SMALL V
        '\u{1D6CE}': rec['v'], // 𝛎 MATHEMATICAL BOLD SMALL NU
        '\u{1D708}': rec['v'], // 𝜈 MATHEMATICAL ITALIC SMALL NU
        '\u{1D742}': rec['v'], // 𝝂 MATHEMATICAL BOLD ITALIC SMALL NU
        '\u{1D77C}': rec['v'], // 𝝼 MATHEMATICAL SANS-SERIF BOLD SMALL NU
        '\u{1D7B6}': rec['v'], // 𝞶 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL NU
        // #endregion v

        // #region w
        '\u{026F}': rec['w'], // ɯ LATIN SMALL LETTER TURNED M
        '\u{0461}': rec['w'], // ѡ CYRILLIC SMALL LETTER OMEGA
        '\u{051D}': rec['w'], // ԝ CYRILLIC SMALL LETTER WE
        '\u{0561}': rec['w'], // ա ARMENIAN SMALL LETTER AYB
        '\u{1D21}': rec['w'], // ᴡ LATIN LETTER SMALL CAPITAL W
        '\u{AB83}': rec['w'], // ꮃ CHEROKEE SMALL LETTER LA
        '\u{1170A}': rec['w'], // 𑜊 AHOM LETTER JA
        '\u{1170E}': rec['w'], // 𑜎 AHOM LETTER LA
        '\u{1170F}': rec['w'], // 𑜏 AHOM LETTER SA
        '\u{1D430}': rec['w'], // 𝐰 MATHEMATICAL BOLD SMALL W
        '\u{1D464}': rec['w'], // 𝑤 MATHEMATICAL ITALIC SMALL W
        '\u{1D498}': rec['w'], // 𝒘 MATHEMATICAL BOLD ITALIC SMALL W
        '\u{1D4CC}': rec['w'], // 𝓌 MATHEMATICAL SCRIPT SMALL W
        '\u{1D500}': rec['w'], // 𝔀 MATHEMATICAL BOLD SCRIPT SMALL W
        '\u{1D534}': rec['w'], // 𝔴 MATHEMATICAL FRAKTUR SMALL W
        '\u{1D568}': rec['w'], // 𝕨 MATHEMATICAL DOUBLE-STRUCK SMALL W
        '\u{1D59C}': rec['w'], // 𝖜 MATHEMATICAL BOLD FRAKTUR SMALL W
        '\u{1D5D0}': rec['w'], // 𝗐 MATHEMATICAL SANS-SERIF SMALL W
        '\u{1D604}': rec['w'], // 𝘄 MATHEMATICAL SANS-SERIF BOLD SMALL W
        '\u{1D638}': rec['w'], // 𝘸 MATHEMATICAL SANS-SERIF ITALIC SMALL W
        '\u{1D66C}': rec['w'], // 𝙬 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL W
        '\u{1D6A0}': rec['w'], // 𝚠 MATHEMATICAL MONOSPACE SMALL W
        // #endregion w

        // #region x
        '\u{00D7}': rec['x'], // × MULTIPLICATION SIGN
        '\u{0445}': rec['x'], // х CYRILLIC SMALL LETTER HA
        '\u{1541}': rec['x'], // ᕁ CANADIAN SYLLABICS SAYISI YI
        '\u{157D}': rec['x'], // ᕽ CANADIAN SYLLABICS HK
        '\u{166E}': rec['x'], // ᙮ CANADIAN SYLLABICS FULL STOP
        '\u{2179}': rec['x'], // ⅹ SMALL ROMAN NUMERAL TEN
        '\u{292B}': rec['x'], // ⤫ RISING DIAGONAL CROSSING FALLING DIAGONAL
        '\u{292C}': rec['x'], // ⤬ FALLING DIAGONAL CROSSING RISING DIAGONAL
        '\u{2A2F}': rec['x'], // ⨯ VECTOR OR CROSS PRODUCT
        '\u{FF58}': rec['x'], // ｘ FULLWIDTH LATIN SMALL LETTER X
        '\u{1D431}': rec['x'], // 𝐱 MATHEMATICAL BOLD SMALL X
        '\u{1D465}': rec['x'], // 𝑥 MATHEMATICAL ITALIC SMALL X
        '\u{1D499}': rec['x'], // 𝒙 MATHEMATICAL BOLD ITALIC SMALL X
        '\u{1D4CD}': rec['x'], // 𝓍 MATHEMATICAL SCRIPT SMALL X
        '\u{1D501}': rec['x'], // 𝔁 MATHEMATICAL BOLD SCRIPT SMALL X
        '\u{1D535}': rec['x'], // 𝔵 MATHEMATICAL FRAKTUR SMALL X
        '\u{1D569}': rec['x'], // 𝕩 MATHEMATICAL DOUBLE-STRUCK SMALL X
        '\u{1D59D}': rec['x'], // 𝖝 MATHEMATICAL BOLD FRAKTUR SMALL X
        '\u{1D5D1}': rec['x'], // 𝗑 MATHEMATICAL SANS-SERIF SMALL X
        '\u{1D605}': rec['x'], // 𝘅 MATHEMATICAL SANS-SERIF BOLD SMALL X
        '\u{1D639}': rec['x'], // 𝘹 MATHEMATICAL SANS-SERIF ITALIC SMALL X
        '\u{1D66D}': rec['x'], // 𝙭 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL X
        '\u{1D6A1}': rec['x'], // 𝚡 MATHEMATICAL MONOSPACE SMALL X
        // #endregion x

        // #region y
        '\u{0263}': rec['y'], // ɣ LATIN SMALL LETTER GAMMA
        '\u{028F}': rec['y'], // ʏ LATIN LETTER SMALL CAPITAL Y
        '\u{03B3}': rec['y'], // γ GREEK SMALL LETTER GAMMA
        '\u{0443}': rec['y'], // у CYRILLIC SMALL LETTER U
        '\u{04AF}': rec['y'], // ү CYRILLIC SMALL LETTER STRAIGHT U
        '\u{10E7}': rec['y'], // ყ GEORGIAN LETTER QAR
        '\u{1D8C}': rec['y'], // ᶌ LATIN SMALL LETTER V WITH PALATAL HOOK
        '\u{1EFF}': rec['y'], // ỿ LATIN SMALL LETTER Y WITH LOOP
        '\u{213D}': rec['y'], // ℽ DOUBLE-STRUCK SMALL GAMMA
        '\u{AB5A}': rec['y'], // ꭚ LATIN SMALL LETTER Y WITH SHORT RIGHT LEG
        '\u{FF59}': rec['y'], // ｙ FULLWIDTH LATIN SMALL LETTER Y
        '\u{118DC}': rec['y'], // 𑣜 WARANG CITI SMALL LETTER HAR
        '\u{1D432}': rec['y'], // 𝐲 MATHEMATICAL BOLD SMALL Y
        '\u{1D466}': rec['y'], // 𝑦 MATHEMATICAL ITALIC SMALL Y
        '\u{1D49A}': rec['y'], // 𝒚 MATHEMATICAL BOLD ITALIC SMALL Y
        '\u{1D4CE}': rec['y'], // 𝓎 MATHEMATICAL SCRIPT SMALL Y
        '\u{1D502}': rec['y'], // 𝔂 MATHEMATICAL BOLD SCRIPT SMALL Y
        '\u{1D536}': rec['y'], // 𝔶 MATHEMATICAL FRAKTUR SMALL Y
        '\u{1D56A}': rec['y'], // 𝕪 MATHEMATICAL DOUBLE-STRUCK SMALL Y
        '\u{1D59E}': rec['y'], // 𝖞 MATHEMATICAL BOLD FRAKTUR SMALL Y
        '\u{1D5D2}': rec['y'], // 𝗒 MATHEMATICAL SANS-SERIF SMALL Y
        '\u{1D606}': rec['y'], // 𝘆 MATHEMATICAL SANS-SERIF BOLD SMALL Y
        '\u{1D63A}': rec['y'], // 𝘺 MATHEMATICAL SANS-SERIF ITALIC SMALL Y
        '\u{1D66E}': rec['y'], // 𝙮 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL Y
        '\u{1D6A2}': rec['y'], // 𝚢 MATHEMATICAL MONOSPACE SMALL Y
        '\u{1D6C4}': rec['y'], // 𝛄 MATHEMATICAL BOLD SMALL GAMMA
        '\u{1D6FE}': rec['y'], // 𝛾 MATHEMATICAL ITALIC SMALL GAMMA
        '\u{1D738}': rec['y'], // 𝜸 MATHEMATICAL BOLD ITALIC SMALL GAMMA
        '\u{1D772}': rec['y'], // 𝝲 MATHEMATICAL SANS-SERIF BOLD SMALL GAMMA
        '\u{1D7AC}': rec['y'], // 𝞬 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL GAMMA
        // #endregion y

        // #region z
        '\u{1D22}': rec['z'], // ᴢ LATIN LETTER SMALL CAPITAL Z
        '\u{AB93}': rec['z'], // ꮓ CHEROKEE SMALL LETTER NO
        '\u{118C4}': rec['z'], // 𑣄 WARANG CITI SMALL LETTER YA
        '\u{1D433}': rec['z'], // 𝐳 MATHEMATICAL BOLD SMALL Z
        '\u{1D467}': rec['z'], // 𝑧 MATHEMATICAL ITALIC SMALL Z
        '\u{1D49B}': rec['z'], // 𝒛 MATHEMATICAL BOLD ITALIC SMALL Z
        '\u{1D4CF}': rec['z'], // 𝓏 MATHEMATICAL SCRIPT SMALL Z
        '\u{1D503}': rec['z'], // 𝔃 MATHEMATICAL BOLD SCRIPT SMALL Z
        '\u{1D537}': rec['z'], // 𝔷 MATHEMATICAL FRAKTUR SMALL Z
        '\u{1D56B}': rec['z'], // 𝕫 MATHEMATICAL DOUBLE-STRUCK SMALL Z
        '\u{1D59F}': rec['z'], // 𝖟 MATHEMATICAL BOLD FRAKTUR SMALL Z
        '\u{1D5D3}': rec['z'], // 𝗓 MATHEMATICAL SANS-SERIF SMALL Z
        '\u{1D607}': rec['z'], // 𝘇 MATHEMATICAL SANS-SERIF BOLD SMALL Z
        '\u{1D63B}': rec['z'], // 𝘻 MATHEMATICAL SANS-SERIF ITALIC SMALL Z
        '\u{1D66F}': rec['z'], // 𝙯 MATHEMATICAL SANS-SERIF BOLD ITALIC SMALL Z
        '\u{1D6A3}': rec['z'], // 𝚣 MATHEMATICAL MONOSPACE SMALL Z
        // #endregion z
    } as Record<string, bigint>;
};

/** Encode `bigint` to a Base51 string. */
export const e51 = Encoder(CS51);

/** Decode Base51 string to a `bigint`. */
export const d51 = Decoder(CS51, i51);
