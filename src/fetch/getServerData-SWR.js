// import useSWR from 'swr'

function APIDataSWR() {
  const { data, error, isLoading } = useSWR(
    "/api/stats",
    fetcher
  );

  return { data, error, isLoading }
}
