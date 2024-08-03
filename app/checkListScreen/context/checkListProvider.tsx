import { useState, createContext, useContext } from 'react';
import { randomIdGenerator } from '@/utils';
import {
  CheckListContextType,
  CheckListProviderProps,
  QuestionInterface,
} from '../interfaces';

const CheckListContext = createContext<CheckListContextType | undefined>(
  undefined
);

const CheckListProvider = ({ children }: CheckListProviderProps) => {
  const [client, setClient] = useState<object>({});
  const [questions, setQuestions] = useState<QuestionInterface[]>([
    {
      id: randomIdGenerator(),
      text: '',
      type: 'Párrafo',
      inputs: [{ id: randomIdGenerator(), value: '' }],
    },
  ]);

  //function to add a new question
  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: randomIdGenerator(),
        text: '',
        type: 'Párrafo',
        inputs: [{ id: randomIdGenerator(), value: '' }],
      },
    ]);
  };

  //function to delete a question by ID
  const handleDeleteQuestion = (questionId: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.length > 1
        ? prevQuestions.filter((question) => question.id !== questionId)
        : prevQuestions
    );
  };

  //function to add a new input option
  const handleAddInput = (questionId: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              inputs: [
                ...question.inputs,
                { id: randomIdGenerator(), value: '' },
              ],
            }
          : question
      )
    );
  };

  //function to delete a input by ID
  const handleDeleteInput = (questionId: string, inputId: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              inputs:
                question.inputs.length > 1
                  ? question.inputs.filter((input) => input.id !== inputId)
                  : question.inputs,
            }
          : question
      )
    );
  };

  //function to get the input question value
  const handleInputQuestionChange = (questionId: string, value: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId ? { ...question, text: value } : question
      )
    );
  };

  //function to get the input option value
  const handleInputChange = (
    questionId: string,
    inputId: string,
    questionType: string,
    text: string
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              type: questionType,
              inputs: question.inputs.map((input) =>
                input.id === inputId ? { ...input, value: text } : input
              ),
            }
          : question
      )
    );
  };

  //function to change the question type
  const handleQuestionTypeChange = (questionId: string, type: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId ? { ...question, type } : question
      )
    );
  };

  const value = {
    handleAddQuestion,
    questions,
    handleAddInput,
    handleInputChange,
    setClient,
    handleInputQuestionChange,
    handleQuestionTypeChange,
    handleDeleteInput,
    handleDeleteQuestion,
  };

  return (
    <CheckListContext.Provider value={value}>
      {children}
    </CheckListContext.Provider>
  );
};

export { CheckListProvider };

export const useCheckList = () => {
  const context = useContext(CheckListContext);
  if (context === undefined) {
    throw new Error('useCheckList must be used within a CheckListProvider');
  }
  return context;
};

export default CheckListContext;
