(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,,function(t,e,a){t.exports={OutputScreen:"Status_OutputScreen__3frf_",textOutput:"Status_textOutput__1VKs0",outputMaxValue:"Status_outputMaxValue__g5mrb",outputError:"Status_outputError__2nNeg",outputPermissible:"Status_outputPermissible__elYDu"}},function(t,e,a){t.exports={Wrap:"Settings_Wrap__1Tkpt",error:"Settings_error__46pUt"}},,,function(t,e,a){t.exports={Wrap:"App_Wrap__3_SMe"}},function(t,e,a){t.exports={Wrap:"Counter_Wrap__5HG0h"}},function(t,e,a){t.exports={Display:"Display_Display__gKNOu"}},function(t,e,a){t.exports={Button:"Button_Button__3xhJ1",error:"Button_error__3KNKV"}},function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),u=a.n(r),s=a(9),n=a.n(s),o=(a(19),a(1)),l=a(5),i=a(3),c=a(2),p=a(4),m=a(10),V=a.n(m),b=a(11),O=a.n(b),h=a(12),x=a.n(h),f=a(13),S=a.n(f),_=function(t){function e(t){return Object(o.a)(this,e),Object(i.a)(this,Object(c.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return u.a.createElement("button",{className:this.props.errorButton?S.a.error:"",onClick:this.props.onBtnClick,disabled:this.props.disabled},this.props.name," ")}}]),e}(u.a.Component),d=a(6),v=a.n(d),D=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).statusClass="textOutput"===a.props.statusOutput?v.a.textOutput:"max"===a.props.statusOutput?v.a.outputMaxValue:"error"===a.props.statusOutput?v.a.outputError:"",a.render=function(){return u.a.createElement("div",{className:v.a.OutputScreen},u.a.createElement("div",{className:a.statusClass},a.props.outputValue))},a}return Object(p.a)(e,t),e}(u.a.Component),j=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).state={titleInc:"inc",titleRes:"res"},a.render=function(){return u.a.createElement("div",{className:x.a.Display},u.a.createElement(D,{statusOutput:a.props.statusOutput,outputValue:a.props.outputValue}),u.a.createElement(_,{name:a.state.titleInc,onBtnClick:a.props.incrementCounter,disabled:a.props.incrDisable,errorButton:a.props.errorButton}),u.a.createElement(_,{name:a.state.titleRes,onBtnClick:a.props.resetCounter,disabled:a.props.resetDisable,errorButton:a.props.errorButton}))},a}return Object(p.a)(e,t),e}(u.a.Component),B=a(7),C=a.n(B),E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).state={setTitle:"set"},a.onSetMaxValue=function(t){var e=t.currentTarget.value;a.props.setMaxValue(e)},a.onSetStartValue=function(t){var e=t.currentTarget.value;a.props.setStartValue(e)},a.render=function(){return u.a.createElement("div",{className:C.a.Wrap},u.a.createElement("span",null," MaxValue:",u.a.createElement("input",{className:a.props.errorMax?C.a.error:"",value:a.props.maxValue,onChange:a.onSetMaxValue,type:"number"})),u.a.createElement("span",null,"StartValue:",u.a.createElement("input",{className:a.props.errorStart?C.a.error:"",value:a.props.startValue,onChange:a.onSetStartValue,type:"number"})),u.a.createElement(_,{name:a.state.setTitle,onBtnClick:a.props.setValue,disabled:a.props.setDisable,errorButton:a.props.errorButton}))},a}return Object(p.a)(e,t),e}(u.a.Component),M=function(t){function e(){var t,a;Object(o.a)(this,e);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(a=Object(i.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(u)))).state={resetDisable:!0,incrDisable:!0,setDisable:!1,startValue:0,maxValue:0,outputValue:0,errorStart:!1,errorMax:!1,errorButton:!1,statusOutput:"textOutput"},a.saveState=function(){var t=JSON.stringify(a.state);localStorage.setItem("defaultState",t)},a.checkStartValue=function(){a.state.startValue===a.state.maxValue||a.state.startValue<0||a.state.startValue>a.state.maxValue?a.setState({outputValue:"Incorrect value",resetDisable:!0,incrDisable:!0,setDisable:!0,errorMax:!0,errorButton:!0,errorStart:!0,statusOutput:"error"}):a.setState({outputValue:'input value and press "set"',errorMax:!1,errorStart:!1,errorButton:!1,setDisable:!1,statusOutput:"textOutput"})},a.checkMaxValue=function(){a.state.startValue===a.state.maxValue||a.state.maxValue<0||a.state.startValue>a.state.maxValue?a.setState({outputValue:"Incorrect value",resetDisable:!0,incrDisable:!0,setDisable:!0,errorStart:!0,errorMax:!0,errorButton:!0,statusOutput:"error"}):a.setState({outputValue:'input value and press "set"',errorMax:!1,errorStart:!1,errorButton:!1,setDisable:!1,statusOutput:"textOutput"})},a.setMaxValue=function(t){a.setState({maxValue:t},(function(){return a.checkMaxValue(a.state.maxValue)}))},a.setStartValue=function(t){a.setState({startValue:t,outputValue:'input value and press "set"',setDisable:!1,statusOutput:"textOutput"},(function(){return a.checkStartValue(a.state.startValue)}))},a.setValue=function(){a.setState({outputValue:a.state.startValue,setDisable:!0,resetDisable:!1,incrDisable:!1,statusOutput:"textOutput"})},a.incrementCounter=function(){a.setState({outputValue:Number(a.state.outputValue)+1},(function(){a.state.outputValue<a.state.maxValue?a.setState({incrDisable:!1,statusOutput:"textOutput"}):a.setState({incrDisable:!0,statusOutput:"max"})}))},a.resetCounter=function(){a.setState({incrDisable:!1,outputValue:a.state.outputValue,statusOutput:"textOutput"},(function(){return a.saveState()}))},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement("div",{className:O.a.Wrap},u.a.createElement(E,{errorButton:this.state.errorButton,startValue:this.state.startValue,maxValue:this.state.maxValue,setValue:this.setValue,setMaxValue:this.setMaxValue,setStartValue:this.setStartValue,errorStart:this.state.errorStart,errorMax:this.state.errorMax,setDisable:this.state.setDisable}),u.a.createElement(j,{errorButton:this.state.errorButton,outputValue:this.state.outputValue,setValue:this.setValue,incrementCounter:this.incrementCounter,resetDisable:this.state.resetDisable,incrDisable:this.state.incrDisable,resetCounter:this.resetCounter}),"statusOutput=",this.state.statusOutput)}}]),e}(u.a.Component),k=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:V.a.Wrap},u.a.createElement(M,null))}}]),e}(u.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(u.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.08192d3c.chunk.js.map