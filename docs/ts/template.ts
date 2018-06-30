//footer template for each mobile page
class Template {
    public footer: string = `
    <footer id="footer">
            <div>Copyright © 延陵荟 All Rights Reserved</div>
            <div>
                    <a href="">苏ICP备17075422号-1</a>
            </div>
    </footer>
    `;
    public urls = {
        index: './index.html',
        quest: './quest.html',
        your: './your.html',
        experts: './experts.html',
        ranks: './ranks.html',

    }
    public AppFooter: string = `
<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" href="${urls.index}" onClick="navigateTo('${urls.index}');">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item" href="${urls.quest}" onClick="navigateTo('${urls.quest}');">
			<span class="mui-icon mui-icon-flag"></span>
			<span class="mui-tab-label">任务大厅</span>
		</a>
		<a class="mui-tab-item" href="${urls.experts}" onClick="navigateTo('${urls.experts}');">
			<span class="mui-icon mui-icon-person"></span>
			<span class="mui-tab-label">名医汇</span>
		</a>
		<a class="mui-tab-item" href="${urls.experts}" onClick="navigateTo('${urls.ranks}');">
			<span class="mui-icon mui-icon-star"></span>
			<span class="mui-tab-label">排行榜</span>
		</a>
		<a class="mui-tab-item" href="${urls.experts}" onClick="navigateTo('${urls.your}');">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">个人中心</span>
		</a>
	</nav>
`;

    public nav: string = `
<ul>
        <li><a href="./index.html">首页</a></li>
        <li><a href="./missionCenter.html">任务大厅</a></li>
        <li><a href="./expertGroup.html">名医汇</a></li>
        <li><a href="./rank.html">排行榜</a></li>
        <li><a href="./profile.html">个人中心</a></li>
</ul>
`
//header template for each mobile page
    public header: string = `
<header id="header">
        <div>
                <img src="./images/logo.png" alt="">
                <div>延陵荟互助系统</div>
                <div id="login_reg"><a href="./login.html">登录</a>&nbsp;<span>|</span>&nbsp;<a href="./register.html">注册</a></div>
        </div>
</header>
`;

    public DP = {
        /**html page title */
        title: "延陵荟"
    }
    public Elements = {
        H_login_reg: "login_reg"
    }
    InitPage() {
        try {
            $("title").html(DP.title)

        } catch (error) {

        }
    }
/**initalize your mobile project and set defualt parameters for it.  */
    navigateTo(url: string) :void{
        location.href = url;
    }
    /**delete Any HTMLElement you want by ID */
     remove(eleID:string):void {
        $(() => { $(`#${eleID}`).remove(); })
    }
}



var template = new Template();

// after HTML document get ready then injection footer contents inside...
$(() => {
    const body = $("body");
    if (body != undefined) {
        $(header).insertBefore(body.children().first());
        $(AppFooter).insertAfter(body.children().last());   //no footer
    }

    InitPage();
})



