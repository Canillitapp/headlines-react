import React from 'react';
import { Animated } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

let search = '';

export default function Header(props) {
  console.log('HeaderProps:', props);
  const centerElement = _renderTitleComponent(props);
  const leftElement = _renderLeftComponent(props);

  const isSearchActive = _isSearchActive(props);

  const navigateBack = () => {
    props.navigation.goBack(null);
  };

  const onChangeSearchText = text => {
    search = text;
  };

  const navigateToSearch = () => {
    search = '';
    props.navigation.navigate('Search', {
      q: search
    });
  };

  const navigateToRoot = () => {
    search = '';
    props.navigation.navigate('Root');
  };

  return (
    <Toolbar
      leftElement={leftElement}
      onLeftElementPress={navigateBack}
      centerElement={centerElement}
      isSearchActive={isSearchActive}
      searchable={{
        placeholder: 'Buscar...',
        autoFocus: true,
        //onSearchPressed: navigateToSearch,
        onSubmitEditing: navigateToSearch,
        onSearchClosed: navigateToRoot,
        onChangeText: onChangeSearchText
      }}
    />
  );
}

function _isSearchActive(props) {
  const details = props.getScreenDetails(props.scene);
  return details.state.routeName === 'Search';
}

function _renderTitleComponent(props) {
  const details = props.getScreenDetails(props.scene);
  const headerTitle = details.options.headerTitle;
  if (headerTitle && typeof headerTitle !== 'string') {
    return headerTitle;
  }
  const titleString = _getHeaderTitleString(details.options);

  return titleString;
  //   const titleStyle = details.options.headerTitleStyle;
  //   const color = details.options.headerTintColor;

  //   return (
  //     <Animated.Text numberOfLines={1}>
  //       {titleString}
  //     </Animated.Text>
  //   );
}

function _getHeaderTitleString(sceneOptions) {
  if (typeof sceneOptions.headerTitle === 'string') {
    return sceneOptions.headerTitle;
  }
  return sceneOptions.title;
}

function _renderLeftComponent(props) {
  const options = props.getScreenDetails(props.scene).options;
  if (typeof options.headerLeft !== 'undefined') {
    return options.headerLeft;
  }
  if (props.scene.index === 0) {
    return null;
  }
  return _getBackButtonTitleString(props) || 'arrow-back';
}

function _getLastScene(props) {
  return props.scenes.find(s => s.index === props.scene.index - 1);
}

function _getBackButtonTitleString(props) {
  const scene = props.scene;
  const lastScene = _getLastScene(props);
  if (!lastScene) {
    return null;
  }
  const { headerBackTitle } = props.getScreenDetails(lastScene).options;
  if (headerBackTitle || headerBackTitle === null) {
    return headerBackTitle;
  }
  return _getHeaderTitleString(lastScene);
}
