export interface IDateFormat {
  format: string
}

export interface IDate {
  day?: number;
  month?: number;
  year?: number;
  unix?: number;
  getFormattedDate?(format: IDateFormat): string;
}

