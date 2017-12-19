function validateForm(e){e.preventDefault(),requiredFields.forEach(function(e){0===e.value.length?(console.log(e.parentNode),e.parentNode.classList.add("has-error"),e.parentNode.getElementsByClassName("input-text-error")[0].style.display="block"):(e.parentNode.classList.remove("has-error"),e.parentNode.classList.add("has-success"),e.parentNode.getElementsByClassName("input-text-error")[0].innerText="OK")}),checkZip(),validateEmail(document.getElementById("email").value),validPhone(document.getElementById("phone").value),validAddress()}function checkZip(){var e=document.getElementById("field-zip");console.log(e.value,length);var t="",n=e.closest(".input-text");0===e.value.length?(t="Field Zip/Postal can not be blank",console.log(t),e.parentNode.classList.remove("has-success"),e.parentNode.classList.add("has-error"),n.querySelector("span").innerText=t):e.value.length<5?(t="Zip length too small",e.parentNode.classList.remove("has-success"),e.parentNode.classList.add("has-error"),e.parentNode.getElementsByClassName("input-text-error")[0].innerText=t):e.value.length>10?(t="Zip length too large",e.parentNode.classList.remove("has-success"),e.parentNode.classList.add("has-error"),e.parentNode.getElementsByClassName("input-text-error")[0].innerText=t,n.querySelector("span").innerText=t):(e.parentNode.classList.remove("has-error"),e.parentNode.classList.add("has-success")),""===e.value.match("[A-Z,a-z, ]*")[0]&&(t=NaN,e.parentNode.classList.add("has-error"),n.querySelector("span").innerText=t)}function validateEmail(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;console.log(t.test(e));var n=document.getElementById("email");t.test(e)?(n.parentNode.classList.remove("has-error"),n.parentNode.classList.add("has-success"),n.parentNode.getElementsByClassName("input-text-error")[0].style.display="none",console.log("OK")):(console.log("Error"),n.parentNode.classList.remove("has-success"),n.parentNode.classList.add("has-error"),n.parentNode.getElementsByClassName("input-text-error")[0].style.display="block",n.parentNode.getElementsByClassName("input-text-error")[0].innerText="E-mail cannot be blank")}function validPhone(e){var t=/^\+\d[\d\(\)\-]{10,13}\d$/;console.log(t.test(e));var n=document.getElementById("phone");t.test(e)?(n.parentNode.classList.remove("has-error"),n.parentNode.classList.add("has-success"),n.parentNode.getElementsByClassName("input-text-error")[0].style.display="none",console.log("OK")):(console.log("ERROR"),n.parentNode.classList.remove("has-success"),n.parentNode.classList.add("has-error"),n.parentNode.getElementsByClassName("input-text-error")[0].style.display="block",n.parentNode.getElementsByClassName("input-text-error")[0].innerText="Phone cannot be blank")}function validAddress(e){var t=document.getElementById("address");t.value.length>150?(t.parentNode.classList.remove("has-success"),t.parentNode.classList.add("has-error"),t.parentNode.getElementsByClassName("input-text-error")[0].style.display="block",t.parentNode.getElementsByClassName("input-text-error")[0].innerText="Address max 150 symbols"):(t.parentNode.classList.remove("has-error"),t.parentNode.classList.add("has-success"),t.parentNode.getElementsByClassName("input-text-error")[0].style.display="none")}function checkRadioBtn(e){var t=!1;return e.forEach(function(e,n){e.checked&&(t=!0)}),t}function calculate(){var e=calcForm.querySelector('[name="bed-rooms"]:checked').value;console.log(e);var t=calcForm.querySelector("[name=bath-rooms]:checked").value;console.log(t);var n=calcForm.querySelector("[name=dirty]:checked").dataset.rate;console.log(n);var s=calcForm.querySelector("[name=clean]:checked").dataset.price;console.log(s);var l=calcForm.querySelector("[name=clean]:checked").dataset.timeBed;console.log(l);var a=calcForm.querySelector("[name=clean]:checked").dataset.timeBath;console.log(a);var o=Math.round(e*l+a*t*n),r=Math.round(o)/60;r=Math.round(r),document.getElementById("time").innerHTML=r;var c=o/60*s;c=Math.round(c),document.getElementById("cost").innerHTML=c}function resultTotal(){for(var e=0,t=document.getElementsByClassName("number"),n=0;n<t.length;n++)if(0!=t[n].value){e+=t[n].value*t[n].parentNode.parentNode.getElementsByClassName("cost")[0].innerHTML}console.log(e),document.getElementById("total").innerHTML=e,document.getElementById("subtotal").innerHTML=e}!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){(s(e,t)?a:l)(e,t)}var s,l,a;"classList"in document.documentElement?(s=function(e,t){return e.classList.contains(t)},l=function(e,t){e.classList.add(t)},a=function(e,t){e.classList.remove(t)}):(s=function(e,n){return t(n).test(e.className)},l=function(e,t){s(e,t)||(e.className=e.className+" "+t)},a=function(e,n){e.className=e.className.replace(t(n)," ")});var o={hasClass:s,addClass:l,removeClass:a,toggleClass:n,has:s,add:l,remove:a,toggle:n};"function"==typeof define&&define.amd?define(o):e.classie=o}(window),function(e){"use strict";function t(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function n(e,n){this.el=e,this.options=t({},this.options),t(this.options,n),this._init()}n.prototype.options={newTab:!0,stickyPlaceholder:!0,onChange:function(e){return!1}},n.prototype._init=function(){var e=this.el.querySelector("option[selected]");this.hasDefaultPlaceholder=e&&e.disabled,this.selectedOpt=e||this.el.querySelector("option"),this._createSelectEl(),this.selOpts=[].slice.call(this.selEl.querySelectorAll("li[data-option]")),this.selOptsCount=this.selOpts.length,this.current=this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected"))||-1,this.selPlaceholder=this.selEl.querySelector("span.cs-placeholder"),this._initEvents()},n.prototype._createSelectEl=function(){var e="",t=function(e){var t="",n="",s="";return!e.selectedOpt||this.foundSelected||this.hasDefaultPlaceholder||(n+="cs-selected ",this.foundSelected=!0),e.getAttribute("data-class")&&(n+=e.getAttribute("data-class")),e.getAttribute("data-link")&&(s="data-link="+e.getAttribute("data-link")),""!==n&&(t='class="'+n+'" '),"<li "+t+s+' data-option data-value="'+e.value+'"><span>'+e.textContent+"</span></li>"};[].slice.call(this.el.children).forEach(function(n){if(!n.disabled){var s=n.tagName.toLowerCase();"option"===s?e+=t(n):"optgroup"===s&&(e+='<li class="cs-optgroup"><span>'+n.label+"</span><ul>",[].slice.call(n.children).forEach(function(n){e+=t(n)}),e+="</ul></li>")}});var n='<div class="cs-options"><ul>'+e+"</ul></div>";this.selEl=document.createElement("div"),this.selEl.className=this.el.className,this.selEl.tabIndex=this.el.tabIndex,this.selEl.innerHTML='<span class="cs-placeholder">'+this.selectedOpt.textContent+"</span>"+n,this.el.parentNode.appendChild(this.selEl),this.selEl.appendChild(this.el)},n.prototype._initEvents=function(){var e=this;this.selPlaceholder.addEventListener("click",function(){e._toggleSelect()}),this.selOpts.forEach(function(t,n){t.addEventListener("click",function(){e.current=n,e._changeOption(),e._toggleSelect()})}),document.addEventListener("click",function(t){var n=t.target;e._isOpen()&&n!==e.selEl&&!function(e,t){if(!e)return!1;for(var n=e.target||e.srcElement||e||!1;n&&n!=t;)n=n.parentNode||!1;return!1!==n}(n,e.selEl)&&e._toggleSelect()}),this.selEl.addEventListener("keydown",function(t){switch(t.keyCode||t.which){case 38:t.preventDefault(),e._navigateOpts("prev");break;case 40:t.preventDefault(),e._navigateOpts("next");break;case 32:t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&e._changeOption(),e._toggleSelect();break;case 13:t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&(e._changeOption(),e._toggleSelect());break;case 27:t.preventDefault(),e._isOpen()&&e._toggleSelect()}})},n.prototype._navigateOpts=function(e){this._isOpen()||this._toggleSelect();var t=void 0!==this.preSelCurrent&&-1!==this.preSelCurrent?this.preSelCurrent:this.current;("prev"===e&&t>0||"next"===e&&t<this.selOptsCount-1)&&(this.preSelCurrent="next"===e?t+1:t-1,this._removeFocus(),classie.add(this.selOpts[this.preSelCurrent],"cs-focus"))},n.prototype._toggleSelect=function(){this._removeFocus(),this._isOpen()?(-1!==this.current&&(this.selPlaceholder.textContent=this.selOpts[this.current].textContent),classie.remove(this.selEl,"cs-active")):(this.hasDefaultPlaceholder&&this.options.stickyPlaceholder&&(this.selPlaceholder.textContent=this.selectedOpt.textContent),classie.add(this.selEl,"cs-active"))},n.prototype._changeOption=function(){void 0!==this.preSelCurrent&&-1!==this.preSelCurrent&&(this.current=this.preSelCurrent,this.preSelCurrent=-1);var t=this.selOpts[this.current];this.selPlaceholder.textContent=t.textContent,this.el.value=t.getAttribute("data-value");var n=this.selEl.querySelector("li.cs-selected");n&&classie.remove(n,"cs-selected"),classie.add(t,"cs-selected"),t.getAttribute("data-link")&&(this.options.newTab?e.open(t.getAttribute("data-link"),"_blank"):e.location=t.getAttribute("data-link")),this.options.onChange(this.el.value)},n.prototype._isOpen=function(e){return classie.has(this.selEl,"cs-active")},n.prototype._removeFocus=function(e){var t=this.selEl.querySelector("li.cs-focus");t&&classie.remove(t,"cs-focus")},e.SelectFx=n}(window),[].slice.call(document.querySelectorAll("select.cs-select")).forEach(function(e){new SelectFx(e)});var menuOpen=document.getElementsByClassName("burger")[0];console.log(menuOpen);var menuFirst=document.getElementsByClassName("menu_list")[0];console.log(menuFirst);var menuNav=document.getElementsByClassName("info_boks")[0];console.log(menuNav);var menuAbout=document.getElementsByClassName("menu-about")[0];console.log(menuAbout);var menu=document.getElementById("menu-all");console.log(menu),null!==open&&menuOpen.addEventListener("click",function(e){e.preventDefault(),menuOpen.classList.toggle("active"),menu.classList.toggle("active"),document.body.style.overflow="hidden"});var open=document.getElementById("show-popup"),close=document.getElementById("hide-popup"),popup=document.getElementById("wrap-login");console.log(close),null!==open&&open.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("open"),document.getElementsByClassName("inner-wrap-container")[0].style.display="block",document.getElementsByClassName("inner-wrap-container")[0].style.position="fixed",document.body.classList.toggle("scroll");var t=window.pageYOffset||document.documentElement.scrollTop;console.log(t),window.scrollTo(0,0)}),null!==close&&close.addEventListener("click",function(e){popup.classList.toggle("open"),document.getElementsByClassName("inner-wrap-container")[0].style.display="none",document.body.classList.toggle("scroll")});var billingForm=document.getElementById("cart"),requiredFields=document.querySelectorAll("input[required], textarea[required]"),hasError="has-error";billingForm.addEventListener("submit",function(e){e.preventDefault()}),null!==billingForm&&billingForm.addEventListener("submit",validateForm);var calcForm=document.getElementById("form-calc");calcForm.addEventListener("submit",function(e){e.preventDefault();var t=document.getElementsByName("bed-rooms"),n=document.getElementsByName("bath-rooms"),s=document.getElementsByName("dirty"),l=document.getElementsByName("clean");return 0==checkRadioBtn(t)?(document.getElementById("error-calc").innerHTML="* Выберите количество спален комнат",!1):0==checkRadioBtn(n)?(document.getElementById("error-calc").innerHTML="* Выберите количество ванных комнат",!1):0==checkRadioBtn(s)?(document.getElementById("error-calc").innerHTML="* Выберите степень загрязнения",!1):0==checkRadioBtn(l)?(document.getElementById("error-calc").innerHTML="* Выберите тип очистки",!1):(document.getElementById("error-calc").innerHTML="",console.log("форма отработала"),void calculate())});var checkout=document.getElementById("id-product");checkout.addEventListener("submit",function(e){e.preventDefault(),console.log("форма отработала"),resultTotal()});var delOne=document.getElementsByClassName("del");console.log(delOne);for(var functionDelOne=function(){var e=this.nextElementSibling;if(e.value>0){var t=e.value-1;e.value=t}},addOne=document.getElementsByClassName("add"),functionAddOne=function(){var e=this.previousElementSibling,t=parseInt(e.value,10)+1;e.value=t},i=0;i<delOne.length;i++)delOne[i].addEventListener("click",functionDelOne,!1);for(i=0;i<addOne.length;i++)addOne[i].addEventListener("click",functionAddOne,!1);var removeBasket=document.getElementsByClassName("del-img");for(i=0;i<removeBasket.length;i++)removeBasket[i].addEventListener("click",function(e){e.preventDefault(),this.parentNode.remove()});