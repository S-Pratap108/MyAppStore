// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, getUpdatedActiveTab} = props
  const {tabID, displayText} = tabDetails

  const onSelectingTab = () => {
    getUpdatedActiveTab(tabID)
  }

  const selectedBtn = isActive ? 'heighlited' : ''

  return (
    <li className="tab-Item-cont" key={tabID}>
      <button
        className={`btn ${selectedBtn}`}
        type="button"
        onClick={onSelectingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
