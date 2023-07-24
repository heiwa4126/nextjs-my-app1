'use client';
// swrをクライアントコンポーネントとして使うサンプル
import useSWR, { mutate } from 'swr';

type Now = {
  now: string;
};

const fetcher: (input: RequestInfo, init?: RequestInit) => Promise<Now> = (...args) =>
  fetch(...args).then((res) => {
    // throw new Error('TEST ERROR');
    if (!res.ok) {
      throw new Error(`Failed to fetch data (${res.status} ${res.statusText})`);
    }
    return res.json();
  });

export function FetchNow() {
  const key = '/api/now';
  const { data, error, isLoading } = useSWR<Now>(key, fetcher);
  const handler = () => {
    mutate(key);
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
