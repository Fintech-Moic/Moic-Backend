import TextBox from '../molecules/TextBox';

export default function SignUpTextForm() {
  return (
    <div>
      <TextBox width="w-80" height="h-80 rounded-[10px]">
        <div>
          <h1 className="h1b">공지에용</h1>
          <p className="p2r">나한테 복종해라</p>
        </div>
      </TextBox>
    </div>
  );
}
