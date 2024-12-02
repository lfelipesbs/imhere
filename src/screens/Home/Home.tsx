import React from "react";
import { Text, View } from "react-native";
import { homeStyles } from "./Home.styles";

const Home = () => {
    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.eventName}>Nome do evento</Text>
            <Text style={homeStyles.eventDate}>Sexta, 2 de Dezembro de 2024</Text>
        </View>
    );
};

export default Home;