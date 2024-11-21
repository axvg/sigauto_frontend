import { Component, inject, TemplateRef } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from '@components/toast-container/toast-container.component';

import { ToastService } from '@services/toast.service';

@Component({
  selector: 'app-toast-global',
  standalone: true,
	imports: [NgbTooltipModule, ToastContainerComponent],
  templateUrl: './toast-global.component.html',
  styleUrl: './toast-global.component.scss'
})
export class ToastGlobalComponent {
	toastService = inject(ToastService);

	showStandard(template: TemplateRef<any>) {
		this.toastService.show({ template });
	}

	showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}
