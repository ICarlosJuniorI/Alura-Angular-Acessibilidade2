import { ComponentRef } from '@angular/core';

import { ModalComponent } from '../modal.component';

// Fecha o modal
export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close() {
    this.componentRef.destroy();
  }
}
