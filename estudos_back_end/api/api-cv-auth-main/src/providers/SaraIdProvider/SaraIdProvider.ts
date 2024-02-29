import axios from 'axios';
import { ISaraIdProvider } from './ISaraIdProvider';

export function saraIdProvider(): ISaraIdProvider {
  const http = axios.create({
    baseURL: process.env.API_SARA_ID,
    headers: {
      'x-client-id': String(process.env.SARA_ID_CLIENT_ID),
      'x-secret': String(process.env.SARA_ID_SECRET),
    },
  });

  return {
    async authorization(code) {
      try {
        const { data } = await http.post('/v1/auth/authorization', { code });
        return data.user;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },
    async login(email, password) {
      try {
        const { data } = await http.post('/v1/auth/login', { email, password });
        return data.code;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },

    async getUser(email) {
      try {
        const { data } = await http.get('/v1/user', { params: { email } });
        return data;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },

    async createRequestPassword(email, sendEmail) {
      try {
        const { data } = await http.post('/v1/password-recover/request', { email, sendEmail });
        return data;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },

    async resetPassord(payload) {
      try {
        return await http.post('/v1/password-recover/change', { ...payload });
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },

    async getGroups(peopleIds) {
      try {
        const { data } = await http.post('/v1/auxiliary-group', peopleIds.map((person) => ({ cvId: person })));
        return data;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },

    async createUser(name, email, password, sendEmail) {
      try {
        const { data } = await http.post('/v1/sign-up', {
          name, email, password, sendEmail,
        });
        return data.user;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },

    async createInvite(email) {
      try {
        const { data } = await http.post('/v1/invites', { email });
        return data;
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.error('Error ==> ', error?.response?.data || error);
        return null;
      }
    },
  };
}
