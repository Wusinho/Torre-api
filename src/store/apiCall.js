import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const userInfoCallBegan = createAction('userInfo/callBegan');
export const userInfoCallSuccess = createAction('userInfo/callSuccess');
export const userInfoCallFailed = createAction('userInfo/callFailed');

export const regCallBegan = createAction('reg/callBegan');
export const regCallSuccess = createAction('reg/callSuccess');
export const regCallFailed = createAction('reg/callFailed');

export const sessionCallBegan = createAction('session/callBegan');
export const sessionCallSuccess = createAction('session/callSuccess');
export const sessionCallFailed = createAction('session/callFailed');