import { useState } from 'react';

import InventoryTable from './InventoryTable'
import InventoryChart from './InventoryChart'
import SideMenu from './SideMenu'
import FunctionBar from './FunctionBar'

const LandingPage = () => {

    const [inventories, setInventories] = useState([]);

    return (
        <>
            <div><SideMenu /></div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <FunctionBar inventories={inventories} insertItem={setInventories}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <InventoryTable inventories={inventories}/>
                    </div>
                    <div className="col">
                        <InventoryChart inventories={inventories} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
