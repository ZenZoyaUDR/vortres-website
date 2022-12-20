import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function APIDataSWR() {
  const { data, error, isLoading } = useSWR(
    "https://api.minehut.cm/server/bitrpg?byName=true",
    fetcher
  );

  return { data, error, isLoading }
}
