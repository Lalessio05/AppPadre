import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const IMAGE_HEIGHT = 100;

const valvole = [
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
];

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
  return (
    <View>
        <View>
            {/*Header*/}
            <TouchableOpacity onPress={() =>{
                navigation.navigate("Aggiunta")
            }}><Text>+</Text></TouchableOpacity>
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
            console.log("Batterie cambiate.")
            if (valvola.batterie.length >= 2) {
              console.log("Sono passati " + 
                (valvola.batterie[valvola.batterie.length - 1] -
                  valvola.batterie[valvola.batterie.length - 2]) /
                  (1000 * 60 * 60) + " giorni."
              );
            }
          }}
        />
      ))}
    </ScrollView>
    </View>
  );
}
