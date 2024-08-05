import { ReactNode } from 'react';

export interface QuestionInterface {
  id: string;
  text: string;
  type: string;
  inputs: InputsInterface[];
}

export interface ClientInterface {
  id: string;
  clientName: string;
}

export interface CheckListContextType {
  handleAddQuestion: () => void;
  questions: QuestionInterface[];
  handleAddInput: (questionId: string) => void;
  handleInputChange: (
    questionId: string,
    inputId: string,
    questionType: string,
    text: string
  ) => void;
  setClient: React.Dispatch<React.SetStateAction<ClientInterface>>;
  handleInputQuestionChange: (questionId: string, value: string) => void;
  handleQuestionTypeChange: (questionId: string, type: string) => void;
  handleDeleteInput: (questionId: string, inputId: string) => void;
  handleDeleteQuestion: (questionId: string) => void;
  title: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  mutation: any;
}

export interface CheckListProviderProps {
  children: ReactNode;
}

export interface InputsInterface {
  id: string;
  value: string;
}

export interface QuestionsViewProps {
  index: number;
  questionId: string;
  questionInputs: InputsInterface[];
  questionType: string;
}

export interface FormResponse {
  message: string;
  statusCode: number;
}

export enum QuestionTypes {
  SINGLE = 'Selección única',
  MULTIPLE = 'Selección multiple',
  TEXT = 'Párrafo',
}
