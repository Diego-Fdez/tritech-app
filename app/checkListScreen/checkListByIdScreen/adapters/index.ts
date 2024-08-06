import {
  AnswerMockInterface,
  CheckListDataResponseInterface,
  OptionsDataResponseInterface,
  QuestionsDataResponseInterface,
} from '../interfaces/checkListByIdInterfaces';

export function checkListDataAdapter(form: CheckListDataResponseInterface[]) {
  return form?.map((item: CheckListDataResponseInterface) => ({
    clientName: item?.client?.clientName,
    createdAt: item?.createdAt,
    createdBy: item?.createdBy?.fullName,
    description: item?.description ?? '',
    title: item?.title,
    id: item?.id,
    questions: item?.questions?.map(
      (question: QuestionsDataResponseInterface) => ({
        id: question?.id,
        typeQuestion: question?.typeQuestion,
        textQuestion: question?.textQuestion,
        order: question?.order,
        options: question?.options?.map(
          (option: OptionsDataResponseInterface) => ({
            id: option?.id,
            optionText: option?.optionText,
            questionId: option?.questionId,
          })
        ),
      })
    ),
  }));
}

export function checkListBodyAdapter(answers: AnswerMockInterface[]) {
  const cleanedAnswers = answers.filter(
    (answer) => answer.questionId.length > 0
  );

  return cleanedAnswers?.map((answer: AnswerMockInterface) => ({
    questionId: answer?.questionId,
    answerValue: answer?.answerValue,
  }));
}
