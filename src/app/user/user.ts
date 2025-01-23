type SubsetWithRequired<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;
export type UserSubset = SubsetWithRequired<User, 'id'>;

export interface User {
  name: string,
  age: number,
  id?: string,
  avatar?: string
  admin?: boolean
}
