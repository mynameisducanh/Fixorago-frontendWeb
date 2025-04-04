import { ofetch } from 'ofetch';
import { ACCESS_TOKEN } from '~/constants';

export default defineNuxtPlugin((_nuxtApp) => {
  const accessToken = useCookie<string>(ACCESS_TOKEN); // Use string type directly
  const config = useRuntimeConfig();

  const instance = ofetch.create({
    baseURL: config.public.apiBase,
    headers: {
      Accept: 'application/json',
    },
    retry: 1,
    retryStatusCodes: [401],
    retryDelay: 500,

    onRequest({ options }: any) {
      // Check if accessToken exists and set it in headers
      if (accessToken.value) {
        options.headers.Authorization = `Bearer ${accessToken.value}`; // Set token
      }
    },

    async onResponseError({ response }): Promise<any> {
      // You may want to handle specific status codes here
      if (response.status === 401) {
        // Handle token expiration, e.g., refresh token logic can go here
        // Optionally redirect to login or refresh the token
      }
      return Promise.reject(response); // Reject with the response
    },
  });

  return {
    provide: {
      ofetch: instance,
    },
  };
});
