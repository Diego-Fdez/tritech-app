export interface ResponseInterface {
  statusCode: number;
  message: string;
  data: any;
}

export interface ResponseDataInterface {
  id: string;
  formId: string;
  answers: AnswersResponseDataInterface[];
  form: {
    clientId: string;
    client: {
      clientName: string;
    };
  };
  user: {
    id: string;
    fullName: string;
  };
}

export interface AnswersResponseDataInterface {
  id: string;
  createdAt: string;
  answerValue: string;
  question: QuestionResponseDataInterface;
}

export interface QuestionResponseDataInterface {
  id: string;
  typeQuestion: string;
  textQuestion: string;
  order: number;
}

export interface FormatResponseInterface {
  id: string;
  formId: string;
  answers: FormatAnswersResponseInterface[];
  clientId: string;
  clientName: string;
  userName: string;
  userId: string;
}

export interface FormatAnswersResponseInterface {
  answerId: string;
  createdAt: string;
  answerValue: string;
  questionId: string;
  typeQuestion: string;
  textQuestion: string;
  order: number;
}
