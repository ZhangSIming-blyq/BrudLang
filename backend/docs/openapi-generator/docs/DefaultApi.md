# NunuExampleApi.DefaultApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](DefaultApi.md#loginPost) | **POST** /login | 账号登录
[**registerPost**](DefaultApi.md#registerPost) | **POST** /register | 用户注册
[**userGet**](DefaultApi.md#userGet) | **GET** /user | 获取用户信息
[**userPut**](DefaultApi.md#userPut) | **PUT** /user | 修改用户信息



## loginPost

> GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponse loginPost(request)

账号登录

### Example

```javascript
import NunuExampleApi from 'nunu_example_api';

let apiInstance = new NunuExampleApi.DefaultApi();
let request = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest(); // GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest | params
apiInstance.loginPost(request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest**](GithubComGoNunuNunuLayoutAdvancedApiV1LoginRequest.md)| params | 

### Return type

[**GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponse**](GithubComGoNunuNunuLayoutAdvancedApiV1LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerPost

> GithubComGoNunuNunuLayoutAdvancedApiV1Response registerPost(request)

用户注册

目前只支持邮箱登录

### Example

```javascript
import NunuExampleApi from 'nunu_example_api';

let apiInstance = new NunuExampleApi.DefaultApi();
let request = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1RegisterRequest(); // GithubComGoNunuNunuLayoutAdvancedApiV1RegisterRequest | params
apiInstance.registerPost(request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**GithubComGoNunuNunuLayoutAdvancedApiV1RegisterRequest**](GithubComGoNunuNunuLayoutAdvancedApiV1RegisterRequest.md)| params | 

### Return type

[**GithubComGoNunuNunuLayoutAdvancedApiV1Response**](GithubComGoNunuNunuLayoutAdvancedApiV1Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userGet

> GithubComGoNunuNunuLayoutAdvancedApiV1GetProfileResponse userGet()

获取用户信息

### Example

```javascript
import NunuExampleApi from 'nunu_example_api';
let defaultClient = NunuExampleApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new NunuExampleApi.DefaultApi();
apiInstance.userGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GithubComGoNunuNunuLayoutAdvancedApiV1GetProfileResponse**](GithubComGoNunuNunuLayoutAdvancedApiV1GetProfileResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userPut

> GithubComGoNunuNunuLayoutAdvancedApiV1Response userPut(request)

修改用户信息

### Example

```javascript
import NunuExampleApi from 'nunu_example_api';
let defaultClient = NunuExampleApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new NunuExampleApi.DefaultApi();
let request = new NunuExampleApi.GithubComGoNunuNunuLayoutAdvancedApiV1UpdateProfileRequest(); // GithubComGoNunuNunuLayoutAdvancedApiV1UpdateProfileRequest | params
apiInstance.userPut(request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**GithubComGoNunuNunuLayoutAdvancedApiV1UpdateProfileRequest**](GithubComGoNunuNunuLayoutAdvancedApiV1UpdateProfileRequest.md)| params | 

### Return type

[**GithubComGoNunuNunuLayoutAdvancedApiV1Response**](GithubComGoNunuNunuLayoutAdvancedApiV1Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

