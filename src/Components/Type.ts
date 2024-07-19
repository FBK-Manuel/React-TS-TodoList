export interface dropdownType {
  filtered: string;
  setFiltered: (value: string) => void;
}

export type bodyProps = {
  ShowItem: todoArray[];
  onDelete: (idToDelete: number) => void;
};

export type contentProps = {
  showItem: todoArray[];

  onDelete: (idToDelete: number) => void;
};

export type searchInputProp = {
  onSubmit: (query: string) => void;
};

export type todoArray = {
  id: number;
  text: string;
  category: string;
};

export const dataArray: todoArray[] = [
  {
    id: 1,
    text: "this is a todo list and this my first post",
    category: "Complete",
  },
  {
    id: 2,
    text: "this is my todo list and my second post",
    category: "Incomplete",
  },
  {
    id: 3,
    text: "this is my todo list and my third post and my awesome post",
    category: "Complete",
  },
  {
    id: 4,
    text: "this is my todo list and fourth post and good work to do",
    category: "Incomplete",
  },
  {
    id: 5,
    text: "this is my first post and my today list and it great doing list",
    category: "Complete",
  },
  {
    id: 6,
    text: "i love to tho react works and i won go see what is next",
    category: "Incomplete",
  },
];

// export const dropdown: dropdownType[] = [
//   {
//     id: 1,
//     name: "All",
//   },
//   {
//     id: 2,
//     name: "Complete",
//   },
//   {
//     id: 3,
//     name: "Incomplete",
//   },
// ];

export type inputModalPropsType = {
  isOpen: boolean;
  closeModal: () => void;
  openModal?: () => void;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
