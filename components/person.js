import { View, Text, TouchableOpacity } from "react-native";
import { myStyle } from "../style/myStyle";
export default function Person({ item ,deleteData}) {
  return (
    <TouchableOpacity onPress={()=>deleteData(item.id)}>
      <View style={myStyle.content}>
        <Text style={myStyle.header}>ชื่อ {item.name} , อายุ {item.age} ปี</Text>
      </View>
    </TouchableOpacity>
  );
}