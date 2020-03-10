'use strict'
function pluralDay ({ number = 0, days = ['день', 'дня', 'дней'] }) {
  let p, value
  let n = value = Math.abs(number)
  p = 2
  n %= 100
  if (n >= 5 && n <= 20) {
    p = 2
  } else {
    n %= 10
    if (n === 1) {
      p = 0
    }
    if (n >= 2 && n <= 4) {
      p = 1
    }
  }

  return `${value} ${days[p]}`
}
export default pluralDay
