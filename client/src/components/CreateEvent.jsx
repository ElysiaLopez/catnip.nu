import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input } from 'reactstrap';

function CreateEvent(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [form, setForm] = useState({
    organization: "",
    location: "",
    position: "",
    title: "",
    tags: "",
    description: ""
  });

  const [isNew, setIsNew] = useState(true);
    const params = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchData (){
          const id = params.id?.toString() || undefined;

          if(!id) return;

          setIsNew(false);

          const response = await fetch(`http://localhost:5050/mappins/${params.id.toString()}`);

          if(!response.ok)
          {
              const message = `An error has occurred: ${response.statusText}`;
              console.error(message);
              return;
          }

          const record = await response.json();

          if(!record) {
              console.warn(`Record with id ${id} not found`);
              toggle;
              return;
          }

          setForm(record);
      }
      fetchData();
      return;
  }, [params.id, toggle]);

// This function will handle the submission.
async function onSubmit(e) {
e.preventDefault();
const pin = { ...form };
try {
  let response;
  if (isNew) {
    // if we are adding a new record we will POST to /record.
    response = await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pin),
    });
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
} catch (error) {
  console.error('A problem occurred with your fetch operation: ', error);
} finally {
  toggle;
}
}

  return (
    <div>
      <button className="bg-white rounded-lg py-3 px-6 font-bold text-xl shadow-sm hover:bg-secondary hover:-translate-y-1 hover:text-white hover:shadow-xl
      transition ease-in-out duration-300 text-primary" color="primary" onClick={toggle}>
        Create Event
      </button>
      <Modal className="z-10 fixed w-128 m-auto top-4 left-128 bg-white rounded-xl shadow-md p-6" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}><h1 className="text-center font-bold text-xl">Create Event</h1></ModalHeader>
        <form onSubmit={onSubmit}>
        <ModalBody>
        <InputGroup>
        <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Title of Event </h2>
                </InputGroupText>
                <input
                type="text"
                name="title"
                id="title"
                className="p-1 w-64 border-gray border-2 rounded-md"/>
            </InputGroup>
            <br />
                <InputGroupText>
                <h2 className="font-bold">Name of Organization </h2>
                </InputGroupText>
                <input type="text"
                    name="organization"
                    id="organization"
                    className="p-1 w-64 border-gray border-2 rounded-md"/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Location </h2>
                </InputGroupText>
                <select className="border-gray-100 border-2 rounded-md p-2 w-48 h-10">
                    <option selected className="text-gray-300">Choose a Location</option>
                    <option value="Norris">Norris</option>
                    <option value="Rock">The Arch</option>
                    <option value="Arch">The Rock</option>
                    <option value="Tech">Tech</option>
                </select>
            </InputGroup>
            <br />
            
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Tags </h2>
                </InputGroupText>
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
            <InputGroup>
                <InputGroupText>
                <h2 className="font-bold">Description</h2>
                </InputGroupText>
                <textarea 
                name="description"
                id="description"
                className="p-1 h-24 w-96 border-gray border-2 rounded-md"/>
            </InputGroup>
            <br />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="p-2 px-4 rounded text-white font-bold bg-secondary  transition ease-in-out duration-200 hover:bg-white hover:text-primary hover:shadow-lg " onClick={toggle}>
            Publish
          </Button>{' '}
          <Button className="p-2 px-4" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default CreateEvent;