/** 페이지의 Title과 Sentnece로 이뤄진 Text Component
 * @param {String} title 페이지의 타이틀
 * @param {String} sentence 페이지의 설명 부분
 * @param {String} titleSize Title의 font와 size
 * @param {String} sentenceSize sentence의 font와 size
 * @param {String} width Component의 너비
 * @returns {JSX.Element} 특정 폰트가 적용된 Text Component 반환
 */

export interface TitleSentenceProps {
  title: string;
  sentence: string;
  titleSize?: string;
  sentenceSize?: string;
  width?: string;
}

/** ProgressBarProps Component
 * @param {String} percent ProgressBar의 퍼센테이지
 * @returns {JSX.Element} ProgressBar Component반환
 */

export interface ProgressBarProps {
  percent: string;
}
