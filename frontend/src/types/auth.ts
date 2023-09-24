import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface SignUpFormProps {
  register: UseFormRegister<FieldValues>;
  errors: any;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

/** ProgressBar Component
 * @param {String} percent ProgressBar의 퍼센테이지, width를 이용해 작성
 * @returns {JSX.Element} ProgressBar Component 반환
 */
export interface ProgressBarProps {
  percent: string;
}
