import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const IMAGE_HEIGHT = 100;

const ImageWithText = ({ image, text, onPress, style, riga }) => (
  <View style={style}>
    <TouchableOpacity onPress={onPress}>
      <Image
        source={image}
        style={{ width: windowWidth, height: IMAGE_HEIGHT }}
      />
      <View style={{ position: "absolute", top: Number(riga), left: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function ValvoleScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [valvole, setValvole] = useState([
    {
      source: require("../images/Cucina.jpg"),
      key: "0",
      text: "Cucina",
      batterie: [],
    },
    {
      source: require("../images/Cucina.jpg"),
      key: "1",
      text: "Cameretta",
      batterie: [],
    },
    {
      source: require("../images/Cucina.jpg"),
      key: "2",
      text: "Bagno giù",
      batterie: [],
    },
    {
      source: require("../images/Cucina.jpg"),
      key: "3",
      text: "Camera da letto",
      batterie: [],
    },
    {
      source: require("../images/Cucina.jpg"),
      key: "4",
      text: "Entrata",
      batterie: [],
    },
    {
      source: require("../images/Cucina.jpg"),
      key: "5",
      text: "Bagno Mansarda",
      batterie: [],
    },
    {
      source: require("../images/Cucina.jpg"),
      key: "6",
      text: "Mansarda Camera",
      batterie: [],
    },
  ]);
  const [nomeNuovaValvola, onChangeText] = React.useState("");
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ flex: 1 }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <TextInput
            style={{
              fontSize: 20,
              color: "black",
              width: 200,
              height: 50,
              borderWidth: 2,
              borderColor: "black",
              textAlign: "center",
            }}
            placeholder="Nome"
            onChangeText={(text) => onChangeText(text)}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              console.log("Aggiunto");
              setValvole(
                valvole.concat({
                  source: require("../images/Cucina.jpg"),
                  key: valvole.length + 1,
                  text: nomeNuovaValvola,
                  batterie: [],
                })
              );
            }}
          >
            <Text
              style={{
                fontSize: 20,
                borderWidth: 2,
                backgroundColor: "black",
                color: "white",
                borderColor: "white",
              }}
            >
              Aggiungi valvola
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View>
        {/*Header*/}
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {valvole.map((valvola) => (
          <ImageWithText
            key={valvola.key}
            style={{
              width: windowWidth,
            }}
            riga={valvola.key}
            image={valvola.source}
            text={valvola.text}
            onPress={() => {
              valvola.batterie.push(new Date());
              console.log(valvole);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
