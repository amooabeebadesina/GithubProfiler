import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }

  success(data) {
    swal(
      data.title,
      data.info,
      'success'
    );
  }

  error(data) {
    swal(
      data.title,
      data.info,
      'error'
    );
  }

  showLoader() {
    swal.showLoading();
  }

  hideLoader() {
    swal.close();
  }

}
