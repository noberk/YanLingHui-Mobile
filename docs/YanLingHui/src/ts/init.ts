import * as $ from "jquery";

/**initalize your mobile project and set defualt parameters for it.  */

export function hello(str: string) {
        alert(str);
}
export function navigateTo(url: string) {
        location.href = url;
}

/**delete Any HTMLElement you want by ID */
export function remove(eleID: string) {
        $(() => { $(`#${eleID}`).remove(); })
}





