import Calculator from '../components/Calculator'
import { mount } from '@vue/test-utils'

describe('Calculator logic test', () => {
  test('Input test', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name="op1"]')
    operand1.setValue('10')

    expect(Wrapper.vm.operand1).toBe('10')
  })
  test('Test sum operation', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name=op1]')
    operand1.setValue('10')

    const operand2 = Wrapper.find('input[name=op2]')
    operand2.setValue('5')

    const sumBtn = Wrapper.find('button[name="+"]')
    sumBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(15)
  })
  test('Test minus operation', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name=op1]')
    operand1.setValue('10')

    const operand2 = Wrapper.find('input[name=op2]')
    operand2.setValue('5')

    const minBtn = Wrapper.find('button[name="-"]')
    minBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(5)
  })
  test('Test divide operation', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name=op1]')
    operand1.setValue('10')

    const operand2 = Wrapper.find('input[name=op2]')
    operand2.setValue('5')

    const divBtn = Wrapper.find('button[name="/"]')
    divBtn.trigger('click')
    expect(Wrapper.vm.result).toEqual(2)
  })
  test('Test multiple operation', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name=op1]')
    operand1.setValue('10')

    const operand2 = Wrapper.find('input[name=op2]')
    operand2.setValue('5')

    const multBtn = Wrapper.find('button[name="*"]')
    multBtn.trigger('click')
    expect(Wrapper.vm.result).toEqual(50)
  })
  test('Test degree operation', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name=op1]')
    operand1.setValue('10')

    const operand2 = Wrapper.find('input[name=op2]')
    operand2.setValue('5')

    const degBtn = Wrapper.find('button[name="^"]')
    degBtn.trigger('click')
    expect(Wrapper.vm.result).toEqual(100000)
  })
  test('Test integer divide operation', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name=op1]')
    operand1.setValue('10')

    const operand2 = Wrapper.find('input[name=op2]')
    operand2.setValue('5')

    const intDivBtn = Wrapper.find('button[name="div"]')
    intDivBtn.trigger('click')
    expect(Wrapper.vm.result).toEqual(2)
  })
  test('Test divide by zero', () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name="op1"]')
    operand1.setValue('1')

    const operand2 = Wrapper.find('input[name="op2"]')
    operand2.setValue('0')

    const divBtn = Wrapper.find('button[name="/"]')
    divBtn.trigger('click')

    expect(Wrapper.vm.error).toEqual('На 0 делить нельзя')
  })
})
