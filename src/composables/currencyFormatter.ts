export const useCurrencyFormatter = (locale = 'ru-RU', currency = 'KGS') => {
  return {
    format: (value: number, fractionDigits = 0) => {
      if (currency === 'KGS') return `${value.toFixed(2)} сом`

      return value.toLocaleString(locale, {
        style: 'currency',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
        currency: currency
      })
    }
  }
}
