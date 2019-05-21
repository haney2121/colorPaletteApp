import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class SavePaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: true,
      emojiOpen: false,
      newPaletteName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.showEmoji = this.showEmoji.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    )
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  showEmoji() {
    this.setState(() => ({
      formOpen: false,
      emojiOpen: true
    }))
  }
  savePalette(newEmoji) {
    const newPalette = { paletteName: this.state.newPaletteName, emoji: newEmoji.native };
    this.props.handleSubmit(newPalette)
  }

  render() {
    const { newPaletteName } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={this.state.emojiOpen} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.state.formOpen}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmoji}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your custom palette. Make sure it is unique.
            </DialogContentText>

              <TextValidator
                value={newPaletteName}
                name="newPaletteName"
                label="Palette Name"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['A name is required.', 'Name already used.']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
            </Button>
              <Button variant="contained" color="primary" type="submit">Save Palette</Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}


export default SavePaletteForm;