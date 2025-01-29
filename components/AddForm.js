import { TextInput,View,Button } from "react-native"
import { myStyle } from "../style/myStyle"
export default function AddForm(){
    return(
        <View>
            <TextInput
            placeholder="ป้อนชื่อประชากร"
            keyboardType="default"
            style={myStyle.input}
            />
            <TextInput
            placeholder="ป้อนอายุประชากร"
            keyboardType="number-pad"
            style={myStyle.input}
            />
            <Button title="เพิ่มข้อมูล"/>
        </View>
    )
}