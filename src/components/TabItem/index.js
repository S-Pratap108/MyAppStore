// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, getUpdatedActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onSelectingTab = () => {
    getUpdatedActiveTab(tabId)
  }

  const selectedBtn = isActive ? 'heighlited' : ''

  return (
    <li className="tab-Item-cont" key={tabId}>
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
