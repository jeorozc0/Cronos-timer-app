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
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import "react-native-get-random-values";
import { TimerContext } from "../TimerSetsContext";

interface EditProps {
  Name: string;
  setId: string;
}
const EditSetItem = ({ Name, setId }: EditProps) => {
  const [inputSets, setName] = useState(Name);

  const { editTimerSet } = useContext(TimerContext);

  const [modalVisible, setModalVisible] = useState(false);
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
                onChangeText={(text) => setName(text)}
                  value={inputSets}
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
                    editTimerSet({
                      label: inputSets,
                      id: setId,
                      timers: [],
                    });
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>Done</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <TouchableOpacity
        style={styles.touchableButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputContainer: {
    borderWidth: 1, 
    borderColor: 'gray',
    borderRadius: 5, 
    padding: 10,
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
  touchableButton: {
    backgroundColor: "#2296F3",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default EditSetItem;
