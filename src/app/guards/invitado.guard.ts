import { CanActivateFn } from '@angular/router';

export const invitadoGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') == 'true'){
    return true
  }else{
    return false;
  }


};
