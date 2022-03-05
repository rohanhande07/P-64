import * as React from 'react';
import {Text, View, StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './localdb'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
       isSearchedPressed: false,
       word: 'loading....',
       lexicalCategory: '',
       examples: "",
       definition: '',
      };
  }

  getWord = (text) => {
    var text = text.toLowerCase()
    try{
        var word = dictionary[text]["word"];
        var definition = dictionary[text]["definition"]
        var lexicalCategory = dictionary[text]["lexicalCategory"]

      this.setState({
        "word": word,
        "definition": definition,
        "lexicalCategory":lexicalCategory,
        });
    }
    catch(err){
      alert("Sorry. This word is not available for now")
      this.setState({
        'text': '',
        'isSearchPressed': false
      })
    }
      };

  render() {
    return (
      <View>
        <Header
          backgroundColor={'grey'}
          centerComponent={{
            text: 'Pocket Dictionary',

            style: { color: 'white', fontSize:20},
          }}
        />

        <TextInput
          style={styles.inputBox}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              text: text
            });
          }}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.textIn}> Search </Text>{' '}
        </TouchableOpacity>

        <Text style={{ fontSize: 18 , fontWeight:"bold"}}>Word :{this.state.word}</Text>
        <Text style={{ fontSize: 18 , fontWeight:"bold", marginTop:20}}>Definition :{this.state.definition}</Text>
         <Text style={{ fontSize: 18 , fontWeight:"bold", marginTop:20}}>Type :{this.state.lexicalCategory}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'red',
    outline: 'none',
  },
  searchButton: {
    width: '40%',
    height: 50,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'red',
    backgroundColor: 'white'
  },
  textIn: {
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
