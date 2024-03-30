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
        >
        <CardBody>
            <CardTitle tag="h5">
            Filter
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Filter events by...
            </CardSubtitle>
            <div>
            <InputGroup>
                <Input placeholder="Organization" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>Category</InputGroupText>
                <Input placeholder="Dropdown menu" />
            </InputGroup>
            <br />
            <InputGroup>
                <Input
                    addon
                    aria-label="Checkbox for following text input"
                    type="checkbox"
                />
                 Free Food
            </InputGroup>
            <br />
            </div>
            <Button>Search</Button>
        </CardBody>
        </Card>
        </>
    );
}

export default Filter;