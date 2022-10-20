const mdLinks= require("/Users/enchantress/Desktop/Laboratoria/SCL021-md-links/bin/index.js")
const testerPath = require("filesTest");

// Test 
describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  })
});

describe('testerPath'), () => {
  it('is a folder', () => {
    expect(typeof testerPath).toBe('folder');
  })
};


