import { View, FlatList,Text } from "react-native";
import { myStyle } from "./style/myStyle";
import Person from "./components/person";
import { useState } from "react";
export default function App() {
  const [data , setData] = useState([
    {id:1,name:"gong",age:30},
    {id:2,name:"hhj",age:14},
    {id:3,name:"dadad",age:20}
  ])
  return (
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({item})=>(
            <Person item={item}/>
        )}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={<Text style={{alignSelf:"center",fontSize:25,fontWeight:"bold"}}>ข้อมูลประชากร</Text>}
        ListEmptyComponent={<Text style={{alignSelf:"center",fontSize:25}}>No data kub</Text>}
      />
    </View>
  );
}
