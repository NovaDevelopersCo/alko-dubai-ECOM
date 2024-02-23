export class GetItemsFilterDto {
  readonly search: string;
  readonly price: string;
  readonly popularity: boolean = false;
  readonly news: boolean = false;
}
