import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

//labelList = [{id: 1, category: 'Dog Friendly'}, {id: 2, category: 'Cat Friendly'}, {id: 3, category: 'W/D in Unit'}, {id: 4, category: 'Garage'}, {id: 5, category: 'Furnished'}, {id: 6, category: 'Fireplace'}, {id: 7, category: 'yard'}, {id: 8, category: 'Gym'}, {id: 9, category: 'Pool/Hot Tub'}, {id: 10, category: 'Dishwasher'}, {id: 11, category: 'Non-Smoking'}, {id: 12, category: 'Other'}];

class CheckboxExampleSimple extends React.Component {
  state = {
    checked: false,
  }
  HandleCheck = (event, isInputChecked) => {
    this.props.onChange(event, isInputChecked, this.props.category);
  }
  result = new Set();
  handleCheckbox(event, isChecked, value) {
    console.log(isChecked, value); 
    this.res.add(value);
    if (this.res.size === 3) console.log(this.res);
  }
  labelList = [{id: 1, category: 'Dog Friendly'}, {id: 2, category: 'Cat Friendly'}, {id: 3, category: 'W/D in Unit'}, {id: 4, category: 'Garage'}, {id: 5, category: 'Furnished'}, {id: 6, category: 'Fireplace'}, {id: 7, category: 'yard'}, {id: 8, category: 'Gym'}, {id: 9, category: 'Pool/Hot Tub'}, {id: 10, category: 'Dishwasher'}, {id: 11, category: 'Non-Smoking'}, {id: 12, category: 'Other'}];

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  };

  render() {
    return (
      <div style={styles.block}>
      <Checkbox
              label={this.props.category}              
              value={this.props.category}
              onCheck={this.handleCheck}
              style={styles.checkbox}
            />
        {/* <Checkbox
          label="Cat Friendly"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="W/D in Unit"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Garage"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Furnished"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Fireplace"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Yard"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Gym"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Pool/Hot Tub"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Dishwasher"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          label="Non-Smoking"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        /> */}
        <p>
        {JSON.stringify(this.state)}
    </p>

        </div>
    );
  }
}

export default CheckboxExampleSimple;