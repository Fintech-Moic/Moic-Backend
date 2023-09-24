/** 페이지의 Title과 Sentnece로 이뤄진 Text Component
 * @param {String} title 페이지의 타이틀
 * @param {String} sentence 페이지의 설명 부분
 * @returns {JSX.Element} 특정 폰트가 적용된 타이틀 부분 반환
 */

export interface TitleSentenceProps {
  title: string;
  sentence: string;
}

/** ProgressBar Component
 * @param {String} percent ProgressBar의 퍼센테이지, width를 이용해 작성
 * @returns {JSX.Element} ProgressBar Component 반환
 */
export interface ProgressBarProps {
  percent: string;
}
