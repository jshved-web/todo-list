export function postContent(title, dateOfEnd, description, check, files) {
  return {
    _id: Math.floor(Math.random() * 1000),
    title:
      title.length === 0
      ? 'Без названия'
      : title,
    description,
    check: check,
    files,
    dateOfStart: Date.now(),
    dateOfEnd: dateOfEnd
  }
}
