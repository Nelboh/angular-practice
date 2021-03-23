import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>This is a warning. You are in danger!</p>
    `,
    styles: [
        `
            p {
                padding: 20px;
                border: 1px solid tomato;
                background-color: mistyrose;
            }
        `
    ]
})

export class WarningAlertComponent {

}