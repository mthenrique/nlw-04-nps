class Survey {
  readonly id: string;

  title: string;

  description: string;

  createdAt?: Date;

  private constructor({
    id,
    title,
    description,
    createdAt,
  }: Survey) {
    Object.assign(this, {
      id,
      title,
      description,
      createdAt,
    });
  }
}

export default Survey;
