'use client';
// swrをクライアントコンポーネントとして使うサンプル
import useSWR, { mutate } from 'swr';

type Response = {
  now: string;
};

type FetcherArg = [
  RequestInfo | URL // fetch()'s URL
  // no payload
];

async function fetcher(args: FetcherArg): Promise<Response> {
  const [fetchInput] = args;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      accept: 'application/json' // responseはJSONのみ受け入れ
    }
  };
  return (await fetch(fetchInput, options)).json();
}

export function FetchNow() {
  const key = '/api/now';
  const { data, error, isLoading } = useSWR<Response>([key], fetcher);
  const handler = () => {
    mutate([key]);
  };

  if (error) return <div>failed to load. {error?.message}</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return (
    <div>
      {data?.now}
      <button className="btn btn-sm ml-2" onClick={handler}>
        更新
      </button>
    </div>
  );
}

export default FetchNow;
