const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
/**
 * Функция добавляет 0 перед днем/месяцем
 * @param d
 * @example
 * const d = 8
 * return 08
 * @returns {string|*}
 */
const addLeadingZero = (d) => {
  return (d < 10) ? '0' + d : d
}
/**
 * Функция преобразует дату окончания задачи в строку
 * @param {Date} t Дата истечения срока выполнения задачи
 */
export const getUserTime = (t) => {
  const Y = t.getFullYear()
  const M = addLeadingZero(t.getMonth() + 1)
  const D = addLeadingZero(t.getDate())
  const d = days[t.getDay()]
  const h = addLeadingZero(t.getHours())
  const m = addLeadingZero(t.getMinutes())
  return `${Y}.${M}.${D} ${h}:${m} ${d}`
}