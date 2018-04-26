import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

export class CheckboxField extends React.PureComponent {

    handleCheck = (event, isInputChecked) => {
      this.props.onChange(event, isInputChecked, this.props.category);
    };
  
    render() {
      return (
            <Checkbox
              label={this.props.category}
              iconStyle={{fill: '#000'}}
              value={this.props.category}
              onCheck={this.handleCheck}
            />
            
      )}
      <p>
        {JSON.stringify(this.state)}
    </p>
  }

  export default CheckboxField