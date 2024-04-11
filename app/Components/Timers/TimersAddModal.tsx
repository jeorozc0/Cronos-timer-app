import React, { useContext } from "react";
import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Modal,
  Alert,
  StatusBar,
  Pressable,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { TimerContext } from "../TimerSetsContext";

interface Props {
  parentId: string;
}
const AddTimers = ({ parentId }: Props) => {
  const [inputName, setName] = useState("");
  const [inputMinutes, setMinutes] = useState("");
  const [inputSeconds, setSeconds] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { addTimer } = useContext(TimerContext);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.inputContainer}>
                <TextInput
                  autoFocus={true}
                  placeholder="Enter text"
                  placeholderTextColor="#000"
                  onChangeText={(text) => setName(text)}
                  value={inputName}
                  style={{ height: 40, width: 100, textAlign: "center" }}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter minutes"
                  placeholderTextColor="#000"
                  keyboardType="numeric"
                  onChangeText={(text) => setMinutes(text)}
                  value={inputMinutes}
                  style={{ height: 40, width: 100, textAlign: "center" }}
                  maxLength={2}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Enter seconds"
                  placeholderTextColor="#000"
                  keyboardType="numeric"
                  onChangeText={(text) => setSeconds(text)}
                  value={inputSeconds}
                  style={{ height: 40, width: 100, textAlign: "center" }}
                  maxLength={2}
                  
                />
              </View>
              <View style={styles.buttoslView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    addTimer(
                      {
                        title: inputName,
                        minutes: parseInt(inputMinutes),
                        seconds: parseInt(inputSeconds),
                        id: nanoid(),
                        timerIsPaused: true,
                      },
                      parentId,
                    );
                    
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>Create</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Button title="Add Timer" onPress={() => setModalVisible(true)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
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
  buttoslView: {
    paddingTop: 20,
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
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
  viewContainerStyle: {
    gap: 10,
    alignItems: "center",
  },
  addTextStyles: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
    margin: 10,
  },
  textInputItemStyle: {
    fontStyle: "italic",
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderColor: "black",
    color: "black",
    fontSize: 20,
    maxHeight: 100,
    width: "90%",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 10,
  },
});

export default AddTimers;
