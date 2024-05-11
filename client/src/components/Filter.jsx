import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    InputGroup,
    InputGroupText,
    Input,
    Button
  } from 'reactstrap';

function Filter() {
    return (
        <>
        <Card
        body
        outline
        className="bg-white rounded-xl shadow-md p-6 border-gray-200 border-4 w-80"
        >
        <CardBody>
            <CardTitle tag="h5">
            <h1 className="text-xl font-bold mb-6 text-primary">Filter</h1>
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            <h2 className="font-bold text-left">Filter events by...</h2>
            </CardSubtitle>
            <div>
            <InputGroup >
                <Input className="border-gray-100 border-2 rounded-md p-2" placeholder="Search Organization" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText><h2 className="font-bold text-left">Location</h2></InputGroupText>
                <select className="border-gray-100 border-2 rounded-md p-2 w-48 h-10">
                    <option selected className="text-gray-300">Choose a Location</option>
                    <option value="Norris">Norris</option>
                    <option value="Rock">The Arch</option>
                    <option value="Arch">The Rock</option>
                    <option value="Tech">Tech</option>
                </select>
            </InputGroup>
            <br />
            <h2 className="font-bold text-left">Tags</h2>
            <InputGroup>
            <span id="badge-dismiss-default" className="inline-flex items-center px-2 py-1 me-2 text-sm text-white bg-blue-400 rounded-xl">
                Free Food
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-white bg-transparent rounded-xl hover:text-black " data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </button>
                </span>
                <span id="badge-dismiss-default" className="inline-flex  items-center px-2 py-1 me-2 text-sm text-white bg-purple-400 rounded-xl">
                Event
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-white bg-transparent rounded-xl hover:text-black" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </button>
                </span>

                <span id="badge-dismiss-default" className="inline-flex  items-center px-2 py-1 my-1 me-2 text-sm text-white bg-tertiary rounded-xl">
                Religious
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-white bg-transparent rounded-xl hover:text-black" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </button>
                </span>

                <span id="badge-dismiss-default" className="inline-flex  items-center px-2 py-1 me-2 my-1 text-sm text-white bg-yellow-400 rounded-xl">
                Performance
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-white bg-transparent rounded-xl hover:text-black" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </button>
                </span>
            </InputGroup>
            <br />
            </div>
            <Button className="bg-secondary transition ease-in-out duration-200 hover:bg-white hover:text-primary hover:shadow-lg p-2 px-4 rounded-lg font-bold text-white">Search</Button>
        </CardBody>
        </Card>
        </>
    );
}

export default Filter;