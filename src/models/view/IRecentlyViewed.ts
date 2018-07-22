import { ILocation } from "../../types";

export interface IRecentItem {
  name: string,
  location: ILocation;
  onSelect: (value:ILocation, name: string) => void;
}

export interface IRecentlyViewed {
  items: IRecentItem[];
  toggleList: () => void;
  onSelect: (location:ILocation, name: string) => void;
  showList: boolean;
}