// https://www.w3.org/TR/html5/interactive-elements.html#context-menus
// Demo at https://thewebrocks.com/demos/context-menu/
Modernizr.addTest(
  'contextmenu', 
  ('contextMenu' in document.documentElement && 'HTMLMenuItemElement' in window) 
);





