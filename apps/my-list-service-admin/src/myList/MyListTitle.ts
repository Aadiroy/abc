import { MyList as TMyList } from "../api/myList/MyList";

export const MYLIST_TITLE_FIELD = "id";

export const MyListTitle = (record: TMyList): string => {
  return record.id?.toString() || String(record.id);
};
