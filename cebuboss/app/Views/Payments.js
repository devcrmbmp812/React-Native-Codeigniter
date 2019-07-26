import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

import {
  Container,
  Spinner,
  StyleProvider,
} from "native-base";

import material from "../native_theme/variables/material";
import getTheme from "../native_theme/components";
import strings from "../resources/strings";
import consts from "../const";
import colors from "../resources/colors";
import dimens from "../resources/dimens";
import styles from "../resources/styles";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateTo } from '../Redux/actions';

const { height, width } = Dimensions.get("window");

import * as Api from "../api";
import Button from '../native_theme/components/Button';

export class Payments extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Hello World!</Text>
          
        </View>
      </StyleProvider>
    );
  }
  
}

const itemStyles = {
  buttonBoldStyle: {
    color: "black",
    fontSize: dimens.buttontexxt_size
  },
  buttonSubmitStyle: {
    marginTop: dimens.margin_medium,
    marginHorizontal: dimens.margin_large,
    borderRadius: 20,
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: colors.circleColor,
    borderWidth: 1
  },
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: width / 40,
    // paddingRight: width / 40,
    // paddingTop: width / 40,
    backgroundColor: colors.whiteColor,
  },
  rightpanel: {
    paddingLeft: width/40,
    backgroundColor: colors.whiteColor
  },
  leftpanel: {
     //flex: 1,
     //flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: width/10,
    //justifyContent: "space-between",
    //paddingLeft: width/30,
    //width: width/2
  },
  logoimage: {
    height: 70,
    width: 70,
    flex: 1,    
  },
  circleimage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor:'#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
    margin:width/30,
    padding:width/30

  },
  itemStyle: {
    //marginHorizontal: 4,
    borderColor: "lightgrey",
    
    elevation: 4,
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  itemTitleStyle: {
    color: "black",
    fontSize: 20,
    padding: 10,
    paddingRight: 30,
  },
  itemDescriptionStyle: {
    color: "black",
    fontSize: 17,
    paddingLeft: 10
  }
};


const repositoriesListStyles = {
  screenStyle: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.primaryColor
  },
};

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
  login: state.routes.login,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payments);
