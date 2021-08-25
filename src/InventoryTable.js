import { Pagination } from "react-bootstrap";

const PAGINATION_LIMIT = 2;

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
                        inventories.slice(0, PAGINATION_LIMIT).map((inventory) =>
                            <tr key={Math.random()}>
                            <th scope="row"></th>
                            <td>{inventory.name}</td>
                            <td>{inventory.count}</td>
                            <td>{inventory.category}</td>
                            <td>{inventory.condition}</td>
                            <td>{inventory.section.label}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <Pagination>
                <Pagination.First />
                <Pagination.Prev />

                {

                    paginationLogic(inventories, 1)
                    // (() => {
                    //     let paginationItems = [];
                    //     for(let i=1; i<=Math.ceil(inventories.length/PAGINATION_LIMIT); i++){ 
                    //         paginationItems.push(<Pagination.Item key={i}>{i}</Pagination.Item>);
                    //     }

                    //     return paginationItems;
                    // })()
                }
                {/* <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item> */}

                <Pagination.Next onClick={paginationLogic} />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}

function paginationLogic(inventories, startVal) {
    let paginationItems = [];

    // PROPAGATE PAGINATION ON INSERT
    for(let i=startVal; i<=Math.ceil(inventories.length/PAGINATION_LIMIT); i++){ 
        paginationItems.push(<Pagination.Item key={i}>{i}</Pagination.Item>);

        if (true) {
            // IF ACTIVE = 1 to 4
        } else if (true) {
            // IF ACTIVE = 7 to N-4
        } else {
            // IF ACTIVE = N-3 to N
        }
    }

    return paginationItems;
}

export default InventoryTable