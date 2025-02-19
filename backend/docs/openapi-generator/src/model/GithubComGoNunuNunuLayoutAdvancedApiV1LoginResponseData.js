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
 * The GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData model module.
 * @module model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData
 * @version 1.0.0
 */
class GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData {
    /**
     * Constructs a new <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData</code>.
     * @alias module:model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData
     */
    constructor() { 
        
        GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData} obj Optional instance to populate.
     * @return {module:model/GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData} The populated <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData();

            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accessToken'] && !(typeof data['accessToken'] === 'string' || data['accessToken'] instanceof String)) {
            throw new Error("Expected the field `accessToken` to be a primitive type in the JSON string but got " + data['accessToken']);
        }

        return true;
    }


}



/**
 * @member {String} accessToken
 */
GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData.prototype['accessToken'] = undefined;






export default GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponseData;

