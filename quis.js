    const opt = { maxlen: 5 };
    const max = Math.max(3, opt.maxlen || 7);
    // max will be 5, because opt.maxlen (5) is greater than 3.
    