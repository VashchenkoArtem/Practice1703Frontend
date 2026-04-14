import { BaseApi } from "@shared/api/baseApi";
import { ILogin, IUser } from "@shared/types/user.types";
import { IRegister, LoginResponse } from "./api.types";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const userApi = BaseApi.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation<LoginResponse, IRegister>({
			query: (body) => {
				const formData = new FormData();
				formData.append("email", body.email);
				formData.append("username", body.username);
				formData.append("password", body.password);
				formData.append("name", body.name);
				formData.append("surname", body.surname);
				formData.append("avatar", {
					uri: body.avatar,
					name: "avatar.jpg",
					type: "image/jpeg",
				} as unknown as Blob);
				return {
					url: "/users/register",
					method: "POST",
					body: formData,
				};
			},
			async onCacheEntryAdded(arg, api) {
				const { data } = await api.cacheDataLoaded;
				AsyncStorage.setItem("token", data.token);
			},
		}),
		login: builder.mutation<LoginResponse, ILogin>({
			query: (body) => ({
				url: "/users/login",
				method: "POST",
				body: body,
			}),
			async onCacheEntryAdded(arg, api) {
				const { data } = await api.cacheDataLoaded;
				await AsyncStorage.setItem("token", data.token);
			},
		}),
		me: builder.query<IUser, void>({
			query: () => "/users/me",

			
		}),
	}),
	overrideExisting: false,
});
export const {
	useLoginMutation,
	useRegisterMutation,
	useMeQuery,
} = userApi;
