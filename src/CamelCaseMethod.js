export default class CamelCaseMethod {

  static camelCase(String) {
    return String.split(' ')
          .map(i => [...`${i}`]
            .map((item, index) =>
              index === 0 ? item.toUpperCase() : item.toLowerCase()).join('')).join('')
  }
}
