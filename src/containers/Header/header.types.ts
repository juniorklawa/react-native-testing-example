export interface HeaderProps {
  showValue: string;
  updateItem: (value: string) => void;
  clearList: () => void;
  onAdd: (value: string) => void;
}
