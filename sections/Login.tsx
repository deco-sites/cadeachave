export interface Props {
  title: string;
}

export default function LatestPosts({ title }: Props) {
  return (
    <div class="w-full h-full flex justify-center aling-center">
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}
