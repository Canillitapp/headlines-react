const xhrMockClass = () => ({
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn(),
  addEventListener: jest.fn()
});

global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
