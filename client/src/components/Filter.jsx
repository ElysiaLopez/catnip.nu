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
        className="bg-white rounded-xl shadow-md p-6 border-gray-200 border-4 "
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
                <Input className="border-gray-100 border-2 rounded-md p-2" placeholder="Choose a Location" />
            </InputGroup>
            <br />
            <h2 className="font-bold text-left">Tags</h2>
            <InputGroup className="flex justify-start flex-wrap">
                <div className="mr-4">
                <Input
                    addon
                    aria-label="Checkbox for following text input"
                    type="checkbox"
                />
                <p className="inline"> Free Food </p>
                </div>
                <div className="mr-4">
                <Input
                    addon
                    aria-label="Checkbox for following text input"
                    type="checkbox"
                />
                <p className="inline"> Free Food </p>
                </div>
                <div className="mr-4">
                <Input
                    addon
                    aria-label="Checkbox for following text input"
                    type="checkbox"
                />
                <p className="inline"> Free Food </p>
                </div>
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