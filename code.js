function rotate () {    
logo.className += "logo";
panel1.style.transition = 'all 0.4s ease-in-out';
panel1.style.transform = 'translate(36px,-32px)';
panel2.style.transition = 'all 0.4s ease-in-out';
panel2.style.transform = 'translate(-41px,44px)';
panel3.style.transition = 'all 0.4s ease-in-out';
panel3.style.transform = 'translate(-36px, -30px)';
panel4.style.transition = 'all 0.4s ease-in-out';
panel4.style.transform = 'translate(44px,44px)';
panel1.style.visibility = 'visible';
panel2.style.visibility = 'visible';
panel3.style.visibility = 'visible';
panel4.style.visibility = 'visible';
};

function a () {
menu1.style.visibility = 'visible';
invi.style.visibility = 'hidden';
};

function b () {
menu1.style.visibility = 'hidden';
menu2.style.visibility = 'hidden';
menu3.style.visibility = 'hidden';
};

function f () {
menu3.style.visibility = 'visible';
invi.style.visibility = 'hidden';
};

function n () {
menu2.style.visibility = 'visible';
invitega.style.visibility = 'hidden';
};

function invitega () {
invi.className += "animated fadeOut";
};

setTimeout('invitega()', 1200);
