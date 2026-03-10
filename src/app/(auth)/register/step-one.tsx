import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

export default function StepOne(){
    return(
        <SafeAreaView>
            <Link href={"/login"}>
            Link to login
            </Link>
        </SafeAreaView>
    )
}