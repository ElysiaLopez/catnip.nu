import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input } from 'reactstrap';

function CreateEvent(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="bg-white rounded-lg py-3 px-6 font-bold text-xl shadow-sm hover:bg-purple-300 hover:text-white hover:shadow-lg" color="primary" onClick={toggle}>
        Create Event
      </Button>
      <Modal className="z-10 fixed top-32 left-128 bg-gray-200 rounded-xl shadow-md p-6" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Create Event</ModalHeader>
        <ModalBody>
        <InputGroup>
                <InputGroupText>
                Name of Organization
                </InputGroupText>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                Location
                </InputGroupText>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                Title
                </InputGroupText>
                <Input />
            </InputGroup>
            <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Publish
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateEvent;