import {
  AdaptedCheckListResponse,
  AnswerMockInterface,
} from '../interfaces/checkListByIdInterfaces';

export const CHECKLIST_MOCK: AdaptedCheckListResponse[] = [
  {
    id: '',
    title: '',
    description: '',
    clientName: '',
    createdBy: '',
    createdAt: '',
    questions: [
      {
        id: '',
        typeQuestion: '',
        textQuestion: '',
        order: 1,
        options: [
          {
            id: '',
            optionText: '',
            questionId: '',
          },
        ],
      },
    ],
  },
];

export const ANSWERS_MOCK: AnswerMockInterface[] = [
  {
    questionId: '',
    answerValue: '',
    optionId: '',
    questionType: '',
  },
];
