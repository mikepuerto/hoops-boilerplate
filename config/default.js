
/**
 * 
 */

module.exports = {

  /**
   * Server defaults
   */

  server: {
    port: 3000
  },

  /**
   * Database defaults
   *  - <adapter-name> : <options.
   */

  database: {
    
    /**
     * The default store is in-memory and
     * will not persist across restarts.
     */

    default: {}

    /**
     * Mongoose example
     */

    // mongoose: {
    //   // connection string
    //   uri: 'mongodb://localhost/hoops_app',
    //   // connection options
    //   options: {
    //     poolSize: 5
    //   }
    // }

  }

  /**
   * Deployment config
   * TODO should gulp/grunt handle deployment?
   * TODO should deployments be separate node modules to keep things decoupled? 
   */

  // deploy: {
  //   to: 'github'
  //   options: {

  //   }
  // }

  // deploy: {     
  //   hook: function() {
  //     // do something
  //   }
  // }

};