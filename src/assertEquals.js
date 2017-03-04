export default class assertDeepEquals {

  static solution(fullText, searchText) {
    return fullText.split(searchText).length - 1
  }
}
