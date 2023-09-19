import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//stack 
const HomeStack = createNativeStackNavigator(); 

function HomeStackGroup() {
    return ( 
        <HomeStack.Navigator> 
            <HomeStack.Screen /> 
        </HomeStack.Navigator>
    );
}

//Tab
const Tab = createBottomTabNavigator(); 

function TabGroup(){ 
    return(
        <Tab.Navigator
        screenOptions={({route, navigation}) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName; 
                if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Chat") { 
                    iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
                } else if (route.name === "Settings") { 
                    iconName = focused ? "settings" : "settings-outline" ;
                }

                return <Ionicons name={iconName} size = {size} color={color} /> 
            },
            tabBarActiveTintColor: "#f57c00",
            tabBarInactiveTintColor: "black",
        })}>
            <Tab.Screen name ="Home" component={Home}/>
            <Tab.Screen name ="Chat" component={Chat}/>
            <Tab.Screen name ="Settings" component={Settings}
            />
        </Tab.Navigator>

    );
}

export default function Navigation() { 
    return (
        <NavigationContainer>
            <TabGroup /> 
        </NavigationContainer>
    );
}

