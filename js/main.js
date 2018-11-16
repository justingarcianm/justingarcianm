var myTabs = document.querySelectorAll('.links li a');
function myTabClicks(tabClickEvent) {
	for (var i = 0; i < myTabs.length; i++) {
		myTabs[i].classList.remove('active');
	}
	var clickedTab = tabClickEvent.currentTarget;
	clickedTab.classList.add('active');
	tabClickEvent.preventDefault();
	var myContentPanels = document.querySelectorAll('.content');
	for (i = 0; i < myContentPanels.length; i++) {
		myContentPanels[i].classList.remove('active');
	}
	var anchorReference = tabClickEvent.target;
	var activePanelId = anchorReference.getAttribute('href');
	var activePanel = document.querySelector(activePanelId);
	activePanel.classList.add('active');
}
for (i = 0; i < myTabs.length; i++) {
	myTabs[i].addEventListener('click', myTabClicks);
}
