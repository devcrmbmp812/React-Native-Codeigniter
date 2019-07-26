import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet,
  FlatList,
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

import CreditListItem from "./CreditListItem";

import * as Api from "../api";

export class Credits extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawresult: [{"id": "1", "coin": '10', "cash": "10$"}, {"id": "2", "coin": '50', "cash": "40$"}, {"id": "3", "coin": "100", "cash": "80$"}],
    }
  }

  _keyExtractor = (item, index) => item.id;

  onPayPress = () => {
    this.props.navigateTo('Payments');
  }

  _renderItem = ({ item }) => (
    <CreditListItem
      id={item.id}
      coin={item.coin}
      cash={item.cash}
      navigation={this.props.navigation}
      onPayPress={this.onPayPress}
    />
  );

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container
          shouldRasterizeIOS
          renderToHardwareTextureAndroid
          style={repositoriesListStyles.screenStyle}
        >
          <FlatList
            data={this.state.drawresult}
            onEndReachedThreshold={0.01}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={() => this.dispatchGetRepos()}
            ItemSeparatorComponent={() => (
              <View style={repositoriesListStyles.itemSeparatorStyle} />
            )}
          />
        </Container>
      </StyleProvider>
    );
  }
  dispatchGetRepos() {
    let token = 'temp_token';
  }
  
}


const repositoriesListStyles = {
  flatListStyle: {},
  screenStyle: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.primaryColor
  },
  itemSeparatorStyle: {
    flex: 1,
    height: 1,
    backgroundColor: "grey"
  },
  logOutTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginRight: 16
  },
  dialogDescriptionStyle: {
    flexGrow: 1,
    fontSize: 16
  },
  dialogButtonContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-end"
  },
  dialogButtonTextStyle: {
    color: colors.accentColor,
    fontSize: 20
  },
  dialogContainerStyle: {
    flexGrow: 1,
    alignItems: "center"
  },
  dialogTitleTextStyle: {
    fontSize: 20,
    color: "black"
  },

  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#ECEFF1',
  },
  view: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 40,
      padding: 20,
  },
  header1: {
      fontSize: 28,
      marginBottom: '30%',
  },
  text: {
      fontSize: 20,
      width: '70%',
      textAlign: 'center',
      lineHeight: 30,
      marginBottom: '10%',
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
)(Credits);
