export class GetItemsFilterDto {
  search: string;
  price: string;
  popularity: boolean = false;
  news: boolean = false;
}
