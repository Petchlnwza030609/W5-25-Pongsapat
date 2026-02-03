import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"


export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title:"หน้าแรก",
                    tabBarIcon:() => (
                        <Ionicons name="home" size={20} color="black"/>
                    )
                }}
            />


                <Tabs.Screen 
                name="add"
                options={{
                    title:"กรอกข้อมูล",
                    tabBarIcon:() => (
                        <Ionicons name="add" size={30} color="black"/>
                    )
                }}
            />
                
        </Tabs>
    )
}
