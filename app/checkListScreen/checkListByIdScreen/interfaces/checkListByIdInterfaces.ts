export interface CheckListDataResponseInterface {
  id: string;
  client: { clientName: string };
  title: string;
  description?: string;
  createdAt: string;
  createdBy: { fullName: string };
  questions: QuestionsDataResponseInterface[];
}

export interface QuestionsDataResponseInterface {
  id: string;
  typeQuestion: string;
  textQuestion: string;
  order: number;
  options: OptionsDataResponseInterface[];
}

export interface OptionsDataResponseInterface {
  id: string;
  optionText: string;
  questionId: string;
}

export interface CheckListResponseInterface {
  data: CheckListDataResponseInterface[];
  message: string;
  statusCode: number;
}

export interface AdaptedCheckListResponse {
  id: string;
  clientName: string;
  title: string;
  description?: string;
  createdAt: string;
  createdBy: string;
  questions: QuestionsDataResponseInterface[];
}
