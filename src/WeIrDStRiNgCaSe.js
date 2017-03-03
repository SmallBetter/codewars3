export default class WeIrDStRiNgCaSe {

  static toWeirdCase(string) {
    const StringSplit = string.split(' ')
    const StringMap = StringSplit.map(i => i.split('').map((item, index) =>
      index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join(''))
    return StringMap.join(' ')
  }
}
