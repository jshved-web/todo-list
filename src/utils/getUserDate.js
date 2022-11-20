const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

const addLeadingZero = (d) => {
  return (d < 10) ? '0' + d : d
}

export const getUserTime = (t) => {
  const Y = t.getFullYear()
  const M = addLeadingZero(t.getMonth() + 1)
  const D = addLeadingZero(t.getDate())
  const d = days[t.getDay()]
  const h = addLeadingZero(t.getHours())
  const m = addLeadingZero(t.getMinutes())
  return `${Y}.${M}.${D} ${h}:${m} ${d}`
}