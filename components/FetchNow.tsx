'use client';
// swrをクライアントコンポーネントとして使うサンプル
import useSWR, { mutate } from 'swr';

const api = '/api/now';

type Response = {
  now: string;
};
type ErrorResponse = {
  datail: string;
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
  const res = await fetch(fetchInput, options);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export function FetchNow() {
  const key = [api];
  const { data, error, isLoading } = useSWR<Response>(key, fetcher);
  const handler = () => {
    mutate(key);
  };

  if (error) return <div className="bg-error">failed to load. {error?.message}</div>;
  if (isLoading) return <div className="loading loading-spinner loading-xs">loading...</div>;

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
