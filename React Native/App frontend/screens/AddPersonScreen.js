import * as React from 'react';
import { View, ScrollView, TextInput,Picker } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {showMessage} from "react-native-flash-message";
import NetInfo from "@react-native-community/netinfo";

// Import helper code
import Settings from '../constants/Settings';
import {  RoiAddPerson, RoiGetDepartments, RoiGetPerson, RoiUpdatePerson } from '../utils/Api';
import { PopupOk, PopupOkCancel } from "../utils/Popup";

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextLabel } from "../components/StyledText";
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';


export default function AddPersonScreen(props) {

  // State - data for this component

  // Store person in state

  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [departmentId, setDepartmentId] = React.useState(0) // 0="General department"
  const [street, setStreet] = React.useState("")
  const [city, setCity] = React.useState("")
  const [state, setState] = React.useState("")
  const [zip, setZip] = React.useState("")
  const [country, setCountry] = React.useState("")
  // stored the original name of the person separately (for displaying in the title)
 const [nameOriginal, setNameOriginal] = React.useState("")
 // Store list of departments (picker/dropdown list)
 const [departments, setDepartments] = React.useState([])

  // Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
  // "effectful" code is something that triggers a UI re-render
  React.useEffect(refreshDepartments, [])

    // Refresh the departments data - call the API
    function refreshDepartments() {

      // Get data from the API
      RoiGetDepartments()
        // Success
        .then(data => {
          // Store results in state variable
          setDepartments(data)
        })
        // Error
        .catch(error => {
          PopupOk("API Error", "Could not get departments from the server")
        })
  
    }

  // Refresh the person list data - call the API


  function showViewPeople() {
    
    props.navigation.replace("Root",{screen:"People"})

  }
  // Display flash message banner if offline
function displayConnectionMessage(){

  // Get network connection status
  NetInfo.fetch().then(status =>{
    // Check if not connected to the Internet
    if( !status.isConnected){
      // Display the flash message
      showMessage({
        message:"No internet connection",
        description:"you can not add a new person until  \nyouhave an active Internet connection .",
        type:"danger",
        duration:5000,
        floating:true,
        icon:"danger",
        autoHide:false,
      })
    }
  })
}

//Edit Person
/** 
* Add a person from the database.
*/
  async function addPerson(){
     // Display flash message when there's a connection issue
     displayConnectionMessage()

    // Cancel if no internet connection
    if (! (await NetInfo.fetch()).isConnected) return
    //Add the person using the API
RoiAddPerson(name,phone,departmentId,street,city,state,zip,country)
.then(data => {


    // Show confirmation person has been added
    PopupOk("Person added", `${name} has been added.`)

    // Go back to the person list(ViewPeople)
showViewPeople()
  })
    .catch(error => {
    
    //Display error to user
    PopupOk("Error", error)



})
}
// Display the department picker list items
function displayDepartmentListItems(){

  // Loop through each item and turn into a <Picker.Item>
  return departments.map(d => {
    return <Picker.Item key={d.id} label={d.name} value={d.id}/>
  })
}

  // Main output of the screen component
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      
     
      
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
          
        <TextH1 style={{marginTop:0}}>Add new person</TextH1>
        <View style={Styles.form}>
          
          <View style={Styles.fieldSet}>
             <TextParagraph style={Styles.legend}>Details</TextParagraph>

             <View style={Styles.formRow}>
              <TextLabel>Name:</TextLabel>
              <TextInput value={name} onChangeText={setName} style={Styles.textInput}></TextInput>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>Phone:</TextLabel>
              <TextInput value={phone} onChangeText={setPhone} style={Styles.textInput}></TextInput>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>Department:</TextLabel>
              {/*<TextInput value={departmentId} onChangeText={setDepartmentId} style={Styles.textInput}></TextInput>*/}
              <Picker selectedValue={departmentId} onValueChange={setDepartmentId} style={Styles.picker} itemStyle={Styles.pickerItem}>
               {displayDepartmentListItems()}
              </Picker>
             </View>
          </View>

          <View style={Styles.fieldSet}>
          <TextParagraph style={Styles.legend}>Address</TextParagraph>

          <View style={Styles.formRow}>
              <TextLabel>Street:</TextLabel>
              <TextInput value={street} onChangeText={setStreet} style={Styles.textInput}></TextInput>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>City:</TextLabel>
              <TextInput value={city} onChangeText={setCity} style={Styles.textInput}></TextInput>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>State:</TextLabel>
              <TextInput value={state} onChangeText={setState} style={Styles.textInput}></TextInput>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>ZIP:</TextLabel>
              <TextInput value={zip} onChangeText={setZip} style={Styles.textInput}></TextInput>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>Country:</TextLabel>
              <TextInput value={country} onChangeText={setCountry} style={Styles.textInput}></TextInput>
             </View>
          
          
          </View>

          </View>
          {/*Buttons*/}
          <View style={[Styles.personButtonContainer, {borderBottomWidth:0, marginBottom:0}]}>
          <MyButton
            text="Add"
            type="major"      // default*|major|minor
            size="medium"      // small|medium*|large
            onPress={addPerson}
           
          />
          <MyButton
            text="Cancel"
            type="minor"      // default*|major|minor
            size="medium"      // small|medium*|large
            onPress={showViewPeople}
      
          />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}