import * as $ from "jquery";
import { Template, ROUTER } from "./template";
import { Component, Header } from "./utils/decorators";
import { navigateTo, addEvent } from "./utils/tools";

@Component({ styleUrls: ["./css/expert.css", "./css/index.css"] })
@Header("名医汇")
class Expert extends Template {
   


    constructor() {
        super();
        this.render(this.headerNoUrl(Expert.title), this.homeTab("expert"));
        this.changeCategoryFontColor();
        addEvent(".expertList li", "click", () => {
            navigateTo(ROUTER.expertIntro);
        })
    }
    private changeCategoryFontColor() {
        $(() => {
            $(".expertCategroy span").click((ev: JQuery.Event<HTMLElement>) => {
                let span = $(ev.target);
                let tagValue = span.attr("tag");
                span.css("color", "orange");
                navigateTo(`${ROUTER.expertSearching}?type=${tagValue}`);
            })
        })
    }
}
new Expert;

