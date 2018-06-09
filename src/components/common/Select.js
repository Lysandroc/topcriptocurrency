import React, {Component} from 'react';
import { View, Picker} from 'react-native';

class Select extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index:0, 
      items: [],
      itemSelected: "",
    }
  }

  componentWillReceiveProps(nextProps){
    const {items, index} = nextProps;
    const itemSelected = items.length > 0 ? items[index].name : ""; 
    this.setState({items, index, itemSelected});
  }

  updateItem = (itemSelected, index) => {
    this.setState({itemSelected, index});
    
    //TODO - REFACTORY
    this.props.onChangeSelect(this.props.session, index);
  }

  render() {
    return (
    <View style={{...styles.container, ...this.props.style}}>
      <Picker selectedValue={this.state.itemSelected} onValueChange={this.updateItem}> 
        {this.renderItem()}
      </Picker>
    </View>);
  }

  renderItem() {
    return (
      this.state.items.map((item) => <Picker.Item key={item.id} label={item.name} value={item.name}/>)
    );
  }
}

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 5,
    margin: 3,
  }
}
export {Select}