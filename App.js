import React from 'react';
import { View } from 'react-native';


import Header from './src/components/Header';
import SubHeader from './src/components/SubHeader';
import ProductList from './src/components/PoductList';
import Tabs from './src/components/Tabs';


const App = () => (

  <View style={{ flex: 1 }}>

    {/* <Header />
    <SubHeader />
    <ProductList/> */}
    <Tabs/>

  </View>
);

export default App;
