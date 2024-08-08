import {
  AnswersResponseDataInterface,
  FormatResponseInterface,
  ResponseDataInterface,
} from '../interfaces';

export const answersByResponseIdAdapter = (
  answers: ResponseDataInterface
): FormatResponseInterface => {
  return {
    id: answers?.id,
    formId: answers?.formId,
    answers: answers?.answers?.map((answer: AnswersResponseDataInterface) => ({
      answerId: answer?.id,
      createdAt: answer?.createdAt,
      answerValue: answer.answerValue,
      questionId: answer?.question?.id,
      typeQuestion: answer?.question?.typeQuestion,
      textQuestion: answer?.question?.textQuestion,
      order: answer?.question?.order,
    })),
    clientId: answers?.form?.clientId,
    clientName: answers?.form?.client?.clientName,
    userName: answers?.user?.fullName,
    userId: answers?.user?.id,
  };
};
