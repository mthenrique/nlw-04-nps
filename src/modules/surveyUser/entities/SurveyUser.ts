class SurveyUser {
  readonly id: string;

  survey_id: string;

  user_id: string;

  value: number;

  createdAt?: Date;

  private constructor({
    id,
    survey_id,
    user_id,
    value,
    createdAt,
  }: Survey) {
    Object.assign(this, {
      id,
      survey_id,
      user_id,
      value,
      createdAt,
    });
  }
}

export default SurveyUser;
