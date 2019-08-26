export interface Menu {
  name: string;
  iconClass?: string;
  active: boolean;
  submenu?: { name: string; url: string }[];
  clickAction?: (e: Event, menu: Menu) => void;
}
