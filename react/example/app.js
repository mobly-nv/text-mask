import React from 'react'
import MaskedInput from '../src/reactTextMask'
import createAutoCorrectedDatePipe from '../../addons/src/createAutoCorrectedDatePipe'

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy', {
  minYear: 1900,
  maxYear: new Date().getFullYear(),
})

export default () => (
  <form className='form-horizontal'>
    <div className='form-group'>
      <label htmlFor='1' className='col-sm-2 control-label'>Masked input</label>

      <div className='col-sm-10'>
        <MaskedInput
          keepCharPositions
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          placeholder='dd/mm/yyyy'
          className='form-control'
          id='1'
          pipe={autoCorrectedDatePipe}
          type='text'
        />
      </div>
    </div>
  </form>
)
