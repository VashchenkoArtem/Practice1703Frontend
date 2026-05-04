import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { SERVER } from '@shared/constants';

export const BaseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: `http://${SERVER.host}:${SERVER.port}/api`,
		prepareHeaders: async (headers) => {
			const token = await AsyncStorage.getItem("token");

			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
		},
	}),
	endpoints: () => ({}),
});