/** Button Component들의 공통 Type 정의
 * @param {String} type button 태그의 타입
 * @param {String} titel button의 텍스트 값
 * @param {String} font button의 폰트 값
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick button의 클릭 이벤트
 * @param {String} width button의 가로길이
 * @param {String} height button의 세로길이
 * @param {String} borderRadius button의 테두리 기울기
 */
export default interface ButtonProps {
  type: 'button' | 'submit';
  title?: string;
  font?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width: string;
  height: string;
  borderRadius?: string;
}
