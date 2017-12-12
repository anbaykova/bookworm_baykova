/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * selectFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	/**
	 * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
	 */
	function hasParent( e, p ) {
		if (!e) return false;
		var el = e.target||e.srcElement||e||false;
		while (el && el != p) {
			el = el.parentNode||false;
		}
		return (el!==false);
	};
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * SelectFx function
	 */
	function SelectFx( el, options ) {	
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * SelectFx options
	 */
	SelectFx.prototype.options = {
		// if true all the links will open in a new tab.
		// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
		newTab : true,
		// when opening the select element, the default placeholder (if any) is shown
		stickyPlaceholder : true,
		// callback when changing the value
		onChange : function( val ) { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	SelectFx.prototype._init = function() {
		// check if we are using a placeholder for the native select box
		// we assume the placeholder is disabled and selected by default
		var selectedOpt = this.el.querySelector( 'option[selected]' );
		this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

		// get selected option (either the first option with attr selected or just the first option)
		this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

		// create structure
		this._createSelectEl();

		// all options
		this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
		
		// total options
		this.selOptsCount = this.selOpts.length;
		
		// current index
		this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
		
		// placeholder elem
		this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

		// init events
		this._initEvents();
	}

	/**
	 * creates the structure for the select element
	 */
	SelectFx.prototype._createSelectEl = function() {
		var self = this, options = '', createOptionHTML = function(el) {
			var optclass = '', classes = '', link = '';

			if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
				classes += 'cs-selected ';
				this.foundSelected = true;
			}
			// extra classes
			if( el.getAttribute( 'data-class' ) ) {
				classes += el.getAttribute( 'data-class' );
			}
			// link options
			if( el.getAttribute( 'data-link' ) ) {
				link = 'data-link=' + el.getAttribute( 'data-link' );
			}

			if( classes !== '' ) {
				optclass = 'class="' + classes + '" ';
			}

			return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
		};

		[].slice.call( this.el.children ).forEach( function(el) {
			if( el.disabled ) { return; }

			var tag = el.tagName.toLowerCase();

			if( tag === 'option' ) {
				options += createOptionHTML(el);
			}
			else if( tag === 'optgroup' ) {
				options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
				[].slice.call( el.children ).forEach( function(opt) {
					options += createOptionHTML(opt);
				} );
				options += '</ul></li>';
			}
		} );

		var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
		this.selEl = document.createElement( 'div' );
		this.selEl.className = this.el.className;
		this.selEl.tabIndex = this.el.tabIndex;
		this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
		this.el.parentNode.appendChild( this.selEl );
		this.selEl.appendChild( this.el );
	}

	/**
	 * initialize the events
	 */
	SelectFx.prototype._initEvents = function() {
		var self = this;

		// open/close select
		this.selPlaceholder.addEventListener( 'click', function() {
			self._toggleSelect();
		} );

		// clicking the options
		this.selOpts.forEach( function(opt, idx) {
			opt.addEventListener( 'click', function() {
				self.current = idx;
				self._changeOption();
				// close select elem
				self._toggleSelect();
			} );
		} );

		// close the select element if the target it´s not the select element or one of its descendants..
		document.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
				self._toggleSelect();
			}
		} );

		// keyboard navigation events
		this.selEl.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;

			switch (keyCode) {
				// up key
				case 38:
					ev.preventDefault();
					self._navigateOpts('prev');
					break;
				// down key
				case 40:
					ev.preventDefault();
					self._navigateOpts('next');
					break;
				// space key
				case 32:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
					}
					self._toggleSelect();
					break;
				// enter key
				case 13:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
						self._toggleSelect();
					}
					break;
				// esc key
				case 27:
					ev.preventDefault();
					if( self._isOpen() ) {
						self._toggleSelect();
					}
					break;
			}
		} );
	}

	/**
	 * navigate with up/dpwn keys
	 */
	SelectFx.prototype._navigateOpts = function(dir) {
		if( !this._isOpen() ) {
			this._toggleSelect();
		}

		var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
		
		if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
			// save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
			this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
			// remove focus class if any..
			this._removeFocus();
			// add class focus - track which option we are navigating
			classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
		}
	}

	/**
	 * open/close select
	 * when opened show the default placeholder if any
	 */
	SelectFx.prototype._toggleSelect = function() {
		// remove focus class if any..
		this._removeFocus();
		
		if( this._isOpen() ) {
			if( this.current !== -1 ) {
				// update placeholder text
				this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
			}
			classie.remove( this.selEl, 'cs-active' );
		}
		else {
			if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
				// everytime we open we wanna see the default placeholder text
				this.selPlaceholder.textContent = this.selectedOpt.textContent;
			}
			classie.add( this.selEl, 'cs-active' );
		}
	}

	/**
	 * change option - the new value is set
	 */
	SelectFx.prototype._changeOption = function() {
		// if pre selected current (if we navigate with the keyboard)...
		if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
			this.current = this.preSelCurrent;
			this.preSelCurrent = -1;
		}

		// current option
		var opt = this.selOpts[ this.current ];

		// update current selected value
		this.selPlaceholder.textContent = opt.textContent;
		
		// change native select element´s value
		this.el.value = opt.getAttribute( 'data-value' );

		// remove class cs-selected from old selected option and add it to current selected option
		var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
		if( oldOpt ) {
			classie.remove( oldOpt, 'cs-selected' );
		}
		classie.add( opt, 'cs-selected' );

		// if there´s a link defined
		if( opt.getAttribute( 'data-link' ) ) {
			// open in new tab?
			if( this.options.newTab ) {
				window.open( opt.getAttribute( 'data-link' ), '_blank' );
			}
			else {
				window.location = opt.getAttribute( 'data-link' );
			}
		}

		// callback
		this.options.onChange( this.el.value );
	}

	/**
	 * returns true if select element is opened
	 */
	SelectFx.prototype._isOpen = function(opt) {
		return classie.has( this.selEl, 'cs-active' );
	}

	/**
	 * removes the focus class from the option
	 */
	SelectFx.prototype._removeFocus = function(opt) {
		var focusEl = this.selEl.querySelector( 'li.cs-focus' )
		if( focusEl ) {
			classie.remove( focusEl, 'cs-focus' );
		}
	}

	/**
	 * add to global namespace
	 */
	window.SelectFx = SelectFx;

} )( window );

