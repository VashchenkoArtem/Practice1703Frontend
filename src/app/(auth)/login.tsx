
import { AdditionalLinks, LoginForm, WelcomeBlock } from "@modules/auth";
import { useUserContext } from "@modules/auth/context/user";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



export default function LoginScreen() {
    const { user } = useUserContext()
    if (user) return <Redirect href={"/(tabs)/contacts"}/>
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WelcomeBlock />
            <LoginForm />
            <AdditionalLinks
                linkTo="register/step-one"
                text="Don't have an account? "
                linkText="Register now!"
            />
        </SafeAreaView>
    )
}