import { useState, useEffect } from "react";
import { useRelayEnvironment } from "react-relay";
import {
  createOperationDescriptor,
  Disposable,
  fetchQuery,
  getRequest,
  GraphQLTaggedNode,
  OperationType,
} from "relay-runtime";

type UseQueryOptions<TQuery extends OperationType> = {
  skip?: boolean;
  pollInterval?: number;
  retain?: boolean;
};

type UseQueryResponse<TQuery extends OperationType> = {
  data: TQuery["response"] | null;
  loading: boolean;
  error: Error | null;
};

export function useRelayQuery<TQuery extends OperationType>(
  query: GraphQLTaggedNode,
  variables?: TQuery["variables"],
  options?: UseQueryOptions<TQuery>
): UseQueryResponse<TQuery> {
  const relayEnvironment = useRelayEnvironment();

  const [data, setData] = useState<Nullable<TQuery["response"]>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Nullable<Error>>(null);

  useEffect(() => {
    if (options?.skip) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const queryRequest = getRequest(query);
    const queryDescriptor = createOperationDescriptor(
      queryRequest,
      variables ?? {}
    );
    let disposable: Nullable<Disposable> = null;
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchQuery<TQuery>(
          relayEnvironment,
          query,
          variables ?? {}
        ).toPromise();
        if (options?.retain) {
          disposable = relayEnvironment.retain(queryDescriptor);
        }
        if (isMounted) {
          setData(data);
          setLoading(false);
          setError(null);
        }
      } catch (err: unknown) {
        if (isMounted) {
          setLoading(false);
          setError(err as Error);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
      disposable?.dispose();
    };
  }, [query, JSON.stringify(variables), options?.skip, relayEnvironment]);

  useEffect(() => {
    if (!options?.pollInterval || options?.skip) {
      return;
    }

    const queryRequest = getRequest(query);
    const queryDescriptor = createOperationDescriptor(
      queryRequest,
      variables ?? {}
    );
    let disposable: Nullable<Disposable> = null;
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchQuery<TQuery>(
          relayEnvironment,
          query,
          variables ?? {}
        ).toPromise();
        if (options?.retain) {
          disposable = relayEnvironment.retain(queryDescriptor);
        }
        if (isMounted) {
          setData(data);
          setLoading(false);
          setError(null);
        }
      } catch (err: unknown) {
        if (isMounted) {
          setLoading(false);
          setError(err as Error);
        }
      }
    };

    const intervalId = setInterval(fetchData, options.pollInterval);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [
    query,
    JSON.stringify(variables),
    options?.skip,
    options?.pollInterval,
    relayEnvironment,
  ]);

  return {
    data: data,
    loading: loading,
    error: error,
  };
}
