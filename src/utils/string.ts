export default class StringUtil {
  constructor() {}

  calculateReadingTime(text: string, wpm: number) {
    const words: number = text.trim().split(/\s+/).length;
    const time: number = Math.ceil(words/wpm)
    return time
  }
}