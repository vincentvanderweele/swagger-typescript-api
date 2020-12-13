/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HttpClient, RequestParams } from "./http-client";
import { PushToken, Error } from "./data-contracts";

/**
 * @title Authentiq
 * @version 6
 * @baseUrl https://6-dot-authentiqio.appspot.com/
 * Strong authentication, without the passwords.
 */
export class Login extends HttpClient {
  /**
   * @description push sign-in request See: https://github.com/skion/authentiq/wiki/JWT-Examples
   *
   * @tags login, post
   * @name push_login_request
   * @request POST:/login
   */
  pushLoginRequest = (query: { callback: string }, body: PushToken, params?: RequestParams) =>
    this.request<{ status?: string }, Error>(`/login${this.addQueryParams(query)}`, "POST", params, body);
}