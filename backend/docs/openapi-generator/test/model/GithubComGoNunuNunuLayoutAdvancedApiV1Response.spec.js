/**
 * Nunu Example API
 * This is a sample server celler server.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NunuExampleApi);
  }
}(this, function(expect, NunuExampleApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GithubComGoNunuNunuLayoutAdvancedApiV1Response', function() {
    it('should create an instance of GithubComGoNunuNunuLayoutAdvancedApiV1Response', function() {
      // uncomment below and update the code to test GithubComGoNunuNunuLayoutAdvancedApiV1Response
      //var instance = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1Response();
      //expect(instance).to.be.a(NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1Response);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1Response();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1Response();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1Response();
      //expect(instance).to.be();
    });

  });

}));
