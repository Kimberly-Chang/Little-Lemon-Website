const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

export const fetchAPI = (date) => {
    const result = [];
    const random = seededRandom(Number(String(date).replace(/-/g, '')));

    for (let i = 12; i <= 22; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        };
        if (random() < 0.5) {
            result.push(i + ":30");
        };
    };
    return result;
};

export const submitAPI = (formData) => {
    return true;
};