import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetPeople, RoiGetPerson } from '../utils/Api';
import { PopupOk, PopupOkCancel } from "../utils/Popup";

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextLabel } from "../components/StyledText";
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { error } from 'webpack-dev-server/lib/utils/colors';


export default function ViewPersonScreen(props) {
  // set up a default Person object
const personTemplate={
  id: 0,
  name:"DEFAULT",
  phone:"",
  departmentId:null,
  street:"",
  city:"",
  state:"",
  zip:"",
  country:"",
  department:null,

}
  // State - data for this component

  // Store person in state
  const [person, setPerson] = React.useState(personTemplate)

  // Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
  // "effectful" code is something that triggers a UI re-render
  React.useEffect(refreshPerson, [])

  // Refresh the person list data - call the API
  function refreshPerson() {
  // Get person ID past two this is screen (viaa props)
  const id= props.route.params.id

    // Get data from the API
    RoiGetPerson(id)
      // Success
      .then(data => {
         //Store results in state variable( if data returned)
        if (data) setPerson(data)
      })
       //Error
      .catch(error => {
        //Display error and navigate back to ViewPeople screen 
        PopupOk("API Error", "Could not get person from the server")
        //OPTIONAL: Navigate back to ViewPeople screen
        props.navigation.navigate("ViewPeople")
      })

  }

  function showEditPerson() {
    
props.navigation.navigate("EditPerson", {id:person.id})

  }

//Delete Person
/** 
* Delete a person from the database.
* @param {person} person The person to delete.
*/
  function deleteperson(){
  // check if person Should be deleted (confirm the user)
  PopupOkCancel(
    //Title and message
    "Delete person?", 
  `Are you sure you want to delete this ${person.name}?`,
   // ok - delete the person
()=> {

   //Delete the person using the API
RoiDeletePerson(person.id)
.then(data => {


    // Show confirmation person has been deleted
    PopupOk("Person deleted", `${person.name} has been deleted.`)

    // Go back to the person list
props.navigation.replace("Root",{screen:"People"})
  })
    .catch(error => {})
    
    //Display error to user
    PopupOk("Error", error)



},
  // cancel - do nothing
  ()=> {

  },
)
  }




  // Display all people data
  function displayPeople() {
    
    // Loop through each item and turn into appropriate output and then return the result
    return people.map(p => {

      // Create an output view for each item
      return (
        <View key={p.id} style={Styles.personListItem}>
          <View style={Styles.personListItemDetails}>
          <TextParagraph style={Styles.personListItemName}>{p.name}</TextParagraph>
          <TextParagraph style={Styles.personListItemText}>{p.department ? p.department.name :"---"}</TextParagraph>
          <TextParagraph style={Styles.personListItemText}>{p.phone}</TextParagraph>
          </View>
          <View style={Styles.personListItemButtons}>
          <MyButton 
          text="Info"
          type="major"      // default*|major|minor
          size="small"      // small|medium*|large
          //onPress={showAddPerson}
          buttonstyle={Styles.personListItemButton}
          textstyle={Styles.personListItemButtonText}
          />
          <MyButton 
          text="Edit"
          type="default"      // default*|major|minor
          size="small"      // small|medium*|large
          //onPress={showAddPerson}
          buttonstyle={Styles.personListItemButton}
          textstyle={Styles.personListItemButtonText}
        />
        <MyButton 
          text="Delete"
          type="minor"      // default*|major|minor
          size="small"      // small|medium*|large
          onPress={()=> {deleteperson(p)}}
          buttonstyle={Styles.personListItemButton}
          textstyle={Styles.personListItemButtonText}
        />

          </View>
        </View>
      )

    })
    
  }


  // Main output of the screen component
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      
     
      
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
          
        <TextH1 style={{marginTop:0}}>Person: {person.name}</TextH1>
        <View style={Styles.form}>
          
          <View style={Styles.fieldSet}>
             <TextParagraph style={Styles.legend}>Details</TextParagraph>

             <View style={Styles.formRow}>
              <TextLabel>Name:</TextLabel>
              <TextParagraph>{person.name}</TextParagraph>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>Phone:</TextLabel>
              <TextParagraph>{person.phone}</TextParagraph>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>Department:</TextLabel>
              <TextParagraph>{person.department ? person.department.name : "<--->"}</TextParagraph>
             </View>
          </View>

          <View style={Styles.fieldSet}>
          <TextParagraph style={Styles.legend}>Address</TextParagraph>

          <View style={Styles.formRow}>
              <TextLabel>Street:</TextLabel>
              <TextParagraph>{person.street}</TextParagraph>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>City:</TextLabel>
              <TextParagraph>{person.city}</TextParagraph>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>State:</TextLabel>
              <TextParagraph>{person.state}</TextParagraph>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>ZIP:</TextLabel>
              <TextParagraph>{person.zip}</TextParagraph>
             </View>
             <View style={Styles.formRow}>
              <TextLabel>Country:</TextLabel>
              <TextParagraph>{person.country}</TextParagraph>
             </View>
          
          
          </View>

          </View>
          {/*Buttons*/}
          <View style={[Styles.personButtonContainer, {borderBottomWidth:0, marginBottom:0}]}>
          <MyButton
            text="Edit"
            type="major"      // default*|major|minor
            size="medium"      // small|medium*|large
            onPress={showEditPerson}
           
          />
          <MyButton
            text="Delete"
            type="minor"      // default*|major|minor
            size="medium"      // small|medium*|large
            onPress={deleteperson}
      
          />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}