/* eslint-disable prettier/prettier */
export type PaginationParameters = {
  limit: number;
  page: number;
};

export type ResponsePaginationParameters = PaginationParameters & {
  count: number;
};
