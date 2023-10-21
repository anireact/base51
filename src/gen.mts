export const Inverse = (charset: string): Record<string, bigint> => {
    let dict: Record<string, bigint> = {};

    for (let i = 0; i < charset.length; i++) {
        dict[charset[i]!] = BigInt(i);
    }

    return dict;
};

export const Encoder = (charset: string) => {
    const BASE = BigInt(charset.length);

    return (n: bigint) => {
        if (n === 0n) return charset[0]!;

        let s = '';

        while (n) {
            s = charset[(n % BASE) as any] + s;
            n = n / BASE;
        }

        return s;
    };
};

export const Decoder = (charset: string, inv = Inverse) => {
    const BASE = BigInt(charset.length);
    const DICT = inv(charset);

    return (s: string) => {
        let n = 0n;

        for (let c of s) {
            let d = DICT[c];
            if (d == null) continue;
            n *= BASE;
            n += d;
        }

        return n;
    };
};
