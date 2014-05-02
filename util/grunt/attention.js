// -------------------------------------
// Grunt Attention
// -------------------------------------

module.exports = {

  // ----- Ftppass reminder ----- //  

  ftppass_reminder: {
    options: {
      message: "Reminder: .ftppass must be present in the root of your local project folder.",
      border: 'double',
      borderColor: 'green'
    }
  },

  // ----- Warning for file removal in dev folder ----- //

  deletion_warning: {
    options: {
      message: "Warning: any previously made changes to this project will be overwritten!",
      border: 'double',
      borderColor: 'red'
    }
  }
};
