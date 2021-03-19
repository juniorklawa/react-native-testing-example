export interface ListProps {
  list: Array<ListItemProps>;
  removeItem: (itemList: ListItemProps) => void;
}

export interface ListItemProps {
  name: string;
  id: number;
}
