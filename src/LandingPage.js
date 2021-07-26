import InventoryTable from './InventoryTable'
import InventoryChart from './InventoryChart'
import SideMenu from './SideMenu'
import FunctionBar from './FunctionBar'
import ModalFields from './ModalFields'
import Modal from './Modal'

const LandingPage = () => {
    return (
        <>
            <div><SideMenu /></div>
            <div><FunctionBar /></div>
            <div><Modal /></div>
            <div><ModalFields /></div>
            <div><InventoryTable /></div>
            <div><InventoryChart /></div>
        </>
    )
}

export default LandingPage
