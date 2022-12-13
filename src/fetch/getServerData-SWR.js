// import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json());

function APIDataSWR() {
  const { data, error, isLoading } = useSWR(
    "/api/stats",
    fetcher
  );

  return { data, error, isLoading }
}
