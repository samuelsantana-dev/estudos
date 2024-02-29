import { ResponseApiOnSucessOrErrorType } from '../../types/response_type';

export default class ResponseOnSucessOrError {
  successOrBadRequest<DataType, ErrType>(data: DataType, codeHttp: number, err: ErrType)
  : ResponseApiOnSucessOrErrorType<DataType, ErrType> {
    return {
      status: true,
      data,
      error: err,
      codeHttp,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  error<ErrType>(error: any): ResponseApiOnSucessOrErrorType<null, ErrType> {
    console.log(error);

    return {
      status: false,
      data: null,
      error,
      codeHttp: 500,
    };
  }
}
