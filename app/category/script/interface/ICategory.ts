module Category.Interface {
  export interface ICategory {
       categoryId : number;
       categoryName : string;
   }
   export interface ICategoryList {
     categoryList :Array<ICategory>;
   }
}
