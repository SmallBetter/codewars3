export default class thisSolution {

  static Solution(str) {
    const sum = []
    const sumThis = (`${str}_`)
    for (let i = 0; i < str.length; i += 2) {
      sum.push(sumThis.slice(i, i + 2))
    }
    return sum
  }
}
