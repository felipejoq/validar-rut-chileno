export const getDVRut = (rut: string): string => {
    let sum = 0;
    let multiplier = 2;

    // Iterar sobre el RUT desde el final hacia el principio
    for (let i = rut.length - 1; i >= 0; i--) {
        sum += parseInt(rut[i], 10) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const remainder = 11 - (sum % 11);

    if (remainder === 11) {
        return '0';
    } else if (remainder === 10) {
        return 'K';
    } else {
        return remainder.toString();
    }
};