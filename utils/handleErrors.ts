import { AxiosError } from 'axios';

export interface ErrorResponse {
  errorMessage: string;
  statusCode: number;
  status: string;
}

// function to handle errors
export const handleErrors = (error: AxiosError | any): ErrorResponse | any => {
  if (error.response) {
    // Check if there's a response
    const errorMessage: string =
      error.response.data?.errorMessage ||
      error.response.data?.message ||
      error.message;

    const status: string = error?.response.data?.status || 'FAILED';

    const statusCode: number = error?.response?.data?.statusCode || 500;

    const errorResult: ErrorResponse = {
      errorMessage,
      status,
      statusCode,
    };

    return errorResult;
    // Handle the error message (e.g., display to user)
  } else {
    const errorResult: ErrorResponse = {
      errorMessage: error?.message,
      status: 'FALLÓ',
      statusCode: error?.status || 500,
    };

    return errorResult;
  }
};
