/** @odoo-module */

import { registry } from "@web/core/registry";

const { Component , markup} = owl;

class WarningBox extends Component {

    get warnings() {
        const warningsList = [];
        if (this.props.record.data.image_url.length === 0) {
            warningsList.push(markup("<b>There is no image</b>'"));
        }
        if (this.props.record.data.amount > 100) {
            warningsList.push("Add promotional material");
        }
        return warningsList;
    }

}

WarningBox.fieldDependencies = {
    image_url: { type: "char" },
    amount: { type: "float" },
};

WarningBox.template = "awesome_tshirt.WarningBox";

registry.category("view_widgets").add("warning_box", WarningBox);

