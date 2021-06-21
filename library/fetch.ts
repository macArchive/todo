import useSWR from 'swr'

export const fetcher = url => fetch(url).then(r => r.json())

export function restFetch(url) {
  const {data, error} = useSWR(url, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