/**
 * Created by D&A on 07.12.2017.
 */
(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );
})();

"use strict";

var menuOpen = document.getElementsByClassName("burger")[0];
console.log(menuOpen);
var menuFirst = document.getElementsByClassName("menu_list")[0];
console.log(menuFirst);
var menuNav = document.getElementsByClassName("info_boks")[0];
console.log(menuNav);
var menuAbout = document.getElementsByClassName("menu-about")[0];
console.log(menuAbout);
var menu = document.getElementById('menu-all');
console.log(menu);


if (open !== null) {
    menuOpen.addEventListener("click", function (event) {
        event.preventDefault();
        menuOpen.classList.toggle("active")
        // openMenu.classList.toggle("active");
        // menuNav.classList.toggle("active");
        // menuFirst.classList.toggle("active");
        // menuAbout.classList.toggle("active");
        // openMenu.classList.toggle("active");
        // sample.classList.toggle("active");
           menu.classList.toggle("active");
    })
}
// function openNav() {
//     document.getElementById('menu-all').style.width = "740px";
// }
// function closeNav() {
//
// }
// menuburger.onclick = function () {
//     sample.classList.toggle("active");
// }
// $(".burger").on("click", function() {
//     $(this).toggleClass("active");
//     $(".menu_list").toggleClass("open");
// })
// menuOpen.classList.toggle("active").style.transition = 'all 0.3s ease-in-out';
"use strict";
var open = document.getElementById("show-popup");
var close = document.getElementById("hide-popup");
var popup = document.getElementById("wrap-login");

