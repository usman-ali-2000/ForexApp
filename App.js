import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Index';
import Detail from './src/screens/Detail/Index';
import Card from './src/screens/Card/Index';
import CardDetail from './src/screens/CardDetail/Index';
import Forums from './src/screens/Forums/Index';
import Surveys from './src/screens/Surveys/Index';
import NewsFeed from './src/screens/NewsFeed/Index';
import Settings from './src/screens/Settings/Index';
import PriavcyPolicy from './src/screens/PrivacyPolicy/Index';
import ContactUs from './src/screens/ContactUs/Index';
import FAQs from './src/screens/FAQs/Index';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import AddCategory from './src/screens/AddCategory';
import Product from './src/screens/Product';
import ProductView from './src/screens/ProductView';
import MyOrders from './src/screens/MyOrders';
import BottomNav from './src/navigations/BottomNav';
import 'react-native-gesture-handler';
import SnakeGame from './src/screens/SnakeGame';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import theme from './src/Theme/GlobalTheme';
import { TouchableOpacity } from 'react-native';
import EnterOTP from './src/screens/EnterOTP';
import ForgotPassword from './src/screens/ForgotPassword';
import ForgotOTP from './src/screens/ForgotOTP';
import ChangePassword from './src/screens/ChangePassword';
import Splash from './src/screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Wallet from './src/screens/Wallet';
import Terms from './src/screens/Terms';
import QRScan from './src/screens/QRScan';
import BarcodeDetail from './src/screens/BarcodeDetail';
import ForexHome from './src/screens/ForexHome';
import DataList from './src/screens/DataList';
import Blog from './src/screens/Blog';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const handleLogout = async () => {
  await AsyncStorage.removeItem("id");
  await navigation.replace("Login");
}

const MyDrawer = () => {

  const [mode, setMode] = useState(null);

  const handleMode = async () => {
    try {
      const currentMode = await AsyncStorage.getItem('mode');
      if (currentMode === 'dark') {
        await AsyncStorage.setItem('mode', 'light');
        setMode('light');
      } else {
        await AsyncStorage.setItem('mode', 'dark');
        setMode('dark');
      }
    } catch (error) {
      console.error('Error handling mode change:', error);
    }
  };

  const fetchMode = async () => {
    try {
      const getMode = await AsyncStorage.getItem('mode');
      setMode(getMode);
    } catch (error) {
      console.error('Error fetching mode:', error);
    }
  };

  useEffect(() => {
    fetchMode();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
      }}
      drawerContent={({ navigation }) => (
        <>
          <View style={{ alignItems: 'center', padding: '5%', height: 100, backgroundColor: theme.colors.darkRed }}>
            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Bold', color: mode === 'dark' ? theme.colors.black : theme.colors.white, paddingTop: '5%' }}>Candlesticks</Text>
            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Regular', color: mode === 'dark' ? theme.colors.black : theme.colors.white, textAlign: 'center' }}>(Under stand Candlestick patterns)</Text>
          </View>
          <View style={{ width: '100%', alignItems: 'center', borderTopWidth: 0, borderBottomWidth: 0, borderColor: theme.colors.white }}>
            <TouchableOpacity onPress={() => navigation.navigate('ForexHome')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: '5%', marginTop: '5%' }}>
              <MaterialIcon name="home" size={26} color={theme.colors.darkRed} />
              <Text style={{ fontSize: 16, color: theme.colors.darkRed, marginLeft: '5%', fontFamily: 'Gilroy-SemiBold' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Terms')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: '5%', marginTop: '2%' }}>
              <MaterialIcon name="speaker" size={26} color={theme.colors.darkRed} />
              <Text style={{ fontSize: 16, color: theme.colors.darkRed, marginLeft: '5%', fontFamily: 'Gilroy-SemiBold' }}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: '5%', marginTop: '2%' }}>
              <MaterialIcon name="policy" size={26} color={theme.colors.darkRed} />
              <Text style={{ fontSize: 16, color: theme.colors.darkRed, marginLeft: '5%', fontFamily: 'Gilroy-SemiBold' }}>Privacy Policy</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleMode} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: '5%', marginTop: '2%' }}>
              <MaterialIcon name="light" size={26} color={theme.colors.darkRed} />
              <Text style={{ fontSize: 16, color: theme.colors.darkRed, marginLeft: '5%', fontFamily: 'Gilroy-SemiBold' }}>Dark Mode</Text>
            </TouchableOpacity> */}
          </View>
        </>
      )}
    >
      <Drawer.Screen
        options={{
          // drawerActiveBackgroundColor: theme.colors.white,
          headerShown: false,
          drawerLabelStyle: {
            fontSize: 12,
            fontFamily: "OpenSans-Medium",
            color: theme.colors.white,
            borderWidth: 1,
            borderColor: theme.colors.white,
            // marginTop:200
            // height:50,
            // width:'100%', 
          },
        }}
        name="ForexHome" component={ForexHome}
      />
    </Drawer.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='QRScan'
          component={QRScan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='BarcodeDetail'
          component={BarcodeDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Drawer'
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Game'
          component={SnakeGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='EnterOTP'
          component={EnterOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ForgotOTP'
          component={ForgotOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ChangePassword'
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Wallet'
          component={Wallet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Terms'
          component={Terms}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ForexHome'
          component={ForexHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DataList'
          component={DataList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Blog'
          component={Blog}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name='Detail'
          component={Detail}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='Card'
          component={Card}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='CardDetail'
          component={CardDetail}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='Forums'
          component={Forums}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='Surveys'
          component={Surveys}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='NewsFeed'
          component={NewsFeed}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='PrivacyPolicy'
          component={PriavcyPolicy}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name='Terms'
          component={Terms}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='ContactUs'
          component={ContactUs}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='AddCategory'
          component={AddCategory}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='Product'
          component={Product}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='ProductView'
          component={ProductView}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name='MyOrders'
          component={MyOrders}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})