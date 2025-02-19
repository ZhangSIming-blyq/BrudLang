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

import ApiClient from '../ApiClient';

/**
 * The GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest model module.
 * @module model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest
 * @version 1.0.0
 */
class GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest {
    /**
     * Constructs a new <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest</code>.
     * @alias module:model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest} obj Optional instance to populate.
     * @return {module:model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest} The populated <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest.RequiredProperties = ["email", "password"];

/**
 * @member {String} email
 */
GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest.prototype['email'] = undefined;

/**
 * @member {String} password
 */
GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest.prototype['password'] = undefined;






export default GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest;

