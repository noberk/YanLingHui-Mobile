import {Template} from "./template";
class quest extends Template{
    constructor(){
        super();
        this.render(this.headerNoUrl("任务大厅"),this.homeTab("quest"))
    }
}
new quest;