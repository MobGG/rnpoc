import React from 'react';
import {
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Provider } from 'mobx-react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import constants from '../config/constants';

//Main Screen
import HomeScreen from '../components/home';
import FeedScreen from '../components/feed';
import CategoryScreen from '../components/category';
import CartScreen from '../components/cart';
import AccountScreen from '../components/account';
import ImagePickerScreen from '../components/image-picker';

import SettingsScreen from '../components/account/settings';



const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        title: 'Feed',
      },
    },
    Category: {
      screen: CategoryScreen,
      navigationOptions: {
        title: 'Category',
      },
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: 'Cart',
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Account',
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }: Props) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          if (Platform.OS === 'ios') {
            iconName = 'home-outline';
          } else {
            iconName = 'home';
          }
        } else if (routeName === 'Feed') {
          if (Platform.OS === 'ios') {
            iconName = 'newspaper';
          } else {
            iconName = 'newspaper';
          }
        } else if (routeName === 'Category') {
          if (Platform.OS === 'ios') {
            iconName = 'apps';
          } else {
            iconName = 'apps';
          }
        } else if (routeName === 'Cart') {
          if (Platform.OS === 'ios') {
            iconName = 'cart-outline';
          } else {
            iconName = 'cart';
          }
        } else if (routeName === 'Account') {
          if (Platform.OS === 'ios') {
            iconName = 'account-outline';
          } else {
            iconName = 'account';
          }
        }
        return (
          <MaterialCommunityIcons name={iconName} size={22} color={tintColor} />
        );
      },
      // headerTitle: () => {
      //   const { routeName } = navigation.state;
      //   let appTitle;
      //   if (routeName === 'Home') {
      //     appTitle = 'Home';
      //   } else if (routeName === 'Feed') {
      //     appTitle = 'Feed';
      //   } else if (routeName === 'Category') {
      //     appTitle = 'Category';
      //   } else if (routeName === 'Cart') {
      //     appTitle = 'Cart';
      //   } else if (routeName === 'Account') {
      //     appTitle = 'Account';
      //   }
      //   return <Text>{appTitle}</Text>;
      // },
    }),
    tabBarOptions: {
      // scrollEnabled: true,
      activeTintColor: constants.COLORS.WHITE,
      activeBackgroundColor: constants.COLORS.PIMARY,
      inactiveTintColor: constants.COLORS.PIMARY,
      inactiveBackgroundColor: constants.COLORS.WHITE,
      labelStyle: {
        // fontSize: constants.DIMENSIONS.FONT_SIZE_SMALLER,
        fontSize: 10,
        textAlign: 'center',
        marginTop: -9,
        marginBottom: 6,
      },
    },
    // animationEnabled: true,
    // swipeEnabled: true,
  },
);

let drawerStack = createDrawerNavigator(
  {
    App: {
      screen: AppTabNavigator,
      navigationOptions: {
        title: 'หน้าหลัก',
      },
    },
    ImagePicker: {
      screen: ImagePickerScreen,
      navigationOptions: {
        title: 'image-picker',
      },
    }
  },
  {
    initialRouteName: 'App',
    initialRouteParams: {},
    contentOptions: {
      activeTintColor: constants.COLORS.PIMARY,
    },
  },
);

// drawerStack.navigationOptions = ({ navigation }) => {
//   return {
//     headerLeft: (
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           // backgroundColor: constants.COLORS.MAIN,
//         }}
//       >
//         <View style={{ paddingHorizontal: constants.DIMENSIONS.TOTALSIZE(2) }}>
//           <Icon
//             name="bars"
//             size={constants.DIMENSIONS.TOTALSIZE(4)}
//             color={constants.COLORS.WHITE}
//             onPress={() => {
//               console.log('press');
//               navigation.toggleDrawer();
//             }}
//           />
//         </View>
//         {/* <View style={{ marginLeft: constants.DIMENSIONS.TOTALSIZE(2) }}>
//           <Text
//             style={{
//               fontSize: constants.DIMENSIONS.FONT_SIZE_TITLE,
//               color: constants.COLORS.DARK_LIGHT,
//               fontWeight: '500',
//             }}
//           >
//             {constants.APP_NAME}
//           </Text>
//         </View> */}
//       </View>
//     ),
//     // headerRight: (
//     //   <View
//     //     style={{
//     //       flexDirection: 'row',
//     //       alignItems: 'center',
//     //       // backgroundColor: constants.COLORS.MAIN,
//     //     }}
//     //   >
//     //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//     //       <Text
//     //         style={{
//     //           fontSize: constants.DIMENSIONS.FONT_SIZE_SMALLER,
//     //           color: constants.COLORS.WHITE,
//     //         }}
//     //       >
//     //         TH
//     //       </Text>
//     //       <Icon
//     //         name="globe"
//     //         size={constants.DIMENSIONS.TOTALSIZE(3.5)}
//     //         color={constants.COLORS.WHITE}
//     //         onPress={() => navigation.navigate('Language')}
//     //       />
//     //     </View>
//     //     <View style={{ paddingHorizontal: constants.DIMENSIONS.TOTALSIZE(2) }}>
//     //       <Icon
//     //         name="bell"
//     //         size={constants.DIMENSIONS.TOTALSIZE(3)}
//     //         color={constants.COLORS.WHITE}
//     //         onPress={() => navigation.navigate('Notify')}
//     //       />
//     //     </View>
//     //   </View>
//     // ),
//   };
// };

const RootStack = createStackNavigator(
  {
    drawerStack,
    // Home: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     title: 'Home',
    //     header: null
    //   },
    // },
    // Feed: {
    //   screen: FeedScreen,
    //   navigationOptions: {
    //     title: 'Feed',
    //   },
    // },
    // Category: {
    //   screen: CategoryScreen,
    //   navigationOptions: {
    //     title: 'Category',
    //   },
    // },
    // Cart: {
    //   screen: CartScreen,
    //   navigationOptions: {
    //     title: 'Cart',
    //   },
    // },
    // Account: {
    //   screen: AccountScreen,
    //   navigationOptions: {
    //     title: 'Account',
    //   },
    // },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
      },
    },
  },
  {
    navigationOptions: {
      title: constants.APP_NAME,
      headerStyle: {
        backgroundColor: constants.COLORS.PIMARY,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: constants.COLORS.WHITE,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: constants.COLORS.WHITE,
      },
    },
  },
);

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: constants.COLORS.PIMARY }}
        >
          <RootStack />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default Routes;
