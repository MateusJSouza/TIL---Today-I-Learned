import crossIcon from '../../../assets/icons/crossIcon.svg'
import checkIcon from '../../../assets/icons/checkIcon.svg'

export function Todo() {
  return (
    <div className="">
      <div className="">
        <img src={checkIcon} alt="" />
      </div>

      <li className="">Example</li>

      <img src={crossIcon} alt="delete icon" />
    </div>
  )
}