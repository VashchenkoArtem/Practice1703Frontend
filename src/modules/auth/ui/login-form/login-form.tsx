import { View } from "react-native";
import { styles } from "./login-form.styles";
import { Button, ICONS, Input } from "@shared/ui";
import { Controller, useForm } from "react-hook-form";
import { ReactNode } from "react";
import { loginValidator } from "@modules/auth/models/lib/login.validation";
import {yupResolver} from "@hookform/resolvers/yup"
interface LoginForm {
	email: string
}


export function LoginForm() {
	const { handleSubmit, control } = useForm<LoginForm>({resolver: yupResolver(loginValidator)})
	function onSubmit (data:LoginForm){
		console.log(data)
	}
	return (
		<View style={styles.container}>
			<View style={styles.formFields}>
				<Controller
					name="email"
					control={control}
					render={({field, fieldState}) => {
						return <Input
							onChangeText={field.onChange}
							placeholder="Your email"
							inputMode="email"
							autoCapitalize="none"
							autoComplete="off"
							autoCorrect={false}
							inputContainerStyle={styles.inputContainer}
							style={styles.input}
							iconLeft={<ICONS.MailIcon />}
							label="Email"
							{...field}
						/>
					}
					} />

			
				
				<Input.Password />
				
			</View>
			<Button onPress={handleSubmit(onSubmit)} title="Login" />
		</View>
	);
}
