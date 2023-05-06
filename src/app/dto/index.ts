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

// Project Interfaces

export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: {
    Wood?: number;
    Gold?: number;
    Food?: number;
  } | null;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight: number;
  hit_points: number;
  range?: number | string;
  attack?: number;
  armor: string;
  attack_bonus?: string[];
  accuracy?: string;
}

export interface Units {
  units: Unit[];
}
