export const available_path:any = {all:["novel","book","comics"],
  book:["technology_book","economy_book","history_book"],
  comics:["manga","manhua","manhwa"]};

export const back_path:{[key:string]:string} = { novel: "all", book: "all", comics: "all", technology_book: "book", economy_book: "book", history_book: "book", manga: "comics", manhua: "comics", manhwa: "comics" };
// // Static gen with code: 
// // for(const [key, value] of Object.entries(available_path)) {
// //   	for (const path of value)
// //     back_path[path]=key; }

// // Static gen:
// // let available_category = [];
// // Object.values(available_path).forEach((v)=>p=p.concat(v));
export const available_category = ["fill", "all", "novel", "book", "comics", "technology_book", "economy_book", "history_book", "manga", "manhua", "manhwa"];
