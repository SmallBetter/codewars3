export default class Username {


  static addUsername(list) {
    return list.map(person => {
      const newPerson = person
      newPerson.username = (person.firstName + person.lastName[0])
          .toLowerCase() + (new Date().getFullYear() - person.age)
      return newPerson
    })
  }
}
