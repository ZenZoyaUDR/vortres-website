import useSWR from 'swr';
const url = 'https://jsonplaceholder.typicode.com/posts';
const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetData = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
