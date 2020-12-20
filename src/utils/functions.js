export const normalizeCardNumber = (value) =>
  value
    .replace(/\s/g, '')
    .replace(/[^\d]/g, '') // numbers
    .match(/.{1,4}/g)
    ?.join('  ')
    .substr(0, 22) || '';

export const normalizeCVC = (value) => value.replace(/\s/g, '').replace(/[^\d]/g, '').substr(0, 3) || ''; // numbers
