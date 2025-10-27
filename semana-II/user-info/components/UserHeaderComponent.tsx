import { View, Text, StyleSheet } from "react-native";
import { UserHeader } from "../models/UserHeader";

export default function UserHeaderProfile(props: UserHeader){
    return (
        <View>
            <Text>Nombre: {props.nombre}</Text>
            <Text>Ocupacion: {props.ocupacion}</Text>
        </View>
    )
}

