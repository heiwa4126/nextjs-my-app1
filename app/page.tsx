import Counter from '@/components/Counter';
import { Metadata } from 'next';

const title = 'Hello Next.js!';
export const metadata: Metadata = {
  title
};

export default async function Home() {
  return (
    <main className="mx-4 my-3">
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quis quam sunt eos cumque, illum
        repudiandae modi ipsa nostrum quaerat facere maiores maxime aliquam deserunt voluptatibus placeat minus ullam
        similique!
      </p>
      <p>
        文章は内容本に著作する未然ますない上、利用しれ財団を制限者可能の投稿メディアをしればはなるあれ、技術の文も、保持さコンテンツが配信行っことにおける引用明確なますといるますで。たとえば、対象の著作物は、権利の決議係る著作十分ませ方針と公開する、そのフリーをあるて目的で手続基づきのを明記あたりられます。あるいはを、策定事例と引用反するればなり目的に時にする含むことは、理解ますた、場合においては著作権の利用というフリー中の問題はなることが、被著作物は、明瞭の保護をしてフリーで引用できでているないで。
      </p>
      <button className="btn mr-1 btn-sm">Hello daisyUI</button>
      <button className="btn btn-sm mr-1">こんにちは</button>
      <Counter className="btn btn-outline btn-sm" />
    </main>
  );
}
