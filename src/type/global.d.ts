// types.d.ts or any other .d.ts file in your project

// Extend the Window interface
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    dataLayer: any[]
  }
}

export {} // This file is a module and has its own scope
