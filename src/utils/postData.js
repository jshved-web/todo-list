/**
 * Функция служащая для структурирования данных для дальнейшей отправки на сервер
 * @param {String} title Заголовок задачи
 * @param {Date} dateOfEnd Дата истечения срока выполнения задачи
 * @param {String} description Описание задачи
 * @param {boolean} check Статус выполнения задачи
 * @param {Object} files Данные загруженных файлов
 * @returns {{dateOfEnd, dateOfStart: number, description, files, _id: number, check, title: (string|*)}}
 */
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
