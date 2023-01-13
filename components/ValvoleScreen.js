import React, { useState } from "react";
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

const [valvole,setValvole] = useState ([
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
  return (
    <View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose= {()=> {setValvole([...valvole, {source : "../images/Cucina.jpg", key: valvole.length+1, text: "tbd", batterie: []}])}}
      >
        <TextInput/>
        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
          <Text style={{fontSize:30}}>Ciao</Text>
        </TouchableOpacity>
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
          //foreach (var valvola in valvole)
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
              console.log("Batterie cambiate.");
              if (valvola.batterie.length >= 2) {
                console.log(
                  "Sono passati " +
                    (valvola.batterie[valvola.batterie.length - 1] -
                      valvola.batterie[valvola.batterie.length - 2]) /
                      (1000 * 60 * 60) +
                    " giorni."
                );
              }
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
