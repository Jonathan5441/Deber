import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('token') == 'true'){
    return true
  }else{
    return false;
  }


};
