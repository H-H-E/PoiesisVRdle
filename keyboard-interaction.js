
AFRAME.registerComponent('keyboard-interaction', {
  init: function() {
    this.handleKeyPress = this.handleKeyPress.bind(this);
    window.addEventListener('keydown', this.handleKeyPress);
  },

  handleKeyPress: function(event) {
    const key = event.key.toLowerCase();
    if (/^[a-z]$/.test(key)) {
      // Handle letter input
      this.el.emit('letter-input', {letter: key});
    } else if (event.key === 'Enter') {
      // Handle word submission
      this.el.emit('word-submit');
    } else if (event.key === 'Backspace') {
      // Handle deletion
      this.el.emit('letter-delete');
    }
  },

  remove: function() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
});
