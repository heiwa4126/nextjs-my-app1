import { basePath } from '@/lib/global';
import { Metadata } from 'next';
import Image from 'next/image';

// ダミーのイメージは
// `curl 'https://dummyimage.com/240x360/00006b/fff.png&text=240x360+dummy+image' -o 240x360.png`
// のように作りました。 参考: https://dummyimage.com/

const title = 'next/image test';
export const metadata: Metadata = {
  title
};

function Imr({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={`${basePath}/images/${src}`}
      width={100}
      height={100}
      alt={alt}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto'
      }}
    />
  );
  // layout="responsive" の代替
  // 参考: https://tech.excite.co.jp/entry/2022/12/23/001520
}

function Im1() {
  // return <Image src={`${basePath}/images/360x240.png`} width={1} height={1} layout="responsive" alt="360x240" />;
  return <Imr src="360x240.png" alt="360x240" />;
}
function Im0() {
  return <Imr src="100x75.png" alt="100x75" />;
}

export default async function Page() {
  return (
    <main>
      <h1>{title}</h1>
      <p>basePath: {basePath}</p>

      <div>
        <Image src={`${basePath}/images/360x240.png`} width={360} height={240} alt="360x240" />
      </div>

      <div className="flex">
        <div className="flex-1 mr-1">
          <Im1 />
        </div>
        <div className="flex-1 mr-1">
          <Im1 />
        </div>
        <div className="flex-1">
          <Im1 />
        </div>
      </div>

      <div className="flex max-w-md">
        <div className="flex-1 mr-1">
          <Im0 />
        </div>
        <div className="flex-1 mr-1">
          <Im0 />
        </div>
        <div className="flex-1">
          <Im0 />
        </div>
      </div>

      <div className="max-w-md">
        <Im1 />
      </div>

      <Im1 />
    </main>
  );
}
