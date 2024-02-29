/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;

      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;

      SECRET_KEY_PIPETECH: string;
      SECRET_KEY_PIPETECH_TOKEN_LIFE: string;
      SECRET_RESET_PASSWORD: string;

      USER_EMAIL_ACCESS_KEY: string;
      PASS_ACCESS_KEY: string;
      EMAIL_NO_REPLY: string;
      EMAIL_SUPPORT: string;
      HOST_ACCESS_EMAIL: string;

      EXPIRES_IN_TOKEN_RESET_PASSWORD: string;
      EXPIRES_IN_TOKEN: string;
      EXPIRES_IN_TOKEN_REFRESH: string;
      CACHE_LIMIT: string;

      SECRET_CHANGE_EMAIL: string;
      EXPIRES_IN_TOKEN_CHANGE_EMAIL: string;

      URL_FRONTEND: string;
    }
  }
}

export {};
