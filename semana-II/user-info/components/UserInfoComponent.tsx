import { View } from "react-native";
import { UserProfile } from "../models/UserProfile";
import UserHeaderComponent from "../components/UserHeaderComponent";
import UserDatailsComponent from "./UserDetailsComponent";

export default function UserInfoComponent(props:UserProfile){
    return(
        <View>
            <UserHeaderComponent nombre={props.nombre} ocupacion={props.ocupacion}></UserHeaderComponent>
            <UserDatailsComponent edad={props.edad} ciudad={props.ciudad}></UserDatailsComponent>
        </View>
    )

}