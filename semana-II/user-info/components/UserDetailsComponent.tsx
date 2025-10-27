import { View, Text, StyleSheet } from "react-native";
import { UserDetails } from '../models/UserDetails';

export default function UserDatailsComponent(props: UserDetails){
    return(
        <View>
            <Text>Edad: {props.edad}</Text>
            <Text>Ciudad: {props.ciudad}</Text>
        </View>
    )
}