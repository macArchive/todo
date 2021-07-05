import useSWR from "swr";
import request from "graphql-request";

const gqrl = `set graphql endpoint here`;
export const fetcher = (url) => fetch(url).then((r) => r.json());
export const grapher = (query) => request(gqrl, query);

export function restFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function graphFetch(query) {
  const { data, error } = useSWR(query, grapher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}