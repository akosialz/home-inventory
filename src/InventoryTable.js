const InventoryTable = ({inventories}) => {
    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Count</th>
                    <th scope="col">Category</th>
                    <th scope="col">Condition</th>
                    <th scope="col">Section</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map((inventory) =>
                            <tr key={Math.random()}>
                            <th scope="row"></th>
                            <td>{inventory.name}</td>
                            <td>{inventory.count}</td>
                            <td>{inventory.category}</td>
                            <td>{inventory.condition}</td>
                            <td>{inventory.section}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InventoryTable