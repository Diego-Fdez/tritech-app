import { QuestionInterface } from '../interfaces';

export function checkListSendData(questions: QuestionInterface[]) {
  return questions.map((question: QuestionInterface, index: number) => ({
    typeQuestion: question.type,
    textQuestion: question.text,
    order: index + 1,
    options: question.inputs.map((options) => ({
      optionText: options.value,
    })),
  }));
}
