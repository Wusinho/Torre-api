import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const userInfoCallBegan = createAction('userInfo/callBegan');
export const userInfoCallSuccess = createAction('userInfo/callSuccess');
export const userInfoCallFailed = createAction('userInfo/callFailed');
