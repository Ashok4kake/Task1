import { StyleSheet,Text,TextInput,View} from "react-native";
import React,{useState} from "react";
import { RadioButton } from "react-native-paper";
import { Dropdown } from 'react-native-element-dropdown';


const App = () =>{
  const [text, setText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [checked, setChecked] = useState('first');

const [selectedOption, setSelectedOption] = useState(null);
const handleSelect = (option) => {
  setSelectedOption(option);
};


return(
  <View style={styles.container}>

          <Text style={styles.text}>
            Let's start by providing <Text style={styles.coloredText}>your personal</Text>{'\n'}
            Details
          </Text>

          <View style={styles.rectangle}>
            
            <Text style={styles.boldText}>Name on your PRAN Card <Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}> 
              <Text style={styles.label}>Occupation<Text style={styles.coloredText}><Text style={styles.asterisk}>*</Text></Text></Text>

            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Income Range <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Educational Qualification<Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Father's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Mother's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>

            <Text style={styles.text}>
            What do you want to print on the card? <Text style={styles.coloredText}></Text>{'\n'}
            </Text>
                           
                
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Material Status <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            
            <View style={styles.rectangle}>
            <Text style={styles.boldText}>Spouse's Name <Text style={styles.coloredText}></Text></Text>
                              <TextInput style={styles.input} onChangeText={newText => setText(newText)}
                                  defaultValue={text}></TextInput>
            </View>
            </View>  
                 

);}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#E6F3FF',
      marginTop: 20,
  },
  asterisk:{
    color:'red',
  },
  text: {
    fontSize: 18,
    color: '#74739E',
    fontWeight: 'bold',
    marginTop: 10
},
coloredText: {
    color: 'red',
    color: '#0F0F5C',
    fontWeight: 'bold',
},
boldText: {
    fontWeight: 'bold',
    marginTop: 5,
    padding: 5,
},
rectangle: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:2,
    marginTop:10,
    borderRadius:5,
}
,
  items:{
    color:'red',
  }
});
export default App;

 
 