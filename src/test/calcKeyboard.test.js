import Calculator from '../components/Calculator'
import { mount } from '@vue/test-utils'
import 'regenerator-runtime/runtime'

describe('Keyboard functions test', () => {
  test('Checkbox test', async () => {
    const Wrapper = mount(Calculator)

    const checkbox = Wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    expect(checkbox.element.checked).toBeTruthy()
  })
  test('Test key1 operand 1', async () => {
    const Wrapper = mount(Calculator)

    const checkbox = Wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    const key1Btn = Wrapper.find('button[name="1"]')
    key1Btn.trigger('click')

    expect(Wrapper.vm.operand1).toEqual('1')
  })
  test('Radio buttons test', async () => {
    const Wrapper = mount(Calculator)

    const checkbox = Wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    const radioBtn = Wrapper.find('input[id="op1"]')
    await radioBtn.setChecked()

    expect(radioBtn.element.checked).toBeTruthy()
  })
  test('Test key2 operand 2', async () => {
    const Wrapper = mount(Calculator)

    const checkbox = Wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    const radioOperand2 = Wrapper.find('input[id="op2"]')
    await radioOperand2.setChecked()

    const key2Btn = Wrapper.find('button[name="2"]')
    key2Btn.trigger('click')

    expect(Wrapper.vm.operand2).toEqual('2')
  })
  test('Clear button operand 1 test', async () => {
    const Wrapper = mount(Calculator)

    const operand1 = Wrapper.find('input[name="op1"]')
    operand1.setValue('111')

    const checkbox = Wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    const clearBtn = Wrapper.find('button[class="clearButton"]')
    clearBtn.trigger('click')

    expect(Wrapper.vm.operand1).toEqual('11')
  })
  test('Clear button operand 2 test', async () => {
    const Wrapper = mount(Calculator)

    const operand2 = Wrapper.find('input[name="op2"]')
    operand2.setValue('111')

    const checkbox = Wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()

    const radioBtn = Wrapper.find('input[id="op2"]')
    await radioBtn.setChecked()

    const clearBtn = Wrapper.find('button[class="clearButton"]')
    clearBtn.trigger('click')

    expect(Wrapper.vm.operand2).toEqual('11')
  })
})
