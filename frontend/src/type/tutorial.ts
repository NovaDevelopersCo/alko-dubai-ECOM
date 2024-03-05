export type Tutorial = {
    _id?: string
    title?: string
    description?: string
    published?: string
    createdAt?: Date
    updatedAt?: Date
  };
  
  export type Tutorials = {
    id: number
    title: string
    description: string
    image?: string,
    category: string,
    price:number,
    oldPrice?:number,
    viewsCount:number,
    sale?:boolean,
    soldOut?:boolean,
    createdAt?: Date
    updatedAt?: Date
  };
  
  
  export interface TutorialStateProps {
    tutorials: Tutorials[];
    tutorial: Tutorial | null;
    error: object | string | null;
    success: object | string | null;
    isLoading: boolean
  }
  
  export interface DefaultRootStateProps {
    tutorial: TutorialStateProps;
  }
   