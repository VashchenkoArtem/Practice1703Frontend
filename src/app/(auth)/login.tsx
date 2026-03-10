import { AdditionalLinks, LoginForm, WelcomeBlock } from "@modules/auth";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LoginScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <WelcomeBlock />
            <LoginForm />
            <AdditionalLinks
                text="Don't have an account? "
                linkText="Register now!"
            />
        </SafeAreaView>
    )
}