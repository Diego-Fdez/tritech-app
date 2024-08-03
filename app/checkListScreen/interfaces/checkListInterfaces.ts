import { ReactNode } from 'react';

export interface QuestionInterface {
  id: string;
  text: string;
  type: string;
  inputs: InputsInterface[];
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
  setClient: React.Dispatch<React.SetStateAction<object>>;
  handleInputQuestionChange: (questionId: string, value: string) => void;
  handleQuestionTypeChange: (questionId: string, type: string) => void;
  handleDeleteInput: (questionId: string, inputId: string) => void;
  handleDeleteQuestion: (questionId: string) => void;
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
