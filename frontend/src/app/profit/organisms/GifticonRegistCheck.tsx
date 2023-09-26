// import { useForm } from 'react-hook-form';

interface GifticonRegistCheckProps {
  gifticonResponse: any;
  setGifticonResponse: React.Dispatch<React.SetStateAction<any>>;
}
/*
gifticonResponse Example


1. gifticonResponse에 4개의 데이터가 정확히 들어가 있는지 validation을 1회 실시.

2. 현재, 페이지의 경우, 위의 네 가지를 수정할 수 있게 지원하는 input이 있어야 됨.

3. 또한, input만 있는 것이 아니라 화면에 내가 설정했던 image를 보여줄 수 있는 트리거가 있어야 됨.

4. 
*/
export default function GifticonRegistCheck({
  gifticonResponse,
  setGifticonResponse,
}: GifticonRegistCheckProps) {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(gifticonResponse, setGifticonResponse);
  return (
    <form>
      <input type="text" />
    </form>
  );
}
