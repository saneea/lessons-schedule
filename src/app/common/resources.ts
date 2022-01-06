export interface Resources {
  title: {
    lessonsBreak: string,
    subjectName: string,
    lessonDuration: string,
    scheduleStart: string
  },
  button: {
    title: {
      edit: string,
      accept: string,
      discard: string,
      testSound: string,
      addSubjects: string,
      remove: string
    }
  },
}

export const ResourcesRU: Resources = {

  title: {
    lessonsBreak: 'Перемена',
    subjectName: 'Предмет',
    lessonDuration: 'Длительность',
    scheduleStart: 'Начало уроков'
  },

  button: {
    title: {
      edit: 'Редактировать',
      accept: 'Сохранить',
      discard: 'Отмена',
      testSound: 'Тест звука',
      addSubjects: 'Добавить урок',
      remove: 'Удалить'
    }
  }

}

export let currentResources: Resources = ResourcesRU;
