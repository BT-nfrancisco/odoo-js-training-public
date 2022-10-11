/** @odoo-module */

import { registry } from "@web/core/registry";
import { FormController } from "@web/views/form/form_controller";
import { formView } from '@web/views/form/form_view';
import { useService } from "@web/core/utils/hooks";
import { useDebounced } from "@web/core/utils/timing";

class OrderFormViewController extends FormController {

    setup() {
        super.setup();
        this.orm = useService("orm");
        this.notificationService = useService("notification");
        this.debouncedPrintLabel = useDebounced(this.print_label, 200);
    }

    print_label(){
        return this.orm.call(this.model.root.resModel, "print_label", [
            this.model.root.resId,
        ]);
    }
}

OrderFormViewController.template = "OrderFormView.buttons";


registry.category('views').add('order_form_view', {
    ...formView,
    Controller: OrderFormViewController,
    buttonTemplate: 'OrderFormView.buttons',
});