console.log(close);

if (open !== null) {

    open.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.toggle("open");
        // document.body.setAttribute("style", "overflow: hidden;");

        document.getElementsByClassName("inner-wrap-container")[0].style.display = 'block';

        document.body.classList.toggle("scroll");
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        window.scrollTo(0,0);
    });
}
if (close !== null) {
    close.addEventListener("click", function (event) {
        popup.classList.toggle("open");
        // document.body.setAttribute("style", "overflow: scroll;");
        document.getElementsByClassName("inner-wrap-container")[0].style.display = 'none';
        document.body.classList.toggle("scroll");
    });
}








"use strict";

var billingForm = document.getElementById("cart");
var requiredFields = document.querySelectorAll("input[required], textarea[required]");
console.log(requiredFields);
var hasError = "has-error";

// var validateEmail = document.getElementById("email");
// var ValidPhone = document.getElementById('tel');

billingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("вася");
});

if(billingForm !== null){
    billingForm.addEventListener("submit", valideteForm);
}

function valideteForm(event) {
    event.preventDefault();
    console.log("петя");
    requiredFields.forEach(function (element) {
        if (element.value.length === 0) {
            element.parentNode.classList.add('has-error');
            // element.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            // console.log(element);
        }
        else {
            element.parentNode.classList.remove('has-error');
            element.parentNode.classList.add('has-success');
            // element.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            element.parentNode.getElementsByClassName("input-text-error")[0].innerText = 'OK';
        }
    });
    checkZip();
    validateEmail(document.getElementById("email").value);
    validPhone(document.getElementById("phone").value);
    validAddress();
}

