describe('calculateMonthlyPayment tests', function() {
  it('should calculate the monthly rate correctly', function () {
    const values1 = {amount: 100000, years: 30, rate: 5};
    const values2 = {amount: 500000, years: 25, rate: 6};
    expect(calculateMonthlyPayment(values1)).toEqual('536.82');
    expect(calculateMonthlyPayment(values2)).toEqual('3221.51');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values3 = {amount: 2200000.89, years: 15, rate: 4.788};
    const values4 = {amount: 123123.12, years: 40, rate: 9.56};
    expect(calculateMonthlyPayment(values3)).toEqual('17155.48');
    expect(calculateMonthlyPayment(values4)).toEqual('1003.12');
  });

  it('should reject invalid incomes', function() {
    const values5 = {amount: 'djasdkja', years: 10, rate: 5};
    const values6 = {amount: 1000, years: [], rate: 5};
    const values7 = {amount: 1000, years: 10, rate: true};
    expect(() => calculateMonthlyPayment(values5)).toThrowError();
    expect(() => calculateMonthlyPayment(values6)).toThrowError();
    expect(() => calculateMonthlyPayment(values7)).toThrowError();
  })

  
})


