import { httpGet } from '@shared/services';
import { useQuery } from 'react-query';

declare type ResQuery = {
    status: string;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isIdle: boolean;
    data: any;
    dataUpdatedAt: any;
    error: any;
    errorUpdatedAt: any;
    failureCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isRefetching: boolean;
    isLoadingError: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetchError: boolean;
    isStale: boolean;
    refetch: Function;
    remove: Function;
};

export const useAllArticles = (): ResQuery => {
    return useQuery('articles', () => {
        return httpGet('v1/news');
    });
};