function checkZip() {
    var zip = document.getElementById('field-zip');
    console.log(zip.value,length);
    var message = "";
    var parent = zip.closest('.input-text');

    if(zip.value.length === 0) {
        message = "Field Zip/Postal can not be blank";
        console.log(message);
        // zip.style.borderBottom = '1px solid #555963';
        // zip.style.color = '#959ba1';
        zip.parentNode.classList.remove('has-success');
        zip.parentNode.classList.add('has-error');
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        parent.querySelector('span').innerText = message;
    } else if (zip.value.length < 5) {
        message = "Zip length too small";
        // zip.style.borderBottom = '1px solid #555963';
        // zip.style.color = '#959ba1';
        zip.parentNode.classList.remove('has-success');
        zip.parentNode.classList.add('has-error');
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        zip.parentNode.getElementsByClassName("input-text-error")[0].innerText =message ;
        // console.log(parent);
        // console.log(parent.querySelectorAll('span'));
    } else if (zip.value.length > 10) {
        message = "Zip length too large";
        // zip.style.borderBottom = '1px solid #555963';
        // zip.style.color = '#959ba1';
        zip.parentNode.classList.remove('has-success');
        zip.parentNode.classList.add('has-error');
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        zip.parentNode.getElementsByClassName("input-text-error")[0].innerText =message ;
        parent.querySelector('span').innerText = message;
    } else {
        zip.parentNode.classList.remove('has-error');
        zip.parentNode.classList.add('has-success');
        // zip.style.borderBottom = '1px solid green';
        // zip.style.color = 'green';
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';
        // zip.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Ok" ;
    }
    if (zip.value.match('[A-Z,a-z, ]*')[0] === "") {
        message =+ " Invalid value: support only string";
        zip.parentNode.classList.add('has-error');
        parent.querySelector('span').innerText = message;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log( re.test(email));
    var emailInp = document.getElementById('email');
    // return re.test(email);
    if (re.test(email))
    {
        emailInp.parentNode.classList.remove('has-error');
        emailInp.parentNode.classList.add('has-success');
        emailInp.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';
        console.log('OK');
    }else{
        console.log('Error');
        emailInp.parentNode.classList.remove('has-success');
        emailInp.parentNode.classList.add('has-error');
        emailInp.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        emailInp.parentNode.getElementsByClassName("input-text-error")[0].innerText ="E-mail cannot be blank";
    }

}

function validPhone(phone) {
    var re = /^\+\d[\d\(\)\-]{10,13}\d$/;
    console.log(re.test(phone));
    var myPhone = document.getElementById("phone");
    // return re.test(myPhone);
    if (re.test(phone))
    {
        myPhone.parentNode.classList.remove('has-error');
        myPhone.parentNode.classList.add('has-success');
        myPhone.parentNode.getElementsByClassName('input-text-error')[0].style.display = 'none';
        console.log('OK');
    }else {
        console.log('ERROR');
        myPhone.parentNode.classList.remove('has-success');
        myPhone.parentNode.classList.add('has-error');
        myPhone.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        myPhone.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Phone cannot be blank";

    }
}
function validAddress(text) {
    var address = document.getElementById("address");
    if (address.value.length > 150) {
        address.parentNode.classList.remove('has-success');
        address.parentNode.classList.add('has-error');
        address.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        address.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Address max 150 symbols";
    }else{
        address.parentNode.classList.remove('has-error');
        address.parentNode.classList.add('has-success');
        address.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';

    }
}




// billingForm.addEventListener('submit', valideteForm);
// bilingForm.removeEventListener('submit', valideteForm);
// if(! ValidPhone(document.getElementById('tel').value))
// {
//     console.log("Заполните поле корректно!");
// }
"use strict";
var calcForm = document.getElementById("form-calc");

calcForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var bedRooms = document.getElementsByName("bed-rooms");
    var bathRooms = document.getElementsByName("bath-rooms");
    var dirtyRooms = document.getElementsByName("dirty");
    var cleanRooms = document.getElementsByName("clean");


    if(checkRadioBtn(bedRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите количество спален комнат";
        return false;
    } else {
        // document.getElementById('error-calc').innerHTML = "Количество спален выбрано";
    }

    if(checkRadioBtn(bathRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите количество ванных комнат";
        return false;
    }
    if(checkRadioBtn(dirtyRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите степень загрязнения";
        return false;
    }
    if(checkRadioBtn(cleanRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите тип очистки";
        return false;
    }
    document.getElementById('error-calc').innerHTML = "";
    console.log("форма отработала");
    calculate();
});

function  checkRadioBtn(arrInp) {
    var checkResult = false;
    arrInp.forEach(function(item, index){
        if(item.checked)
        {
            checkResult = true;
        }
    });

    return checkResult;
}

function calculate () {
    var bedroom = calcForm.querySelector('[name="bed-rooms"]:checked').value;
    console.log(bedroom);
    var bath = calcForm.querySelector('[name=bath-rooms]:checked').value;
    console.log(bath);
    var dirty = calcForm.querySelector('[name=dirty]:checked').dataset.rate;
    console.log(dirty);
    var price = calcForm.querySelector('[name=clean]:checked').dataset.price;
    console.log(price);
    var timeRoom = calcForm.querySelector('[name=clean]:checked').dataset.timeBed;
    console.log(timeRoom);
    var timeBath = calcForm.querySelector('[name=clean]:checked').dataset.timeBath;
    console.log(timeBath);
    var result = Math.round((bedroom * timeRoom) + (timeBath * bath) * dirty);
    var time = Math.round(result) / 60;
    time = Math.round(time);
    document.getElementById('time').innerHTML = time;
    var cost = (result / 60) * price;
    cost = Math.round(cost);
    document.getElementById('cost').innerHTML = cost;


}


// var inputs = document.getElementsByTagName('input');
// var anyCheck = 0;
// for (var i=0; i<inputs.length; i++)
// {
//     var inp = inputs[i];
//     if ("radio"==inp.type && inp.checked) { anyCheck=1; break; }
// }
// alert(anyCheck ? 'Есть отмеченные' : 'Нет отмеченных');
// document.getElementById('error-calc').innerHTML = inp;


// if(calcForm !== null){
//     calcForm.addEventListener("submit", calculate)
//         }
// else {
//     calcForm.getElementsByClassName("error-calc")[0].innerText = "Cannot be blank";
// //     console.log(bedroom);
// }

// function valideteCalc(event) {
//     event.preventDefault();
//     console.log('anna');
//
// }
// if(bedroom == 0) {
//     calcForm.getElementsByClassName("error-calc")[0].innerText ="E-mail cannot be blank";
//     console.log(bedroom);
// }else  {
//     console.log('выполнено');
// }
// if (bedroom=="" || bedroom==null, bath=="" || bath==null, dirtlvl=="" || dirtlvl==null){
//     alert('не все поля отмечены');
//     return false;
// } else {
//     alert('поля заполнены');
// }

//empty fields



// function calcPrime (room, bath, dirty, timeRoom, timeBath) {
//     return (bedroom + timeRoom) + (timeBath * bath) * dirty;
// }

// function calculate() {
//     var bedroom, bath, dirtlvl, cleantype, result;
//     bedroom = document.getElementsByName('bed-rooms');
//     for (var i=0;i<bedroom.length; i++) {
//         if (bedroom[i].checked) {
//             bedroom =bedroom[i].value ;
//         }
//     }
//     bath = document.getElementsByName('bath-rooms');
//     for (var i=0;i<bath.length; i++) {
//         if (bath[i].checked) {
//             bath=bath[i].value;
//         }
//     }
//     dirtlvl = document.getElementsByName('dirty');
//     for (var i=0;i<dirtlvl.length; i++) {
//         if (dirtlvl[i].checked) {
//             dirtlvl=dirtlvl[i].value;
//             console.log(dirtlvl);
//         }
//     }




"use strict";
var checkout = document.getElementById("id-product");
checkout.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("форма отработала");
    resultTotal();
});
var delOne = document.getElementsByClassName('del');
console.log(delOne);

var functionDelOne  = function () {
    var currInp = this.nextElementSibling;
    if (currInp.value > 0) {
        var res = currInp.value - 1;
        currInp.value = res;
    }
}

var addOne = document.getElementsByClassName('add');

var functionAddOne  = function () {
    var currInp = this.previousElementSibling;
    var res = parseInt(currInp.value, 10) + 1;
    currInp.value = res;

}


for (var i = 0; i < delOne.length; i++) {
    // console.log(delAll[i]);
    delOne[i].addEventListener('click', functionDelOne, false);
}
for (var i = 0; i < addOne.length; i++) {
    // console.log(delAll[i]);
    addOne[i].addEventListener('click', functionAddOne, false);
}







function resultTotal() {
    var remove1 = document.getElementById('del1').value;
    console.log(remove1);
    var remove2 = document.getElementById('del2').value;
    console.log(remove2);
    var remove3 = document.getElementById('del3').value;
    console.log(remove3);
    var append1 = document.getElementById('add1').value;
    console.log(append1);
    var append2 = document.getElementById('add1').value;
    console.log(append2);
    var append3 = document.getElementById('add1').value;
    console.log(append3);
    var number1 = document.getElementsByClassName('number1')[0].value;
    console.log(number1);
    var number2 = document.getElementsByClassName('number2')[0].value;
    console.log(number2);
    var number3 = document.getElementsByClassName('number3')[0].value;
    console.log(number3);
    var cost1 = document.getElementById('cost1').innerHTML;
    console.log(cost1);
    var cost2 = document.getElementById('cost2').innerHTML;
    console.log(cost2);
    var cost3 = document.getElementById('cost3').innerHTML;
    console.log(cost3);

    var totalEnd = (number1 * cost1) + (number2 * cost2) + (number3 * cost3);
    console.log(totalEnd);
    document.getElementById('total').innerHTML = totalEnd;
}
// var subtotal = document.getElementById('subtotal').value;
// console.log(subtotal);
// var total = document.getElementById('total').value;
// console.log(total);