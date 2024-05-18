import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import FoodListItem from '../components/FoodListItem';



export default function App(){
  return (
    <View style={styles.container}>
      <FoodListItem item={{label:'Pizza', cal:75,brand:'Dominos' }} />
      <FoodListItem item={{label:'Apple', cal:50,brand:'Generic' }} />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        gap:5,
    
    }
});


