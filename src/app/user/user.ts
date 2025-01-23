type SubsetWithRequired<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;
export type UserSubset = SubsetWithRequired<User, 'id'>;

export interface User {
  name: string,
  age: number,
  id: number,
  avatar?: string
  admin?: boolean
}
