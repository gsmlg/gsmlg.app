export const LOOKUP = 'LOOKUP';
export const LOOKUP_DONE = 'LOOKUP_DONE';
export const LOOKUP_FAIL = 'LOOKUP_FAIL';
export const CHANGE_DOMAIN = 'CHANGE_DOMAIN';

import { ipcRenderer } from 'electron';

export function changeValue(e) {
  console.log(e);
  return {
    type: CHANGE_DOMAIN,
    value: e.target.value
  };
}

export function lookup(e) {
  return (dispatch, getState) => {
    let domain = getState().dns.domain;
    dispatch({
      type: LOOKUP,
      domain: domain
    });
    let id = `event:${+new Date()}`;
    ipcRenderer.send('nslooup', domain, id);
    ipcRenderer.once(id, (event, error, address) => {
      if (error) {
        dispatch({
          type: LOOKUP_FAIL,
          error: error
        });
      } else {
        dispatch({
          type: LOOKUP_DONE,
          address: address
        });
      }
    });
  };
}
