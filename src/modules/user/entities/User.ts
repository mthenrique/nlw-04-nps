class User {
  readonly id: string
  name: string
  email: string
  createdAt?: Date

  private constructor({
    id,
    name,
    email,
    createdAt
  }: User) {
    Object.assign(this, {
      id,
      name,
      email,
      createdAt
    })
  }
}

export default User