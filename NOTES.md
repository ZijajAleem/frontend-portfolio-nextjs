# Accessibility Playground Notes

## What I learned from shadcn/ui

I built my own Modal Dialog and Tabs components from scratch using React and TypeScript. After installing shadcn/ui and reading its generated Dialog and Tabs source code, I noticed several accessibility features that required more careful implementation than my first versions.

### 1. Focus management

My first Modal implementation needed extra code to manage keyboard focus. I had to manually focus the first element, keep focus inside the dialog, and return focus to the button that opened the modal.

The shadcn Dialog component provides built-in focus management through its underlying component primitives, so these behaviors do not have to be implemented manually.

### 2. Focus trapping

My Modal required custom code to detect Tab and Shift + Tab and keep focus inside the dialog.

The shadcn Dialog handles this focus behavior for the dialog, reducing the amount of accessibility code I need to write myself.

### 3. Keyboard behavior

My Tabs component required custom keyboard handling for Arrow Left, Arrow Right, Home, and End.

The shadcn Tabs component provides keyboard interaction as part of its component behavior, so the developer does not have to implement all of the keyboard navigation from scratch.

### 4. Accessibility attributes and relationships

In my own components, I had to manually add attributes such as `role`, `aria-modal`, `aria-labelledby`, `aria-selected`, `aria-controls`, and `role="tabpanel"`.

The shadcn components provide the necessary structure and accessibility behavior through their underlying primitives.

## Conclusion

Building the components myself helped me understand what accessibility features are required. Reading shadcn's generated source showed me that accessible components require more than just making something work with a mouse. Focus management, keyboard interaction, and correct relationships between elements are important parts of an accessible UI.