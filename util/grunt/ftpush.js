// -------------------------------------
// Grunt ftpush
// -------------------------------------

module.exports = {

  // ----- Mirror child theme to server ----- //

  deploy_child: {
    auth: {
      host: '178.18.94.73',
      port: 21,
      authKey: 'lokaalgevonden'
    },
    src: 'deploy',
    dest: '/wp-content/themes/slate',
    simple: true,
    useList: false
  }

  // ----- Mirror parent theme to server ----- //

  deploy_parent: {
    auth: {
      host: '178.18.94.73',
      port: 21,
      authKey: 'lokaalgevonden'
    },
    src: 'deploy',
    dest: '/wp-content/themes/slate',
    simple: true,
    useList: false
  }
};
