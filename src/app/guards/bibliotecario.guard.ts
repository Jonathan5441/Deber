import { CanActivateFn } from '@angular/router';

export const bibliotecarioGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') == 'true'){
    return true
  }else{
    return false;
  }

};
