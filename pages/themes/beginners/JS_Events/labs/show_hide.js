var paragraph_state = 1;  
// 1 = is visible; 0 = invisible;

function ShowHide(node){
	if ( paragraph_state == 1){
		Hide(node);
		paragraph_state = 0;
	}else{
		Show(node);
		paragraph_state = 1;
	}

}
function Hide(btn) {
	var p = btn.previousElementSibling;

	p.style.display = "none";
	btn.textContent = "Show";
}
function Show(btn) {
	var p = btn.previousElementSibling;
	
	p.style.display = "block";
	btn.textContent = "Hide";
}
