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

export const validateRut = (rut: string): boolean => {
    // Eliminar puntos y guiones
    const cleanedRut = rut.replace(/\./g, '').replace(/-/g, '');

    // Verificar si el RUT tiene un formato válido
    if (!/^\d{1,8}[0-9K]$/.test(cleanedRut)) {
        return false;
    }

    // Separar el cuerpo y el dígito verificador
    const body = cleanedRut.slice(0, -1);
    const dv = cleanedRut.slice(-1).toUpperCase();

    // Calcular el dígito verificador esperado
    const expectedDv = getDVRut(body);

    return dv === expectedDv;
};