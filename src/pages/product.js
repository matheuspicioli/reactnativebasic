import React from 'react';

import { WebView, Alert } from 'react-native';

const Product = ({ navigation }) => {
    // Alert.alert('Debug', navigation.state.params.product.url);
    return <WebView source={{ uri: navigation.state.params.product.url }} />;
};

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
});

export default Product;
