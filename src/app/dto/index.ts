export interface HttpResponse<T> extends HttpResponseBase {
  content: T;
}

export interface HttpResponseBase {
  totalCount?: number;
  totalPage?: number;
  size?: number;
  page?: number;
  last?: boolean;
}

export interface HttpRequestBody {
  pages: number;
  size: number;
  id?: string;
  keywords?: string;
  latitude?: string;
  longitude?: string;
  distance?: number;
  identity?: string;
  identityType?: string;
  marketName?: string;
}

export enum FilterType {}
