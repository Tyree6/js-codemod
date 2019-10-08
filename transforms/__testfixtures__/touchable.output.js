<TouchableBounce onPress={function() {}} style={{color: 'red'}}></TouchableBounce>;

<View>
  <TouchableBounce style={{color: 'green'}}>
    <Image />
    <Image />
  </TouchableBounce>
</View>;

<TouchableBounce>
  <CustomView style={{color: 'green'}}>
    <Image />
  </CustomView>
</TouchableBounce>;

<TouchableBounce>
  <View>3</View>
  <View>13</View>
</TouchableBounce>;

<TouchableOpacity onPress={function() {}} style={{color: 'red'}}></TouchableOpacity>;

<TouchableHighlight onPress={function() {}}>
  <View style={{color: 'green'}} />
</TouchableHighlight>;
